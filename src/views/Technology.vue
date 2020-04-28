<template>
  <div>
     <header>
      <img width="100%" src="../assets/technology/banner_jsfw@2x.png" alt="西安星云宇博数据科技有限公司">
    </header>
    <footer>
      <aside>
        <article>开发集成</article>
        <nav>
          <div></div>
        </nav>
      </aside>
      <article>提供众多可复用可扩展的框架模块以及深入代码级的开发模式，在原有通用功能的基础上对平台进行扩展开发，使其完全贴合用户个性化的使用需求。同时避免客户开从头开发所面临的‘高投入，高成本，高风险’问题，真正做到“多、快、好、省”的开发模式。</article>
      <aside>
        <article>开发需求</article>
        <nav>
          <div></div>
        </nav>
      </aside>
      <article>全面满足用户设备扩展、功能扩展以及开发集成的需求。</article>
      <nav>
        <img src="../assets/technology/pc_kfxq@2x.png" alt="西安星云宇博数据科技有限公司">
      </nav>
      <header>
        <header>扩展组件</header>
        <nav>
          <div></div>
        </nav>
        <section>该平台提供多种可复用的平台扩展组件，简化网管基础技术研究，提高平台开发扩展效率。</section>
        <footer>
          <article class="d-flex flex-row flex-nowrap justify-content-between">
            <div>
              <img src="../assets/technology/icon_001.21c70d87@2x.png" alt="西安星云宇博数据科技有限公司">
              <aside>监控组件</aside>
            </div>
            <div>
              <img src="../assets/technology/icon_002.7ec20842@2x.png" alt="西安星云宇博数据科技有限公司">
              <aside>数据库组件</aside>
            </div>
            <div>
              <img src="../assets/technology/icon_003.756d1bb7@2x.png" alt="西安星云宇博数据科技有限公司">
              <aside>界面开发组件</aside>
            </div>
            <div>
              <img src="../assets/technology/icon_004.b96d7059@2x.png" alt="西安星云宇博数据科技有限公司">
              <aside>监控调度组件</aside>
            </div>
          </article>
          <nav class="d-flex flex-row flex-nowrap justify-content-between">
            <div>
              <img src="../assets/technology/icon_005.f6f687bb@2x.png" alt="西安星云宇博数据科技有限公司">
              <aside>iTopoview拓扑组件</aside>
            </div>
            <div>
              <img src="../assets/technology/icon_006.3b09b940@2x.png" alt="西安星云宇博数据科技有限公司">
              <aside>消息分发组件</aside>
            </div>
            <div>
              <img src="../assets/technology/icon_007.f8b60537@2x.png" alt="西安星云宇博数据科技有限公司">
              <aside>分布式组件</aside>
            </div>
            <div>
              <img src="../assets/technology/icon_008.cfc9ba0b@2x.png" alt="西安星云宇博数据科技有限公司">
              <aside>ObjectSNMP</aside>
            </div>
          </nav>
        </footer>
      </header>
    </footer>
    <Details></Details>
    <Footer></Footer>
  </div>
</template>

<script>
import Details from '../components/technology/Details'
import Footer from '../components/technology/Footer'
export default {
  name:'Technology',
  components:{
    Details,
    Footer
  }
}
</script>

<style scoped>
@media screen and (max-width: 1024px) {
  div>footer{
    padding:0 2%;
    color: #333333;
  }
  div>footer>aside{
    padding:1.5rem 0;
  }
  div>footer>aside>article{
    font-size:1.1rem;
    font-weight:500;
    text-align: center;
  }
  div>footer>aside>nav{
    width:100%;
  }
  div>footer>aside>nav>div{
    width:18%;
    height: 3px;
    background: #50B8F6;
    /* text-align: center; */
    margin-left: 41%;
    margin-bottom: 3%;
  }
  div>footer>article{
     text-indent: 2em;
     font-size: .9rem;
     font-weight:500;
  }
  div>footer>nav{
    width:100%;
    padding: 2rem 0;
  }
  div>footer>nav>img{
    width:100%;
  }
  div>footer>header{
    width:100%;
    background-image: url("../assets/technology/bg_l@2x.png");
    background-repeat: no-repeat;
    color: #FFFFFF;
    padding: 1.5rem;  
  }
  div>footer>header>header{
   font-size:1.1rem;
    font-weight:500;
    text-align: center;
  }
  div>footer>header>nav{
    width:100%;
  }
  div>footer>header>nav>div{
    width:18%;
   height: 3px;
   background: #50B8F6;
   /* text-align: center; */
   margin-left: 41%;
   margin-bottom: 3%;
   }
  div>footer>header>section{
    text-indent: 2em;
    font-size:.9rem;
    font-weight:500;
    padding-top:1rem ;
  }
  div>footer>header>footer>article{
    padding:2rem 0;
  }
  div>footer>header>footer>article>div{
    width: 20%;
  }
  div>footer>header>footer>article>div>img{
    width:100%;
  }
  div>footer>header>footer>article>div:first-child>img{
    width: 93%;
  }
  div>footer>header>footer>article>div>aside{
    font-size:.7rem;
    padding-top: .2rem;
    text-align: center;
  }
  div>footer>header>footer>nav{
    width: 100%;
  }
  div>footer>header>footer>nav>div{
    width: 20%;
  }
  div>footer>header>footer>nav>div>img{
    width:100%;
  }
  div>footer>header>footer>nav>div:nth-child(2)>img{
    width: 100%;
  }
  div>footer>header>footer>nav>div>aside{
    font-size:.7rem;
    padding-top: .2rem;
    text-align: center;
  }
}
</style>