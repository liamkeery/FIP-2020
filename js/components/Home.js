import openup from "./openup.js"
import section2 from "./section2.js"
import section3 from "./section3.js"
import section4 from "./section4.js"
import aboutUs from "./aboutUs.js"
import adminlogin from "./adminlogin.js"

//import adminCMS from "./adminCMS.js"


export default {
    template: `
    <section>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-fixed-top" id="home">
        <!-- Logo -->
        <router-link class="navbar-brand" to="/">
            <img src="./images/logo-final.png" alt="Logo" width="60">
        </router-link>
        <!-- Burger Toggle -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <!-- Nav Links -->
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item ml-3 mr-3" id="li-home">
              <a class="nav-link active" href="/">HOME</a>
            </li>
            <li class="nav-item ml-3 mr-3">
              <a class="nav-link active" href="#">#OPENUP</a>
            </li>

            <!-- Dropdown -->
            <li class="nav-item dropdown ml-3 mr-3">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Resources
              </a>
           

              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item"  href="#section2">So It's Your First Time?</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Did You Know?</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Lets Talk About Sex, Baby</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/">End The Stigma</a>
              </div>
            </li>

            <li class="nav-item ml-3 mr-3">
            <a class="nav-link" href="/">Who we are</a>
          </li>
            <li class="nav-item ml-3 mr-3">
                <a class="nav-link" href="#">FAQ</a>
            </li>
            <li class="nav-item ml-3 mr-3">
                <a class="nav-link" href="#">Merch</a>
            </li>
            <li class="nav-item ml-3 mr-3">
            <a class="nav-link" href="#">Contact</a>
        </li>
          </ul>
        </div>
      </nav>


    <!-- Splash -->
    <div class="container-fluid d-flex" id="splash">
        <div class="row mx-auto d-flex" id="splash-bg">
            <div class="col-lg-12 col-sm-12 text-center mx-auto">
              <div class="col-lg-12 text-center">
              <h1 class="display-3"><strong>Open Up To: </strong></h1>
              </div>
                <div class="splash-txt">
                    <span class="display-4" id="demo"></span>
                    <span class="type-cursor display-4">|</span>
                </div>
                <button class="btn mx-auto mt-5">#OPENUP</button>
                <a class="nav-link" href="#section2">
                      <p class="arrow-down"><i class="arrow down" width="50"></i></p>
                  </a>
            </div>
            <img src="./images/mouth.svg" alt="splash" class="splash-svg col-lg-offset-6">
        </div>
         
    </div>

    <!-- OpenUp Section -->
    <openup></openup>

    <!-- Section2 -->
    <section2></section2>

    <!-- Section3 -->
    <section3></section3>

    <!-- Section4 -->
    <section4></section4>
    
    <!-- About Us -->
    <aboutUs></aboutUs>



<!-- Main Footer -->
    <footer class="container-fluid">
    <div class="row text-center mx-auto">
      <div class="col">
         <img src="./images/logo-final.png" alt="Logo" class="mt-5">
         <h4 class="mt-2">#OPENUP</h4>
         <p class="mt-4 mb-5">Created in partnership with <a href="https://hivaidsconnection.ca/">Regional HIV&#47;AIDS Connection.</a></p>
         <p class="mt-5 mb-5"><router-link to="/adminlogin">Admin Login</router-link></p>
      </div>
     </div>
  </footer>

  <!-- Secondary Footer -->
  <div class="container-fluid sec-footer">
 <div class="row text-center mx-auto">
   <div class="col">
     <p>Copyright © 2020 Open Up. All Rights Reserved.</p>
    </div>
 </div>
</div>

    </section>
    `,

    data: function() {
      return {
      
      }
  },
    components: {
        openup: openup,
        section2: section2,
        section3: section3,
        section4: section4,
        aboutUs: aboutUs,
        adminlogin: adminlogin
    }
}