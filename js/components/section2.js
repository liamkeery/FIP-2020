// // //Define a new component called section2

import home from "./home.js"

export default {
    template: `  
    <section class="container-fluid" id="section2">
    <div class="row mx-auto text-center">
    <img src="./images/peach.svg" alt="splash" class="sec2-svg col-lg-6 text-center">
        <div class="col-lg-6 col-sm-12 mt-0">
            <h1 class="mb-4">So It's Your First Time?</h1>
            <p>That’s okay. We have you covered.</p>
            <h6>Learn more about starting the conversation with your partner about HIV/AIDS status.</h6>
            <button class="btn mx-auto mt-5">LEARN MORE</button>
            <a class="mt-0 arrow2" href="#section3">
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
