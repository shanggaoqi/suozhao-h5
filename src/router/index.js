import Vue from 'vue'
import VueRouter from 'vue-router'
//引入首页组件
import Home from '../views/Home.vue'
//引入产品中心product组件
import Product from '../views/Product'
//引入解决方案solution组件
import Solution from '../views/Solution'
//引入解决方案one组件
import SolutionOne from '../views/solution/SolutionOne'
//引入解决方案two组件
import SolutionTwo from '../views/solution/SolutionTwo'
//引入解决方案three组件
import SolutionThree from '../views/solution/SolutionThree'
//引入解决方案six组件
import SolutionSix from '../views/solution/SolutionSix'
//引入解决方案seven组件
import SolutionSeven from '../views/solution/SolutionSeven'
//引入解决方案eight组件
import SolutionEight from '../views/solution/SolutionEight'
//引入解决方案one组件
import SolutionOne1 from '../views/solution_two/SolutionOne1'
//引入解决方案two组件
import SolutionTwo1 from '../views/solution_two/SolutionTwo1'
//引入解决方案three组件
import SolutionThree1 from '../views/solution_two/SolutionThree1'
//引入解决方案three组件
import SolutionFour1 from '../views/solution_two/SolutionFour1'
//引入解决方案three组件
import SolutionFive1 from '../views/solution_two/SolutionFive1'
//引入解决方案six组件
import SolutionSix1 from '../views/solution_two/SolutionSix1'
//引入解决方案seven组件
import SolutionSeven1 from '../views/solution_two/SolutionSeven1'
//引入解决方案eight组件
import SolutionEight1 from '../views/solution_two/SolutionEight1'
//引入技术支持组件
import Technology from '../views/Technology'
//引入公司动态组件
import Company from '../views/Company'
//引入公司新闻一组件
import One from '../views/company_news/One'
//引入公司新闻二组件
import Two from '../views/company_news/Two'
//引入公司新闻三组件
import Three from '../views/company_news/Three'
//引入公司新闻三组件
import Four from '../views/company_news/Four'
//引入公司新闻三组件
import Five from '../views/company_news/Five'
//引入公司新闻三组件
import Six from '../views/company_news/Six'
//引入关于我们组件
import About from '../views/About'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/product',
    name:'product',
    component:Product
  },
  {
    path:'/solution',
    name:'solution',
    component:Solution
  },
  {
    path:'/solution/one',
    name:'solution_one',
    component:SolutionOne
  },
  {
    path:'/solution/two',
    name:'solution_two',
    component:SolutionTwo
  },
  {
    path:'/solution/three',
    name:'solution_three',
    component:SolutionThree
  },
  {
    path:'/solution/six',
    name:'solution_six',
    component:SolutionSix
  },
  {
    path:'/solution/seven',
    name:'solution_seven',
    component:SolutionSeven
  },
  {
    path:'/solution/eight',
    name:'solution_eight',
    component:SolutionEight
  },
  {
    path:'/solution/one1',
    name:'solution_one1',
    component:SolutionOne1
  },
  {
    path:'/solution/two1',
    name:'solution_two1',
    component:SolutionTwo1
  },
  {
    path:'/solution/three1',
    name:'solution_three1',
    component:SolutionThree1
  },
  {
    path:'/solution/four1',
    name:'solution_four1',
    component:SolutionFour1
  },
  {
    path:'/solution/five1',
    name:'solution_five1',
    component:SolutionFive1
  },
  {
    path:'/solution/six1',
    name:'solution_six1',
    component:SolutionSix1
  },
  {
    path:'/solution/seven1',
    name:'solution_seven1',
    component:SolutionSeven1
  },
  {
    path:'/solution/eight1',
    name:'solution_eight1',
    component:SolutionEight1
  },
  {
    path:'/technology',
    name:'technology',
    component:Technology
  },
  {
    path:'/company',
    name:'company',
    component:Company
  },
  {
    path:'/company/one',
    name:'company_one',
    component:One
  },
  {
    path:'/company/two',
    name:'company_two',
    component:Two
  },
  {
    path:'/company/three',
    name:'company_three',
    component:Three
  },
  {
    path:'/company/four',
    name:'company_four',
    component:Four
  },
  {
    path:'/company/five',
    name:'company_five',
    component:Five
  },
  {
    path:'/company/six',
    name:'company_six',
    component:Six
  },
  {
    path:'/about',
    name:'about',
    component:About
  }
  
]

const router = new VueRouter({
  base: "/",
  mode: "history",
  routes
})

export default router
