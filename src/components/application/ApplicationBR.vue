<template>
  <div>
    <button @click="handleClick">展示或隐藏</button>
  </div>
</template>

<script>
export default {
  name: "application-br",
  mounted() {
    this.br = this.$brController(
      {
        data: {
          isShow: false
        },
        init: {
          options: {}
        }
      },
      this.$store,
      this.$router
    );
  },
  methods: {
    autoShow() {
      console.log("autoShow");
    },
    handleClick() {
      this.br.isShow = !this.br.isShow;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>