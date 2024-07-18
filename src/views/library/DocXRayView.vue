<template>
  <div class="grid hero-background m-0">
    <div class="xs:col-12 lg:col-6">
      <div ref="article" class="flex">
        <div class="white-space-normal text-xl">
          <div v-html="articleElements"></div>
        </div>
      </div>
    </div>

    <div class="xs:vol-12 lg:col-6">
      <div class="flex-row">
        <div class="summary m-2" v-if="llm_results">
          <div class="m-100 p-100 white-space-normal text-xl p-100 article">
            <h3 class="about">{{ llm_results.whatThisArticleIsAbout.question }}</h3>
            <p>{{ llm_results.whatThisArticleIsAbout.answer }}</p>

            <h3 class="learning">{{ llm_results.learningsFromTheArticle.question }}</h3>
            <p>{{ llm_results.learningsFromTheArticle.answer }}</p>
          </div>
        </div>
        <div class="qandn m-2">
          <div class="ask" style="width: 100%;">
            <InputText class="p-1" type="text" v-model="question" @keyup.enter="handleAsk" style="width: 100%;"/>
            <Button class="p-1" @click="handleAsk">Ask</Button>
          </div>
          <div class="answer">
            <textarea style="height: 200px;" id="answer" v-model="answer">Some text to show for now</textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUpdated } from 'vue'
import useDocXRay from '@/composables/useDocXRay';
import useCustomQandA from '@/composables/useCustomQandA';
import { useRoute } from 'vue-router'

const route = useRoute()

const { isAskPending, askQuestion, answerResponse } = useCustomQandA();
const { document, original_elements, llm_results, xRayIsPending, getDocumetXRay } = useDocXRay();
const question = ref('');
const answer = ref('');
const articleElements = ref('');


onMounted(async () => {

    try {
      await getDocumetXRay(route.params.id);
      articleElements.value = addHightlights(original_elements, new Map(Object.entries(llm_results.value.source_sentences)));
    } catch (err) {
        console.log("Error: ", err);
    }
});

const addHightlights = (original_elements, sentences_map) => {

  let html = article_html_builder(original_elements.value);

  sentences_map.forEach((sentence) => {
    
    if (html.includes(sentence.sentence)) {
      console.log("Matched: ", sentence.sentence)
      html = html.replace(new RegExp(sentence.sentence, 'gi'), `<span class="about">${sentence.sentence}</span>`);
    }
  });
  return html;

}


const article_html_builder = (elements) => {
  let html = '';
  elements.forEach((element) => {
    if (element.element === 'h1') {
      html += `<h1>${element.text}</h1>`;
    } else if (element.element === 'p') {
      html += `<p>${element.text}</p>`;
    }
  });
  return html;
}

const handleAsk = async () => {
  console.log("Asking question: ", question.value, " document_id: ", route.params.id);

  if (!question.value) {
    answer.value = 'Please enter a question';
    return;
  }
  await askQuestion(route.params.id, question.value);

  if (isAskPending.value) {
    answer.value = 'Please wait for the answer';
  } else {
    answer.value = answerResponse.value.answer;
  }  
}

</script>
