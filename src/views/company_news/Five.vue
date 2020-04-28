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
      <nav>三国专家论道网络安全云峰会</nav>
      <aside>
        <div></div>
      </aside>
      <section style="text-align:center;color:#999999;font-size:1rem;">
        <span>3月21日</span>
        <!-- <span>浏览量: 56次</span> -->
      </section>
      <article>在“你中有我，我中有你”的全球化时代，疫情的蔓延让所有人陡然置身于“数字世界”的实战场景中。如何利用数字技术阻止疫情的蔓延，达成数字世界的治理共识，推动全球经济健康和可持续发展，已成全球社会当前普遍关心的问题。</article>
      <article>在3月24日召开的全球首个网络安全行业万人云峰会上，来自中、美、日等国家的行业大咖，围绕“危机下全球化与数字世界治理的殇与问”展开战略对话，与会专家认为，建立互信是扭转逆全球化思潮的关键，也是数字世界携手共商、共治、共赢的基石。</article>
    </header>
   </article>
   <section>
     <img width="100%" src="../../assets/company/four_two.a6cee122.jpg" alt="西安星云宇博数据科技有限公司">
   </section>
   <nav>据悉，在万人云峰会上，除了战略对话外，全球安全行业大咖还将从产业、技术等不同维度继续进行深入探讨，将网络安全行业新机遇、新趋势、新技术进行更大范围的分享与传播，以促进全球范围内网络安全领域的交流与合作，推动网络安全产业向更宽领域、更深层次、更高质量发展。
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