<template>
  <nav class="navbar navbar-marketing navbar-expand-lg bg-transparent navbar-dark">
    <div class="container text-center">
      <a class="navbar-brand text-white" href="/">JobsFactory.pl</a>
    </div>
  </nav>
</template>

<script>
export default {
  data: function(){
    return {
      "message" : "Tasd ad asdas  dest"
    }
  },
  name: 'Navigation',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  nav {padding: 1rem 0;}
</style>
