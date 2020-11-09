<template>
  <div class="container-fluid">

    <div id="boxInfo" class="bg-jobsfactory">
      <div class="row">


        <div class="col-12">
          <h1 class="position pt-2 pb-2">{{ offer.position }} ({{ offer.companyCity }})
            <SmallTags class="mt-2" :tagsMessage="offer.tags"></SmallTags>
          </h1>
          <div class="mt-5">
            {{ offer.minEarnings }} - {{ offer.maxEarnings }} {{ offer.currency }} <br/>
            {{ offer.companyName }}, {{ offer.companyAddress }}
          </div>

        </div>
        <div class="col-12 text-center mt-3">
          <h3>Trwa przekierowanie na portal</h3>
          <div class="sourcePortalLogo mt-3 mb-3">
            <ImagePreloader :imageUrl="'/assets/img/logo/' + offer.sourcePortal + '.png'"
                            :companyName="offer.sourcePortal"></ImagePreloader>
          </div>
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
      title: "JobsFactory",
      meta: [
        {
          name: 'description',
          content: 'Największy portal z ofertami pracy dla branży IT. Zebraliśmy dla Ciebie ponad 7000 ofert z wiodących portali na rynku. Nie trać czasu i w łatwy sposób znajdź nową pracę w branży IT'
        },
        {
          property: 'og:title',
          content: "JobsFactory - oferty pracy IT"
        },
        {
          property: 'og:site_name',
          content: 'JobsFactory'
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
      counter: 5
    }
  },
  created: function () {
    this.getImage();
  },
  mounted() {

    this.getOfferById(this.$route.params.id);
    setInterval(() => {
      if (this.counter > 0) {
        this.countingDown();
      }
    }, 1000);
  },
  methods: {

    startCounting: function () {
      alert(1);
    },
    stopCounting: function () {
      alert(2);
    },
    getImage: function () {
      var url = 'http://api.jobsfactory.pl/advertisement';
      axios
          .get(url)
          .then(response => {
            this.setBackgroud(response.data.urlImage);
          })
          .catch(error => console.log(error))
    },
    setBackgroud: function (url) {
      document.body.style.backgroundImage = "url('" + url + "')";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundSize = "cover";
    },
    countingDown: function () {
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

@import "../../../styles/sb-ui-kit-pro/variables/_colors";


.container-fluid {
  padding-left: 0rem;
  padding-right: 0rem;
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
  max-width: 30%;
  border-radius: 0.45rem;
  border: 0 solid rgba(0, 0, 0, 0.125);
  background-clip: border-box;
  padding: 1rem;

  .logo {
    a {
      background-image: linear-gradient(15deg, #311840 10%, rgba(105, 0, 199, .8) 80%);
      display: block;
      color: white;
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      text-align: center;

      padding: 0.8rem 1.5rem;
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      width: 100%;
    }

    a:hover {
      text-decoration: none;
    }

  }

  h1 {
    color: $pink;
    font-size: 1.3rem;
  }

  h3 {
    font-size: 0.9rem;
  }

  .sourcePortalLogo {
    img {
      max-width: 30%;
    }
  }

  #counter {
    font-size: 2rem;
  }
}
</style>
