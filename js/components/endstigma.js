// // //Define a new component called section2

import home from "./home.js"

export default {
    template: `  
    <section class="container-fluid" id="endstigma">
    <div class="row mx-auto text-center">
    <img src="./images/cherry.svg" alt="Cherries" class="text-center">
        <div class="col-lg-6 col-sm-12 mt-0">
            <h1 class="mb-4">Let's End the Stigma</h1>
            <video controls poster="./images/placeholder.png" class="mb-5 mt-3">
                <source src="./images/sample.mp4" type="video/mp4">
                <source src="movie.ogg" type="video/ogg">
                Your browser does not support the video tag.
            </video>
        </div> 
    </div>
  </section>
    `,
    data: function() {
        return{}
    }
}
