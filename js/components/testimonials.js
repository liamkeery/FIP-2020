// // //Define a new component called section2

import home from "./home.js"

export default {
    template: `  
    <section class="container-fluid" id="testimonials">
    <div class="row mx-auto text-center">
        
        <div class="col-lg-6 col-sm-12 mx-auto">
        <h1 class="mb-5">Hear What Others Have To Say</h1>

            <p class="bubble-1"><b><span>Testimonial #1</span></b> <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.</p>
            
            <p class="bubble-2"><b><span>Testimonial #2</span></b> <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.</p>
            <img src="./images/loli-guy.png" alt="splash" class="testimonials-svg col-lg-6">
            
        </div>
    </div>
    </div>
  </section>
    `,
    data: function() {
        return{}
    }
}
