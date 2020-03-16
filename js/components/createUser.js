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
        
        <a class="btn-info" id="sidebarCollapse">
            <i class="fa fa-chevron-left" id="side-toggle"></i>
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
          }
    },
    
    components: {
        home: home
    }
}