// // //Define a new component called section2

import home from "./home.js"

export default {
    template: `  
    <section class="container-fluid" id="merch">
    <div class="row mx-auto text-center">
        <div class="col-lg-6 col-sm-12 mt-0">
            <h1 class="mb-5">Merch</h1>
        </div> 
        <img src="./images/merch.png" alt="splash" class="col-lg-6 col-md-8 col-sm-12 merch">
  
    </div>
    
    
  </section>
    `,
    data: function() {
        return{}
    }
}
