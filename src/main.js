import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/fonts/iconfont.css';

import axios from 'axios';
axios.defaults.baseURL = 'https://www.escook.cn';
Vue.prototype.$axios = axios;

Vue.directive('focus', {
  inserted(el) {
    el.focus();
  },
});
Vue.directive('isShow', {
  inserted(el, binding) {
    if (binding.value == 0) {
      el.style.display = 'none';
    } else {
      el.style.display = ''
    }
  },
  update(el, binding) {
    if (binding.value == 0) {
      el.style.display = 'none';
    } else {
      el.style.display = ''
    }
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
