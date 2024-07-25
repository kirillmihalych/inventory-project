import { createRouter, createWebHistory } from 'vue-router'
import InventoryView from '@/views/InventoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InventoryView,
    },
  ],
})

export default router
