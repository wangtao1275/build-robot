<template>
  <div id="app">
    <button @click="show = !show" class="show-hide-btn">显示或者隐藏</button>
    <div v-if="show" class="show-hide-robot">
      <build-robot></build-robot>
    </div>
  </div>
</template>

<script>
import BuildRobot from "./components/BuildRobot";
export default {
  name: "app",
  components: {
    BuildRobot
  },
  data() {
    return {
      show: true
    };
  }
};
</script>

<style lang="scss" scoped>
#app {
    display: flex;
    flex-direction: column;
    align-items: center;

    .show-hide-btn {
        margin-top: 50px;
        margin-bottom: 50px;
    }

  .show-hide-robot {
    
  }
}
</style>
