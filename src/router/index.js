import { createRouter, createWebHistory } from 'vue-router'
import ProductForm from "@/views/ProductFormView.vue";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: '/product-form/:productId?',
    name: 'product-form',
    component: ProductForm
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
