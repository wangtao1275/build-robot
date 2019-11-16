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
import { registerController } from './components/controller/index';
// import BuildRobot from "./components/BuildRobot.vue";
import { robotsModule } from './store';

// production
import ApplicationBR from './components/application/ApplicationBR.vue';

const components = [ApplicationBR];

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
  // Vue.component(BuildRobot.name, BuildRobot);


  const BrController = registerController(Vue);
  Vue.prototype.$brController = BrController;
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

export default { install, ApplicationBR };

