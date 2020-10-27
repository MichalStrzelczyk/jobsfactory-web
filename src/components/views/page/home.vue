<template>
  <div class="container-fluid">
    <div id="searcher" class="fixed-top col-12 col-md-5 col-lg-4">
      <Searcher></Searcher>
    </div>


    <div class="row">
      <div id="leftPanel" class="col-12 col-md-5 col-lg-4">

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
}
</script>

<style lang="scss">

#searcher {
  top: 2rem;
}

#leftPanel {

  min-height: 100%;

  .fixed-top {
    max-width: 50%;
  }
}


.bg-jobsfactory-header {
  background: rgba(6, 4, 8, 0.95);

}

.bg-jobsfactory {
  background-image: linear-gradient(15deg, #311840 10%, rgba(105, 0, 199, .8) 80%);
}

</style>
