<template>
    <div id="layoutDefault">
      <div id="layoutDefault_content">
        <main>
          <SimpleHeader></SimpleHeader>
        </main>
      </div>
      <div id="layoutDefault_footer">
        <Footer></Footer>
      </div>
    </div>
</template>

<script>
import SimpleHeader from '@/components/SimpleHeader.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Offer',
  components: {
    SimpleHeader,
    Footer
  },
  mounted() {
    console.log(this.$route.params.id);
  }
}
</script>

<style lang="scss">

</style>
