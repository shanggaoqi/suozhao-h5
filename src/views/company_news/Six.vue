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
      <nav>2020年IPv6端到端贯通能力提升</nav>
      <aside>
        <div></div>
      </aside>
      <section style="text-align:center;color:#999999;font-size:1rem;">
        <span >3月18日</span>
        <!-- <span>浏览量: 78次</span> -->
      </section>
      <article>工业和信息化部近日发文部署开展2020年IPv6端到端贯通能力提升专项行动。行动包括优化提升IPv6网络接入能力、加快提升内容分发网络（CDN）IPv6应用加速能力、大幅提升云服务平台IPv6业务承载能力、全面扩大数据中心（IDC）IPv6覆盖范围、着力提升终端设备IPv6支持能力、稳步提升行业网站及互联网应用IPv6浓度、着力强化IPv6 网络安全保障能力等七项重点任务。</article>
      <article>全面扩大数据中心（IDC）IPv6覆盖范围。中国电信、中国移动、中国联通进一步加强对中小型数据中心和机房的IPv6改造。阿里云、腾讯云、百度云、京东云、华为云、世纪互联、鹏博士、秦淮科技、新网互联、方正信息、西部数码、万国数据、光环新网加快数据中心IPv6改造力度，到2020年第三季度末，完成年报中全部数据中心的IPv6改造，形成全国范围数据中心IPv6覆盖能力。</article>
    </header>
   </article>
   <section>
     <img width="100%" src="../../assets/company_one/PC_chanpin@2x.png" alt="西安星云宇博数据科技有限公司">
   </section>
   <nav>着力强化IPv6 网络安全保障能力。各相关企业要进一步完善针对IPv6的网络安全定级备案、风险评估、通报预警、灾难备份及恢复等工作。推动IPv6环境下网络安全产品和服务的应用，鼓励构建IPv6安全产品孵化平台和测试环境，推动在研IPv6安全产品孵化，强化IPv6安全产品应用性能验证。基础电信企业和重点IDC、CDN等企业要做好僵木蠕、移动互联网恶意程序监测处置系统、信息安全管理系统等安全技术手段IPv6配套改造工作，强化IPv6环境下漏洞、违法信息等的监测发现与处置。
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