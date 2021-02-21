<template>
  <div class="v-catalog">
    <h1 class="v-catalog__title">Catalog</h1>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        :sendData="sendDataToCart"
      ></v-catalog-item>
    </div>
  </div>
</template>

<script>
import vCatalogItem from "@/components/v-catalog-item";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS"])
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
    sendDataToCart(data) {
      console.log(data);
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  }
};
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__title {
    text-align: center;
  }
}
</style>
