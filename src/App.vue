<template>
  <div id="app">
    <div class="container">
      <div>
      <ProductGroup v-for="(product, key) in products" :products="product[1]" :group-title="product[0]" :key="key" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductGroup from '@/components/ProductGroup.vue'
import ProductsService from '@/api/ProductsService.js'
export default {
  name: 'App',
  components: {
    ProductGroup
  },
  data () {
    return {
      products: null
    }
  },
  methods: {
    async getProduct() {
      const products = await ProductsService.getProducts()
      this.products = Object.entries(products)
    }
  },
  async created () {
    await this.getProduct()
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 1200px;
  margin: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
</style>
