<template>
  <div class="v-catalog-item product">
    <div class="product-inner">
      <img
        class="product__image"
        :src="product_data.image"
        :alt="product_data.title"
      />
      <p class="product__title">{{ product_data.title }}</p>
      <p class="product__category">{{ product_data.category }}</p>
      <p class="product__price">Price: {{ product_data.price + " грн" }}</p>
      <a href="#" class="product__link"></a>
    </div>
    <button class="btn" type="button" @click="sendData">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    sendData() {
      this.$emit("send-data", this.product_data.article);
    }
  }
};
</script>

<style lang="scss">
.v-catalog-item {
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  flex-basis: 25%;
  text-align: center;
  border-radius: $radius;
  box-shadow: 0 0 10px 0 rgba(#ffffff, 0.2);
  transition: all 0.35s ease-in-out;
}

.product {
  color: bisque;
  background-color: #262525;

  &:hover {
    box-shadow: 0 0 20px 0 rgba(#ec8b27, 0.5);
  }

  &-inner {
    position: relative;
  }

  &__image {
    max-width: 200px;
    max-height: 200px;
  }

  .btn {
    padding: 7px 16px;
    transition: all 0.35s;
    outline: none;
    cursor: pointer;
  }

  .product__link {
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
