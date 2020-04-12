import home from "./home.js"

export default {
    template: `  
    <section>
    <div class="container-fluid" id="timeline">
    <div class="row mx-auto text-center">
    <div class="container py-5">


    <div class="row text-center text-white mb-5">
            <div class="col-lg-7 mx-auto">
            <h1>Here’s some general education to get you started:</h1>
                
            <!-- Timeline -->
            <ul class="timeline">
            
                <!-- FIRST ITEM -->
                    <li class="timeline-item bg-item-blue rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow-blue"></div>
                        <img src="./images/guys.svg" class="mb-3 mr-3">
                        <h2 class="h5 mb-0 mt-2 float-left">1981</h2>
                        <p class="text-small mt-4 font-weight-light">The first cases of AIDS were reported. Initially this was thought to be a disease to only affect gay men.
                        <ul class="mt-3">
                            <li><b>HIV - </b>Human Immunodeficiency Virus or HIV is a virus that attacks the body’s immune system. It weakens the body’s defenses, making it harder to fight off illness and infection. </li>
                            <li><b>AIDS - </b>Acquired Immunodeficiency Syndrome or AIDS is late-stage HIV. Someone living with AIDS has a severely compromised immune system and serious health complications. </li>
                        </ul>
                        </p>
                    </li>

                <!-- SECOND ITEM -->
                    <li class="timeline-item bg-gray rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow-gray"></div>
                        <img src="./images/pill.svg" class="mb-3 mr-3">
                        <h2 class="h5 mb-0 mt-2 float-left">1992</h2>
                        <p class="text-small mt-2 font-weight-light">First successful combination of drugs to treat AIDS are approved by the FDA.</p>
                    </li>

                <!-- THIRD ITEM -->
                    <li class="timeline-item bg-item-blue rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow-blue"></div>
                        <img src="./images/pill.svg" class="mb-3">
                        <img src="./images/guys.svg" class="mb-3 mr-3">
                        <h2 class="h5 mb-0 mt-2">1998</h2>
                        <p class="text-small mt-2 font-weight-light">Post-Exposure Prohpylaxis (PEP) is introduced.</p>
                        <ul class="mt-3">
                            <li><b>PEP -  </b>Human Immunodeficiency Virus or HIV is a virus that attacks the body’s immune system. It weakens the body’s defenses, making it harder to fight off illness and infection. </li>
                        </ul>
                    </li>

                <!-- FOURTH ITEM -->
                    <li class="timeline-item bg-gray rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow-gray"></div>
                        <img src="./images/hospital.svg" class="mb-3 mr-3">
                        <h2 class="h5 mb-0 mt-2">2012</h2>
                        <p class="text-small mt-2 font-weight-light">Canada issues Pre-Exposure Prophylaxis (PrEP) and gains momentum. </p>
                        <ul class="mt-3">
                            <li><b>PrEP - </b>This is a prevention strategy used by an HIV-negative person who might be at higher risk of HIV infection. PrEP is taken before exposure to HIV. It blocks the virus from establishing itself in the body if the person taking it is exposed to the virus. </li>
                        </ul>
                    </li>

                <!-- FIFTH ITEM -->
                    <li class="timeline-item bg-item-blue rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow-blue"></div>
                        <img src="./images/CanadianFlag.svg" class="mb-3">
                        <img src="./images/okay.svg" class="mb-3 mr-3">
                        <h2 class="h5 mb-0 mt-2">2016</h2>
                        <p class="text-small mt-2 font-weight-light">Canada approves the use of PrEP.</p>
                    </li>

                <!-- SIXTH ITEM -->
                    <li class="timeline-item bg-gray rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow-gray"></div>
                        <img src="./images/hospital.svg" class="mb-3">
                        <img src="./images/guys.svg" class="mb-3 mr-3">
                        <h2 class="h5 mb-0 mt-2">2017</h2>
                        <p class="text-small mt-2 font-weight-light"><b>UNDETECTABLE = UNTRANSMITTABLE (U=U)</b> support from Canadian government which decriminalizes the non-disclosure of someone living with HIV as long as his or her viral load was suppressed for at least 6 months before incident.</p>
                        <p>An HIV-positive person taking treatment daily can reduce the virus in their body to such low amounts that it can’t be passed on sexually (untransmittable). This is called being undetectable. </p>
                    </li>
                 
                 


   
            </ul><!-- End -->

            </div>
        </div>
    </div>
    </div>
  </div>
  </section>
    `,
    data: function() {
        return{}
    }
}


