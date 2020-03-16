import home from "./home.js";

export default {
    template: `
    <section>
   
    <div class="wrapper">
    <!-- Sidebar  -->
    <nav id="sidebar">
        <div class="sidebar-header">
        <h3><router-link to="/admin"><i class="fas fa-chevron-left mt-0 ml-2"></i></router-link>&nbsp;&nbsp;Edit Account</h3>
        <hr class="mt-3 mr-3">
        </div>

        <form class="edit-account-form">
        <div class="form-group">
    <label for="account_fname">First Name</label>
    <input type="text" class="form-control" id="account_fname">
  </div>
  <div class="form-group">
    <label for="account_uname">Username</label>
    <input type="text" class="form-control" id="account_uname">
  </div>
  <div class="form-group">
    <label for="account_pword">Password</label>
    <input type="text" class="form-control" id="account_pword">
  </div>
  <div class="form-group">
    <label for="account_email">Email</label>
    <input type="text" class="form-control" id="account_email">
  </div>
    <button type="submit" class="save">Save Changes</button>
  </form>


        <a class="btn-info" id="sidebarCollapse">
            <i class="fa fa-chevron-left" id="side-toggle"></i>
        </a>
        <button name="submit" class="btn" style="margin-top: 20px;" v-on:click="logout()">Logout<i class="fas fa-sign-out-alt mt-0 ml-2"></i></button>

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