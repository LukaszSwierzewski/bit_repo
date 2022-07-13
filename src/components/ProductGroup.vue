<template>
  <div class="product">
    <GroupProductName :title="groupTitle" />
    <template v-if="Array.isArray(products)">
    <div class="row">
      <SingleProduct class="flex-product" v-for="product in products" :product="product" :key="product.name" />
    </div>
    </template>
    <template v-else>
      <div class="row">
      <SingleProduct class="flex-product" :product="products" :key="products.name" />
      </div>
    </template>
  </div>
</template>

<script>
import GroupProductName from '@/components/GroupProductName.vue';
import SingleProduct from './SingleProduct.vue';
export default {
    name: "ProductsGroup",
    props: {
        products: {
            type: [Object, Array],
            required: true,
        },
        groupTitle: {
            type: String,
            required: true
        }
    },
    components: { GroupProductName, SingleProduct }
}
</script>

<style scoped>
.flex-product {
  flex: 1 24%;
  margin: 0.4%;
  display: flex;
  flex-direction: column;
  max-width: 24%;
}
@media (max-width: 991px) {
  .flex-product {
    flex: 1 48%;
    max-width: 48%;
  }
}
@media (max-width: 767px) {
  .flex-product {
    flex: 1 100%;
    max-width: 100%;
  }
}
</style>
