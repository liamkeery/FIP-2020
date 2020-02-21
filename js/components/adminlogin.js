// import Home from "./Home.js"

export default {
    template: `
    <section>
    <div class="container-fluid nav-back">
        <div class="row">
            <div class="col">
               <router-link to="/"><p class="ml-3 mt-4"><i class="arrow left"></i> <span class="ml-4">HOME</span></p></router-link> 
            </div>
        </div>
    </div>

    <div class="container-fluid form-bg">
        <div class="row form-bg ">
            <div class="col-lg-3 mx-auto">
                <div class="form text-center">
                    <form action="index.php" method="POST" class="px-4 py-3 mx-auto shadow"> <!-- Post is ideal to use here so information won't be exposed-->
                        <img src="./images/logo-final.png" alt="Logo">
                        <h3 class="login-title">Admin Panel</h3>
                        <h6 class="mx-auto text-center mb-4 cred">Please enter your credentials</h6>
                        <div class="form-group">
                            <input type="text" name="username" value="" id="username" class="form-control mb-2" placeholder="USERNAME">
                            <br>
                            <input type="password" name="password" value="" id="password" class="form-control mb-3" placeholder="PASSWORD">
    
                            <button name="submit" class="btn-lg btn mt-4">Login</button>
                            <p class="mt-3"><a>Forgot Password</a></p>
                        </div>
                    </form>
                </div>
             </div>
        </div>
    </div>

    </section>
        
    `
}