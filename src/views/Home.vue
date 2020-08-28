<template>
  <div id="app">
   <Product v-bind:products="products" v-bind:cart="cart" v-on:add-to-cart="addToCart"/> 
  </div>
</template>

<script>
import Product from '../components/product';


export default {
  name: 'Home',
  components: {
    Product
    
  },
  
  data(){
    return{
      cart:0,
      cartItems:[],
      products:[
        {
          id:1,
          name:"Krishnabhog rice",
          image:'../assets/rice.jpg',
          inStock:true,
          price:"120 per kg"
          },
        {
          id:2,
          name:"Sugar",
          image:'../assets/sugar.jpg',
          inStock:false,
          price:"90 per kg"
        }

      ] 

    }
    
  },
  methods:{
    addToCart(id){
      this.cart +=1;
      this.cartItems.push(id)
    }
  }
}
</script>

<style>
#app {
  
  font-family: tahoma;
  color:#282828;
  margin: 0px;

}
</style>

