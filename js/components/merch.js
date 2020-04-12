// // //Define a new component called section2


export default {
    template: `  
    <section class="container-fluid" id="merch">
    <h1 class="mb-5">Merchandise</h1>
    <div class="row mx-auto text-center">
    
        <div class="col-lg-6 col-sm-12 mt-0 d-inline-block">
        <h4 class="text-left">Phone Cases</h4>
            <img src="./images/tounge.png" alt="Phone Cases" class="merch1">
            <img src="./images/peach.png" alt="Phone Cases" class=" merch2">
            <img src="./images/lips.png" alt="Phone Cases" class="merch3">
            <img src="./images/lick.png" alt="Phone Cases" class="merch4">
            <img src="./images/emojis.png" alt="Phone Cases" class=" merch5">
            <img src="./images/eggplant.png" alt="Phone Cases" class=" merch6">
            <img src="./images/cherries.png" alt="Phone Cases" class="merch7">
            <br>
        </div>
        <div class="col-lg-6 col-sm-12 mt-0 banana">
            <img src="./images/banana.svg" alt="splash">
        </div>

    </div>

    <div class="row mx-auto text-center">
        <div class="col-lg-12 col-sm-12 mt-0 d-inline-block">
            <h4 class="text-left mt-5">Clothes</h4>
            <img src="./images/Longsleeve.png" alt="Clothing" class="clothing">
            <img src="./images/FoldedT-Shirt.png" alt="Clothing" class="clothing">
            <img src="./images/t-shirts.png" alt="Clothing" class="clothing">
            <img src="./images/Sweats.png" alt="Clothing" class="clothing">
        <br>
        </div>
    </div>

    <div class="row mx-auto text-center">
        <div class="col-lg-12 col-sm-12 mt-0 d-inline-block">
            <h4 class="text-left mt-5">Accessories</h4>
            <img src="./images/CanvasTote.png" alt="Clothing" class="accessory">
            <img src="./images/pins.png" alt="Clothing" class="accessory">
        <br>
        <a href="#"><button class="btn text-center mx-auto mt-3 mb-5 clearfix">BUY NOW</button></a>

        </div> 
       
        
    </div>
    
  </section>
    `,
    data: function() {
        return{}
    }
}
