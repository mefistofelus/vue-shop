<template>
  <div id="app">
    <router-view />
    <vMainWrapper></vMainWrapper>
  </div>
</template>

<script>
import vMainWrapper from "@/components/v-main-wrapper";

export default {
  name: "app",
  components: {
    vMainWrapper
  }
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  background-color: #2f2e2e;
}
</style>
