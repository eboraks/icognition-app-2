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
        <div class="summary" v-if="summary">
          <div class="m-100 p-100 white-space-normal text-xl p-100 article">
            <h3 class="about">{{ summary.whatThisArticleIsAbout.question }}</h3>
            <p>{{ summary.whatThisArticleIsAbout.answer }}</p>

            <h3 class="learning">{{ summary.learningsFromTheArticle.question }}</h3>
            <p>{{ summary.learningsFromTheArticle.answer }}</p>
          </div>
        </div>
        <div class="qandn">
          <div class="ask">
            <input type="text" placeholder="Ask a question" />
            <button>Ask</button>
          </div>
          <div class="answer">
            <textarea name="" id="">Some text to show for now</textarea>
          </div>
        </div>
      </div> 
    </div>
</template>

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



<script setup>
import { ref, onMounted, computed, onUpdated } from 'vue'
import useDocXRay from '@/composables/useDocXRay';
import { useRoute } from 'vue-router'
import jQuery from 'jquery';

const route = useRoute()

const { document, summary, original_elements,  error, isPending, getDocumetXRay } = useDocXRay();

onMounted(async() => {
    try {
      await getDocumetXRay(route.params.id);
      console.log("Document: ", document.value);
      console.log("Summary: ", summary.value);
      console.log("Original Elements: ", original_elements.value)
    } catch (err) {
        console.log("Error: ", err);
    }
});




onUpdated(() => {
  
  console.log(summary.value.whatThisArticleIsAbout)
  summary.value.whatThisArticleIsAbout.sources.forEach((item) => {
    try {
      jQuery("body").html(jQuery("body").html().replace(new RegExp(item, 'g'), `<span class="about" v-tooltip.top="'Enter your username'">${item}</span>`));
    } catch (err) {
      console.log("Error: ", err);
    }
  });
  console.log(summary.value.learningsFromTheArticle)
  summary.value.learningsFromTheArticle.sources.forEach((item) => {
    try {
      jQuery("body").html(jQuery("body").html().replace(new RegExp(item, 'g'), '<span class="about">' + item + '</span>'));
    } catch (err) {
      console.log("Error: ", err);
    }
  });
  console.log("Poinst: ", summary.value.summaryInBulletPoints)
  summary.value.summaryInBulletPoints.forEach((point) => {
    point.sources.forEach((item) => {
      try {
        jQuery("body").html(jQuery("body").html().replace(new RegExp(item, 'g'), `<span class="entity"> ${item}</span>`));
      } catch (err) {
        console.log("Error: ", err);
      }
    });
  });
});


</script>
