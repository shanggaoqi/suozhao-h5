<template>
  <div>
    <aside>
      <header>开发模式</header>
      <nav>
        <div></div>
      </nav>
      <article>提供6大开发模式，在通用网管功能的基础上，开发人员可以选择进行模块式或者代码式的开发形式，以便在最短的时间内满足用户各种定制需求。</article>
      <aside class="pt-2 d-flex flex-row flex-wrap justify-content-between">
        <aside style="width:30%">
          <img style="padding-left:1.5rem" width="70%" src="../../assets/technology/jckfms.22a6c315@2x.png" alt="西安星云宇博数据科技有限公司">
          <article style="font-size:.75rem;text-align:center;padding:.3rem 0 1rem">集成开发模式</article>
        </aside>
        <aside style="width:30%;">
          <img width="100%" src="../../assets/technology/APIkf.d8f951b3@2x.png" alt="西安星云宇博数据科技有限公司">
          <article style="font-size:.75rem;text-align:center;padding:.3rem 0 1rem"> API模式开发</article>
        </aside>
        <aside style="width:30%;">
          <img width="100%" src="../../assets/technology/dmkf.f1ad0206@2x.png" alt="西安星云宇博数据科技有限公司">
          <article style="font-size:.75rem;text-align:center;padding:.6rem 0 1rem">代码开放开发模式</article>
        </aside>
      </aside>
      <aside class="d-flex flex-row flex-wrap justify-content-between">
        <aside style="width:30%;">
          <img width="60%" style="padding-left:1.5rem" src="../../assets/technology/fwqcj.cf4a1db2@2x.png" alt="西安星云宇博数据科技有限公司">
          <article  style="font-size:.75rem;text-align:center;padding:.8rem 0 0">服务端插件开发模式</article>
        </aside>
        <aside style="width:30%;">
          <img width="83%"  style="padding-left:1.5rem" src="../../assets/technology/sjkkf.0b818035@2x.png" alt="西安星云宇博数据科技有限公司">
          <article style="font-size:.75rem;text-align:center;padding:.6rem 0 0">数据库开发模式</article>
        </aside>
        <aside style="width:30%;">
          <img width="60%" style="padding-left:1.5rem" src="../../assets/technology/khdkf.ac3a3d5f@2x.png" alt="西安星云宇博数据科技有限公司">
          <article style="font-size:.75rem;text-align:center;padding:.6rem 0 0">客户端开发模式</article>
        </aside>
      </aside>
    </aside>
    <aside>
      <header>代码级开放开发服务</header>
      <nav>
        <div></div>
      </nav>
      <article>该平台提供代码级开放模式，深入客户端源代码，提供完善的开发文档、实施培训以及技术支持服务，让用户从开发起始到平台使用全无后顾之忧。</article>
      <aside class="py-3 d-flex flex-row flex-nowrap justify-content-between">
        <aside style="width:22%">
          <img width="100%" src="../../assets/technology/kfydm.4c247f9f@2x.png" alt="西安星云宇博数据科技有限公司">
          <article style="font-size:.75rem;text-align:center;padding:.6rem 0 0">开放源代码</article>
        </aside>
        <aside style="width:22%">
          <img width="100%" src="../../assets/technology/kfwd.3b3f10a0@2x.png" alt="西安星云宇博数据科技有限公司">
          <article style="font-size:.75rem;text-align:center;padding:.6rem 0 0">开发文档</article>
        </aside>
        <aside style="width:22%">
          <img width="100%" src="../../assets/technology/kfpx.ba4f3d29@2x.png" alt="西安星云宇博数据科技有限公司">
          <article style="font-size:.75rem;text-align:center;padding:.6rem 0 0">开发培训</article>
        </aside>
        <aside style="width:22%">
          <img width="100%" src="../../assets/technology/jszc.f1ad19b8@2x.png" alt="西安星云宇博数据科技有限公司">
          <article style="font-size:.75rem;text-align:center;padding:.6rem 0 0">技术支持服务</article>
        </aside>
      </aside>
    </aside>
    <footer>
      
    </footer>
  </div>
</template>

<script>
export default {
  name:'Details'
}
</script>

<style scoped>
@media screen and (max-width: 1024px) {
  div{
    padding: 0 2%;
    color: #333333;
    font-weight: 500;
  }
  div>aside{
    padding:1.5rem 0;
  }
  div>aside>header{
    font-size:1.1rem;
    text-align: center;
  }
  div>aside>nav{
    width: 100%;
  }
  div>aside>nav>div{
    width:18%;
   height: 3px;
   background: #50B8F6;
   /* text-align: center; */
   margin-left: 41%;
   margin-bottom: 3%;
  }
  div>aside>article{
    text-indent: 2em;
    font-size: .9rem;
    padding-top:1rem;
  }
} 
</style>