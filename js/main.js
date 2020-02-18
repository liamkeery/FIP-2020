import usersComponent from "./components/usersComponent.js";

// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source
Vue.component('', {
  props: [''], //container where we can dump infos 
  template: `
    <div>  
        <h3 class="movie-title">{{ movie.videotitle }}</h3>
        <video :src="'video/' + movie.vidsource" controls autoplay></video>
        <div class="movie-details">
            <p>{{ movie.videodescription }}</p> 
        </div>
    </div>
  `
})

const router = new VueRouter({
  routes: [
    { path: "/", 
    name: "home", 
    component: ""}
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