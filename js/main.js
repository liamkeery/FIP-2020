import home from "./components/home.js";
//import section2 from "./components/section2.js";
import adminlogin from "./components/adminlogin.js";
import adminCMS from "./components/adminCMS.js";
import ErrorPage from "./components/ErrorPage.js";




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

    { path: '*', 
    name: "error", 
    component: ErrorPage }//* catches anything that doesnt match MAKE THIS THE VERY LAST TO AVOID PROBLEMS

  ]
}) 




var vm = new Vue({
  el: "#app", 

  data: {
    
    
},

created: function() {
  console.log('yo is workin');
},


  methods: { //functionality that you can run in vue
    
  },

  router
 
}).$mount('#app');
