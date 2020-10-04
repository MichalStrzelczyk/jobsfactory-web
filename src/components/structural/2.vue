<template>
  <p>
    {{ isLoaded }}
  {{ imgAlt }}
  {{ imgSrc }}
  </p>

</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      isLoaded: false,
      imgSrc: null,
      imgAlt: null
    }
  },
  mounted() {
    console.log(this.imageUrl);
  },
  methods: {
    mounted() {
      console.log(this.imageUrl);
      this.getImage(this.image, this.companyName);
    },
    getImage: function(imageUrl, companyName) {
      axios
          .get(imageUrl)
          .then(() => {

            console.log(this.imgSrc, this.imgAlt);

            this.isLoaded = true;
            this.imgSrc = imageUrl;
            this.imgAlt = companyName;
          })
          .catch(error => console.log(error))
    }
  },
  name: 'Image',
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


<style scoped lang="scss">

</style>
