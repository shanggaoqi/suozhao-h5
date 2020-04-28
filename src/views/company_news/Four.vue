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
      <nav>2020年十大网络安全热点</nav>
      <aside>
        <div></div>
      </aside>
      <section style="text-align:center;color:#999999;font-size:1rem;">
        <span>3月23日</span>
        <!-- <span>浏览量: 201次</span> -->
      </section>
      <article>随着网络威胁泛化的愈演愈烈，安全形势变得越来越复杂。物联网设备攻击,、无恶意软件攻击以及非电子邮件网络钓鱼攻击继续上升。防范这些攻击的代价从未像当下这样如此高昂。Ponemon公司最新发布数据泄露报告显示，数据泄露的平均成本现在已高达每起事件392万美元。随着威胁行为者不断改变方法，利用新技术并尝试新的攻击手段，无论是企业还是政府组织可能难以跟上这一变化的快速步伐。</article>
      <article>当前新型冠状病毒全球爆发，导致生产生活停顿，线下活动骤减，网络成为人们工作生活、沟通交流的主要方式。大数据、移动网络、物联网等新型应用为各国政府防疫抗疫提供了有力的支撑保障，也成为“抗疫”战场最不可或缺的基础设施。然而，一些不法之徒也借“抗疫”之机将目光瞄准了网络，黑客团伙、黑产组织和APT组织等纷纷登场，借助新型冠状病毒重点对医疗机构、国际组织、政府部门实施了一系列的网络攻击活动，就连世卫生组织（WHO）、美国卫生和公共服务部（HHS）也未能幸免。卡巴斯基、安天等知名网络安全厂商对此均有报道。与此同时，企业大面积远程办公也带来了显著的网络安全风险，相关远程办公软件、VPN均有被攻击的报道，美国CISA和国防部都发布了安全警示。</article>
    </header>
   </article>
   <section>
     <img width="100%" src="../../assets/company/five_one.99bb4aa8.jpg" alt="西安星云宇博数据科技有限公司">
   </section>
   <nav>安全专家担心在美国推出5G蜂窝网络将导致不安全连接的设备数量增加。这为个人客户和企业增加了攻击面，并为僵尸网络提供了更多的资源。不幸的是，5G推出的势头如此之大，以至于在宏观层面上没有太多工作要做。抛开政治因素之外，从技术层面看，5G将要面对的，是更开放的网络链接、更深度的计算设备、以及更复杂的应用环境。其面临核心网技术、低时延业务、大连接业务、网络切片技术、伪基站问题、用户位置隐私保护等六个方面的安全挑战。
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