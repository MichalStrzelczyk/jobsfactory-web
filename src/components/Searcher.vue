<template>
  <div id="mainSearcher" v-bind:class="{'pink' : pinkLabels}">
    <div class="page-header-content">
      <div id="searchPanel">
        <div class="row">
          <div class="col-lg-12 d-lg-block">

            <div class="card">
              <div class="card-body">
                <span style="position: absolute; font-size: 0.8rem; right: 10px; top: 0" class="pointer" v-on:click="pinkLabels = !pinkLabels">zmień labele</span>
                <!-- <b-tab title="Technologia">-->
                <h4 class="mt-0">Technologia</h4>
                <b-form-group label="">
                  <b-form-checkbox-group
                      id="checkbox-group-4"
                      class="checkbox-group"
                      v-model="selectedTechnology"
                      :options="technology"
                      name="flavour-4"
                  ></b-form-checkbox-group>
                </b-form-group>

                <!--   <b-tab title="Miasto" active>-->
                <h4>Miasto</h4>
                <b-form-group label="">
                  <b-form-checkbox-group
                      id="checkbox-group-1"
                      class="checkbox-group"
                      v-model="selectedCities"
                      :options="cityList"
                      name="flavour-1"
                  ></b-form-checkbox-group>
                  <b-form-input type="text" class="mt-3" placeholder="Wpisz brakujące miasto"
                                v-model="additionalCity"/>
                </b-form-group>


                <!-- <b-tab title="Doświadczenie">-->
                <h4>Doświadczenie</h4>
                <b-form-group label="">
                  <b-form-checkbox-group
                      id="checkbox-group-2"
                      class="checkbox-group"
                      v-model="selectedSeniority"
                      :options="seniority"
                      name="flavour-2"
                  ></b-form-checkbox-group>
                </b-form-group>

                <!--<b-tab title="Rodzaj umowy">-->
                <h4>Rodzaj umowy</h4>
                <b-form-group label="">
                  <b-form-checkbox-group
                      id="checkbox-group-3"
                      class="checkbox-group"
                      v-model="selectedContractType"
                      :options="contractType"
                      name="flavour-3"
                  ></b-form-checkbox-group>
                </b-form-group>

                <!-- <b-tab title="Wynagrodzenie">-->
                <h4>Wynagrodzenie</h4>
                <div>
                  <label for="range-1">Zarobki nie mniejsze niż</label>
                  <b-form-input id="range-1" v-model="minSalary" type="range" min="0" max="26000"
                                step="500"></b-form-input>
                  <div class="mt-2 minSalary">{{ minSalary }} PLN</div>
                </div>
                <b-form-checkbox class="mt-3" v-model="onlyWithSalary" name="check-button" switch>
                  Tylko oferty z podaną stawką
                </b-form-checkbox>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-lg-8 d-lg-block">
            <b-form-input type="text" class="" placeholder="Słowo kluczowe np Kotlin, Phalcon, ..."
                          v-model="selectedWord"/>
          </div>
          <div class="col-lg-4 d-lg-block">
            <button class="btn btn-teal btn-marketing rounded-pill lift lift-sm btn-search mt-3 mt-lg-0"
                    v-on:click="search">Znajdź mi nową pracę
            </button>
          </div>
        </div>


      </div>
    </div>
    <div class="container">
      <div class="row text-center align-items-end">
        <div class="col-12 col-lg-10 tags">
          <Tags :tags="selectedTags"></Tags>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Tags from "@/components/structural/Tags";

export default {
  components: {
    Tags
  },
  data: function () {
    return {
      pinkLabels: false,
      selectedWord: '',
      onlyWithSalary: false,
      additionalCity: '',
      minSalary: 0,
      selectedCities: [],
      selectedTags: [],
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
  created() {

  },
  mounted() {
    this.$root.$on('toggleHeader', this.toggle);
  },
  methods: {
    toggle: function () {

      this.$root.$emit('searchPanelStatus', false);
    },
    search: function () {
      this.updateTags();
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
    },
    updateTags() {

      this.selectedTags = [];

      if (this.onlyWithSalary) {
        this.selectedTags.push('tylko z widełkami');
      }

      if (this.additionalCity !== undefined && this.additionalCity.length > 0) {
        this.selectedTags.push(this.additionalCity);
      }

      if (this.selectedCities !== undefined) {
        this.selectedCities.map((function (key) {
          this.selectedTags.push(key);
        }).bind(this));
      }

      if (this.selectedTechnology !== undefined) {
        this.selectedTechnology.map((function (key) {
          this.selectedTags.push(key);
        }).bind(this));
      }

      if (this.selectedContractType !== undefined) {
        this.selectedContractType.map((function (key) {
          this.selectedTags.push(key);
        }).bind(this));
      }

      if (this.selectedSeniority !== undefined) {
        this.selectedSeniority.map((function (key) {
          this.selectedTags.push(key);
        }).bind(this));
      }

      if (this.query !== undefined && this.query.length > 0) {
        this.selectedTags.push(this.query);
      }

      if (this.minSalary !== undefined && +this.minSalary > 0) {
        this.selectedTags.push('pensja >= ' + this.minSalary);
      }
    }
  },
  name: 'Searcher',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">

@import "../styles/project-variables";

.myNavUl {
  li {
    width: 100%;
    text-align: right;
    font-weight: normal;

    a.active {
      background: red;
    }

    a {
      color: #aab1bb;

      &:hover {
        color: #e30059;
      }
    }
  }
}

#mainSearcher {
  width: 100%
}

h4 {
  font-size: 1rem;
  margin: 1.8rem 0 1rem 0;
  border-bottom: 1px solid black;

}

.custom-checkbox {
  padding: 0;
  margin-right: 0.5rem;


  .custom-control-label {
    cursor: pointer;
    margin: 0.25rem 0;
    border: 1px solid darkgray;
    padding: 0.2rem 0.5rem 0 0.5rem;
    font-size: 0.9rem;
    transition: 0.2s background-color, border-color;

    &:hover {
      background-color: rgba(227, 0, 89, 0.3);
    }

    &:before,
    &:after {
      display: none;
    }
  }


  .custom-control-input {
    display: none;

    &:checked {
      & + .custom-control-label {
        background-color: #e30059;
        border-color: #e30059;
        color: white;
      }
    }
  }
}


.pink {
  h4 {
    margin: 1.8rem 0 0.4rem 0;
    color: #e30059;
    border: none;
  }
}
</style>
