<template>
  <div class="container-fluid">
    <div id="boxInfo" class="bg-jobsfactory" v-if="offer">
      <div class="row">
        <div class="col-12 text-center text-md-left">
          <h1> {{ offer.position }} ({{ offer.companyCity }})</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <SmallTags class="d-none d-md-block" :tagsMessage="offer.tags"></SmallTags>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-2 d-none d-md-block">
          {{ offer.minEarnings }} - {{ offer.maxEarnings }} {{ offer.currency }} <br/>
        </div>
      </div>
      <div class="row text-center mt-3">
        <div class="col-12">
          <h3>Trwa przekierowanie na portal</h3>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-12">
          <div class="sourcePortalLogo mt-lg-3 mb-lg-3 mt-2 mb-2">
            <ImagePreloader :imageUrl="'/assets/img/logo/' + offer.sourcePortal + '.png'"
                            :companyName="offer.sourcePortal"></ImagePreloader>
          </div>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-12">
          <div id="counter">{{ counter }} sek</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import ImagePreloader from "@/components/structural/ImagePreloader";
import SmallTags from "@/components/structural/SmallTags";
import axios from 'axios'

export default {
  name: 'Offer',
  components: {
    ImagePreloader,
    SmallTags
  },
  metaInfo() {
    return {
      title: "JobsFactory - oferty pracy IT, największy portal z ogłoszeniami IT, wyszukiwarka ogłoszeń IT, praca dla IT",
      meta: [
        {
          name: 'description',
          content: 'Największa wyszukiwarka ofert pracy dla branży IT. Zebraliśmy dla Ciebie ponad 1000 ofert z wiodących portali na rynku. Nie trać czasu i w łatwy sposób znajdź nową pracę w branży IT'
        },
        {
          property: 'og:title',
          content: "JobsFactory - wyszukiwarka ofert pracy IT"
        },
        {
          property: 'og:site_name',
          content: 'JobsFactory'
        },
        {
          property: 'og:image',
          content: '/assets/img/logo/jobs_factory_fb.jpg'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'robots',
          content: 'index,follow'
        }
      ]
    }
  },
  data: function () {
    return {
      offer: null,
      counter: 5,
      counterActive: false
    }
  },
  created: function () {
    this.getImage();
    window.onfocus = () => {
      this.counterActive = true;
    };
    window.onblur = () => {
      this.counterActive = false;
    };
  },
  mounted() {
    this.getOfferById(this.$route.params.id);
    this.counterActive = document.hasFocus();
    setInterval(() => {
      if (this.counter > 0) {
        this.countingDown();
      }
    }, 1000);
  },
  methods: {
    track() {
      this.$ga.page(window.location.pathname);
    },
    getImage: function () {
      var url = 'https://api.jobsfactory.pl/advertisement';
      axios
          .get(url)
          .then(response => {
            if (response.data.actionLink.length > 1) {
              this.setLink(response.data.actionLink);
            }

            // is mobile
            if (window.innerWidth < 550) {
              this.setBackground(response.data.urlMobileImage);
            } else {
              this.setBackground(response.data.urlImage);
            }
          })
          .catch(error => console.log(error))
    },
    setLink: function (redirectUrl) {
      document.body.style.cursor = 'pointer';
      document.body.addEventListener('click', function () {
        window.open(redirectUrl);
      }, true);
    },
    setBackground: function (url) {
      document.body.style.backgroundImage = "url('" + url + "')";
    },
    countingDown: function () {
      if (this.counterActive === false) {
        return;
      }
      this.counter--;

      if (this.counter === 0) {
        top.location.href = this.offer.offertUrl
      }
    },
    getOfferById: function (offerId) {
      var url = 'https://api.jobsfactory.pl?id=' + offerId;
      axios
          .get(url)
          .then(response => {
            this.offer = response.data.data[0];
            this.updateMetaData();
          })
          .catch(error => console.log(error))
    },
    updateMetaData() {
      document.title = document.title + ' - ' + this.offer.position + '(' + this.offer.companyCity + ')';
      var offerDescription = this.offer.companyCity + ' - ' + this.offer.position + '. Stawka: ' + this.offer.minEarnings + ' - ' + this.offer.maxEarnings + ' ' + this.offer.currency + '. Firma: ' + this.offer.companyName;
      document.querySelector('meta[name="description"]').setAttribute("content", offerDescription);
    }
  }
}
</script>

<style lang="scss">

@import "../../../styles/project-variables";


.container-fluid {
  padding-left: 0;
  padding-right: 0;
}

.bg-jobsfactory {
  //background-image: linear-gradient(15deg, #311840 10%, rgba(105, 0, 199, .8) 80%);
  background-color: rgba(255, 255, 255, 0.95);
}

#boxInfo {
  box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);
  position: fixed;
  top: 1rem;
  left: 1rem;
  border-radius: 0.45rem;
  border: 0 solid rgba(0, 0, 0, 0.125);
  background-clip: border-box;
  padding: 1rem;
  max-width: 80vw;
  width: 500px;

  h1 {
    color: $pink;
    font-size: 1.3rem;
  }

  h3 {
    font-size: 0.9rem;
  }

  .sourcePortalLogo {
    img {
      max-width: 60%;
    }
  }

  #counter {
    font-size: 2rem;
  }
}

@media (max-width: $breakpoint-lg) {
  #boxInfo {
    width: 400px;
    left: 0;
    right: 0;

    h1 {
      font-size: 1.1rem;
    }

    .sourcePortalLogo img {
      height: 30px;
    }

    #counter {
      font-size: 1.7rem;
    }
  }
}

@media (max-width: $breakpoint-md) {
  #boxInfo {
    margin: 0 10vw;

  }
}


</style>
