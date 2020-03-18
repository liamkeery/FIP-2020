// // //Define a new component called section2

import home from "./home.js"

export default {
    template: `  
    <section class="container-fluid" id="openup">
    <div class="row mx-auto text-center">
    <img src="./images/loli-guy.png" alt="splash" class="sec2-svg col-lg-6 text-center">
        <div class="col-lg-6 col-sm-12 mt-0">
            <h1 class="mb-4">#OPENUP</h1>
            <h6>Now is the time to get talking.</h6>
            <p>The stigma surrounding HIV/AIDS is capable of changing, but not without your help. It is important to start conversation, but we know it can be hard, so we’re here to help. Here are some tips on how to open up to parents, friends and partners.</p>
            
            <button class="btn mx-auto mt-5">LEARN MORE</button>
            <a class="mt-0 arrow-1" href="#section3">
            <p class="arrow-down"><i class="arrow down " width="50"></i></p>
            </a>
        </div> 
    </div>
    
    
  </section>
    `,
    data: function() {
        return{}
    }
}
