<template>
  <div class="row">
    <div class="col-12">
      <ul class="bigTagList">
        <li v-for="tag in tags" :key="tag.value">
          <span class="tag">{{ tag }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {}
  },
  name: 'Tags',
  props: {
    tags: {
      type: Array
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$red: #e81500 !default;
$orange: #f76400 !default;
$yellow: #f4a100 !default;
$green: #00ac69 !default;
$teal: #00ba94 !default;
$cyan: #00cfd5 !default;
$blue: #0061f2 !default;
$indigo: #5800e8 !default;
$purple: #6900c7 !default;
$pink: #e30059 !default;

.bigTagList {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    float: left;
    margin: 0.4rem 0.1rem;
  }

  .tag {
    background-color: #e30059;
    padding: 0.5rem 0.8rem;
    border-radius: 30px;
    color: white;
    font-size: 0.9rem;
  }
}
</style>
