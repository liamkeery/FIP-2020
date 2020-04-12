// // //Define a new component called section2


export default {
    template: `  
    <section class="container-fluid" id="merch">
    <h1 class="mb-5">Merchandise</h1>
    <div class="row mx-auto text-center">
    
        <div class="col-lg-6 col-sm-12 mt-0 d-inline-block">
            <img src="./images/tounge.png" alt="splash" class="merch1">
            <img src="./images/peach.png" alt="splash" class=" merch2">
            <img src="./images/lips.png" alt="splash" class="merch3">
            <img src="./images/lick.png" alt="splash" class="merch4">
            <img src="./images/emojis.png" alt="splash" class=" merch5">
            <img src="./images/eggplant.png" alt="splash" class=" merch6">
            <img src="./images/cherries.png" alt="splash" class="merch7">
            <br>
        <a href="#"><button class="btn text-center mx-auto mt-3 mb-5 clearfix">BUY NOW</button></a>

        </div> 
       
        <div class="col-lg-6 col-sm-12 mt-0 banana">
            <img src="./images/banana.svg" alt="splash">
        </div>
        
      
  
    </div>
    
    
  </section>
    `,
    data: function() {
        return{}
    }
}
