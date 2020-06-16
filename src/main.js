import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
