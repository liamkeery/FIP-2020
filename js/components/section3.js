// // //Define a new component called section3

import home from "./home.js"

export default {
    template: `  
    <section>
    <div class="container-fluid" id="section3">
    <div class="row mx-auto text-center">
        <div class="col-lg-12 col-sm-12">
            <h1 class="mb-4">Did You Know?</h1>
            <p><b>14% </b>of Canadians are unaware of their HIV status.</p>
            <h4>We can change that.</h4>

            <a href="https://hivaidsconnection.ca/get-facts/get-tested" target="_blank">   <button class="btn mx-auto mt-5 btn-sec3">FIND A TEST CENTRE</button></a>
            <a class=" arrow3" href="#section4">
                <p class="arrow-down"><i class="fas fa-chevron-down"></i></p>
            </a>
            <img src="./images/people.png" alt="14 People">

        </div>

    </div>
  </div>
  </section>
    `,
    data: function() {
        return{}
    }
}
