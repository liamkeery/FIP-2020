// // //Define a new component called section2

import home from "./home.js"

export default {
    template: `  
    <section class="container-fluid" id="faq">
    <div class="row mx-auto text-center">
        <div class="col-lg-8 col-md-12 col-sm-12 mt-0 mx-auto">
            <h1 class="mb-4 mt-5">FAQ</h1>
            <h4 class="mb-4">You've got questions? We've got answers.</h4>
            <p class="mb-5">Click the light text to get a reply</p>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 mt-0 mx-auto faq-txt-bubble">
            <img src="./images/speech-bubble.svg" alt="splash" class="text-right">
        </div>
    </div>
    <div class="row mx-auto text-center">

        <div class="col-lg-3 col-sm-12 mt-0 mx-auto text-1">
                    
            <p class="faq-bubble-2" @click="expandAnswers3()"><b>My friend has unprotected
            sex a lot, what do I do?</b></p>

            <p class="faq-bubble-1" id="reveal3">Your friend may not have anyone to guide them on safe sex practices, or maybe they are unware of the dangers unprotected sex can bring. For their safety, you can open up a conversation, letting them know you care for their health and happiness and want to make sure they’re being safe. If you or your friend want to learn more, check out our page on Safe Sex Practices. </p>
        </div> 
        <div class="col-lg-3 col-sm-12 mt-0 mx-auto">
            
            <p class="faq-bubble-2  text-2" @click="expandAnswers2()" id="bubble-2"><b>How do you know if you
            have HIV/AIDS?</b></p>

            <p class="faq-bubble-1" id="reveal2">Sometimes, about 2 weeks after being infected you may experience flu-like symptoms. However, this is not always the case. It is very common to not experience any symptoms at all. The only way to be sure is if after having unprotected sex or sharing needles, you get tested by a doctor. </p>
        </div> 
        <div class="col-lg-3 col-sm-12 mt-5 mx-auto ">
            
            <p class="faq-bubble-2 text-3" @click="expandAnswers1()"><b>How soon do you get the
            test results back?</b></p>

            <p class="faq-bubble-1" id="reveal1">It depends what you are being tested for. A typical STI test can get you results back in 2-3 days, depending on the clinic. An HIV test can be a longer wait as it can take about 3-12 weeks after exposure to get an accurate reading. After this time frame, a rapid HIV test can be administered which takes about 20 minutes.  </p>
        </div>
    </div>
    </div>  
    
  </section>
    `,
    data: function() {
        return{
            faqList: []
        }
    },

    created: function() {
        this.getAllFaq();
    },

    methods: {
        expandAnswers1: function expandAnswers1(){
            var answer = document.getElementById("reveal1");
            if (answer.style.display === "none") {
                answer.style.display = "block";
            } else  {
                answer.style.display = "none";
            }
        },
        expandAnswers2: function expandAnswers2(){
            var answer = document.getElementById("reveal2");
            if (answer.style.display === "none") {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }
        },
        expandAnswers3: function expandAnswers3(){
            var answer = document.getElementById("reveal3");
            if (answer.style.display === "none") {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }
        },

        getAllFaq() {
            let url = `./admin/index.php?faq=true`;

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.faqList = data;
                })
        }
    }
}
