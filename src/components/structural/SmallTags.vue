<template>
  <ul class="tagList">
    <li v-for="tag in tags" :key="tag">
      <span class="tag">{{ tag }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data: function () {
    return {
      tags: []
    }
  },
  name: 'SmallTags',
  mounted() {
    this.tags = JSON.parse(this.tagsMessage);
  },
  props: {
    tagsMessage: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .tagList {
    list-style: none;
    margin: 0;
    padding: 0;

    .tag {
      float: left;
      border: 1px solid #000;
      color: #000;
      font-size: 0.9rem;
      margin: 0.25rem;
      padding: 0.2rem 0.3rem;
    }
  }
</style>
