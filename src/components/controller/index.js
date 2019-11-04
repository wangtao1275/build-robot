
import BuildRobot from "../BuildRobot.vue";

function registerController(Vue) {
  let ControllerConstructor = Vue.extend(BuildRobot);

  let instance;

  const BRController = function (options, store) {
    options = options || {};

    if(instance){
      instance.vm._data = options.data;
    } else {
      instance = new ControllerConstructor({
        data: options.data,
        store
      })
    }

    // 获取初始化后的实例
    instance.vm = instance.$mount();

    // 将实例放置到body中
    document.body.appendChild(instance.vm.$el);

    // 获取实例dom，修改层级关系
    instance.dom = instance.vm.$el;
    instance.dom.style.zIndex = 2000;

    // 返回实例
    return instance.vm;


  };

  return BRController;


}

export { registerController};