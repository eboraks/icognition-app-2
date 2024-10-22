<script setup lang="ts" >
  import { ref, h, onBeforeMount, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import moment from 'moment';
  import * as pdfFonts from '@/components/models/vfs_fonts.vue';
  import  pdfMake from "pdfmake/build/pdfmake";
  (<any>pdfMake).vfs = pdfFonts.default;
  // import TalkifyTTSService from '@/services/TalkifyTTSService';
  // import Talkify from 'talkify-tts-api';
  import useCustomQandA from '@/composables/useCustomQandA';
  import useDocQuesAnswers from '@/composables/useDocQuesAnswers';
  import useDocXRay from '@/composables/useDocXRay';
  import AskQuestion from '@/components/models/AskQuestion.vue';

  const { isAskPending, askQuestion, answerResponse } = useCustomQandA();
  const { qas, qasPending, getDocQuestionsAnswers } = useDocQuesAnswers();
  const { doc, original_elements, xRayIsPending, getDocumetXRay } = useDocXRay();
  const answer = ref('');
  let author = ref();
  const buttonToggleSplitterPanelRight = ref(true);
  const citations = ref();
  const highlightedFromWhere = ref();
  const highlightedText = ref('');
  const highlightedTextList = ref([]);
  let highlightedTextListId = 0;
  const highlightNotesValue = ref('');
  const htmlElementsForPage = ref([]);
  const htmlElementsForPDF = ref([]);
  let htmlToPDF: [Object] = [null];
  const menuHighlight = ref();
  const pageHTML = ref('');
  let publication_date = ref();
  const router = useRouter();
  const question = ref('');
let scrollToElement = 0;
const scrollRef = ref(null);
  const clickEventForScroll = ref(false);

  onBeforeMount(async () => {
      try {
        await getDocumetXRay(router.currentRoute.value.params.id);
        console.log("Document: ", doc.value);
        console.log("Original Elements: ", original_elements.value);
        htmlElementsForPage.value = original_elements.value;
        author = ref(doc.value.authors);
        citations.value = doc.value.summary_citations;

        //Generate document for html
        pageHTML.value = article_html_builder(original_elements.value, doc.value.summary_citations, 'Summary');
        publication_date = ref(formate_date(doc.value.publicationDate));

        // create an object that can be seen as html
        setupArticleHTML(doc.value.html_elements, citations);

        await getDocQuestionsAnswers(router.currentRoute.value.params.id);
        
        console.log("Questions and Answers: ", qas.value);
      } catch (err) {
        console.log("Error: ", err);
      }
  });

  function add_to_pdf(element, text): Object {
    switch(element) {
      case 'h1':
        return {
          text: `\n${text}\n`,
          fontSize: 18
        };
      case 'h2':
        return {
          text: `\n${text}\n`,
          fontSize: 16
        };
      case 'h3':
        return {
          text: `\n${text}\n`,
          fontSize: 14
        };
      case 'h4':
        return {
          text: `\n${text}\n`,
          fontSize: 12
        };
      case 'h5':
        return {
          text: `\n${text}\n`,
          fontSize: 10
        };
      case 'p':
        return {
          text: `\n${text}\n`,
          fontSize: 10
        };
      default:
        return {
          text: `${text}`,
          fontSize: 10
        };
    }
  }

  const addCitiationHightlights = (text, citations = null, tooltiptext = null, hightlight_style = "bg-highlight") => {
    if (text != null) {
      if (citations != null) {
        citations.forEach((citation, index) => {
          if (text.includes(citation.verbatim_text)) {
            console.log("Citiation index: ", index);
            text = text.replace(new RegExp(citation.verbatim_text, 'gi'),
              `<span class="${hightlight_style} tooltip" id="section-${index}">${citation.verbatim_text}<span class="tooltiptext">${tooltiptext}</span></span>`);
          }
        });
        return text;
      } else {
        return text;
      }
    } else {
      return null;
    }
  }

  const addHightlights = (html_elements, citations, family) => {
    let _html_elements = html_elements;
    if (_html_elements != null) {
      if(citations != null) {
        _html_elements.forEach(html_element => {
          citations.forEach((citation, index) => {
        
            if (html_element.text.includes(citation.verbatim)) {
              html_element.text = html_element.text.replace(new RegExp(citation.verbatim_text, 'gi'),
              `<span class="bg-highlight tooltip" id="section-${index}">${citation.verbatim_text}<span class="tooltiptext">${family}</span></span>`);
            }
          });
        });
        return _html_elements;
      } else {
        return _html_elements;
      }
    } else {
      return null;
    }
  }

  const article_html_builder = (elements, citations, tooltiptext) => {
    let html = '';
    elements.forEach((element) => {
      if (element.element === 'h1') {
        html += `<h1 class="mt-2">${addCitiationHightlights(element.text, citations, tooltiptext)}</h1>`;
      } else if (element.element === 'h2') {
        html += `<h2 class="mt-2">${addCitiationHightlights(element.text, citations, tooltiptext)}</h2>`;
      } else if (element.element === 'h3') {
        html += `<h3 class="mt-1">${addCitiationHightlights(element.text, citations, tooltiptext)}</h3>`;
      } else if (element.element === 'h4') {
        html += `<h4 class="mt-1">${addCitiationHightlights(element.text, citations, tooltiptext)}</h4>`;
      } else if (element.element === 'h5') {
        html += `<h5 class="mt-1">${addCitiationHightlights(element.text, citations, tooltiptext)}</h5>`;
      } else if (element.element === 'p') {
        html += `<p class="text-left font-medium">${addCitiationHightlights(element.text, citations, tooltiptext)}</p>`;
      }
    });
    return html;
  }

  const build_citation_span = (element, citations, tooltiptext) => {
    let text = element.text
    citations.forEach((citation) => {
      if (text.includes(citation.verbatim_text)) {
        text = text.replace(new RegExp(citation.verbatim_text, 'gi'), `|${citation.verbatim_text}|`);
      }
    }); 
    let text_array = text.split('|');
      //Iterate and create the elements with h(, { class: 'mt-2', innerHTML: element.text });
    let nodes = [];
    let citation_exits = false;
    let citations_texts = citations.map(citation => citation.verbatim_text)
    text_array.forEach((item) => {
      
      if (item.trim() != '') {
        if (citations_texts.includes(item)) {
          // let tooltip_node = ;

          let node = h('span', { class: 'bg-highlight tooltip', id: 'section-'+scrollToElement, ref: scrollRef }, [item, h('span', { class: 'tooltiptext' }, tooltiptext)]);
          nodes.push(node)
          
          scrollToElement++;
          citation_exits = true;
        } else {
          nodes.push(h('span', { class: 'mt-2', innerHTML: item }));
        }
      }
    });
    //Return the element with the citation hightlighted
    if (citation_exits) {
      return (h(element.element, { class: 'mt-2', id: 'section-'+scrollToElement }, nodes));
    } else {
      return (h(element.element, { class: 'mt-2' }, nodes));
    }
  }

  const vnode = () => {
    let children = [];
    htmlElementsForPage.value.forEach((element) => {
      children.push(markCitations(element, 'citation'));
    });
    return h(
      'div',
      { id: 'document', class: '' },
      [ children ]
    );
  }


  watch(scrollRef, () => {
    console.log("scroll ref: ", scrollRef.value);
    if (clickEventForScroll.value === true && scrollRef.value != null) {
      console.log("scroll ref: ", scrollRef.value);
      scrollRef.value.scrollIntoView({ behavior: "smooth" });
    }
  });

  function formate_date(value) {
    return moment(value).format('hh:mm a, MM-DD-YYYY');
  };

  const handleDownloadClick = async () => {
    htmlElementsForPDF.value.forEach(item => {
      return htmlToPDF.push(add_to_pdf(item.element, item.text));
    });

    const docDefinition = {
      content: [
        {
          style: 'header',
          table: {
            widths: ['auto'],
            body: [
              [htmlToPDF]
            ]
          },
          layout: {
            defaultBorder: false,
          }
        }
      ]
    }
    pdfMake.createPdf(docDefinition).download(`${doc.value.title.substr(0, 20)}.pdf`);
  }

  const handleHighlightNotesAdd = async () => {
    if (highlightNotesValue.value != '' && highlightNotesValue.value != null) {
      handleHighlightClick();
    }
    menuHighlight.value.toggle();
  }

  const handleHighlightClick = async () => {
    
    htmlElementsForPage.value.forEach(element => {
      if (element.text == highlightedFromWhere.value) {
        if (element.text.includes(highlightedText.value)) {
          let first_half = element.text.substr(0, element.text.indexOf(highlightedText.value));
          let second_half = element.text.substr(element.text.indexOf(highlightedText.value) + highlightedText.value.length, element.text.length);
          element.text = first_half + `<span class="bg-highlight tooltip" id="section-${highlightedTextListId}">${highlightedText.value}<span class="tooltiptext">${highlightNotesValue.value}</span></span>` + second_half;
        }
      }
    });
    
    highlightedTextList.value.push({
      id: '#section-' + highlightedTextListId,
      contents: highlightedText,
      notes: highlightNotesValue.value,
      updated: new Date()
    });
    highlightedTextListId += 1;
  }

  function getSelectedText() {
    let text= '';
    if (document.getSelection().toString() != 'undefined') {
      text = document.getSelection().toString();
    }
    return text;
  }

  const handleAsk = async () => {
    console.log("Asking question: ", question.value, " document_id: ", doc.value.id);
    if (!question.value) {
      answer.value = 'Please enter a question';
      return;
    }
    let askQuestionPayload = new AskQuestion(question.value, doc.value.id, null);
    await askQuestion(askQuestionPayload);

    if (isAskPending.value) {
      answer.value = 'Please wait for the answer';
    } else {
      answer.value = answerResponse.value.answer;
    }

    qas.value.push({question: question.value, answer: answer.value, created_at: moment()});
    question.value = '';
  }

  function markCitations(element, tooltiptext) {
    if(citations.value != null) {
      let found_citations = [];
      citations.value.forEach((citation, index) => {
        if (element.text.includes(citation.verbatim_text)) { found_citations.push(citation); }
      });
      if (found_citations.length > 0) {
        let citiation_instances = [];
        
        citiation_instances.push(build_citation_span(element, found_citations, tooltiptext));
        return citiation_instances;
      } else {
        return h(element.element, { class: 'mt-2', innerHTML: element.text })
      }
      
    } else {
      return h(element.element, { class: 'mt-2', innerHTML: element.text })
    }
    
  }

  const qasRemove = async (index) => {
    qas.value.splice(index, 1);
  }

  const setupArticleHTML = async (html_elements, citations) => {
    
    html_elements.forEach(item => {
      let charCount = Array.from(item.text).length;
    });
    
  }

  const toggleCitation = async (index) => {
    let countToIndex = 0;
    for (let j = 0; j < index; j++) {
      for (let i = 0; i < qas.value[j].citations.length; i++) {
        countToIndex++;
      }
    }
    //This method build the html for the page, not the H
    //pageHTML.value = article_html_builder(original_elements.value, qas.value[index].citations, qas.value[index].question);

    // By assinging the value to the Ref cititation it will trigger the vnode to be updated
    citations.value = qas.value[index].citations;
    clickEventForScroll.value = !clickEventForScroll.value;
    
    //This line has two problems. 
    // 1 the index used is the index used by the article_html_builder, not the index of the citation(H)
    // 2. It's executing before the rending of the page, so the element is not found. 
    //document.getElementById('section-'+countToIndex).scrollIntoView();
  }


  const toggleHighlightMenu = (event) => {
    // We need to get the highlighted text prior to opening the popover or we lose the data.
    highlightedText.value = getSelectedText();
    highlightedFromWhere.value = document.getSelection().focusNode.textContent;
    menuHighlight.value.toggle(event);
  };

</script>

<template>
  <div id="body-library" class="grid nested-grid grid-nogutter col-12 surface-100" style="height: calc(100% - 72px - 84px);">
    <div class="col-12 bg-white border-round border-300 border-2 p-0 h-full">
      <Splitter class="grid nested-grid grid-nogutter h-full border-round border-noround-right">
        <SplitterPanel :class="{ 'splitter-panel-container-full': !buttonToggleSplitterPanelRight }" class="col-12 p-0 border-round surface-100 border-noround-right"  :size="50" :minSize="1">
          <div class="grid nested-grid grid-nogutter mx-2" style="height: calc(100% - .5rem);">
            <div class="col-12 py-0 max-h-3rem">
              <div class="col-6 p-0 inline-flex">
                <!-- <a class="font-bold pt-2 pl-1 mr-3" :href="doc.url" target="_blank"><i class="pi pi-pen-to-square"></i> Open Original</a> -->
                <a class="font-bold pt-2 pl-1" @click="handleDownloadClick"><i class="pi pi-download mr-1"></i>Download...</a>
              </div>
              <div class="col-6 p-0 inline-flex justify-content-end">
                <Button type="button" icon="pi pi-comment" class="text-black-alpha-90 bg-white my-1 border-blue-100" @click="toggleHighlightMenu" rounded aria-haspopup="true" aria-controls="overlay_menu" style="height: 2.5em; width: 2.5em;" />
                <Popover ref="menuHighlight" class="mt-2">
                  <div class="grid flex flex-column w-[25rem]">
                    <div class="col-12">
                      <p>Add Notation</p>
                      <Textarea v-model="highlightNotesValue" rows="4" cols="30" />
                    </div>
                    <div class="col-12 pt-0 flex justify-content-end">
                      <Button type="button" label="Add Note" class="bg-primary-800" @click="handleHighlightNotesAdd"></Button>
                    </div>
                  </div>
                </Popover>
                <Button class="text-black-alpha-90 bg-white ml-2 my-1 border-blue-100" icon="pi pi-cog" @click="buttonToggleSplitterPanelRight = !buttonToggleSplitterPanelRight" rounded  style="height: 2.5em; width: 2.5em;" />
              </div>
            </div>
            
            <div class="col-12 border-1 border-round border-solid mb-3 border-blue-100 overflow-y-auto" style="height: calc(100% - 3em);">
              <div class="col-12 bg-white px-3 py-2 flex flex-column border-round h-auto min-h-full">
                <div class="flex-row">
                  <span class="text-sm" v-if="author != null" v-for="item in author">{{ item }} </span>
                </div>
                
                <span class="text-sm mb-3">Published {{ publication_date }}</span>
                <div v-if="xRayIsPending" class="flex flex-flow justify-content-center">
                  <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
                </div>
                <!--div><component :is="vnode" :key="citations"/></div-->
                <div><vnode :key="citations"/></div>
              </div>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel :class="{ 'hidden': !buttonToggleSplitterPanelRight }" class="col-12 p-0" :size="50">
          <div class="card h-full">
            <Tabs value="0" class="h-full">
              <TabList>
                <Tab value="0">Summary</Tab>
                <Tab value="1">Ask iCognition</Tab>
                <Tab value="2">Notes</Tab>
              </TabList>
              <TabPanels>
                <TabPanel value="0">
                  <div class="grid nested-grid grid-nogutter border-1 border-round border-solid border-blue-100 surface-100 h-full">
                    <div class="flex-column mx-2 my-2 mt-3 w-full border-round border-1 border-blue-100 bg-white">
                      <div class="overflow-y-auto pr-3 py-3" style="height: calc(100% - 49.6px);">
                        <p class="pl-3 pb-3 line-height-2" v-if="doc != null && doc.is_about != null">{{ doc.is_about }}</p>
                        <div v-if="doc != null && doc.tldr != null">
                          <p class="pl-3">Key Points:</p>
                          <ul>
                            <li v-for="item in doc.tldr">{{ item }}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="1">
                  <div class="flex-column my-1 h-full p-0 surface-100">
                    <div class="overflow-y-auto px-2 py-2" style="height: calc(100% - 44px);">
                      <div class="panel mb-3" v-for="(item, index) in qas">
                        <p class="flex text-xs justify-content-end">{{moment(item.created_at).format('DD MMM YYYY h:mm a')}}</p>
                        <div class="card">
                          <Card class="border-1 border-round border-300 bg-white shadow-3">
                            <template #header>
                              <div class="border-1 border-round border-300 surface-300 flex border-bottom-1 border-noround-bottom border-top-none border-left-none border-right-none">
                                <p class="flex-grow-1 px-3 py-2 text-sm border-round font-semibold">{{item.question}}</p>
                                <Button icon="pi pi-times" class="bg-transparent border-transparent border-0 flex-shrink-0 text-black-alpha-90 pr-0" size="small" aria-label="Close" @click="qasRemove(index)"/>
                              </div>
                            </template>
                            <template #content class="p-0">
                              <div class="bg-white flex flex-column">
                                <div class="flex-row mx-3">
                                  <p class="flex-grow-1 py-1 text-sm text-black-alpha-90 border-round">{{item.answer}}</p>
                                </div>
                                <div class="flex-row mx-3">
                                  <Button type="button" class="bg-primary text-white" size="small" label="Hightlight Citation" icon="pi pi-code" @click="toggleCitation(index)" />
                                  <Button type="button" class="bg-transparent border-transparent border-0 text-500 flex-shrink-0 align-content-start flex-wrap pb-0 pr-0" size="large" aria-label="Copy" icon="pi pi-copy" />
                                </div>
                              </div>
                            </template>
                          </Card>
                        </div>
                      </div>
                    </div>
                    <div class="flex p-2 pr-0 bg-white">
                      <InputText @keyup.enter="handleAsk" class="flex-grow-1 p-0" type="text" v-model="question" />
                      <Button class="flex-shrink-0 px-3 py-1 mx-1 bg-primary-500" label="Ask" @click="handleAsk" />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div class="grid nested-grid grid-nogutter border-1 border-round border-solid border-blue-100 h-full surface-100">
                    <div class="flex-column mx-2 my-2 mt-3 border-round border-1 border-blue-100 bg-white w-full">
                      <div class="overflow-y-auto px-2 py-2" style="height: calc(100% - 49.6px);">
                        <div class="panel mb-3">
                          <div v-for="item in highlightedTextList" class="mb-3">
                            <p class="text-sm">{{ moment(item.updated).format('DD MMM YYYY h:mm a') }}</p>
                            <p class="text-sm overflow-hidden" style="white-space: nowrap; text-overflow: ellipsis;"><a :href="item.id">{{ item.notes }}</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </SplitterPanel>
      </Splitter>
    </div>
  </div>
</template>

