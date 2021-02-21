<template>
  <div class="vue-main-wrapper">
    <h2>MAIN TITLE</h2>
    <vCatalog></vCatalog>
    <vCart></vCart>
  </div>
</template>

<script>
import vCatalog from "@/components/v-catalog";
import vCart from "@/components/v-cart";

export default {
  name: "v-main-wrapper",
  components: {
    vCatalog,
    vCart
  },
  data() {
    return {
      title: "Main wrapper"
    };
  }
};
</script>

<style lang="scss">
.vue-main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>
