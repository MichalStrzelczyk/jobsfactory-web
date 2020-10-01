<template>
  <img src="" alt="" />
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {

    }
  },
  methods: {
    mounted() {
      this.getImage(this.image, this.companyName);
    },
    getImage: function(imageUrl, companyName) {
      axios
          .get(imageUrl)
          .then(() => {
            this.data.imageUrl = imageUrl;
            this.data.title = companyName;
          })
          .catch(error => console.log(error))
    }
  },
  name: 'Image',
  props: {
    image: {
      type: String
    },
    companyName: {
      type: String
    }
  }
}
</script>


<style scoped lang="scss">

</style>
