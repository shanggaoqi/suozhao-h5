<template>
  <div>
    <header>
      <img width="100%" src="../assets/about/banner_gywm@2x.png" alt="西安星云宇博数据科技有限公司">
    </header>
    <section>
      <header>
        <nav>西安星云宇博数据科技有限公司</nav>
        <div></div>
      </header>
      <aside class="py-3">
      <img width="100%" src="../assets/about/pc_gstp@2x.png" alt="西安星云宇博数据科技有限公司">
      </aside>
      <article>西安星云宇博数据科技有限公司是一家从事软件产品研发、生产、销售、软件服务及咨询的高新技术企业，总部位于陕西西安高新区软件园，在北京、兰州和西宁三地分别设立了分公司及办事处，并拥有一大批高素质的国内行业领域优秀技术专家和软件工程师团队，他们以其富有创造性的产品研发和推广经验不断为客户提供高质量的产品。</article>
      <article>目前公司旗下已拥有大数据流量分析运维管理平台、多源日志网络威胁态势、网络安全运行数据分析预警系统、信息运维综合监管系统、营销智能缴费管理平台、电商ERP系统、家政信用体系平台、人脸识别安全认证系统、系统运维支撑管理平台等外包产品。</article>
      <article class="mb-5"> 公司近年来不断加大研发投入，在技术和客户服务层面逐步不断提高。强化并打造以“研发、技术、创新"为主的核心竞争力，紧跟大数据、人工智能、物联网、云计算、区块链等技术的发展与用户的需求，不断为广大用户提供高性价比的产品与服务，帮助用户创造价值企业以“提升客户自身价值”为宗旨；以“尊重客户、尊重员工”为理念；以“融合、通用、标准”为目标，努力将自身打造成为最通用的IT服务提供商。</article>
      <header>
        <nav>公司业绩</nav>
        <div></div>
      </header>
      <aside class="py-3">
        <img width="100%" src="../assets/about/gsyjtu@2x.png" alt="西安星云宇博数据科技有限公司">
      </aside>
      <aside v-show="kan">
        <img width="100%" src="../assets/about/gsyjtu1@2x.png" alt="西安星云宇博数据科技有限公司">
      </aside>
      <footer @click="load()" class="my-2" v-show="ok">
        <span>查看更多</span>
        <img width="70%" src="../assets/about/icon_gengduo1@2x.png" alt="西安星云宇博数据科技有限公司">
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  name:'About',
  data(){
    return{
     ok:true,
     kan:false
    }
  },
  methods:{
    load(){
      this.kan=true;
      this.ok=false;
    }
  }
}
</script>

<style scoped> 
@media screen and (max-width: 1024px) {
  div>section{
    padding:2rem 2%;
    color: #333333;
    font-weight: 500;
  }
  div>section>header{
     width: 100%;
  }
  div>section>header>nav{
    font-size:1.1rem;
    text-align: center;
  }
  div>section>header>div{
     width:18%;
   height: 3px;
   background: #50B8F6;
   /* text-align: center; */
   margin-left: 41%;
   margin-bottom: 3%;
  }
  div>section>article{
    font-size:.9rem;
    text-indent: 2em;
    margin-bottom: 1rem;
  }
  div>section>footer{
    font-size:.9rem;
    color: #999999;
    width: 100%;
    text-align: center;
  }
  div>section>footer>img{
    margin-left: .7rem;
    width:4%;
    padding-bottom:.2rem;
  }
}
</style>