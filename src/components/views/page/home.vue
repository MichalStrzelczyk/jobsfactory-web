<template>
  <div class="container-fluid p-0">
    <div class="row m-0">
      <div id="leftPanel"  class="col-12 col-md-5 col-lg-4">
          <Searcher></Searcher>
      </div>
      <div id="rightPanel" class="col-12 col-md-7 col-lg-8">
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
  metaInfo() {
    return {
      title: "JobsFactory - oferty pracy IT, największy portal z ogłoszeniami IT",
      meta: [
        {
          name: 'description',
          content:  'Największy portal z ofertami pracy dla branży IT. Zebraliśmy dla Ciebie ponad 7000 ofert z wiodących portali na rynku. Nie trać czasu i w łatwy sposób znajdź nową pracę w branży IT'
        },
        {
          property: 'og:title',
          content: "JobsFactory - oferty pracy IT"
        },
        {
          property: 'og:site_name',
          content: 'JobsFactory'
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

.bg-jobsfactory-header {
  background: rgba(6, 4, 8, 0.95);

}

.bg-jobsfactory {
  background-image: linear-gradient(15deg, #311840 10%, rgba(105, 0, 199, .95) 80%);
}

</style>
