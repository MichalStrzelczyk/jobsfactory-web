<template>
  <header v-bind:class="{'scrolled': isScrolled === true}"
          class="bg-gradient-primary-to-secondary page-header-dark fixed-top">
    <Navigation></Navigation>
    <div class="page-header-content">

    </div>

    <div>
      <div class="svg-border-rounded text-white d-none d-md-flex">
        <svg data-v-fa4f5a84="" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 144.54 17.34" preserveAspectRatio="none"
             fill="currentColor">
          <path data-v-fa4f5a84=""
                d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
        </svg>
      </div>
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
      isScrolled: false
    }
  },
  created() {
    window.addEventListener('scroll', this.setIsScrolled);
  },
  mounted() {
    this.$root.$on('toggleHeader', this.toggle);
  },
  methods: {
    toggle: function () {
      this.isScrolled = false;
      this.$root.$emit('searchPanelStatus', false);
    },
    setIsScrolled() {
      this.isScrolled = window.scrollY > 50;
      this.$root.$emit('searchPanelStatus', this.isScrolled);
    }
  },
  name: 'SimpleHeader',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">

@import "../styles/project-variables";

$off-white: #e4dbff !default;
$input-bg: rgba(0, 0, 0, 0.5);

.myNavUl {
  li {
    width: 100%;
    text-align: right;
    font-weight: normal;

    a {
      color: #aab1bb;

      &:hover {
        color: #e30059;
      }
    }
  }
}


@media (max-width: $breakpoint-lg) {
  header {
    .myNavUl {
      flex-direction: row !important;
      justify-content: center;

      li {
        width: auto;
        font-size: 0.8rem;
      }
    }

    .checkbox-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}


:focus {
  outline: none !important;
}

.custom-control-inline {
  width: 30%;
}

.hideSearchPanel {
  display: none;
}

.btnToggle {
  text-decoration: underline;
  font-size: 0.9rem;
  cursor: pointer;
  color: white;
  opacity: 0;
  pointer-events: none;
  transition: 0.2s opacity;
  &:hover {
    color: white;
  }
}

header {
  padding-bottom: 1rem !important;
  .tags {
    margin-top: 0.5rem;
  }
  .custom-control {
    .custom-control-label {
      &:before {
        background-color: transparent;
      }

      &:hover,
      &:active {
        &:before {
          background-color: rgba(227, 230, 236, 0.15);
        }
      }
    }

    .custom-control-input {
      &:checked,
      &:focus,
      &:active {
        + .custom-control-label {
          &:before {
            background-color: rgba(227, 230, 236, 0.15);
            box-shadow: none;
          }
        }
      }
    }

    &.custom-switch {
      .custom-control-input {
        &:checked {
          + .custom-control-label {
            &:before {
              background-color: #0061f2;
            }
          }
        }
      }
    }
  }

  .card-header {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 0.5rem;
  }

  .card-body {
    padding: 1rem;
  }

  .form-group {
    margin-bottom: 0;
  }

  .nav-pills {
    .nav-link {
      border: 1px solid transparent;
      padding: 0.2rem 1rem;
      font-size: 0.9rem;
      //margin: 0.1rem 0;

      &:hover {
        //color: white;
        //background-color: rgba(255, 255, 255, 0.15);
        //border: 1px solid rgba(255, 255, 255, 0.3);
      }

      &.active {
        background: transparent;
        color: #e30059;
        //border: 1px solid #ffffff;
        //font-weight: normal;
        //background-color: rgba(255, 255, 255, 0.15);
      }
    }
  }

  .form-control {
    color: $off-white;
    background-color: $input-bg;
    border: none;

    &:focus {
      background-color: $input-bg;
      box-shadow: 0 0 0 0.0625rem #d00159;
      color: $off-white;
    }
  }

  &.scrolled {
    .btnToggle {
      opacity: 1;
      pointer-events: auto;
    }
  }
}

</style>

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

$white: #fff !default;
$off-white: #e4dbff !default;
$gray-1: #e1e1e1 !default;
$gray-2: #a7a7a7 !default;
$gray-3: #6a6a6a !default;
$gray-4: #687281 !default;
$black: #000 !default;

header {
  position: fixed;
  top: 0;
  padding-bottom: 3rem;
  transition: 0.3s padding;

  .page-header-content {
    overflow: hidden;
    transition: 0.5s max-height;
    max-height: 1000px;
  }

  nav {
    padding: 0.3rem;
    transition: 0.3s padding;
  }

  svg {
    height: 1rem;
  }

  &.scrolled {

    .tags {
      margin-top: 0;
    }

    .page-header-content {
      max-height: 0;
    }

    nav {
      padding: 0;
    }
  }
}

.card {
  background-color: rgba(0, 0, 0, 0.5);
}

.myPanelContainer {
  display: none;
}

.myTabBtn {
  background-color: $pink;

}

#tabPanel {

  .tab-pane {
    font-size: 0.9rem;
    color: $off-white;
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

@media (max-width: $breakpoint-lg) {
  header {
    .navbar-marketing.bg-transparent.navbar-dark {
      background-color: transparent !important;
      padding: 0 0.5rem;
    }
    &.scrolled {
      padding-bottom: 0.3rem !important;
    }
  }

  .container {
    padding: 0 0.5rem;
  }
}
</style>
