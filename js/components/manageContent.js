export default {
  name: "manageContent",
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
          <router-link :to="{ name: 'admin' }" class="nav-link">User Management</router-link>
          <router-link :to="{ name: 'content' }" class="nav-link active">Content Management<span class="float-right"><i class="fas fa-arrow-right"></i></span></router-link>
        </nav>
            </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Content Management</h1>
          </div>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th class="text-center">ID</th>
                  <th width="200">Question</th>
                  <th width="600">Response</th>
                  <th class="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in faqList">
                  <td class="text-center align-middle">{{item.id}}</td>
                  <td class="align-middle">{{item.question}}</td>
                  <td class="align-middle">{{item.response}}</td>
                  <td class="text-center align-middle"><button v-on:click="deleteFaq(item.id)"><i class="fas fa-trash-alt delete-button"></i> Delete</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Add FAQ</h1>
          </div>
          <form @submit.prevent="addFaq" id="add-faq-form" class="col-lg-6">
            <div class="form-group">
              <label for="question">Question:</label>
              <input type="text" name="question" required class="form-control" placeholder="Question">
            </div>
            <div class="form-group">
              <label for="response">Response:</label>
              <textarea rows="3" name="response" required class="form-control" placeholder="Enter Response"></textarea>
            </div>
            <button class="submit-button" type="submit" name="submit">Add FAQ</button> 
          </form>
        
        </main>
      </div>
    </div>
    </section>
    `,

  created: function () {
    this.fetchAllFaq();
  },

  data() {
    return {
      faqList: []
    }
  },

  methods: {
    logout() {
      // push user back to login page
      this.$router.push({ path: "/adminlogin" });
      this.authenticated = false;
    },

    fetchAllFaq() {
      const url = './admin/index.php?faq=true';

      fetch(url)
        .then(res => res.json())
        .then(data => this.faqList = data)
        .catch((error) => console.error(error))
    },

    addFaq() {
      let url = "./admin/index.php?add_faq=true",
        userData = new FormData(document.querySelector("#add-faq-form"));
      fetch(url, {
        method: 'POST',
        body: userData
      })
        .then(res => res.json())
        .then(data => {
          if (data.result == true) {
            alert('New FAQ successfully added.');
          } else {
            alert(`There was an error creating this FAQ: ${data.result}`);
          }
        })
        .catch((err) => console.error(err)
        );
    },

    deleteFaq(faq) {
      let url = `./admin/index.php?faq_id=${faq}`;

      fetch(url)
          .then(res => res.json())
          .then(data => {
              if (data.result == true) {
                  alert('FAQ successfully deleted.');
              } else {
                  alert(`Failed to delete FAQ: ${data.result}`);
              }
          })
          .catch((error) => console.error(error))
    }
  }
}