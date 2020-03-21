// // //Define a new component called section2

import home from "./home.js"

export default {
    template: `  
    <section class="container-fluid" id="submit_form">
    <div class="row mx-auto text-center">
        <div class="submit_header">
            <h1 class="mb-4">Got any questions for us? Ask away.</h1>
            <img src="./images/cupcake.svg" alt="splash" class="text-center">
        </div>
        <div class="col-lg-12 col-sm-12 mt-0">
            <form action="">
                <div class="form-group text-left">
                    <label for="name">If you prefer to be anonymous, that's okay too!</label>
                    <input type="name" class="form-control" placeholder="Name" id="name">
                </div>
                <div class="form-group text-left">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" placeholder="Enter email" id="email">
                </div>
                <div class="form-group text-left">
                    <label for="">Questions or Comments:</label>
                    <textarea class="form-control rounded-0" id="" rows="10" placeholder="Ask away..."></textarea>
                </div>
            </form>

            <a href="#timeline"><button class="btn mx-auto mt-3 mb-4">SUBMIT</button></a>
        </div> 
    </div>
    
    
  </section>
    `,
    data: function() {
        return{}
    }
}
