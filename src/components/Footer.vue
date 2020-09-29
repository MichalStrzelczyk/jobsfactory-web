<template>
  <footer class="footer pt-10 pb-5 mt-auto bg-light footer-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="footer-brand">JobsFactory.pl</div>
          <div class="mb-3">ogłoszenia z branży IT</div>
        </div>
        <div class="col-lg-9">
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div class="text-uppercase-expanded text-xs mb-4">
                Miasto
              </div>
              <ul class="list-unstyled mb-0">
                <li class="mb-2" v-for="(position, index) of cityList" v-bind:key="position.name">
                  <a :href="position.link" v-if="index<4">{{  position.name }}</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <ul class="list-unstyled mb-0">
                <li class="mb-2" v-for="(position, index) of cityList" v-bind:key="position.name">
                  <a :href="position.link" v-if="index>=4">{{ position.name }}</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div class="text-uppercase-expanded text-xs mb-4">
                Doświadczenie
              </div>
              <ul class="list-unstyled mb-0">
                <li class="mb-2" v-for="position of seniority" v-bind:key="position.name">
                  <a :href="position.link">{{  position.name }}</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div class="text-uppercase-expanded text-xs mb-4">
                Typ zatrudnienia
              </div>
              <ul class="list-unstyled mb-0">
                <li class="mb-2" v-for="position of contractType" v-bind:key="position.name">
                  <a :href="position.link">{{  position.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-5" />
      <div class="row align-items-center">
        <div class="col-md-6 small">Copyright © DigitalFarm 2020</div>
        <div class="col-md-6 text-md-right small">
          <a href="">Polityka prywatności</a> | <a href="">Regulamin</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: function(){
    return {
      contractType: [
        {
          name: "B2B",
          link: '/oferty-pracy/rodzaj-umowy/b2b'
        },
        {
          name: "Umowa o pracę",
          link: '/oferty-pracy/rodzaj-umowy/umowa-o-prace'
        },
        {
          name: "Umowa tymczasowa",
          link: '/oferty-pracy/rodzaj-umowy/umowa-tymczasowa'
        },
      ],
      seniority: [
        {
          name: "Praktyki",
          link: '/oferty-pracy/doswiadczenie/praktyki'
        },
        {
          name: "Junior",
          link: '/oferty-pracy/doswiadczenie/junior'
        },
        {
          name: "Mid",
          link: '/oferty-pracy/doswiadczenie/mid'
        },
        {
          name: "Senior",
          link: '/oferty-pracy/doswiadczenie/senior'
        },
        {
          name: "Expert",
          link: '/oferty-pracy/doswiadczenie/expert'
        },
      ],
      cityList: [
        {
          name: "Warszawa",
          link: '/oferty-pracy/warszawa'
        },
        {
          name: "Wrocław",
          link: '/oferty-pracy/wroclaw'
        },
        {
          name: "Kraków",
          link: '/oferty-pracy/krakow'
        },
        {
          name: "Gdańsk",
          link: '/oferty-pracy/gdansk'
        },
        {
          name: "Poznań",
          link: '/oferty-pracy/poznan'
        },
        {
          name: "Katowice",
          link: '/oferty-pracy/katowice'
        },
        {
          name: "Gdynia",
          link: '/oferty-pracy/gdynia'
        },
        {
          name: "Białystok",
          link: '/oferty-pracy/bialystok'
        },
        {
          name: "Lublin",
          link: '/oferty-pracy/lublin'
        },
      ]
    }
  },
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
