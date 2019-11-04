// import Vue from "vue";
// import Vuex from "vuex";

// import robotsModule from "./modules/robots.js";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   modules: {
//     robots: robotsModule
//   }
// });


//--------------------------------------------

import robotsModule from "./modules/robots.js";
const env = process.env.NODE_ENV;
if(env !== 'production'){
  const Vue = require('vue').default;
  const Vuex = require('vuex').default;
  Vue.use(Vuex);
}

export { robotsModule };


