<template>
  <div id="app">
    <ApplicationBR></ApplicationBR>
  </div>
</template>

<script>
import ApplicationBR from "./components/application/ApplicationBR";
export default {
  name: "app",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ApplicationBR
  }
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
