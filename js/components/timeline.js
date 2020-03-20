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


                    <li class="timeline-item bg-gray rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow-gray"></div>
                        <img src="./images/pill.png" class="mb-3 mr-3">
                        <h2 class="h5 mb-0 mt-2 float-left">1992</h2>
                        <p class="text-small mt-2 font-weight-light">First successful combination of drugs to treat AIDS are approved by the FDA.</p>
                    </li>
                    <li class="timeline-item bg-item-blue rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow-blue"></div>
                        <img src="./images/pill.png" class="mb-3 mr-3">
                        <h2 class="h5 mb-0">1998</h2>
                        <p class="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                    </li>
                    <li class="timeline-item bg-gray rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow-gray"></div>
                        <h2 class="h5 mb-0">Title of section 4</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>10 October, 2019</span>
                        <p class="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                        <p class="text-small mt-2 font-weight-light">Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam ipsam necessitatibus incidunt, explicabo.</p>
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
