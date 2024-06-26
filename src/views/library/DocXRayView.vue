<template>
    <div class="grid">
      <div class="col-4" v-if="summary">
        <div class="m-100 p-100 white-space-normal text-xl p-100 article">
        <h3 class="about">{{ summary.whatThisArticleIsAbout.question }}</h3>
        <p>{{ summary.whatThisArticleIsAbout.answer }}</p>

        <h3 class="learning">{{ summary.learningsFromTheArticle.question }}</h3>
        <p>{{ summary.learningsFromTheArticle.answer }}</p>

        <div v-if="document.entities_and_concepts">
          <h3 class="entity">Concepts, Ideas and Entities</h3>
          <div v-for="entity in document.entities_and_concepts">
            <p>{{ entity.name }} ({{ entity.type }}) - {{ entity.description }}</p>
          </div>
        </div>
      </div>
        
        
      </div>
      
      <div id="article" class="col">
        <div style="width: 50%;" class="white-space-normal text-xl article">
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
</template>
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
    jQuery("body").html(jQuery("body").html().replace(new RegExp(item, 'g'), '<span class="about">' + item + '</span>'));
  });
  console.log(summary.value.learningsFromTheArticle)
  summary.value.learningsFromTheArticle.sources.forEach((item) => {
    jQuery("body").html(jQuery("body").html().replace(new RegExp(item, 'g'), '<span class="learning">' + item + '</span>'));
  });

  document.value.entities_and_concepts.forEach((item) => {
    jQuery("#article").html(jQuery("#article").html().replace(new RegExp(item.name, 'g'), '<span class="entity">' + item.name + '</span>'));
  });
});


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

.article {
    font-family: NotoSans;
    font-size: 14px;
}
</style>