import openup from "./openup.js"
import openup_slideshow from "./openup_slideshow.js"
import section2 from "./section2.js"
import timeline from "./timeline.js"
import section3 from "./section3.js"
import section4 from "./section4.js"
import hows from "./hows.js"
import endstigma from "./endstigma.js"
import testimonials from "./testimonials.js"
import testimonialsPart2 from "./testimonialsPart2.js"
import aboutUs from "./aboutUs.js"
import faq from "./faq.js"
import submit_form from "./submit_form.js"
import merch from "./merch.js"
import adminlogin from "./adminlogin.js"

//import adminCMS from "./adminCMS.js"


export default {
    template: `
    <section>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-fixed-top" id="home">
        <!-- Logo -->
        <router-link class="navbar-brand" to="/">
            <img src="./images/logo.svg" alt="Logo" width="50">
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
              <a class="nav-link" href="#openup">#OPENUP</a>
            </li>

            <!-- Dropdown -->
            <li class="nav-item dropdown ml-3 mr-3">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Resources
              </a>
           

              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item"  href="#section2">About AIDS/HIV</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#section3">Find a Resource Centre</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#section4">Safer Sex Practices</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#endstigma">End The Stigma</a>
              </div>
            </li>

            <li class="nav-item ml-3 mr-3">
            <a class="nav-link" href="#aboutUs">Who we are</a>
          </li>
            <li class="nav-item ml-3 mr-3">
                <a class="nav-link" href="#faq">FAQ</a>
            </li>
            <li class="nav-item ml-3 mr-3">
                <a class="nav-link" href="#merch">Merch</a>
            </li>
            <li class="nav-item ml-3 mr-3">
            <a class="nav-link" href="#footer">Contact</a>
        </li>
          </ul>
        </div>
      </nav>


    <!-- Splash -->
    <div class="container-fluid d-flex" id="splash">
        <div class="row mx-auto d-flex" id="splash-bg">
            <div class="col-lg-12 col-sm-12 text-center mx-auto ipad">
              <div class="col-lg-12 text-center">
              <h1 class="display-3"><strong>Open Up To: </strong></h1>
              </div>
                <div class="splash-txt">
                    <span class="display-4" id="demo"></span>
                    <span class="type-cursor display-4">|</span>
                </div>
                <a href="#openup"> <button class="btn mx-auto mt-5">#OPENUP</button></a>
                <a class="nav-link" href="#openup">
                      <p class="arrow-down"><i class="arrow down" width="50"></i></p>
                  </a>
            </div>
            <img src="./images/mouth.svg" alt="splash" class="splash-svg col-lg-offset-6">
        </div>
         
    </div>

    <!-- OpenUp Section -->
    <openup></openup>

    <!-- OpenUp Slideshow -->
    <openup_slideshow></openup_slideshow>

    <!-- Section2 -->
    <section2></section2>

    <!-- Timeline -->
    <timeline></timeline>

    <!-- Section3 -->
    <section3></section3>

    <!-- Section4 -->
    <section4></section4>
    
    <!-- How Section: Continuation of Sec 4 -->
    <hows></hows>

    <!-- End the Stigma -->
    <endstigma></endstigma>

    <!-- Testimonials -->
    <testimonials></testimonials>

    <!-- Testimonials Part 2-->
    <testimonialsPart2></testimonialsPart2>

    <!-- FAQ -->
    <faq></faq>


    <!-- Submission Form -->
    <submit_form></submit_form>

    <!-- About Us -->
    <aboutUs></aboutUs>


    <!-- Merch -->
    <merch></merch>

<!-- Main Footer -->
<footer class="footer" id="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <img src="./images/logo.png" alt="Logo" class="mt-5">
                <p class="mt-5 mb-5"><router-link to="/adminlogin">Admin Login</router-link></p>
                <h5 class="text-md-left">Contact Us</h5>
                <hr>
                    <form>
                        <fieldset class="form-group">
                            <input type="email" class="form-control" id="footer_email" placeholder="Email">
                        </fieldset>
                        <fieldset class="form-group">
                            <textarea class="form-control" id="footer_msg" placeholder="Message"></textarea>
                        </fieldset>
                        <fieldset class="form-group text-xs-right">
                            <button type="button" class="btn btn-secondary-outline btn-lg">SUBMIT</button>
                        </fieldset>
                    </form>
            </div>
            <div class="col-md-4 kiss-img">
                <img src="./images/Kissss.svg" alt="Logo" class="mt-3">
            </div>
            <div class="col-md-4 nav-col footer-nav">
                <ul class="list-unstyled">
                    <li class="text-md-right"><a href="/">HOME</a></li>
                    <li class="text-md-right"><a href="#openup">#OPENUP</a></li>
                   <li class="text-md-right"><a href="#section2">ABOUT HIV/AIDS</a></li>
                   <li class="text-md-right"><a href="#section3">FIND A RESOURCE CENTRE</a></li>
                   <li class="text-md-right"><a href="#section4">SAFER SEX PRACTICES</a></li>
                   <li class="text-md-right"><a href="#endstigma">END THE STIGMA</a></li>
                   <li class="text-md-right"><a href="#aboutUs">WHO WE ARE</a></li>
                   <li class="text-md-right"><a href="#faq">FAQ</a></li>
                   <li class="text-md-right"><a href="#merch">MERCH</a></li>
                   <li class="text-md-right"><a href="#footer">CONTACT</a></li>
               
                        <li class="text-md-right"><a href="" class="pl-0"><i class="fab fa-facebook-square"></i></a><a href="" class="pl-3"><i class="fab fa-instagram"></i></a></li>
                  
              
               </ul>
               <p class="text-md-right">Created in partnership with <b><a href="https://hivaidsconnection.ca/">Regional HIV&#47;AIDS Connection.</a></b></p>
            </div>
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
        openup_slideshow: openup_slideshow,
        section2: section2,
        timeline:timeline,
        section3: section3,
        section4: section4,
        hows: hows,
        endstigma: endstigma,
        testimonials: testimonials,
        testimonialsPart2:testimonialsPart2,
        aboutUs: aboutUs,
        faq: faq,
        submit_form: submit_form,
        merch: merch,
        adminlogin: adminlogin
    }
}