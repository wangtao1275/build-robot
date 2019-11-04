<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script>
import getpartsMixin from "./get-parts-mixin";
export default {
  name: "PartInfo",
  mixins: [getpartsMixin],
  props: {
    partType: { type: String },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      }
    }
  },
  computed: {
    part() {
      debugger;
      const { partType, id } = this;
      return this.parts[partType].find(part => part.id === +id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
