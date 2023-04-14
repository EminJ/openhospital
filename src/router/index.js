import axios from "axios";
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Politika/:id?',
      component: () => import('../views/Politika.vue')
    },
    {
      path: '/iletisim',
      component: () => import('../views/Iletisim.vue')
    },
    {
      path: '/giris',
      beforeEnter: isOut,
      component: () => import('../views/Login.vue')
    },
    {
      path: '/kayit',
      beforeEnter: isOut,
      component: () => import('../views/Register.vue')
    },
    {
      path: '/hesap',
      beforeEnter: isLog,
      component: () => import('../views/Accounts.vue')
    },
    {
      path: '/Admin',
      component: () => import('../views/Admin/Index.vue')
    },
    {
      path: '/Admin/Login',
      component: () => import('../views/Admin/Login.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)_accounts\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if(cookieValue){
    const options = {
      method: 'POST',
      url: 'https://localhost:7129/users/token',
      headers: {'Content-Type': 'application/json'},
      data: {id: cookieValue}
    };
    
    axios.request(options).then(function (response) {
      if(response.data!=true){
        document.cookie = "_accounts=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        location.href = "/";
      }
      next()
    }).catch(function (error) {
      console.error(error);
    });
    
  }
  else next()
})

export function isOut(to, from, next) {
  const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)_accounts\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if(cookieValue) location.href = "/";
  else next()
}

export function isLog(to, from, next) {
  const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)_accounts\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if(!cookieValue) location.href = "/";
  else next()
}

export default router
