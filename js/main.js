import home from "./components/home.js";
//import section2 from "./components/section2.js";
import adminlogin from "./components/adminlogin.js";
import adminCMS from "./components/adminCMS.js";
import ErrorPage from "./components/ErrorPage.js";
import manageUsers from "./components/manageUsers.js";

(() => {

  const router = new VueRouter({
  routes: [
    { path: "/", 
    name: "home", 
    component: home },

    { path: "/adminlogin", 
    name: "adminlogin", 
    component: adminlogin },

    { path: '/admin', 
    name: "admin", 
    component: adminCMS }, 

    { path: '/manage', 
    name: "manage", 
    component: manageUsers },

    { path: '*', 
    name: "error", 
    component: ErrorPage }//* catches anything that doesnt match MAKE THIS THE VERY LAST TO AVOID PROBLEMS
  ]
}); 

const vm = new Vue({
  el: "#app", 

  data: {
    authenticated: false,
    administrator: false,
      user: [],
  },

  methods: { //functionality that you can run in vue
    setAuthenticated(status, data) {
      this.authenticated = status;
      this.user = data;
  },

  logout() {
    // push user back to login page
    this.$router.push({ path: "/adminlogin" });
    this.authenticated = false;
  }
},

  router: router
}).$mount('#app');

// router.beforeEach((to, from, next) => {
//   if (vm.authenticated == false) {
//     next("/adminlogin");
//   } else {
//     next();
//   }
// });
})();