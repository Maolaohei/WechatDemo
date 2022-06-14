import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const routes = [
  {
    path: '/',
    component: IndexView
  },
  {
    path: '/index',
    name: 'index',//首页
    component: IndexView
  },

  {
    path: '/contacts',
    name: 'contacts',//通讯录
    component: () => import('../views/ContactsView.vue')
  },
  {
    path: '/me',
    name: 'me',//我
    component: () => import('../views/MeView.vue')
  },{
    path: '/Chatbox',
    name: 'Chatbox',//聊天窗口
    component: () => import('../views/ChatboxView.vue'),


  },{
    path:'/found',
    name:'found',//发现
    component:()=>import('../views/FoundView.vue')
  },{
    path:'/Personal',
    name:'Personal',//个人中心
    component:()=>import('../views/PersonalView.vue'),

  },{
    //搜索框
    path:'/search',
  
    component:()=>import('../views/SearchView.vue')
  },{
    path:'/serve'
    ,name:'serve'//服务号
    ,component:()=>import('../views/ServeView.vue')
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
