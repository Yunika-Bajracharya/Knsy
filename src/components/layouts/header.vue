<template>
    <header class="header">
      
        <h1>Kensy Shop</h1>
        <router-link to="/">Our Products</router-link> |
        <router-link to="/about">Buy</router-link>
        
        
    </header>

    
</template>

<script>
export default {
    name: "Header"

    
}
</script>

<style scoped>
.header {
    background: linear-gradient(-90deg, #84CF6A, #16C0B0);
    height: 80px;
    margin-bottom: 5px;
  }
  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
  h1{
    text-align:left
  }

</style>
