<template>
  <img v-if="show" :src="imageUrl" :alt="companyName" @error="hide"/>
</template>

<script>
export default {
  data: function () {
    return {
      show: true,
    }
  },
  methods: {
    hide: function() {
      this.show = false;
    }
  },
  name: 'ImagePreloader',
  props: {
    imageUrl: {
      type: String
    },
    companyName: {
      type: String
    }
  }
}
</script>
