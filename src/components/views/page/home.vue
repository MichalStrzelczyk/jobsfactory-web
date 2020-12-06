<template>
  <div class="container-fluid p-0">
    <div class="row m-0">
      <div id="leftPanel" class="col-12 col-lg-4 p-0 p-lg-3">
        <Searcher></Searcher>
      </div>
      <div id="rightPanel" class="col-12 col-lg-8">
        <MainContent></MainContent>
      </div>
    </div>
  </div>
</template>

<script>

import Searcher from '@/components/Searcher.vue'
import MainContent from '@/components/MainContent.vue'

export default {
  name: 'Home',
  components: {
    Searcher,
    MainContent
  },
  methods: {
      track () {
        this.$ga.page('/')
      }
  },
  metaInfo() {
    return {
      title: "JobsFactory - oferty pracy IT, największy portal z ogłoszeniami IT, wyszukiwarka ogłoszeń IT, praca dla IT",
      meta: [
        {
          name: 'description',
          content: 'Największa wyszukiwarka ofert pracy dla branży IT. Zebraliśmy dla Ciebie ponad 1000 ofert z wiodących portali na rynku. Nie trać czasu i w łatwy sposób znajdź nową pracę w branży IT'
        },
        {
          property: 'og:title',
          content: "JobsFactory - wyszukiwarka ofert pracy IT"
        },
        {
          property: 'og:site_name',
          content: 'JobsFactory'
        },
        {
          property: 'og:image',
          content: '/assets/img/logo/jobs_factory_fb.jpg'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'robots',
          content: 'index,follow'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../../styles/project-variables";

.bg-jobsfactory-header {
  background: rgba(6, 4, 8, 0.95);

}

.bg-jobsfactory {
  background-image: linear-gradient(15deg, #311840 10%, rgba(105, 0, 199, .95) 80%);
}

@media (max-width: $breakpoint-lg) {
  #rightPanel {
    font-size: 14px;
  }
}
</style>
