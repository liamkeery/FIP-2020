import Home from "./components/Home.js";


const router = new VueRouter({
  routes: [
    { path: "/", 
    name: "home", 
    component: Home }
  ]
}) 


var vm = new Vue({
  el: "#app", 

  data: {

    
},


  methods: { //functionality that you can run in vue
   
  },

  router
 
}).$mount('#app');


