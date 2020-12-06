import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './app.vue'
import VueMeta from 'vue-meta'
import VueAnalytics from 'vue-analytics'


import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import './styles/styles.scss';

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueMeta)
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./components/views/page/home.vue'),
    },
    {
        path: '/oferta-pracy,:id-:city-:seoText',
        name: 'offer',
        component: () => import('./components/views/page/offer.vue'),
    }
];

const router = new VueRouter({
    routes // short for `routes: routes`
})

Vue.use(VueAnalytics, {
    id: 'UA-184653748-1',
    router
})


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
