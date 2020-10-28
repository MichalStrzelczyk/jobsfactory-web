<template>
  <div id="mainSearcher" v-bind:class="{'pink' : pinkLabels}">
    <div class="page-header-content">



      <div id="searchPanel">
        <div class="row">
          <div class="col-lg-12 d-lg-block">

            <div class="card bg-jobsfactory">
              <div class="card-body">


                <div class="logo">
                  <a href="/" title="Portal z ogłoszeniami pracy dla IT">JobsFactory.pl</a>
                </div>

                <!-- <b-tab title="Technologia">-->
                <h4 class="mt-5">Technologia</h4>
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
                <div class="row">
                  <div class="col-8">
                    <b-form-input id="range-1" v-model="minSalary" type="range" min="0" max="26000"
                                  step="500"></b-form-input>
                  </div>
                  <div class="col-4">
                    <div class="minSalary">{{ minSalary }} PLN</div>
                  </div>
                </div>

                <b-form-checkbox class="mb-3" v-model="onlyWithSalary" name="check-button" switch>
                  <span class="offersOnlyWithMoney">Tylko oferty z podaną stawką</span>
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

.logo {
  a {
    display: block;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-align: center;
    background: rgba(0,0,0,0.7);
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

#searchPanel{}

.custom-checkbox {
  padding: 0;
  margin-right: 0.5rem;


  .custom-control-label {
    cursor: pointer;
    margin: 0.2rem 0;
    border: 1px solid darkgray;
    padding: 0.15rem 0.3rem 0 0.5rem;
    font-size: 0.8rem;
    transition: 0.2s background-color, border-color;
    color: #fff;

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
    font-size: 0.85rem;
    color: #e30059;
    border: none;
  }
}

.minSalary {
  color: white;
}

.offersOnlyWithMoney {
  color: white;
  font-size: 0.8rem;
}

.form-control {
  font-size: 0.8rem;
}
</style>
