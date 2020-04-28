<template>
  <div>
   <header class="d-flex flex-row flex-nowrap justify-content-between">
     <div @click="jump()">
        <img width="100%" src="../../assets/about/icon_gengduo1@2x.png" alt="西安星云宇博数据科技有限公司">
     </div>
     <div>新闻详情</div>
   </header>
   <article>
    <header>
      <nav>自动化运维监控工具诞生</nav>
      <aside>
        <div></div>
      </aside>
      <section style="text-align:center;color:#999999;font-size:1rem;">
        <span >3月19日</span>
        <!-- <span>浏览量: 37次</span> -->
      </section>
      <article>自动化运维监控工具诞生,通过DCOS的全生命周期自动化平台管理，实现部署、监控、分析、管理全自动，数据中心的无人值守。尽可能的保证服务过程的标准化，减少其中的人为管理。</article>
      <article>数据中心运维包含很多的内容，从底层往上，包含物理资源、虚拟资源、系统、应用、业务的运维。复杂度往上逐层递增。而重要性却是以底层运维为基础。</article>
    </header>
   </article>
   <section>
     <img width="100%" src="../../assets/company/three_one.8184bae1.jpg" alt="西安星云宇博数据科技有限公司">
   </section>
   <nav>众所周知，运维部门的多数的运维工作80%集中在底层物理资源、系统资源运维。这正符合二八定律，我们在花80%的时间做20%的工作内容。如果是这样，我们需要将运维工作做剥离。将这20%的工作从整个运维体系剥离开来，通过带外网络架构来进行统一管理，建立一个底层运维的“简生态”。用更直观、更标准化的视图来简化这一部分的管理，提升基础工作的管理效率，实实在在的提升日常运维管理工作的质量。这就好像物理设备是水杯，而设备上承载的万千业务是水杯里的可乐或者柠檬茶，无论水杯里装的是什么，带外管理的任务只负责保障水杯的完整，不会有水杯里的内容流失。最最重要的任务，用最简化的方式来保驾护航，反而能赢得最佳的效果。
   </nav>
  </div>
</template>

<script>
export default {
  name:'SolutionOne',
  data(){
    return{
    
    }
  },
  methods:{
    jump(){
      this.$router.go(-1);
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
    color:#F1F3F6;
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
  /* div>article>aside>article{
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
  } */
  div>section{
    padding: 0 2% 3rem;
  }
  div>nav{
    padding: 0 2% 2rem;
    text-indent: 2em;
    font-size: .9rem;
    font-weight:500;
  }
}
</style>