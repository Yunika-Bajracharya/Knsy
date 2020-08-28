<template>
    <div class="product-item">
        <p class="product-image"><img v-bind:src="product.image"/></p>

        <h3>{{product.name}}</h3>
        <div class="product-info">
        
        <p v-show="product.inStock">InStock</p>
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
<style scoped>

img {
    border: 1px solid #d8d8d8;
    width: 70%;
    margin: 40px;
    box-shadow: 0px .5px 1px #d8d8d8;
  }
.product-image {
    width: 80%;
  }

.activebutton {
    margin-top: 30px;
    border: none;
    background-color: #1E95EA;
    color: white;
    height: 40px;
    width: 100px;
    font-size: 14px;
} 
  
.disabledButton {
    background-color: #d8d8d8;
}



</style>