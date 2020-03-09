// // //Define a new component called section3

import home from "./home.js"

export default {
    template: `  
    <section>
    <div class="container-fluid" id="section4">
  <div class="row mx-auto text-center">
  <img src="./images/drops.svg" alt="splash" class="sec4-svg col-lg-6">
      <div class="col-lg-6 col-sm-12">
          <h1 class="mb-4">Let's Talk About Sex, Baby.</h1>
          <h4 class="mb-5">Before you get busy, get informed.</h4>
          <div class="row col-lg-6 mx-auto mt-4">
              <div class="col-lg-6 mx-auto mt-4 text-center">
                <img src="./images/Group 1.png" alt="Image 1" class="mb-3">
                <p><span><strong>53% </strong></span>of HIV transmission is through sex between men.</p>
              </div>
              <div class="col-lg-6 mx-auto mt-4 text-center">
                <img src="./images/Group 2.png" alt="Image 2" class=" ml-3 mb-3">
                <p><span><strong>33% </strong></span>of HIV transmission is through heterosexual sex.</p>
              </div>
            </div>
          <button class="btn mx-auto mt-5">SAFER SEX SUGGESTIONS</button>
      </div>
  </div>
</div>
  </section>
    `,
    data: function() {
        return{}
    }
}
