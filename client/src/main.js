import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import BasicComponent from './components/BasicComponent.vue'
import PostComponent from './components/PostComponent.vue'


//router 
Vue.use(VueRouter);

const routes = [
  { path: '/basic', component: BasicComponent },
  { path: '/', component: PostComponent }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// vue main settings

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')





