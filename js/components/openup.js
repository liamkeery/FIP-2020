// // //Define a new component called section2

import home from "./home.js"

export default {
    template: `  
    <section class="container-fluid" id="openup">
    <div class="row mx-auto text-center">
        <div class="col-lg-6 col-sm-12 mt-0">
            <h1 class="mb-4">#OPENUP</h1>
            <h4>Now is the time to get talking.</h4>
            <p>The stigma surrounding HIV/AIDS is capable of changing, but not without your help. It is important to start conversation, but we know it can be hard, so we’re here to help.</p>
            
            <a href="#openup_slideshow"> <button class="btn mx-auto mt-3">LEARN MORE</button></a>
            <a class="mt-0 arrow-1" href="#openup_slideshow">
            <p class="arrow-down"><i class="arrow down " width="50"></i></p>
            </a>
        </div> 
        <div class="col-lg-6 col-lg-offset-6">
            <img src="./images/loli-guy.png" alt="splash" class="sec2-svg text-center">
        </div>
    </div>
    
    
  </section>
    `,
    data: function() {
        return{}
    }
}
