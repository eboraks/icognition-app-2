<template>
    <!-- <footer v-if="display" class="footer border-white grid m-0 bg-gray-100 border-top-1 pt-2">
        <div class="grid w-full m-0">
            <div class="xs:hidden md:block md:col-4 surface-border border-right-1">
                <a href="https://www.linkedin.com/company/icognition-ai/" target="_blank"><img id="linkedin" src="/src/assets/images/footer/Linkedin_button.svg" alt="LinkedIn"></a>
            </div>
            <div class="xs:hidden md:block md:col-4 surface-border border-right-1">
                <h5 class="pt-3"><a href= "mailto:information@icognition.ai">Contact</a></h5>
            </div>
            <div class="xs:hidden md:block md:col-4" v-if="display">
                <h5 class="pt-3"><router-link to="privacy-policy">Privacy Policy</router-link></h5>
                <h5 class="pt-3"><router-link to="terms-of-use">Terms of Use</router-link></h5>
            </div>
        </div>
        <div class="block m-auto py-3">
            <span>© 2024 Copyright: <router-link to="/" v-if="display"> ICognition</router-link><span v-if="!display"> iCognition.com</span></span>
            <span v-if="display">&nbsp;<router-link to="terms-of-use">Terms of Use</router-link>&nbsp;|&nbsp;</span>
            <span v-if="display"><router-link to="privacy-policy">Privacy Policy</router-link></span>
        </div>
    </footer> -->
    <footer class="sections" id="footer-sections" data-footer-sections="">
      <section
        data-test="page-section"
        data-section-theme="white-bold"
        class="page-section full-bleed-section layout-engine-section background-width--full-bleed section-height--custom content-width--wide horizontal-alignment--center vertical-alignment--middle white-bold"
        data-section-id="6697f2b956e3c6049e9cae5b"
        data-controller="SectionWrapperController"
        data-current-styles="{
          &quot;imageOverlayOpacity&quot;: 0.15,
          &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
          &quot;sectionHeight&quot;: &quot;section-height--custom&quot;,
          &quot;customSectionHeight&quot;: 1,
          &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
          &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
          &quot;contentWidth&quot;: &quot;content-width--wide&quot;,
          &quot;customContentWidth&quot;: 50,
          &quot;backgroundColor&quot;: &quot;&quot;,
          &quot;sectionTheme&quot;: &quot;white-bold&quot;,
          &quot;sectionAnimation&quot;: &quot;none&quot;,
          &quot;backgroundMode&quot;: &quot;image&quot;
          }"
        data-current-context="{
          &quot;video&quot;: {
          &quot;playbackSpeed&quot;: 0.5,
          &quot;filter&quot;: 1,
          &quot;filterStrength&quot;: 0,
          &quot;zoom&quot;: 0,
          &quot;videoSourceProvider&quot;: &quot;none&quot;
          },
          &quot;backgroundImageId&quot;: null,
          &quot;backgroundMediaEffect&quot;: {
          &quot;type&quot;: &quot;none&quot;
          },
          &quot;divider&quot;: {
          &quot;enabled&quot;: false
          },
          &quot;typeName&quot;: &quot;products&quot;
          }" 
        data-animation="none"
        data-fluid-engine-section=""
        style="min-height: 1vh;"
        data-controllers-bound="SectionWrapperController"
        data-active="true">
        <div class="section-border">
          <div class="section-background">
          </div>
        </div>
        <div class="content-wrapper" style="padding-top: calc(1vmax / 10); padding-bottom: calc(1vmax / 10);">
          <div class="content">
            <div data-fluid-engine="true">
              <div class="fluid-engine fe-6697f2b956e3c6049e9cae6b">
                <div class="fe-block fe-block-yui_3_17_2_1_1721230615972_22109" style="mix-blend-mode: normal;">
                  <div class="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-yui_3_17_2_1_1721230615972_22109">
                    <div class="sqs-block-content">

                      <div class="sqs-html-content">
                        <p style="text-align:center;white-space:pre-wrap;" class="">©2024 iCognition LLC</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const display = true;
</script>