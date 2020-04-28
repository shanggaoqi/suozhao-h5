<template>
  <div>
   <header class="d-flex flex-row flex-nowrap justify-content-between">
      <div @click="jump()">
        <img width="100%" src="../../assets/about/icon_gengduo1@2x.png" alt="西安星云宇博数据科技有限公司">
     </div>
     <div>国产化应用</div>
   </header>
   <article>
    <header>
      <nav>国产化应用解决方案</nav>
      <aside>
        <div></div>
      </aside>
      <article>信息安全和国产化已经是国家战略，各种国产化的政策相续出台，要求核心单位优先使用安全可控的国产化网络管理软件，因此专门针对管理国产软硬件的网络管理软件应运而生，而国产化产品种类繁多，包括CPU、服务器、数据库、中间件等多种类型，因此网管软件往往无法做到全面国产化的兼容性。</article>
    </header>
    <aside class="py-3">
      <article>国产化网管的需求</article>
      <div></div>
      <nav>
        <span></span>
        <span>能部署在国产化产品上运行，如部署在安装了中标麒麟操作系统的华为服务器上进行网管服务</span>
      </nav>
      <nav>
        <span></span>
        <span>兼容国产CPU：兼容龙芯、神威CPU</span>
      </nav>
      <nav>
        <span></span>
        <span>兼容国产服务器：兼容龙芯、浪潮、华为服务器</span>
      </nav>
      <nav>
        <span></span>
        <span>兼容国产操作系统：兼容中标麒麟、红旗Linux操作系统</span>
      </nav>
      <nav>
        <span></span>
        <span>兼容国产数据库：兼容金仓、达梦数据库</span>
      </nav>
      <nav>
        <span></span>
        <span>兼容国产中间件：兼容东方通等中间件</span>
      </nav>
      <nav>
        <span></span>
        <span>要求网管软件具有安全性和机密性，网管软件需是完全自主研发的国产化产品，不依赖于其它商业技术，拥有100%知识产权</span>
      </nav>
    </aside>
    <aside class="py-3">
      <article>国产化应用定制网管解决方案</article>
      <div></div>
      <nav>
        <span></span>
        <span>国产化环境部署</span>
      </nav>
      <nav>
        <span></span>
        <span>兼容国产操作系统和硬件</span>
      </nav>
      <nav>
        <span></span>
        <span>多协议支持</span>
      </nav>
      <nav>
        <span></span>
        <span>兼容国产数据库</span>
      </nav>
      <nav>
        <span></span>
        <span>兼容国产中间件</span>
      </nav>
      <nav>
        <span></span>
        <span>通用功能</span>
      </nav>
    </aside>
   </article>
  </div>
</template>

<script>
export default {
  name:'SolutionOne',
  methods:{
    jump(){
      // this.$router.push({name:'solution'});
      // history.back();
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 1024px) {
  div>header{
    padding: 2% 2%;
    background: #2F3A4A;
  }
  div>header>div:first-child{
    color:#F1F3F6 ;
    width:3%;
  }
   div>header>div:first-child>img{
    -ms-transform:rotate(90deg); /* IE 9 */
    -moz-transform:rotate(90deg); /* Firefox */
    -webkit-transform:rotate(90deg); /* Safari and Chrome */
    -o-transform:rotate(90deg); /* Opera */
  }
  div>header>div:last-child{
     width:97%;
     text-align: center;
     color: #FFFFFF;
     font-size: 1.1rem;
  }
  div>article{
    padding:1rem 2% 2rem;
    color: #333333;
  }
  div>article>header>nav{
    width:100%;
    text-align: center;
    font-size: 1.2rem;
  }
  div>article>header>aside{
   width: 100%;
  }
  div>article>header>aside>div{
    width:18%;
   height: 3px;
   background: #50B8F6;
   /* text-align: center; */
   margin-left: 41%;
   margin-bottom: 3%;
  }
  div>article>header>article{
    text-indent: 2em;
    font-size: .9rem;
    font-weight:500;
   }
  div>article>aside>article{
    font-size: 1rem;
    font-weight: 500;
  }
  div>article>aside>div{
    width: 100%;
    height: 2px;
    background: #01BFEF;
    margin-top:.3rem;
  }
  div>article>aside>nav{
    padding-top:1.5rem;
  }
  div>article>aside>nav>span:first-child{
    display: inline-block;
    width:10px;
    height:10px;
    border-radius: 50%;
    background: #01BFEF;
    margin-right: .3rem;
  }
  div>article>aside>nav>span:last-child{
    font-size: .9rem;
    font-weight: 500;
   
  }
}
</style>