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
            <li class="nav-item ml-3" id="li-home">
              <a class="nav-link active" href="/">HOME</a>
            </li>
            <li class="nav-item ml-3">
              <a class="nav-link" href="#section2">ABOUT</a>
            </li>
            <li class="nav-item ml-3">
                <a class="nav-link" href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>


    <!-- Splash -->
    <div class="container-fluid d-flex" id="splash">
        <div class="row d-flex align-self-center float-left" id="splash-bg">
            <div class="col-lg-12 col-sm-12 text-center  ">
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
        </div>
        <!-- <img src="./images/mouth.svg" alt="splash" class="splash-svg col-lg-6 col-sm-12"> -->
    </div>

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
        section2: section2,
        section3: section3,
        section4: section4,
        aboutUs: aboutUs,
        adminlogin: adminlogin
    }
}