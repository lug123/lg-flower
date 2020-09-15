import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      needLogin: false
    }
  },
  {
    path: '/cates',
    name: 'cates',
    component: () => import('../views/Cates'),
    meta: {
      needLogin: false
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart'),
    meta: {
      needLogin: false
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/Mine'),
    meta: {
      needLogin: true
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/Detail'),
    meta: {
      needLogin: false
    }
  },
  {
    path: '/itemLists/:categoryId',
    name: 'itemLists',
    component: () => import('../views/ItemList'),
    meta: {
      needLogin: false
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/Order'),
    meta: {
      needLogin: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login'),
    meta: {
      needLogin: false
    }
  },
  {
    path: '/addressLists',
    name: 'addressLists',
    component: () => import('../views/AddressLists'),
    meta: {
      needLogin: true
    }
  },
  {
    path: '/addContact',
    name: 'addContact',
    component: () => import('../views/AddContact'),
    meta: {
      needLogin: true
    }
  },
  {
    path: '/editContact',
    name: 'editContact',
    component: () => import('../views/EditContact'),
    meta: {
      needLogin: true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search'),
    meta: {
      needLogin: false
    }
  },
  {
    path: '/searchResult',
    name: 'searchResult',
    component: () => import('../views/SearchResult'),
    meta: {
      needLogin: false
    }
  },
  {
    path: '/ChangeContact',
    name: 'ChangeContact',
    component: () => import('../views/ChangeContact'),
    meta: {
      needLogin: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//前置守卫
router.beforeEach((to,from,next)=>{
  if(to.fullPath==='/login' || to.fullPath==='/register'){
    next()
  }else {
    if(to.meta.needLogin){
      const accessToken = localStorage.getItem('access_token')
      if(accessToken){
        next()
      }else {
        next({
          name:'login',
          params:{
            from:to.fullPath
          }
        })
      }
    }else{
      next()
    }
  }
})
export default router
