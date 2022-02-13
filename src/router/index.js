import Vue from 'vue'
import Router from 'vue-router'
// 登录页
import Login from '@/components/Login'
import Home from '@/components/Home'
// 欢迎页
import Welcome from '@/components/Welcome'
// 用户信息页
import Users from '@/components/user/Users'
import Rights from '@/components/power/Rights'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [{
          path: '/welcome',
          component: Welcome
        },
        {
          path: '/users',
          component: Users
        },
        {
          path: '/rights',
          component: Rights
        }
      ]
    }
  ]
})

//  挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // form 代表从哪个路径跳转而来
  // next 是一个函数， 表示放行
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
