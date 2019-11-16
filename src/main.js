import Vue from "vue";
import App from "./App.vue";

// import store from "./store";
import router from "./router";
import pinDirective from "./shared/pin-directive";
import currencyFilter from "./shared/current-filter";

Vue.config.productionTip = false;

Vue.directive("pin", pinDirective);
Vue.filter("currency", currencyFilter);


//----------------------------------------------------------
import Vuex from 'vuex';
import { robotsModule} from './store'
import { registerController } from './components/controller/index';

const store = new Vuex.Store({
    modules: {
      robots: robotsModule
    }
  });

let brController = registerController(Vue);
Vue.prototype.$brController = brController;



//----------------------------------------------------------

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
