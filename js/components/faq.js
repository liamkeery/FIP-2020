// // //Define a new component called section2

import home from "./home.js"

export default {
    template: `  
    <section class="container-fluid" id="faq">
    <div class="row mx-auto text-center">
        <div class="col-lg-8 col-md-12 col-sm-12 mt-0 mx-auto">
            <h1 class="mb-4 mt-5">FAQ</h1>
            <h4 class="mb-4">You've got questions? We've got answers.</h4>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 mt-0 mx-auto faq-txt-bubble">
            <img src="./images/speech-bubble.svg" alt="splash" class="text-right">
        </div>
    </div>
    <div class="row mx-auto text-center">

        <div v-for="item in faqList" class="col-lg-3 col-sm-12 mt-0 mx-auto text-1">
                    
            <p class="faq-bubble-2"><b>{{item.question}}</b></p>

            <p class="faq-bubble-1">{{item.response}}</p>
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
        this.fetchAllFaq();
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

        fetchAllFaq() {
            const url = './admin/index.php?faq=true';
      
            fetch(url)
              .then(res => res.json())
              .then(data => this.faqList = data)
              .catch((error) => console.error(error))
          },
    }
}
