// import BuildRobot from "./components/BuildRobot.vue";

// import _Vue from "vue";

// BuildRobot.install = Vue => {
//   if (!Vue) {
//     window.Vue = Vue = _Vue;
//   }
//   Vue.component(BuildRobot.name, BuildRobot);
// };
// export default BuildRobot;

//----------------------------------------------------------------

// controller
import { registerController } from './components/controller/index.js';
// import BuildRobot from "./components/BuildRobot.vue";
import { robotsModule } from './store/index.js';

// production
// import ApplicationBR from './components/application/index.js';

const install = function (Vue, opts = {}) {
  // Vue.component(BuildRobot.name, BuildRobot);


  const BRController = registerController(Vue);
  Vue.prototype.$brController = BRController;
  if (!opts.vuexInstance) {
    throw new Error('need vuex instance');
  } else {
    opts.vuexInstance.registerModule('robots', robotsModule, {
      preserveState: false
    });

  }

};

/* 支持使用标签的方式引入 */
if(typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default { install };

