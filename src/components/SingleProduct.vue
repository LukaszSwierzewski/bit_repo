<template>
  <div class="product">
    <img class="image" :src="product.image" alt="''" />
    <div class="product--detail">
        <h3 class="product--detail__name">{{ product.name }}</h3>
        <div class="product--prices">
            <span class="regular" v-if="product.price.regular">{{ product.price.regular }} zł</span>
            <span class="current" v-if="product.price.current">{{ product.price.current }} zł</span>
        </div>
        <BaseButton title="Dodaj do koszyka" />
        <AddToWishList class="wishlist" />
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';
import AddToWishList from './AddToWishList.vue';
export default {
    name: "SingleProduct",
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    components: { BaseButton, AddToWishList }
}
</script>
<style scoped>
.product {
    border: 1px solid #eee;
    position :relative;
}
.image {
    max-width: 100%;
}
.product--detail__name {
    padding: 0.5rem;
}
.product--prices {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    justify-content: space-between;

}
.regular {
    text-decoration: line-through;
    color: #4f4f4f;;
}
.current {
    font-weight: bold;
    color: #ff0102;
}
.wishlist {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 2;
}
</style>
