<template>
  <div class="mt-10">
    <div class="row m-0">
      <div class="col-12 p-0">
        Znaleziono: <strong>{{ allOffersCount }}</strong> ofert.

        <ul class="sorting">
          <li>
            <a v-on:click.prevent.stop="changeOrder('id_desc')" v-bind:class="{'active' : searchRequirements.orderType == 'id_desc'}" href="">Najnowsze</a>
          </li>
          <li>
            <a v-on:click.prevent.stop="changeOrder('id_asc')" v-bind:class="{'active' : searchRequirements.orderType == 'id_asc'}" href="">Najstarsze </a>
          </li>
          <li>
            <a v-on:click.prevent.stop="changeOrder('maxEarnings_desc')" v-bind:class="{'active' : searchRequirements.orderType == 'maxEarnings_desc'}" href="">Najlepiej płatne</a>
          </li>
        </ul>


      </div>
    </div>
    <div class="col-lg-12 mt-4">
      <div class="offerRow row mt-2 p-3" v-for="offer in offers" :key="offer.id">
        <div class="col-lg-2 col-3 companyImage">
          <ImagePreloader :imageUrl="offer.companyLogoUrl" :companyName="offer.companyName"></ImagePreloader>
        </div>
        <div class="col-lg-10 col-9">
          <div class="row">
            <div class="col-lg-6 col-12">
              <span class="position">
                <router-link target="_blank" @click="navigate" :to="{ name: 'offer', params: { id: offer.id, city: offer.companyCity, seoText: createSlug(offer.position) }}">{{ offer.position }}</router-link>
              </span> <br/>
              {{ offer.companyName }} <br/>
              <span class="oi oi-location"></span><span class="city"> {{ offer.companyCity }}</span>
            </div>
            <div class="col-lg-3 col-12">
              <span class="money">{{ offer.minEarnings }} - {{ offer.maxEarnings }} {{ offer.currency }} </span>
            </div>
            <div class="col-lg-3 col-12">
              <SmallTags class="mt-2" :tagsMessage="offer.tags"></SmallTags>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-2 p-3">
        <div class="col text-xl-center" id="loader" v-bind:class="{ show: showLoader }">
          <div class="spinner-grow text-warning m-2" role="status"></div>
          <div class="spinner-grow text-warning m-2" role="status"></div>
          <div class="spinner-grow text-warning m-2" role="status"></div>
        </div>
      </div>
      <div class="row mt-2 mb-4 p-3">
        <button class="btn btn-teal btn-more btn-marketing rounded-pill lift lift-sm" v-on:click="more">{{
            activePage
          }}/{{ pages }} Więcej ofert
        </button>
      </div>

    </div>

  </div>
</template>

<script>
import axios from 'axios'
import SmallTags from "@/components/structural/SmallTags";
import ImagePreloader from "@/components/structural/ImagePreloader";

export default {
  components: {
    SmallTags,
    ImagePreloader
  },
  data: function () {
    return {
      isPanelHide: false,
      selectedTags: [],
      offers: [],
      showLoader: true,
      perPage: 30,
      activePage: 1,
      pages: 0,
      allOffersCount: 0,
      searchRequirements: {
        cityList: [],
        contractTypes: [],
        query: null,
        seniorityList: [],
        technologyList: [],
        categoryList: [],
        orderType: "id_desc"
      },

    }
  },
  mounted() {
    this.$root.$on('offersReload', this.reload);
    this.$root.$on('searchPanelStatus', this.changeSearchPanelStatus);
    this.reload([]);
  },
  methods: {
    changeOrder: function(orderType){
      this.searchRequirements.orderType = orderType;
      this.reload(this.searchRequirements);
    },
    createSlug: function(str){
        str = str.replace(/^\s+|\s+$/g, ""); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to = "aaaaaaeeeeiiiioooouuuunc------";

        for (var i = 0, l = from.length; i < l; i++) {
          str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
        }

        str = str
            .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
            .replace(/\s+/g, "-") // collapse whitespace and replace by -
            .replace(/-+/g, "-") // collapse dashes
            .replace(/^-+/, "") // trim - from start of text
            .replace(/-+$/, ""); // trim - from end of text

        return str;
    },
    changeSearchPanelStatus: function (isHide) {
      this.isPanelHide = isHide;
    },
    more: function () {
      if(this.activePage< this.pages){
        this.activePage++;
        this.getOffers();
      }
    },
    reload: function (searchRequirements) {
      this.offers = [];
      this.activePage = 1;
      this.selectedTags = [];
      this.searchRequirements = searchRequirements;
      this.getOffers();
    },
    getOffers: function () {
      this.showLoader = true;
      var limit = this.perPage;
      var offset = this.perPage * (this.activePage - 1);
      var url = 'http://api.jobsfactory.pl?limit=' + limit + '&offset=' + offset;

      if (this.searchRequirements.onlyWithSalary) {
        url += '&onlyWithSalary=1';
        this.selectedTags.push('tylko z widełkami cenowymi');
      }

      if (this.searchRequirements.cityList !== undefined) {
        this.searchRequirements.cityList.map((function (key) {
          url += '&cities[]=' + key;
          this.selectedTags.push(key);
        }).bind(this));
      }

      if (this.searchRequirements.categoryList !== undefined) {
        this.searchRequirements.categoryList.map((function (key) {
          url += '&categories[]=' + key;
          this.selectedTags.push(key);
        }).bind(this));
      }

      if (this.searchRequirements.technologyList !== undefined) {
        this.searchRequirements.technologyList.map((function (key) {
          url += '&technologies[]=' + key;
          this.selectedTags.push(key);
        }).bind(this));
      }

      if (this.searchRequirements.contractTypes !== undefined) {
        this.searchRequirements.contractTypes.map((function (key) {
          url += '&contractTypes[]=' + key;
          this.selectedTags.push(key);
        }).bind(this));
      }

      if (this.searchRequirements.seniorityList !== undefined) {
        this.searchRequirements.seniorityList.map((function (key) {
          url += '&seniorityList[]=' + key;
          this.selectedTags.push(key);
        }).bind(this));
      }

      if (this.searchRequirements.query !== undefined && this.searchRequirements.query.length > 0) {
        url += '&q=' + this.searchRequirements.query;
        this.selectedTags.push(this.searchRequirements.query);
      }

      if (this.searchRequirements.minSalary !== undefined) {
        url += '&salaryMin=' + this.searchRequirements.minSalary;
        this.selectedTags.push('pensja >= ' + this.searchRequirements.minSalary);
      }

      switch (this.searchRequirements.orderType){
        case 'id_desc': url += '&orderBy=id&orderType=DESC'; break;
        case 'id_asc': url += '&orderBy=id&orderType=ASC'; break;
        case 'maxEarnings_desc': url += '&orderBy=maxEarnings&orderType=DESC'; break;
      }

      var that = this;
      axios
          .get(url)
          .then(function (response) {
            that.offers = that.offers.concat(response.data.data);
            that.allOffersCount = response.data.total;
            that.pages = Math.ceil(response.data.total / that.perPage);
            that.showLoader = false;
          })
          .catch(error => console.log(error))
    }
  },
  name: 'MainContent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../styles/project-variables";

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
$grey: #687281 !default;

#loader {
  display: none
}

#loader.show {
  display: block
}

.offerRow {
  box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);
  position: relative;
  //overflow: hidden;
  .row {
    align-items: center;
  }

  .companyImage {
    padding: 0 20px;
    width: 150px;
    height: 60px;
    text-align: center;
    align-self: center;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      max-height: 100%;
      vertical-align: middle;
    }
  }

  .position a {
    color: $pink;
    font-weight: bold;
  }

  .position a:hover {
    opacity: 0.7;

  }

  .city {
    color: black;
  }

  .money {
    font-size: 0.9rem;
  }


}

.btn-more {
  margin: 0 auto;
}

.headerMargin {
  margin-top: 10rem;
}

.headerMarginBig {
  margin-top: 22rem;
}

.sourcePortal {
  max-width: 30%;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
}

ul.sorting {
  list-style: none;
  float: right;
  li {
    text-align: center;
    float: left;
    padding: 0 .4rem;
    a {
      color: $grey;
    }

    a.active {
      color: $pink;
    }
  }
}


@media (max-width: $breakpoint-lg) {
  .container-lg {
    padding: 0 1rem;
  }
  .headerMarginBig {
    margin-top: 32rem;
  }
}
</style>
