import home from "./home.js"

export default {
    template: `  
    <section class="container-fluid" id="openup_slideshow">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
    <h3 class="mb-2">Here are some tips on how to open up to <strong>parents, friends and partners</strong></h3>
      
    <!-- Slide One -->
      <div class="carousel-item slide-1 active">
      <h3>Parents</h3>
        <div class="slide-img mb-2">
            <img src="./images/Family.svg" alt="Parent">
        </div>
          <p>Our parents are older than us. They lived through a time when AIDS was something new to the world that shocked everyone and instilled fear in a lot of individuals. However, a lot has changed since AIDS was first discovered and it is something people can live a normal life with. </p>
          <h6>Here are some questions to get you started:</h6>
          <ul>
            <li class="align-left">What do you know about AIDS?</li>
            <li>How did you react when AIDS was first discovered?</li>
            <li>Do you know how the process of treating AIDS has changed?</li>
          </ul>
        
      </div>
      <!-- Slide Two -->
      <div class="carousel-item slide-2">
      <h3>Friends</h3>
      <div class="slide-img mb-2">
            <img src="./images/Dancers.svg" alt="Parent">
        </div>
          <p>Our friends are our support system through anything. And a lot of the time, they have the same questions you do. Talking about AIDS/HIV with our friends gets the conversation going to create trust and learn more together. So if you or someone you know is living with AIDS/HIV, you have someone to turn to. </p>
          <h6>Here are some questions to get you started:</h6>
          <ul>
            <li>Have you heard about HIV/AIDS?</li>
            <li>What do you know about it?</li>
            <li>Do you know anyone living with HIV/AIDS?</li>
            <li>Do you think it’s important to be concerned about HIV/AIDS when sexually active?</li>

          </ul>
      </div>
      <!-- Slide Three -->
      <div class="carousel-item slide-3">
      <h3>Partners</h3>
      <div class="slide-img mb-2">
            <img src="./images/couple.svg" alt="Parent">
        </div>
          <p>Our partners are the ones who we are intimate with. So talking about HIV/AIDS in terms of sex is important to keep you both safe. Whatever the relationship, it is important to be able to have conversations. </p>
          <h6>Here are some questions to get you started:</h6>
          <ul>
            <li>Have you been tested recently?</li>
            <li>What do you know about it?</li>
            <li>Do you know anyone living with HIV/AIDS?</li>
            <li>Do you think it’s important to be concerned about HIV/AIDS when sexually active?</li>
          </ul>
      </div>
    </div>

    <!-- Carousel Controls -->
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
  </div>
</div>  
  </section>
    `,
    data: function() {
        return{}
    }
}
