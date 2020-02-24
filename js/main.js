import Home from "./components/Home.js";
//import section2 from "./components/section2.js";
import adminlogin from "./components/adminlogin.js";
import adminCMS from "./components/adminCMS.js";
import ErrorPage from "./components/ErrorPage.js";


// Vue.component('section3', {
//   template: `
//   <div class="container-fluid" id="section3">
//   <div class="row mx-auto text-center">
//       <div class="col-lg-12 col-sm-12">
//           <h1 class="mb-4">Did You Know?</h1>
//           <p><span>14% </span>of Canadians are unaware of their HIV status.</p>
//           <h6>We can change that.</h6>
//           <button class="btn mx-auto mt-5">FIND A TEST CENTRE</button>
//       </div>
//   </div>
// </div>
//   `
// })

// Vue.component('section4', {
//   template: `
//   <div class="container-fluid" id="section4">
//   <div class="row mx-auto text-center">
//       <div class="col-lg-12 col-sm-12">
//           <h1 class="mb-4">Let's Talk About Sex, Baby.</h1>
//           <h4 class="mb-5">Before you get busy, get informed.</h4>
//           <div class="row col-lg-6 mx-auto mt-4">
//               <div class="col-lg-4 mx-auto mt-4">
//                 <img src="./images/Group 1.png" alt="Image 1" class="mb-3">
//                 <p><span><strong>53% </strong></span>of HIV transmission is through sex between men.</p>
//               </div>
//               <div class="col-lg-4 mx-auto mt-4">
//                 <img src="./images/Group 2.png" alt="Image 2" class="mb-3">
//                 <p><span><strong>33% </strong></span>of HIV transmission is through heterosexual sex.</p>
//               </div>
//             </div>
//           <button class="btn mx-auto mt-5">SAFER SEX SUGGESTIONS</button>
//       </div>
//   </div>
// </div>
//   `
// })


// Vue.component('aboutus', {
//   template: `
//   <div class="container-fluid" id="aboutUs">
//   <div class="row mx-auto text-center">
//       <div class="col-lg-12 col-sm-12">
//           <h1 class="mb-4">Who We Are</h1>
//           <h6 class="mb-5"><strong>Our campaign goal is described in the name itself: <span>Open Up.</span> </strong></h6>
//           <div class="row col-lg-8 mx-auto mt-4">
//               <p class="text-left">Open Up is a campaign in collaboration with Regional HIV/AIDS Connection dedicated to creating awareness and diminishing the stigma surrounding HIV and AIDS. We aim to promote discussions amongst today’s teens and educate on disclosure and safer sex practices. 
//               </p>
//               <p class="text-left">
//                 We want to encourage teens to open up to conversation about AIDS/HIV and not let the stigma that follows it stand in the way. We motivate people to open up their minds and realize the importance of discussion and acceptance in today’s society. Open Up pushes people to be open to accepting help and assistance, and points them to these resources.                
//               </p>
//             </div>
//       </div>
//   </div>
// </div>
//   `
// })

// Vue.component('main-footer', {
//   template: `
//   <footer class="container-fluid">
//    <div class="row text-center mx-auto">
//      <div class="col">
//         <img src="./images/logo-final.png" alt="Logo" class="mt-5">
//         <h4 class="mt-2">#OPENUP</h4>
//         <p class="mt-4 mb-5">Created in partnership with <a href="https://hivaidsconnection.ca/">Regional HIV&#47;AIDS Connection.</a></p>
//         <p class="mt-5 mb-5"><router-link to="/adminlogin">Admin Login</router-link></p>
//      </div>
//     </div>
//  </footer>
//   `
// })

// Vue.component('sec-footer', {
//   template: `
  
//  <div class="container-fluid sec-footer">
//  <div class="row text-center mx-auto">
//    <div class="col">
//      <p>Copyright © 2020 Open Up. All Rights Reserved.</p>
//     </div>
//  </div>
// </div>

//   `
// })



const router = new VueRouter({
  routes: [
    { path: "/", 
    name: "home", 
    component: Home },

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


  methods: { //functionality that you can run in vue
    
  },

  router
 
}).$mount('#app');




//Login App
// var login = new Vue({
//   el: "#login", 

//   data: {
    
    
// },


//   methods: { //functionality that you can run in vue
    
//   },

//   router
 
// }).$mount('#login');
