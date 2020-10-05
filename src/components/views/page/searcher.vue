<template>
    <div id="layoutDefault">
      <div id="layoutDefault_content">
        <main>
          <Header></Header>
          <MainContent></MainContent>
        </main>
      </div>
      <div id="layoutDefault_footer">
        <Footer></Footer>
      </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import MainContent from "@/components/MainContent";

export default {
  name: 'Searcher',
  components: {
    MainContent,
    Header,
    Footer
  }
}
</script>

<style lang="scss">

</style>
