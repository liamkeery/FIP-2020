// // //Define a new component called section2

import home from "./home.js"

export default {
    template: `  
    <section class="container-fluid" id="section2">
    <div class="row mx-auto text-center">
    <img src="./images/peach.svg" alt="splash" class="sec2-svg col-lg-6 text-center">
        <div class="col-lg-6 col-sm-12 mt-0">
            <h1>So It's Your First Time?</h1>
            <h4 class="mb-4">It's okay, let us be the guide. </h4>
            <p class="mt-5 text-left">With the stigma that currently surrounds HIV/AIDS, it’s very common for people not to know much if anything about it. Here’s some general education to get you started.</p>
            <a href="#timeline"><button class="btn mx-auto mt-3 mb-4">LEARN MORE</button></a>
            <a class=" arrow2" href="#section3">
                <p class="arrow-down"><i class="fas fa-chevron-down"></i></p>
            </a>
        </div> 
    </div>
    
    
  </section>
    `,
    data: function() {
        return{}
    }
}
