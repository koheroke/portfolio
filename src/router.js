import { createRouter, createWebHistory } from 'vue-router'
import Load from './components/subpages/load.vue';
export const router = createRouter({

  history: createWebHistory(),
  routes: [
    {
      path: '/load',               
      component: Load
    },
  ]
})
