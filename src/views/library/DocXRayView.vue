<template>
  <div class="grid nested-grid grid-nogutter border-1 border-round border-solid border-blue-100 h-full">
    <Splitter class="h-full w-full">
      <SplitterPanel :class="{ 'splitter-panel-container-full': !buttonToggleSplitterPanelRight }" class="col-12 p-0 border-round surface-100 border-noround-right"  :size="66" :minSize="1">
        <div class="grid nested-grid grid-nogutter mx-2" style="height: calc(100% - .5rem);">
          <div class="col-12 py-0 max-h-3rem">
            <div class="col-6 p-0 inline-flex">
              <a class="font-bold pt-2 pl-1 mr-3" :href="dialogRef.data.url" target="_blank"><i class="pi pi-pen-to-square"></i> Open Original</a>
              <a class="font-bold pt-2 pl-1" @click="handleDownloadClick"><i class="pi pi-download mr-1"></i>Download...</a>
            </div>
            <div class="col-6 p-0 inline-flex justify-content-end">
              <Button type="button" icon="pi pi-comment" class="text-black-alpha-90 bg-white my-1 border-blue-100" @click="toggleHighlightMenu" rounded aria-haspopup="true" aria-controls="overlay_menu" style="height: 2.5em; width: 2.5em;" />
              <Popover ref="menu_highlight" class="mt-2">
                <div class="grid flex flex-column w-[25rem]">
                  <div class="col-12">
                    <p>Add Notation</p>
                    <Textarea v-model="highlight_notes_value" rows="4" cols="30" />
                  </div>
                  <div class="col-12 pt-0 flex justify-content-end">
                    <Button type="button" label="Add Note" class="bg-primary-800" @click="handleHighlightNotesAdd"></Button>
                  </div>
                </div>
              </Popover>
              <!-- <Button :class="{ 'hidden': !buttonTogglePlay }" class="text-black-alpha-90 bg-white mx-2 border-blue-100" icon="pi pi-stop" @click="buttonTogglePlay = !buttonTogglePlay" rounded />
              <Button :class="{ 'hidden': buttonTogglePlay }" class="text-black-alpha-90 bg-white mx-2 border-blue-100" icon="pi pi-play" @click="buttonTogglePlay = !buttonTogglePlay" rounded /> -->
              <Button class="text-black-alpha-90 bg-white ml-2 my-1 border-blue-100" icon="pi pi-cog" @click="buttonToggleSplitterPanelRight = !buttonToggleSplitterPanelRight" rounded  style="height: 2.5em; width: 2.5em;" />
            </div>
          </div>
          
          <div class="col-12 border-1 border-round border-solid mb-3 border-blue-100 overflow-y-auto" style="height: calc(100% - 3em);">
            <div class="col-12 bg-white px-3 py-2 flex flex-column border-round h-auto min-h-full">
              <div class="flex-row">
                <span class="text-sm" v-for="item in author">{{ item }} </span>
              </div>
              
              <span class="text-sm mb-3">Published {{ publication_date.valueOf() }}</span>
              <div v-for="item in html_elements_for_page" class="text-sm">
                <h1 v-if="item.element == 'h1'" class="mt-2"><span v-html="item.text"></span></h1>
                <h2 v-if="item.element == 'h2'" class="mt-2"><span v-html="item.text"></span></h2>
                <h3 v-if="item.element == 'h3'" class="mt-1"><span v-html="item.text"></span></h3>
                <h4 v-if="item.element == 'h4'" class="mt-1"><span v-html="item.text"></span></h4>
                <h5 v-if="item.element == 'h5'" class="mt-1"><span v-html="item.text"></span></h5>
                <p v-if="item.element == 'p'"><span v-html="item.text"></span></p>
              </div>
            </div>
          </div>
        </div>
      </SplitterPanel>
      <SplitterPanel :class="{ 'hidden': !buttonToggleSplitterPanelRight }" class="col-12 p-0" :size="34">
        <div class="card h-full">
          <Tabs value="0" class="h-full">
            <TabList>
              <!-- <Tab value="0">Summary</Tab> -->
              <Tab value="1">Ask iCognition</Tab>
              <Tab value="2">Notes</Tab>
            </TabList>
            <TabPanels>
              <!-- <TabPanel value="0">
                <div class="flex-column my-1 h-full p-2 surface-100">
                  <div class="overflow-y-auto pr-3 py-3" style="height: calc(100% - 49.6px);">
                    <p class="pl-3 pb-3 line-height-2" v-if="dialogRef.data.is_about != null">{{ dialogRef.data.is_about }}</p>
                    <div v-if="dialogRef.data.tldr != null">
                      <p class="pl-3">Key Points:</p>
                      <ul>
                        <li v-for="item in dialogRef.data.tldr">{{ item }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabPanel> -->
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
                              <p class="flex-grow-1 pl-3 py-1 text-sm text-black-alpha-90 border-round">{{item.answer}}</p>
                              <div class="flex-row">
                                <Button icon="pi pi-copy" class="bg-transparent border-transparent border-0 text-surface-500 flex-shrink-0 align-content-start flex-wrap pr-0" size="large" aria-label="Close"/>
                                <Button icon="pi pi-clipboard" class="bg-transparent border-transparent border-0 text-surface-500 flex-shrink-0 align-content-start flex-wrap pr-0" size="large" aria-label="Close"/>
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
                <div class="flex-column my-1 h-full p-2 surface-100">
                  <div class="overflow-y-auto px-2 py-2" style="height: calc(100% - 49.6px);">
                    <div class="panel mb-3">
                      <div v-for="item in highlightedTextList" class="mb-3">
                        <p class="text-sm">{{ moment(item.updated).format('DD MMM YYYY h:mm a') }}</p>
                        <p class="text-sm overflow-hidden" style="white-space: nowrap; text-overflow: ellipsis;"><a :href="item.id">{{ item.notes }}</a></p>
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
</template>

<script setup lang="ts" >
  import { inject, ref, onBeforeMount } from 'vue';
  import DocxrayService from '@/services/DocxrayService';
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
  import AskQuestionAnswer from '@/components/models/AskQuestionAnswer.vue';

  const { isAskPending, askQuestion, answerResponse } = useCustomQandA();
  const { qas, qasPending, getDocQuestionsAnswers } = useDocQuesAnswers();
  const { original_elements, xRayIsPending, getDocumetXRay } = useDocXRay();
  const dialogRef = inject("dialogRef") as any;
  const author = ref(dialogRef.value.data.authors);
  const buttonTogglePlay = ref(true);
  const buttonToggleSplitterPanelRight = ref(true);
  const citations = ref();
  const highlightedFromWhere = ref();
  const highlightedText = ref('');
  const highlightedTextList = ref([]);
  let highlightedTextListId = 0;
  const hightlights = ref();
  const highlight_notes_value = ref('');
  const html_elements_for_page = ref();
  const html_elements_for_pdf = html_elements_for_page.value = dialogRef.value.data.html_elements;
  let html_to_pdf: [Object] = [null];
  const menu_highlight = ref();

  // const talkify = new Talkify({
  //   fallbackLanguage: 'English',
  //   format: 'mp3',
  //   key: (import.meta as any).env.TALKIFY_TTS_API_KEY
  // });
  const publication_date = ref(formate_date(dialogRef.value.data.publicationDate));
  const question = ref('');
  const answer = ref('');

  onBeforeMount(async () => {
      try {
        await getDocumetXRay(dialogRef.value.data.id);
        await getDocQuestionsAnswers(dialogRef.value.data.id);
        console.log("Document: ", dialogRef.value.data);
        console.log("Original Elements: ", original_elements.value);
        console.log("Questions and Answers: ", qas.value);
        html_elements_for_page.value = addHightlights(html_elements_for_page.value, dialogRef.value.data.summary_citations);
        if (dialogRef.value.data.summary_citations != null) {
          highlight(dialogRef.value.data.summary_citations);
        }
        DocxrayService.getCitations().then((data) => (citations.value = data));
        DocxrayService.getHighlights().then((data) => (hightlights.value = data));
        // create an object that can be seen as html
        setupArticleHTML(dialogRef.value.data.html_elements, citations);
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

  const addHightlights = (html_elements, citations) => {
    if (html_elements != null) {
      if(citations != null) {
        html_elements.forEach(html_element => {
          citations.forEach((citation, index) => {
        
            if (html_element.text.includes(citation.verbatim)) {
              html_element.text = html_element.text.replace(new RegExp(citation.verbatim, 'gi'), `<span class="bg-highlight tooltip" id="section-${index}">${citation.verbatim}<span class="tooltiptext">${citation.verbatim}</span></span>`);
            }
          });
        });
      }
      return html_elements;
    } else {
      return null;
    }
  }

  function formate_date(value) {
    return moment(value).format('hh:mm a, MM-DD-YYYY');
  };

  const handleDownloadClick = async () => {
    html_elements_for_pdf.forEach(item => {
      return html_to_pdf.push(add_to_pdf(item.element, item.text));
    });

    const docDefinition = {
      content: [
        {
          style: 'header',
          table: {
            widths: ['auto'],
            body: [
              [html_to_pdf]
            ]
          },
          layout: {
            defaultBorder: false,
          }
        }
      ]
    }
    pdfMake.createPdf(docDefinition).download(`${dialogRef.value.data.title.substr(0, 20)}.pdf`);
  }

  const handleHighlightNotesAdd = async () => {
    if (highlight_notes_value.value != '' && highlight_notes_value.value != null) {
      handleHighlightClick();
    }
    menu_highlight.value.toggle();
  }

  const handleHighlightClick = async () => {
    
    html_elements_for_page.value.forEach(element => {
      if (element.text == highlightedFromWhere.value) {
        if (element.text.includes(highlightedText.value)) {
          let first_half = element.text.substr(0, element.text.indexOf(highlightedText.value));
          let second_half = element.text.substr(element.text.indexOf(highlightedText.value) + highlightedText.value.length, element.text.length);
          element.text = first_half + `<span class="bg-highlight tooltip" id="section-${highlightedTextListId}">${highlightedText.value}<span class="tooltiptext">${highlight_notes_value.value}</span></span>` + second_half;
        }
      }
    });
    
    highlightedTextList.value.push({
      id: '#section-' + highlightedTextListId,
      contents: highlightedText,
      notes: highlight_notes_value.value,
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
  
  const handlePlayClick = async (element) => {
    
    // (talkify as any).config.remoteService.host = talkify_tts_host;
    // (talkify as any).config.remoteService.apiKey = talkify_tts_api_key;

    // (talkify as any).config.ui.audioControls.enabled = true; //<-- Disable to get the browser built in audio controls
    // (talkify as any).config.ui.audioControls.voicepicker.enabled = true;
    // // (talkify as any).config.ui.audioControls.container = document.getElementById("player-and-voices");

    // let player = new (talkify as any).TtsPlayer()
    //   .enableTextHighlighting()
    //   .forceVoice({name: "Zira"});

    // let playlist = new (talkify as any).playlist()
    //   .begin()
    //   .usingPlayer(player)
    //   .withRootSelector('#root')
    //   .withTextInteraction()
    //   .build();
    
    // playlist.play();
  }  

  const highlight = (source_sentences) => {
    const sentences_map = new Map(Object.entries(source_sentences));
    console.log("Highlighting", source_sentences);
    sentences_map.forEach((item) => {
      try {
        //jQuery("article").html(jQuery("article").html().replace(new RegExp(item.sentence, 'g'), '<span class="about">' + item.sentence + '</span>'));
      } catch (err) {
        console.log("Error: ", err);
      }
    });
  }

  const handleAsk = async () => {
    console.log("Asking question: ", question.value, " document_id: ", dialogRef.value.data.id);
    if (!question.value) {
      answer.value = 'Please enter a question';
      return;
    }
    let askQuestionPayload = new AskQuestion(question.value, dialogRef.value.data.id, null);
    await askQuestion(askQuestionPayload);

    if (isAskPending.value) {
      answer.value = 'Please wait for the answer';
    } else {
      answer.value = answerResponse.value.answer;
    }

    qas.value.push({question: question.value, answer: answer.value, created_at: moment()});
    question.value = '';
  }

  const qasRemove = async (index) => {
    qas.value.splice(index, 1);
  }

  const setupArticleHTML = async (html_elements, citations) => {
    
    html_elements.forEach(item => {
      let charCount = Array.from(item.text).length;
    })
    
  }

  const toggleHighlightMenu = (event) => {
    // We need to get the highlighted text prior to opening the popover or we lose the data.
    highlightedText.value = getSelectedText();
    highlightedFromWhere.value = document.getSelection().focusNode.textContent;
    menu_highlight.value.toggle(event);
  };

</script>
