<template>
<div class="product">
    <div v-bind:key="product.id" v-for="product in products">
        <Productitem v-bind:product="product"  v-on:add-to-cart="$emit('add-to-cart',product.id)"/>
        
    </div>
    <p class="cart">Cart:{{cart}}</p>
    
</div>
</template>

<script>
import Productitem from './Productitem';

export default {
    name: "Product",
    props: ["products","cart"],
    components:{
        Productitem
    }
    
}
</script>
<style scoped>

.cart {
    margin-right: 25px;
    float: right;
    border: 1px solid #d8d8d8;
    padding: 5px 20px;
  }

</style>