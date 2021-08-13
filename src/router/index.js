/*
 * @Author: your name
 * @Date: 2021-08-10 15:42:33
 * @LastEditTime: 2021-08-12 18:42:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop\src\router\index.js
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
