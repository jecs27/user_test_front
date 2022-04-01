import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'

import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCookies from 'vue-cookies';
import VueCryptojs from 'vue-cryptojs';

Vue.config.productionTip = false
Vue.use(VueAxios, axios);

Vue.use(VueCryptojs);
Vue.use(VueCookies);
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')