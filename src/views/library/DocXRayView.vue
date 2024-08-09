<template>
  <div class="grid hero-background m-0">
    
    <div class="xs:vol-12 lg:col-6">
      <div class="flex-column">
        <ScrollPanel style="width: 90%; height: 1200px;">
          <div class="summary m-2" v-if="document">
            <div class="m-100 p-100 white-space-normal text-xl p-100 article">
              <h3 class="about">Learning from the article:</h3>
              <p>{{ document.learning_from_document }}</p>
            </div>
            <div class="m-100 p-100 text-xl article">
              <h3 class="about">Key Points:</h3>
              <li v-for="point in document.summary_bullet_points">{{ point }}</li>
            </div>
          </div>
          <div class="qandas m-2">
            <div class="qandas" v-if="qas">
              <div v-for="(qa, index) in qas">
                <div class="qandas">
                  <div class="question">
                    <h3 class="learning">Question:</h3>
                    <p>{{ qa.question }}</p>
                  </div>
                  <div class="answer">
                    <h3 class="learning">Answer:</h3>
                    <p>{{ qa.answer }}</p>
                  </div>
                </div>
              </div>
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
        </ScrollPanel>
      </div>
    </div>

    <div class="xs:col-8 lg:col-4">
      <div ref="article" class="flex">
        <ScrollPanel style="height: auto;">
          <div class="white-space-normal text-xl border-round-sm bg-yellow-50 pt-10">
            <div v-html="articleElements"></div>
          </div>
        </ScrollPanel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUpdated } from 'vue'
import useDocXRay from '@/composables/useDocXRay';
import useDocQuesAnswers from '@/composables/useDocQuesAnswers';
import useCustomQandA from '@/composables/useCustomQandA';
import { useRoute } from 'vue-router'

const route = useRoute()

const { isAskPending, askQuestion, answerResponse } = useCustomQandA();
const { document, original_elements, xRayIsPending, getDocumetXRay } = useDocXRay();
const { qas, qasPending, getDocQuestionsAnswers } = useDocQuesAnswers();


const question = ref('');
const answer = ref('');
const articleElements = ref('');

onMounted(async () => {

  try {
    // Get the document
    await getDocumetXRay(route.params.id);
    console.log("Document: ", document.value);
    articleElements.value = addHightlights(original_elements, document.value.summary_citations);

    // Get the questions and answers
    await getDocQuestionsAnswers(route.params.id);
    console.log("Questions and Answers: ", qas.value);

    } catch (err) {
        console.log("Error: ", err);
    }
});

const addHightlights = (original_elements, citations) => {

  let html = article_html_builder(original_elements.value);

  citations.forEach((citation) => {
    
    if (html.includes(citation.start_str) && html.includes(citation.end_str)) {
      html = html.replace(new RegExp(citation.start_str, 'gi'), `<span class="about">${citation.start_str}`);
      html = html.replace(new RegExp(citation.end_str, 'gi'), `${citation.end_str}</span>`);
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
