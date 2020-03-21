// // //Define a new component called section2

import home from "./home.js"

export default {
    template: `  
    <section class="container-fluid" id="hows">
    <div class="row mx-auto d-block text-center">

            <div class="col-lg-4 col-sm-12 mb-5" id="transmission">
                <div class="trans-header">
                    <h3>How is it transmitted? &#128105;&#127996; &#x27A1; &#128104;&#127998;</h3>
                </div>
                <p class="mt-3">HIV is not passed or transmitted by everyday (casual) contact like hugs, shaking hands or sharing washroom facilities. </p>
                <p class="mt-2 text-left">HIV is passed when body fluids carrying significant levels of the virus from someone who is HIV-positive get into the bloodstream of a person who is HIV-negative. For HIV to be passed, there has to be an opening, such as a cut, for the virus to pass from one person to the next. HIV can only be passed through five body fluids: </p>
                <ul>
                    <li>Blood</li>
                    <li>Breast Milk</li>
                    <li>Vaginal Fluids</li>
                    <li>Semen</li>
                    <li>Anal Fluids</li>
                </ul>
                <p><b>HIV can’t be passed through body fluids such as sweat, urine, tears or saliva.</b></p>
            </div>

            <div class="col-lg-4 col-sm-12" id="safe">
                <div class="trans-header">
                    <h3>How do you stay safe? &#129321; &#128166;</h3>
                </div>
                    <p class="mt-3">Protecting yourself from contracting HIV/AIDS requires you to be proactive. With any sexual partner, there are steps you can take to prevent and minimize risk of contracting any disease.</p>
                
                    <ul>
                        <li><b>Use a condom -</b> this can be external or internal (for vagina or anus)</li>
                        <li><b>Use a dental dam </b></li>
                        <li><b>Use lubricant - </b>make sure it doesn’t interfere with the material of the condom!</li>
                        <li><b>Get checked regularly</b>, especially if you have new partners</li>
                    </ul>
                    <p>Talking and feeling comfortable with your partner is also important. This helps you both make safer decisions about sex to keep all parties healthy.</p>
                    <br>
                    <br>
            </div>
    <a href="https://hivaidsconnection.ca/get-facts/about-hivaids-hep-c/sex" target="_blank"> <button class="btn btn-tips mx-auto mt-4 mb-2">Tips on How to</button></a>

    </div>
            
    
  </section>
    `,
    data: function() {
        return{}
    }
}
