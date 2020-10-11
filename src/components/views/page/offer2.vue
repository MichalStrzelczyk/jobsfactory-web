<template>
  <div id="layoutDefault">
    <div id="layoutDefault_content">
      <main>
        <SimpleHeader></SimpleHeader>
      </main>
      <div>
        <div class="container-lg mt-10">
          <div class="row">
            <div class="col-9">
              <div class="offerInfo">
                <h1 class="position">{{ offer.position }}</h1>
                <p class="description">{{ offer.description }}</p>
                <p class="money">{{ offer.minEarnings }} - {{ offer.maxEarnings }} {{ offer.currency }} </p>
                <SmallTags class="mt-2" :tagsMessage="offer.tags"></SmallTags>
              </div>
              <iframe :src=offer.offertUrl width="100%" class="mt-4"></iframe>
            </div>
            <div class="col-3">
              <div class="companyInfo">
                <ImagePreloader :imageUrl="offer.companyLogoUrl" :companyName="offer.companyName"></ImagePreloader> <br/>
                <span class="companyName">{{ offer.companyName }} </span> <br/>
                <span class="address"> {{ offer.companyAddress }}</span> <br/>
                <span class="city"> {{ offer.companyCity }}</span>
              </div>
              <div class="map" v-if="offer.companyLatitude">
                <iframe
                    :src="'https://maps.google.com/maps?q=' + offer.companyLatitude + ',' + offer.companyLongitude + '&hl=pl&z=14&amp;output=embed'"
                    width="100%"
                    height="200"
                >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="layoutDefault_footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import SimpleHeader from '@/components/SimpleHeader.vue'
import SmallTags from "@/components/structural/SmallTags";
import ImagePreloader from "@/components/structural/ImagePreloader";
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  name: 'Offer',
  components: {
    SimpleHeader,
    SmallTags,
    ImagePreloader,
    Footer
  },
  data: function () {
    return {
      offer: null
    }
  },
  mounted() {
    this.getOfferById(this.$route.params.id);
  },
  methods: {
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

.offerInfo {
  h1.position {
    color: $pink;
    font-weight: bold;
  }
}

.companyInfo {
  text-align: center;
  .companyName {
    font-weight: bold;
  }
}

iframe {
  border: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 1000px;
}
</style>
