import Vue from 'vue';
import App from './App.vue';
import tip from '@/index.js'
Vue.config.productionTip = false;
Vue.use(tip)

new Vue({
  render: h => h(App)
}).$mount('#app');
