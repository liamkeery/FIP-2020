import userComponent from "./userComponent.js";

export default {
  template: `
    <section id="cms">
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">OpenUp CMS</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <button name="submit" v-on:click="logout()" class="nav-link" href="#">Sign out</button>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
          <nav class="nav flex-column">
          <a class="nav-link active" href="#">User Management<span class="float-right"><i class="fas fa-arrow-right"></i></span></a>
          <a class="nav-link" href="#">Content Management</a>
        </nav>
            </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">User Management</h1>
          </div>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <user v-for="(user,index) in userList" :liveuser="user" :key="index"/>
              </tbody>
            </table>
          </div>
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Add User</h1>
          </div>
        <form @submit.prevent="addUser" id="add-user-form" class="col-lg-6">
            <div class="form-group">
                <label for="first_name">First Name:</label>
                <input class="form-control" type="text" id="first_name" name="first_name" required placeholder="First name">
            </div>

            <div class="form-group">
                <label for="last_name">Username:</label>
                <input class="form-control" type="text" name="username" required placeholder="Username">
            </div>

            <div class="form-group">
                <label for="password">Password:</label>
                <input class="form-control" type="password" name="password" required placeholder="Password">
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input class="form-control" type="text" id="email" name="email" required placeholder="Email">
            </div>
                <input class="submit-button" type="submit" name="submit">       
        </form>    
        </main>
      </div>
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
    },

    addUser() {
      let url = "./admin/index.php?add_user=true",
        userData = new FormData(document.querySelector("#add-user-form"));
      fetch(url, {
        method: 'POST',
        body: userData
      })
        .then(res => res.json())
        .then(data => {
          if (data.result == true) {
            alert('New user successfully added.');
          } else {
            alert(`There was an error creating this user: ${data.result}`);
          }
        })
        .catch((err) => console.error(err)
        );
    }
  },

  components: {
    user: userComponent
  }
}