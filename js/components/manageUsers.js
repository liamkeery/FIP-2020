import home from "./home.js";
import userComponent from "./userComponent.js";


export default {
    template: `
    
    <!-- Sidebar Nav ADMIN ONLY-->
    <section>
   
    <div class="wrapper">
    <!-- Sidebar  -->
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>Manage Users</h3>
        <hr class="mt-3 mr-3">
        <i class="fas fa-chevron-left mt-0 ml-2">&nbsp;&nbsp;</i><router-link to="/admin">Main Menu</router-link>
        </div>
        <div class="users">
        <table class="table table-dark table-striped table-bordered">
  <thead>
    <tr>
      <th scope="col">Username</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <user v-for="(user,index) in userList" :liveuser="user" :key="index"/>
  </tbody>
</table>
            
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

    created: function () {
		this.fetchAllUsers();
	},

    data() {
        return {
            userList: []
        }
    },

    methods: {
        logout() {
            // push user back to login page
            this.$router.push({ path: "/adminlogin" });
            this.authenticated = false;
          },

          fetchAllUsers() {
            const url = './admin/admin_getusers.php?allusers=true';

			fetch(url)
			.then(res => res.json())
			.then(data => this.userList = data)
			.catch((error) => console.error(error))
          }
    },
    
    components: {
        home: home,
        user: userComponent
    }
}