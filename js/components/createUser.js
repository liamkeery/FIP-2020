import home from "./home.js";

export default {
    template: `
    <section>
   
    <div class="wrapper">
    <!-- Sidebar  -->
    <nav id="sidebar">
        <div class="sidebar-header">
        <h3><router-link to="/admin"><i class="fas fa-chevron-left mt-0 ml-2"></i></router-link>&nbsp;&nbsp;Create User</h3>
        <hr class="mt-3 mr-3">
        </div>
        <section id="add-user-form">
            <form @submit.prevent="addUser" class="createForm">
                <div class="form-group">
                    <label for="first_name">First Name:</label>
                    <input type="text" name="fname" required placeholder="First Name" value="" class="form-control">
                </div>

                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" name="username" required placeholder="Username" value="" class="form-control">
                </div>

                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" name="password" value="" required placeholder="Password" class="form-control">
                </div>

                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" name="email" value="" required placeholder="Your Email" class="form-control">
                </div>

                <button name="submit" style="margin-top: 0;">Create User</button>
            </form>
        </section>
        <a class="btn-info" id="sidebarCollapse">
            <i class="fa fa-chevron-left my-auto" id="side-toggle"></i>
        </a>
        <button name="submit" class="btn" v-on:click="logout()">Logout<i class="fas fa-sign-out-alt mt-0 ml-2"></i></button>
        
    </nav>

        

    </div>

    

    <!-- Main content -->
    <div id="content">
        <home></home>
    </div>

    </section>
    `,

    methods: {
        logout() {
            // push user back to login page
            this.$router.push({ path: "/adminlogin" });
            this.authenticated = false;
          },
          addUser() {
            let url = "./admin/user_fetch.php?add_user=true",
            userData = new FormData(document.querySelector(".createForm"));
            fetch(url, {
                method: 'POST',
                body: userData
            })
            .then(res => res.json())
            .then(data => {
                debugger;
                if (data.result == true) {
                    alert('added new user');
                } else {
                    alert(`could not add user: ${data.result}`);
                }
            })
            .catch((err) => console.error(err)
            );
        }
    },

    
    
    components: {
        home: home
    }
}