// // //Define a new component called section3

import home from "./home.js"

export default {
    template: `  
    <section>
    <div class="container-fluid" id="section4">
  <div class="row mx-auto text-center">
      <div class="col-lg-6 col-sm-12">
          <h1 class="mb-4">Let's Talk About Sex, Baby.</h1>
          <h4 class="mb-5">Before you get busy, get informed.</h4>
          <div class="row col-lg-6 mx-auto mt-4">
              <div class="col-lg-6 mx-auto mt-4 text-center">
                <img src="./images/men-circle.png" alt="Image 2" class="mb-3 sec4-img">
                <p><span><strong>53% </strong></span>of HIV transmission is through sex between men.</p>
              </div>
              <div class="col-lg-6 mx-auto text-center mt-4">
                <img src="./images/hetero.png" alt="Image 2" class=" mb-3 sec4-img">
                <p><span><strong>33% </strong></span>of HIV transmission is through heterosexual sex.</p>
              </div>
            </div>
            <a class=" arrow4" href="#section3">
              <p class="arrow-down"><i class="fas fa-chevron-down"></i></p>
            </a>
        </div>
        <img src="./images/watermelon-girl.png" alt="splash" class="sec4-svg col-lg-6">
  </div>
</div>
  </section>
    `,
    data: function() {
        return{}
    }
}
