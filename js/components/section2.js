// // //Define a new component called section2

import home from "./home.js"

export default {
    template: `  
    <section class="container-fluid" id="section2">
    <div class="row mx-auto text-center">
            <div class="col-lg-6 col-sm-6">
                <h1 class="mb-4">So It's Your First Time?</h1>
                <p>That’s okay. We have you covered.</p>
                <h6>Learn more about starting the conversation with your partner about HIV/AIDS status.</h6>
                <button class="btn mx-auto mt-5">LEARN MORE</button>
            </div> 
            <div class="col-lg-6 col-sm-6">
            <img src="./images/peach.svg" class="bounceInRight emoji" style="margin-top: 30px;">
            </div> 
    </div>
  </section>
    `,
    data: function() {
        return{}
    }
}
