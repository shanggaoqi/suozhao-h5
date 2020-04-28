<template>
  <div id="app" key="Key">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
import { index } from "./router/index"
  export default{
    name: 'app',
    index,
    components: {
     Header,
     Footer
    },
    data(){
      return {
        Key:"", // 监听URL的变化(解决路由不变,参数变,但页面不刷新的问题)
        
      }
    },
    // 使用watch 监听$router的变化,
    watch: {
      '$route': function(to,from){
  　    document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    }
  }
</script>  

<style>
@media screen and (max-width: 1024px) {
  #app {
    font-family:PingFang SC;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #222222;
    max-width: 414px;
  }
}
</style>
