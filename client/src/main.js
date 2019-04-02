import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import BasicComponent from './components/BasicComponent.vue'
import PostComponent from './components/PostComponent.vue'
import TestComponent from './components/TestComponent.vue'


Vue.use(VueRouter);

// vue bindings for


const routes = [
  { path: '/basic', component: BasicComponent },
  { path: '/test', component: TestComponent },
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





