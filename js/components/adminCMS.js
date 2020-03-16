import home from "./home.js";


export default {
    template: `
    
    <!-- Sidebar Nav ADMIN ONLY-->
    <section>
   
    <div class="wrapper">
    <!-- Sidebar  -->
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>Admin Tools</h3>
        <hr class="mt-3 mr-3">
        </div>


        <a class="sidebar-link" data-toggle="collapse" href="#contentmgmt" aria-expanded="false" aria-controls="contentmgmt">CONTENT MANAGEMENT</a>
        <br>
        <div class="collapse multi-collapse" id="contentmgmt">
        <hr>
        <ul class="list-unstyled components ml-2">
        <li>
        <router-link to="/"><i class="fas fa-plus-circle mt-0 mr-3"></i>Add Section</router-link>
        </li>
        <li>
        <router-link to="/"><i class="mt-0 mr-3 fas fa-trash-alt"></i>Delete Section</router-link>
        </li>
        </ul>
        <hr>
        </div>
        <br>
        <a class="sidebar-link" data-toggle="collapse" href="#usersettings" aria-expanded="false" aria-controls="usersettings">USER SETTINGS</a>
        <div class="collapse multi-collapse" id="usersettings">
        <hr>
        <ul class="list-unstyled components ml-2">
        <li>
        <router-link to="/create"><i class="fas fa-plus-circle mt-0 mr-3"></i>Create User</router-link>
        </li>
        <li>
        <router-link to="/edit"><i class="fas fa-edit mt-0 mr-3"></i>Edit Account</router-link>
        </li>
        <li>
        <router-link to="/manage"><i class="fas fa-users-cog mt-0 mr-3"></i>Manage Users</router-link>    
        </li>
        </ul>
        <hr>
      
    
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
    components: {
        home: home
    },

    methods: {
        logout() {
            // push user back to login page
            this.$router.push({ path: "/adminlogin" });
            this.authenticated = false;
          }
    }
}