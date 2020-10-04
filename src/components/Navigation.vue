<template>
  <nav class="navbar navbar-marketing navbar-expand-lg bg-transparent navbar-dark">
    <div class="container text-center">
      <div class="row align-items-center justify-content-between w-100">
        <div class="col-auto">
          <a class="navbar-brand text-white" href="/">JobsFactory.pl</a>
        </div>
        <div class="col-auto d-md-none pr-0">
          <a class="btnToggle pr-0" v-on:click="toggle">Dostosuj filtry</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    toggle() {
      this.$root.$emit('toggleHeader')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {
  padding: 1rem 0;
}
</style>
