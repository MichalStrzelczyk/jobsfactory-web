<template>
  <div id="mainSearcher" v-bind:class="{'pink' : pinkLabels}">
    <div class="page-header-content">
      <div id="searchPanel">
        <div class="row">
          <div class="col-lg-12 d-lg-block">

            <div class="card">
              <div class="card-body">
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

                <h4 class="mt-0">Kategoria</h4>
                <b-form-group label="">
                  <b-form-checkbox-group
                      id="checkbox-group-5"
                      class="checkbox-group"
                      v-model="selectedCategory"
                      :options="category"
                      name="flavour-5"
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


                <h4>Słowo kluczowe</h4>
                <b-form-input type="text" class="" placeholder="np nazwa frameworka, technologii, firmy"
                              v-model="selectedWord"/>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>

</template>

<script>
export default {
  data: function () {
    return {
      pinkLabels: true,
      selectedWord: '',
      onlyWithSalary: false,
      minSalary: undefined,
      selectedCities: [],
      cityList: [
        {text: "Praca zdalna", value: "remote"},
        {text: "Warszawa", value: "warszawa"},
        {text: "Wrocałw", value: "wrocław"},
        {text: "Kraków", value: "kraków"},
        {text: "Gdańsk", value: "gdańsk"},
        {text: "Poznań", value: "poznań"},
        {text: "Łódź", value: "łódź"},
        {text: "Katowice", value: "katowice"},
        {text: "Gdynia", value: "gdynia"},
        {text: "Lublin", value: "lublin"},
        {text: "Gliwice", value: "gliwice"},
        {text: "Rzeszów", value: "rzeszów"},
        {text: "Białystok", value: "białystok"},
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
        {text: "JavaScript", value: 'javascript'},
        {text: "Java", value: 'java'},
        {text: "Python", value: 'python'},
        {text: "PHP", value: 'php'},
        {text: "Ruby", value: 'ruby'},
        {text: ".net", value: '.net'},
        {text: "GO", value: 'go'},
        {text: "BigData", value: 'big_data'},
        {text: "C", value: 'c'},
        {text: "C++", value: 'c++'},
        {text: "C#", value: 'c#'},
        {text: "R", value: 'r'},
        {text: "NodeJS", value: 'nodejs'},
        {text: "Sql", value: 'sql'},
        {text: "Inna", value: 'other'}
      ],
      selectedCategory: [],
      category: [
        {text: "Backend", value: 'backend'},
        {text: "Frontend", value: 'frontend'},
        {text: "Fullstack", value: 'fullstack'},
        {text: "Devops", value: 'devops'},
        {text: "Tester", value: 'tester'},
        {text: "Administrator", value: 'administrator'},
        {text: "Mobile", value: 'mobile'},
        {text: "Business analyst", value: 'business_analyst'},
        {text: "Business intelligence", value: 'business_intelligence'},
        {text: "Project manager", value: 'project_manager'},
        {text: "UX", value: 'ux'},
        {text: "Support", value: 'support'},
        {text: "Security", value: 'security'},
        {text: "Sales", value: 'sales'},
        {text: "Inna", value: 'other'}
      ],
    }
  },
  watch: {
    selectedTechnology: function (){
        this.search();
    },
    selectedCities: function (){
        this.search();
    },
    selectedCategory: function (){
      this.search();
    },
    selectedSeniority: function (){
      this.search();
    },
    selectedContractType: function (){
      this.search();
    },
    minSalary: function (){
      this.search();
    },
    onlyWithSalary: function (){
      this.search();
    },
    selectedWord: function (){
      this.search();
    },
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
      this.$root.$emit('offersReload', {
        minSalary: this.minSalary,
        onlyWithSalary: this.onlyWithSalary,
        query: this.selectedWord,
        cityList: this.selectedCities,
        seniorityList: this.selectedSeniority,
        contractTypes: this.selectedContractType,
        technologyList: this.selectedTechnology,
        categoryList: this.selectedCategory
      });
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
