import Vue from 'vue';
import App from './App.vue';
import tip from '../';

Vue.config.productionTip = false;
Vue.use(tip, { theme: 'light', class: 'test tip' });
Vue.config.devtools = true;
new Vue({
  render: (h) => h(App),
}).$mount('#app');
