import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Category from '@/components/Category'
import Cart from '@/components/Cart'
import Mine from '@/components/Mine'
import Search from '@/components/Search'
import paly from '@/components/paly'
import daiCart from '@/components/daiCart'
import Money from '@/components/Money'
import classify1 from '@/components/classify1'
import classify2 from '@/components/classify2'
import Second from '@/components/Second'
import Progress from '@/components/Progress'
import Upcoming from '@/components/Upcoming'
import Augten from '@/components/Augten'
import GoShopping from '@/components/GoShopping'
import today from "@/components/today.vue"
import tomorrow from "@/components/tomorrow.vue"
import classify21 from '@/components/classify2.1'
import Details from '@/components/Details'
import Comments from '@/components/Comments'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name:'Home',
      meta: {navShow: true}
    },
    {
      path: '/GoShopping',
      component: GoShopping,
      meta: {navShow: false},
      children: [{
        path:"a",
        component: today
      },{
        path:"b",
        component: tomorrow
      }]
    },
    {
      path: '/category',
      component: Category,
      meta: {navShow: true}      
    },
    {
      path: '/cart',
      component: Cart,
      meta: {navShow: true}      
    },
    {
      path: '/mine',
      component: Mine,
      meta: {navShow: true}
    },
    {
      path: '/search',
      component: Search,
      meta: {navShow: false}
    },
    {
      path: '/paly',
      component: paly,
      meta: {navShow: false}
    },
    {
      path: '/daiCart',
      component: daiCart,
      meta: {navShow: false}
    },
    {
      path: '/Money',
      component: Money,
      meta: {navShow: false}
    }, 
    {
      path: '/Login',
      name:'Login',
      component: Login,
      meta: {navShow: false}
    },
    {
      path: '/Register',
      name:'Register',
      component: Register,
      meta: {navShow: false}
    },
     {
      path: '/Second/Progress',
      component: Second,
      // name:'Second1',
      meta: {navShow: false},
      children:[{
        path:"/Second/Progress",
        component:Progress,
        name:'Second1'
      },{
        path:"/Second/Upcoming",
        component:Upcoming
      },{
        path:"/Second/Augten",
        component:Augten
      }]      
    }, 
     {
      path: '/Second/Upcoming',
      component: Upcoming,
      name:'Upcoming',
      meta: {navShow: false},
    }, 
     {
      path: '/Second/Augten',
      component: Augten,
      name:'Augten',
      meta: {navShow: false},
    },  
    {
      path: '/classify.39_389_387_390_395_394',
      name: 'classify.39_389_387_390_395_394',
      component: classify1,
      meta: {navShow: false}
    },
    {
      path: '/classify2.376',
      name: 'classify2.376',
      component: classify2,
      meta: {navShow: false},
      children:[
          {
            path: '/classify2.376/classify2.1',
            component : classify21
          },{
            path: '/classify2.376/details',
            component : Details
          },{
            path: '/classify2.376/comments',
            component : Comments
          }
      ]
    }
  ]
})
