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
      <nav>中小企业数字化赋能专项行动方案</nav>
      <aside>
        <div></div>
      </aside>
      <section style="text-align:center;color:#999999;font-size:1rem;">
        <span >3月17日</span>
        <!-- <span>浏览量: 85次</span> -->
      </section>
      <article>《方案》提出，要坚持统筹推进新冠肺炎疫情防控和经济社会发展，以新一代信息技术与应用为支撑，以提升中小企业应对危机能力、夯实可持续发展基础为目标，集聚一批面向中小企业的数字化服务商，培育推广一批符合中小企业需求的数字化平台、系统解决方案、产品和服务，助推中小企业通过数字化网络化智能化赋能实现复工复产，增添发展后劲，提高发展质量。</article>
      <article>坚持统筹推进新冠肺炎疫情防控和经济社会发展，以新一代信息技术与应用为支撑，以提升中小企业应对危机能力、夯实可持续发展基础为目标，集聚一批面向中小企业的数字化服务商，培育推广一批符合中小企业需求的数字化平台、系统解决方案、产品和服务，助推中小企业通过数字化网络化智能化赋能实现复工复产，增添发展后劲，提高发展质量。</article>
    </header>
   </article>
   <section>
     <img width="100%" src="../../assets/company/pc_nes@2x.png" alt="西安星云宇博数据科技有限公司">
   </section>
   <nav>推动中小企业落实《网络安全法》等法律法规和技术标准的要求，强化网络与数据安全保障措施。建设工业互联网安全公共服务平台，面向广大中小企业提供网络和数据安全技术支持服务。鼓励安全服务商创新安全服务模式，提升安全服务供给能力，为中小企业量身定制全天候、全方位、立体化的安全解决方案。
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