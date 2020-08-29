<template>
    <div class="product-item">
        <p class="product-image"><img v-bind:src="product.image" /></p>

        <h3>{{product.name}}</h3>
        <div class="product-info">
        
        <p v-if="product.inStock">InStock</p>
        <p v-else>Out Of Stock</p>
        </div>

        <button  :disabled="!product.inStock"  v-bind:class="{'activebutton': product.inStock}" v-on:click="$emit('add-to-cart',product.id)">Add to Cart</button>
        
    </div>
</template>
<script>
export default {
    name:"ProductItem",
    props:["product"]
    
    }

</script>