import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

let panel = document.createElement('div');
panel.id = 'flowCatalog';
document.body.appendChild(panel);

new Vue({
  render: h => h(App),
}).$mount('#flowCatalog');
