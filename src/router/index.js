import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ProfileView from '@/views/ProfileView.vue'
import CatalogView from '@/views/CatalogView.vue'
import ProductView from '@/views/ProductView.vue'
import CartView from '@/views/CartView.vue'
import AboutView from '@/views/AboutView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import TermsView from "@/views/TermsView.vue"
import PrivacyView from "@/views/PrivacyView.vue"
import CheckoutView from "@/views/CheckoutView.vue"
import ContactsView from "@/views/ContactsView.vue"



import { auth } from '@/auth'


const router = createRouter({
  history: createWebHistory('/Home-furniture/'),
  routes: [
    { path: '/', component: HomeView },
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
    { path: '/profile', component: ProfileView, meta: { requiresAuth: true }  },
    { path: '/catalog', component: CatalogView },
    { path: '/product/:id', component: ProductView, props: true },
    { path: '/cart', component: CartView, meta: { requiresAuth: true }  },
    { path: '/about', component: AboutView },
    { path: '/favorites', component: FavoritesView, meta: { requiresAuth: true }  },
    { path: '/terms', component: TermsView},
    { path: '/privacy', component: PrivacyView },
    { path: '/checkout', component: CheckoutView, meta: { requiresAuth: true }  },
    { path: '/contacts', component: ContactsView },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
