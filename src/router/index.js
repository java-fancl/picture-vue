import Vue from 'vue'
import Router from 'vue-router'

// 导入自定义页面
import AppIndex from "@/components/home/AppIndex"
import Login from "@/components/Login";

Vue.use(Router)

export default new Router({
  mode: 'history',  // history 模式 ， 默认为hash模式
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component:AppIndex,
      meta: {
        requireAuth: true
      }
    }
  ]
})
