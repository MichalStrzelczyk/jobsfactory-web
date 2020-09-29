<template>
  <header class="bg-gradient-primary-to-secondary page-header-dark fixed-top">
    <Navigation></Navigation>
    <div class="page-header-content">
      <div class="container" id="searchPanel" v-bind:class="{ hideSearchPanel: hideSearchPanel }">
        <div class="row">
          <div class="col-lg-12 d-lg-block">
            <b-card no-body>
              <b-tabs pills card vertical nav-wrapper-class="myPanelContainer" nav-class="myNavUl" active-nav-item-class="myTabBtn"
                      id="tabPanel">
                <b-tab title="Miasto" active>
                  <b-form-group label="">
                    <b-form-checkbox-group
                        id="checkbox-group-1"
                        v-model="selectedCities"
                        :options="cityList"
                        name="flavour-1"
                    ></b-form-checkbox-group>
                    <hr />
                    <b-form-input type="text" class="" placeholder="Wpisz brakujące miasto" v-model="additionalCity"/>
                  </b-form-group>
                </b-tab>
                <b-tab title="Technologia">
                  <b-form-group label="">
                    <b-form-checkbox-group
                        id="checkbox-group-4"
                        v-model="selectedTechnology"
                        :options="technology"
                        name="flavour-4"
                    ></b-form-checkbox-group>
                  </b-form-group>
                </b-tab>
                <b-tab title="Doświadczenie">
                  <b-form-group label="">
                    <b-form-checkbox-group
                        id="checkbox-group-2"
                        v-model="selectedSeniority"
                        :options="seniority"
                        name="flavour-2"
                    ></b-form-checkbox-group>
                  </b-form-group>
                </b-tab>
                <b-tab title="Rodzaj umowy">
                  <b-form-group label="">
                    <b-form-checkbox-group
                        id="checkbox-group-3"
                        v-model="selectedContractType"
                        :options="contractType"
                        name="flavour-3"
                    ></b-form-checkbox-group>
                  </b-form-group>
                </b-tab>
                <b-tab title="Wynagrodzenie">
                  <div>
                    <label for="range-1">Zarobki nie mniejsze niż</label>
                    <b-form-input id="range-1" v-model="minSalary" type="range" min="0" max="26000" step="500"></b-form-input>
                    <div class="mt-2 minSalary">{{ minSalary }} PLN</div>
                  </div>
                  <hr />
                  <b-form-checkbox v-model="onlyWithSalary" name="check-button" switch>
                    Tylko oferty z podaną stawką
                  </b-form-checkbox>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>

        </div>
        <div class="row mt-4">
          <div class="col-lg-8 d-lg-block">
            <b-form-input type="text" class="" placeholder="Słowo kluczowe np Kotlin, Phalcon, ..."
                          v-model="selectedWord"/>
          </div>
          <div class="col-lg-4 d-lg-block">
            <button class="btn btn-teal btn-marketing rounded-pill lift lift-sm btn-search" v-on:click="search">Znajdź
              mi nową pracę
            </button>
          </div>
        </div>
      </div>
    </div>

    <span>
      <div class="svg-border-rounded text-white"><svg data-v-fa4f5a84="" xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 144.54 17.34" preserveAspectRatio="none"
                                                      fill="currentColor"><path data-v-fa4f5a84=""
                                                                                d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg></div>
      </span>
    <div class="row text-center">
        <a class="btnToggle" v-on:click="toggle" :class="hideSearchPanel ? '' : 'hideSearchPanel'" ><b-icon icon="eye-fill"       font-scale="1.3"  ></b-icon></a>
        <a class="btnToggle" v-on:click="toggle" :class="hideSearchPanel ? 'hideSearchPanel' : ''" ><b-icon icon="eye-slash-fill" font-scale="1.3"></b-icon></a>
    </div>
  </header>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  components: {
    Navigation
  },
  data: function () {
    return {
      hideSearchPanel: false,
      selectedWord: '',
      onlyWithSalary: false,
      additionalCity: '',
      minSalary: 0,
      selectedCities: [],
      cityList: [
        {text: "Warszawa", value: "warszawa"},
        {text: "Wrocałw", value: "wrocław"},
        {text: "Kraków", value: "kraków"},
        {text: "Gdańsk", value: "gdańsk"},
        {text: "Poznań", value: "poznań"},
        {text: "Katowice", value: "katowice"},
        {text: "Gdynia", value: "gdynia"},
        {text: "Lublin", value: "lublin"},
      ],
      selectedSeniority: [],
      seniority: [
        {text: "Praktyki", value: 'trainee'},
        {text: "Junior", value: 'junior'},
        {text: "Mid", value: 'middle'},
        {text: "Senior", value: 'senior'},
        {text: "Expert", value: 'expert'},
      ],
      selectedContractType: [],
      contractType: [
        {text: "B2B", value: 'b2b'},
        {text: "Umowa o pracę", value: 'full_time'},
        {text: "Umowa tymczasowa", value: 'temporary'},
        {text: "Freelance", value: 'freelance'},
      ],
      selectedTechnology: [],
      technology: [
        {text: "Python", value: 'python'},
        {text: "PHP", value: 'php'},
        {text: ".net", value: '.net'},
        {text: "Java", value: 'java'},
        {text: "JavaScript", value: 'javascript'},
        {text: "GO", value: 'go'},
        {text: "C", value: 'c'},
        {text: "C++", value: 'c++'},
        {text: "C#", value: 'c#'},
        {text: "Ruby", value: 'ruby'},
        {text: "R", value: 'r'},
        {text: "NodeJS", value: 'nodejs'}
      ],
    }
  },
  methods: {
    toggle: function() {
      this.hideSearchPanel = !this.hideSearchPanel;
      this.$root.$emit('searchPanelStatus', this.hideSearchPanel);
    },
    search: function () {
      this.$root.$emit('offersReload', {
        minSalary: this.minSalary,
        onlyWithSalary: this.onlyWithSalary,
        query: this.selectedWord,
        cityList: this.selectedCities,
        additionalCity: this.additionalCity,
        seniorityList: this.selectedSeniority,
        contractTypes: this.selectedContractType,
        technologyList: this.selectedTechnology,
      });
    }
  },
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style type="text/css">
.myNavUl li{
  width: 100%;
  text-align: right;
  font-weight: normal;
}

.myNavUl li a {
  color:#687281;
}

.myNavUl li a:hover {
  color:#e30059;
}

:focus {
  outline: none !important;
}

.myTabBtn {
  background-color: #e30059 !important;
  font-weight: normal;
}

.custom-control-inline {
  width: 30%;
}

.hideSearchPanel {
  display: none;
}

.btnToggle {
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  color: #ffffff;
  cursor: pointer;
}

.btnToggle:hover {
  color: #e30059;
}
</style>

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

$white: #fff !default;
$gray-1: #e1e1e1 !default;
$gray-2: #a7a7a7 !default;
$gray-3: #6a6a6a !default;
$gray-4: #687281 !default;
$black: #000 !default;

header {
    position: fixed;
    top:0;
    padding-bottom: 4rem;
}

.myPanelContainer {
  display: none;
}

.myTabBtn {
  background-color: $pink;

}

#tabPanel {

  .tab-pane {
    color: $gray-4;
  }

  .myPanelContainer {
    padding: 300%;
  }

  .myNavUl {
    li {
      width: 100%;
      text-align: right;

      .myTabBtn {
        background-color: $pink;
      }

    }
  }
}

.btn-search {
  width: inherit;
}

.minSalary {
  font-weight: bold;
}

</style>
