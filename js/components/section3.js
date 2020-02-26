// // //Define a new component called section3

import home from "./home.js"

export default {
    template: `  
    <section>
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
  </section>
    `,
    data: function() {
        return{}
    }
}