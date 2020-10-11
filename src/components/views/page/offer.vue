<template>
  <div class="container-fluid">
    <div class="row bg-jobsfactory">
      <div class="logo">
        <a href="/" title="Portal z ogłoszeniami pracy dla IT">JobsFactory.pl</a>
      </div>
    </div>
    <div class="row map" v-if="offer.companyLatitude">
      <div class="col-12">
        <iframe
            :src="'https://maps.google.com/maps?q=' + offer.companyLatitude + ',' + offer.companyLongitude + '&hl=pl&z=15&amp;output=embed'"
            width="100%"
            height="300"
        >
        </iframe>
      </div>
    </div>
    <div class="row offer text-center">
      <div class="col-12">
        <h1 class="position pt-4 pb-4">{{ offer.position }} ({{ offer.companyCity }})</h1>
        <p>{{ offer.minEarnings }} - {{ offer.maxEarnings }} PLN </p>

      </div>
      <div class="col-12 text-center">
        <h2>Zostaniesz przekierowany na portal</h2>
        <div class="sourcePortalLogo mt-3 mb-3">
          <ImagePreloader :imageUrl="'/assets/img/logo/' + offer.sourcePortal + '.png'"
                          :companyName="offer.sourcePortal"></ImagePreloader>
        </div>
        <div id="counter">{{ counter }} sek</div>
      </div>
    </div>
  </div>
</template>

<script>


import ImagePreloader from "@/components/structural/ImagePreloader";
import axios from 'axios'

export default {
  name: 'Offer',
  components: {
    ImagePreloader,
  },
  data: function () {
    return {
      offer: null,
      counter: 6
    }
  },
  mounted() {
    this.getOfferById(this.$route.params.id);
    setInterval(() => {
      if(this.counter>0){
        this.countingDown();
      }
    },1000);
  },
  methods: {
    countingDown: function(){
      this.counter--;

      if (this.counter === 0) {
        top.location.href = this.offer.offertUrl
      }
    },
    getOfferById: function (offerId) {
      var url = 'http://api.jobsfactory.pl?id=' + offerId;
      axios
          .get(url)
          .then(response => {
            this.offer = response.data.data[0];
          })
          .catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss">

@import "../../../styles/sb-ui-kit-pro/variables/_colors";


.container-fluid {
  padding-left: 0rem;
  padding-right: 0rem;
}

.bg-jobsfactory {
  background-image: linear-gradient(15deg, #311840 10%, rgba(105, 0, 199, .8) 80%);
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


.offer {
  h1 {
    color: $pink;
    font-weight: bold;
  }


}

.map {
  iframe {
    border: 0;
    padding: 0;
    margin: 0;
  }
}

#counter {
  font-size: 2rem;
  font-weight: bold;

}
.sourcePortalLogo {
  img {
    max-width: 400px;
    max-height: 250px;
  }
}

</style>
