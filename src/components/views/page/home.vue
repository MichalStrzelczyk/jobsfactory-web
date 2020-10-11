<template>
  <div class="container-fluid">
    <div class="row fixed-top bg-jobsfactory">
      <div class="logo">
        <a href="/" title="Portal z ogłoszeniami pracy dla IT">JobsFactory.pl</a>
      </div>
    </div>
    <div class="row">
      <div id="leftPanel" class="col-6">
          <div class="row mt-15">
            <Searcher></Searcher>
          </div>
      </div>
      <div id="rightPanel" class="col-6">
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
 #leftPanel {
   min-height: 100%;

   .fixed-top {
     max-width: 50%;
   }
 }


 .bg-jobsfactory {
   background-image: linear-gradient(15deg, #311840 10%,rgba(105,0,199,.8) 80%);
 }
 .logo {
   a {
     margin-left: 2rem;
     display: block;
     color: white;
     font-weight: bold;
     font-size: 1.5rem;
     padding: 1rem;
   }
   a:hover {
     text-decoration: none;
   }

 }

</style>
