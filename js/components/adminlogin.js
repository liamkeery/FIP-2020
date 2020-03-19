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
                    <form class="px-4 py-3 mx-auto shadow"> <!-- Post is ideal to use here so information won't be exposed-->
                        <img src="./images/logo-final.png" alt="Logo">
                        <h3 class="login-title">Admin Panel</h3>
                        <h6 class="mx-auto text-center mb-4 cred">Please enter your credentials</h6>
                        <div class="form-group">
                            <input v-model="input.username" type="text" name="username" value="" id="username" class="form-control mb-2" placeholder="USERNAME">
                            <br>
                            <input v-model="input.password" type="password" name="password" value="" id="password" class="form-control mb-3" placeholder="PASSWORD">
    
                            <button v-on:click.prevent="login()" name="submit" class="btn-lg btn-login mt-4">Login</button>
                        </div>
                    </form>
                </div>
             </div>
        </div>
    </div>

    </section>
        
    `,

    data() {
        return {
            input: {
                username: "",
                password: ""
            },

        }
    },

    methods: {
        login() {

            if (this.input.username != "" && this.input.password != "") {
                //debugger;
                // fetch the user from the DB
                // generate the form data
                let formData = new FormData();

                formData.append("username", this.input.username);
                formData.append("password", this.input.password);

                let url = `./admin/login_fetch.php`;

                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(data => {
                        if (typeof data != "object") { // means that we're not getting a user object back
                            console.warn(data);
                            // just for testing
                            alert("authentication failed, please try again");
                        } else {
                            this.$emit("authenticated", true, data);
                            this.$router.replace({ name: "admin" });
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                alert("A username and password must be present");
            }
        }
    }
}
