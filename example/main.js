import Vue from 'vue';
import App from './App.vue';
import tip from '@/index.ts'
Vue.config.productionTip = false;
Vue.use(tip,{theme:'light'})
Vue.config.devtools=true
new Vue({
  render: h => h(App)
}).$mount('#app');
