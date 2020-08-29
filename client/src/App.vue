<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <!-- Logo and responsive toggle -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle"
                                data-toggle="collapse" data-target="#navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <span class="glyphicon glyphicon-fire"></span>
            LOGO
          </a>
        </div>
        <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="nav navbar-nav navbar-right">
            <li class="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"
              role="button" aria-haspopup="true" aria-expanded="false">
              Cities
              <span class="caret"></span></a>
              <ul class="dropdown-menu" aria-labelledby="about-us">
                <li><a href="#">Kathmandu</a></li>
                <li><a href="#">Pokhara</a></li>
                <li><a href="#">Banepa</a></li>
              </ul>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#"><span class="glyphicon glyphicon-shopping-cart"></span> My Cart</a>
            </li>
          </ul>
          <!-- Search -->
          <form class="navbar-form navbar-right" role="search">
            <div class="form-group">
              <input type="text" class="form-control">
            </div>
            <button type="submit" class="btn btn-default">Search products here</button>
          </form>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container -->
    </nav>
    <router-view/>
  </div>
</template>

<style>
.item-1 {
background: url('~@/assets/1.jpg');
}
.item-2 {
background: url('~@/assets/2.jpg');
}
.item-3 {
background: url('~@/assets/3.jpg');
}
.item-1,
.item-2,
.item-3 {
background-size: cover;
background-position: 50% 50%;
}
.feature {
background: url('~@/assets/main.jpg');
background-position: top right;
background-size: cover;
background-color: #dd845a;
color: white;
text-shadow: 1px 1px 8px black;
}
.feature .btn {
text-shadow: none;
}
</style>
