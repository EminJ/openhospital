import axios from "axios";
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue')
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
      beforeEnter: isLogAdminToken,
      component: () => import('../views/Admin/Index.vue')
    },
    {
      path: '/Admin/HastaneEkle',
      beforeEnter: [isLogAdminToken,isLogAdminLevelFour],
      component: () => import('../views/Admin/CreateHospital.vue')
    },
    {
      path: '/Admin/Login',
      beforeEnter:isLogAdmin, 
      component: () => import('../views/Admin/Login.vue')
    },
    {
      path: '/Admin/Randevu',
      beforeEnter:isLogAdminToken, 
      component: () => import('../views/Admin/Randevu.vue')
    },
    {
      path: '/Admin/Hastane',
      beforeEnter:[isLogAdminToken,isLogAdminLevelThree], 
      component: () => import('../views/Admin/HastaneAyar.vue')
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
export function isLogAdminToken(to, from, next) {
  const cookieValueAdmin = document.cookie.replace(/(?:(?:^|.*;\s*)_admin\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if(!cookieValueAdmin) location.href = "/admin/login";
  const options = {
    method: 'POST',
    url: 'https://localhost:7129/users/tokenadmin',
    headers: {'Content-Type': 'application/json'},
    data: {id: cookieValueAdmin}
  };
  
  axios.request(options).then(function (response) {
    if(response.data!=true){
      document.cookie = "_admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/admin;";
      location.href = "/admin/login";
    }
  }).catch(function (error) {
    console.error(error);
  });
  next()
}

export function isLogAdmin(to, from, next) {
  const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)_accounts\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if(!cookieValue) location.href = "/";
  const options = {
    method: 'POST',
    url: 'https://localhost:7129/users/hesabim',
    headers: {'Content-Type': 'application/json'},
    data: {id: cookieValue}
  };
  
  axios.request(options).then(function (response) {
    if(response.data.status>0) next()
    else location.href = "/";
  })
  const cookieValueAdmin = document.cookie.replace(/(?:(?:^|.*;\s*)_admin\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if(cookieValueAdmin) location.href = "/admin";
}

export function isLogAdminLevelFour(to, from, next) {
  const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)_accounts\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if(!cookieValue) location.href = "/";
  const options = {
    method: 'POST',
    url: 'https://localhost:7129/users/hesabim',
    headers: {'Content-Type': 'application/json'},
    data: {id: cookieValue}
  };
  
  axios.request(options).then(function (response) {
    if(response.data.status>=4) next()
    else location.href = "/admin";
  })
}

export function isLogAdminLevelThree(to, from, next) {
  const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)_accounts\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if(!cookieValue) location.href = "/";
  const options = {
    method: 'POST',
    url: 'https://localhost:7129/users/hesabim',
    headers: {'Content-Type': 'application/json'},
    data: {id: cookieValue}
  };
  
  axios.request(options).then(function (response) {
    if(response.data.status>=3 && response.data.hastaneId!=0) next()
    else location.href = "/admin";
  })
}

export default router
