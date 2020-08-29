<template>
  <div class="home">
    <!-- Feature -->
    <div class="jumbotron feature">
      <div class="container">
        <h1>
          <span class="glyphicon glyphicon-equalizer"></span> SwiftlyShop
        </h1>
        <p>Order Instantly, Pick-up Securely</p>
        <p>
          <a class="btn btn-primary" href="#">Order Now</a>
        </p>
      </div>
    </div>

    <!-- Heading -->
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1 class="text-center">Our Vision</h1>
          <p
            class="lead text-center"
          >To digitalize the local grocery stores and minimize the crowd in the
          shops through contactless shopping by enabling you to securely pick
          your stuffs up in front of the store itself.</p>
        </div>
      </div>
    </div>
    <br />
    <br />
    <!-- cities-->
    <div class="container-fluid">
      <div class="row promo">
        <a href="#">
          <div class="col-md-4 promo-item item-1">
            <h3>Kathmandu</h3>
          </div>
        </a>
        <a href="#">
          <div class="col-md-4 promo-item item-2">
            <h3>Pokhara</h3>
          </div>
        </a>

        <a href="#">
          <div class="col-md-4 promo-item item-3">
            <h3>Banepa</h3>
          </div>
        </a>
      </div>
    </div>
    <p class="lead text-center">
      Currently, we offer our services at Kathmandu, Pokhara and Banepa.
      <br />Our mission is to digitalize the stores all over Nepal so,
      we are working hard on expanding our reach to other cities as well.
    </p>
    <!-- /.container-fluid -->

    <!-- Featured Products -->
    <div class="container">
      <br />
      <br />
      <h1 class="text-center">Everyday Products - Readily Available!</h1>
      <br />
      <div class="row">
        <!-- Product 1 -->
        <div class="col-sm-6 col-md-3">
          <div class="thumbnail featured-product">
            <a href="#">
              <img src="@/assets/ghee.jpg" alt />
            </a>
            <div class="caption">
              <h3>DDC Ghee</h3>
              <p>
                1 Litre
                <br />The Dahal Shop
                <br />Bhanubhakta Marga
                <br />Dallu,Kathmandu
              </p>
              <p class="price">
                <s>NRP890.00</s>NRP750.00
              </p>

              <!-- Input Group -->
              <div class="input-group">
                <input type="number" class="form-control" value="1" />
                <span class="input-group-btn">
                  <button class="btn btn-primary" type="button">
                    <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                    Add to Cart
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Product 2 -->
        <div class="col-sm-6 col-md-3">
          <div class="thumbnail featured-product">
            <a href="#">
              <img src="@/assets/salt.jpg" alt />
            </a>
            <div class="caption">
              <h3>Aayo Nun (White Salt)</h3>
              <p>
                1 Kg
                <br />Kirana Pasal
                <br />Tindobaad
                <br />Banepa-5
              </p>
              <p class="price">NRP20.00</p>

              <!-- Input Group -->
              <div class="input-group">
                <input type="number" class="form-control" value="1" />
                <span class="input-group-btn">
                  <button class="btn btn-primary" type="button">
                    <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                    Add to Cart
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Product 3 -->
        <div class="col-sm-6 col-md-3">
          <div class="thumbnail featured-product">
            <a href="#">
              <img src="@/assets/aalu.jpg" alt />
            </a>
            <div class="caption">
              <h3>Potato (Aalu)</h3>
              <p>
                2.5 Kg
                <br />RasanaMart
                <br />Hajroad 9
                <br />Sanovawan, Pokhara
              </p>
              <p class="price">NRP195.00</p>

              <!-- Input Group -->
              <div class="input-group">
                <input type="number" class="form-control" value="1" />
                <span class="input-group-btn">
                  <button class="btn btn-primary" type="button">
                    <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                    Add to Cart
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Product 4 -->
        <div class="col-sm-6 col-md-3">
          <div class="thumbnail featured-product">
            <a href="#">
              <img src="@/assets/dishwash.png" alt />
            </a>
            <div class="caption">
              <h3>Alovera Dishwash (Round)</h3>
              <p>
                500 gm
                <br />Chandeswori Pasa
                <br />Reshmi Marg
                <br />Kailaighan, Banepa
              </p>
              <p class="price">NRP78.00</p>

              <!-- Input Group -->
              <div class="input-group">
                <input type="number" class="form-control" value="1" />
                <span class="input-group-btn">
                  <button class="btn btn-primary" type="button">
                    <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                    Add to Cart
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.container -->

    <div class="container text-center">
      <br />
      <br />
      <h1>Unparalleled Service Amid COVID-19</h1>
      <p class="lead">
        Shopping for groceries and vital products cannot be avoided even during pandemic
        like this one but there is constant fear of virus transmission upon visiting the
        grocery stores. Hence, we came up with this idea of contactless shopping.
        <br />Just order your items and get a unique code. Go to the nearby shop and
        safely get your item upon showing the code.
        <br />Thank you!
      </p>
      <img class="img-responsive img-circle center-block" src="@/assets/service.jpg" alt />
    </div>
    <!--/.container-->

    <!-- Footer -->
    <footer>
      <br />
      <br />
      <h1 class="text-center">Main Office</h1>
      <!-- Map -->
      <div class="footer-map">
        <a href="https://goo.gl/maps/KjyGZm7aYJ3skGJb6" target="_blank">
          <div id="map-tile">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.632546447301!2d85.28558756820631!3d27.72012247458342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18ece8135209%3A0xa82eb67cf4731fa8!2sSwayambhu%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1594049224629!5m2!1sen!2snp"
              width="100%"
              height="250"
              frameborder="0"
              style="border:0;"
              allowfullscreen
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </a>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-12 footer-info-item text-center">
            <p class="lead">Swoyambhu, Kathmandu</p>
            <h2>Customer Support</h2>
            <p class="lead">
              <span class="glyphicon glyphicon-phone-alt"></span> 014689989
              <br />support@swiftlyshop.com
            </p>
          </div>
        </div>
      </div>

      <!-- Footer Links -->
      <div class="footer-info">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 footer-info-item">
              <h3>Information</h3>
              <ul class="list-unstyled">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Customer Service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Orders &amp; Returns</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-4 footer-info-item">
              <h3>My Account</h3>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Sign In</a>
                </li>
                <li>
                  <a href="#">View Cart</a>
                </li>
                <li>
                  <a href="#">My Wishlist</a>
                </li>
                <li>
                  <a href="#">Track My Order</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-4 footer-info-item">
              <h3>
                <span class="glyphicon glyphicon-list-alt"></span> Newsletter
              </h3>
              <p>Sign up for exclusive offers.</p>
              <div class="input-group">
                <input type="email" class="form-control" placeholder="Enter your email address" />
                <span class="input-group-btn">
                  <button class="btn btn-primary" type="button">Subscribe!</button>
                </span>
              </div>
            </div>
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </div>

      <!-- Copyright etc -->
      <div class="small-print">
        <div class="container">
          <p>
            <a href="#">Terms &amp; Conditions</a> |
            <a href="#">Privacy Policy</a> |
            <a href="#">Contact</a>
          </p>
          <p>&copy; SwiftlyShop 2020</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
};
</script>
