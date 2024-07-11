<template>
    <div class="flex">
      <div id="article" class="article">
        <div style="width: 50%;" class="white-space-normal text-xl">
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

      <div class="right">
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
</template>

<script setup>
import { ref, onMounted, computed, onUpdated } from 'vue'
import useDocXRay from '@/composables/useDocXRay';
import useCustomQandA from '@/composables/useCustomQandA';
import { useRoute } from 'vue-router'
import jQuery from 'jquery';

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

<style>
.about {
    background-color: lightblue
}
.learning {
    background-color: lightgray
}
.entity {
    background-color: lightgreen
}

.right {
  position: fixed;
  flex-direction: row;
  right: 0;
  width: 50%;
  padding: 2%;
  border: 1rem solid #f1f1f1;
  border-radius: 5%;
}

.summary {
  padding: 1%;
  border-bottom: 2px solid #f1f1f1;
}

.qandn {
  display: flex;
  flex-direction: column;
  padding: 5%;
}

.ask {
  display: flex;
  flex-direction: row;
  padding: 1%;
  justify-items: right;
}

.answer {
  padding: 1%;
  border: 1px solid #f1f1f1;
  border-radius: 5%;
}
textarea {
  width: 100%;
  height: 100px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}

.article {
    font-family: "Trebuchet MS", sans-serif, monospace;
    font-size: 18px;
    font-weight: 545;
    letter-spacing: .08rem;
    padding-left: 5%;
    padding-right: 10%;
    
}
</style>
