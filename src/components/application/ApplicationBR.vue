<template>
  <div>
    <button @click="handleClick">展示或隐藏</button>
  </div>
</template>

<script>
  export default {
    name: 'application-br',
    created () {
      this.br = this.$brController(
        {
          data: {
            isShow: false
          },
          init: {
            options: {

            }
          }
        },
        this.$store
      );
    },
    methods: {
      autoShow() {
        console.log('autoShow')
      },
      handleClick() {
      this.br.isShow = !this.br.isShow;
    },
    },

  }
</script>

<style lang="scss" scoped>

</style>