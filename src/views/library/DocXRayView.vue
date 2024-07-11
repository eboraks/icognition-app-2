<template>
  <div class="grid hero-background m-0">
    <div class="xs:col-12 lg:col-6">
      <div class="flex">
        <div class="white-space-normal text-xl">
          <div v-for="element in original_elements">
            <div v-if="element.element === 'h1'">
              <h1 class="foo">{{ element.text }}</h1>
            </div>
            <div v-if="element.element === 'p'">
              <p>{{ element.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="xs:vol-12 lg:col-6">
      <div class="flex">
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


onMounted(async () => {
 
    try {
      await getDocumetXRay(route.params.id);
      console.log("Document: ", document.value);
      console.log("LLM Results: ", llm_results.value);
      console.log("Original Elements: ", original_elements.value)
      highlight(llm_results.value.source_sentences);
    } catch (err) {
        console.log("Error: ", err);
    }
});

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
