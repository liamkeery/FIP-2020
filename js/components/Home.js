//import section2 from "./section2.js"

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
        <div class="row justify-content-center align-self-center mx-auto" id="splash-bg">
            <div class="col-lg-12 text-center">
                <h1 class="display-3"><strong>Open Up To: </strong></h1>
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
    </div>

    <!-- Section2 -->
    <div class="container-fluid" id="section2">
    <div class="row mx-auto text-center">
        <div class="col-lg-12 col-sm-12">
            <h1 class="mb-4">So It's Your First Time?</h1>
            <p>That’s okay. We have you covered.</p>
            <h6>Learn more about starting the conversation with your partner about HIV/AIDS status.</h6>
            <button class="btn mx-auto mt-5">LEARN MORE</button>
        </div> 
    </div>
    </div>

    <!-- Section3 -->
    <div class="container-fluid" id="section3">
    <div class="row mx-auto text-center">
        <div class="col-lg-12 col-sm-12">
            <h1 class="mb-4">Did You Know?</h1>
            <p><span>14% </span>of Canadians are unaware of their HIV status.</p>
            <h6>We can change that.</h6>
            <button class="btn mx-auto mt-5">FIND A TEST CENTRE</button>
        </div>
    </div>
  </div>

  <!-- Section4 -->
  <div class="container-fluid" id="section4">
  <div class="row mx-auto text-center">
      <div class="col-lg-12 col-sm-12">
          <h1 class="mb-4">Let's Talk About Sex, Baby.</h1>
          <h4 class="mb-5">Before you get busy, get informed.</h4>
          <div class="row col-lg-6 mx-auto mt-4">
              <div class="col-lg-4 mx-auto mt-4">
                <img src="./images/Group 1.png" alt="Image 1" class="mb-3">
                <p><span><strong>53% </strong></span>of HIV transmission is through sex between men.</p>
              </div>
              <div class="col-lg-4 mx-auto mt-4">
                <img src="./images/Group 2.png" alt="Image 2" class="mb-3">
                <p><span><strong>33% </strong></span>of HIV transmission is through heterosexual sex.</p>
              </div>
            </div>
          <button class="btn mx-auto mt-5">SAFER SEX SUGGESTIONS</button>
      </div>
  </div>
</div>

<!-- About Us -->
<div class="container-fluid" id="aboutUs">
<div class="row mx-auto text-center">
    <div class="col-lg-12 col-sm-12">
        <h1 class="mb-4">Who We Are</h1>
        <h6 class="mb-5"><strong>Our campaign goal is described in the name itself: <span>Open Up.</span> </strong></h6>
        <div class="row col-lg-8 mx-auto mt-4">
            <p class="text-left">Open Up is a campaign in collaboration with Regional HIV/AIDS Connection dedicated to creating awareness and diminishing the stigma surrounding HIV and AIDS. We aim to promote discussions amongst today’s teens and educate on disclosure and safer sex practices. 
            </p>
            <p class="text-left">
              We want to encourage teens to open up to conversation about AIDS/HIV and not let the stigma that follows it stand in the way. We motivate people to open up their minds and realize the importance of discussion and acceptance in today’s society. Open Up pushes people to be open to accepting help and assistance, and points them to these resources.                
            </p>
          </div>
    </div>
</div>
</div>

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
    `
    // components: {
    //     section2: section2,
    //     adminlogin: adminlogin,
    //     nav
    // }
}