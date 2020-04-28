<template>
  <div>
   <header class="d-flex flex-row flex-nowrap justify-content-between">
      <div @click="jump()">
        <img width="100%" src="../../assets/about/icon_gengduo1@2x.png" alt="西安星云宇博数据科技有限公司">
     </div>
     <div>信息安全等级保护建设</div>
   </header>
   <article>
    <header>
      <nav>信息安全等级保护建设解决方案</nav>
      <aside>
        <div></div>
      </aside>
      <article>信息安全等级保护是国家信息安全保障的基本制度、基本策略、基本方法。信息安全等级保护工作包括定级备案、安全建设和整改、信息安全等级测评、信息安全检查五个阶段。信息系统建设完成后，运营、使用单位或者其主管部门应当选择符合国家要求的测评机构，依据《信息系统安全等级保护测评要求》等技术标准，定期对信息系统安全等级状况开展等级测评。</article>
    </header>
    <aside class="py-3">
      <article>等级保护建设流程</article>
      <div></div>
      <nav>
        <span></span>
        <span>定级备案：编写定级报告、填写定级备案表，完成在公安机关的定级备案</span>
      </nav>
      <nav>
        <span></span>
        <span>差距评估：采用技术手段和访谈调查方式发现现状与国家要求之间的差距</span>
      </nav>
      <nav>
        <span></span>
        <span>方案设计：依照国家相关标准，完成等级保护建设整改方案设计</span>
      </nav>
      <nav>
        <span></span>
        <span>建设整改：完成设备采购及调整、策略配置调优、完善管理制度等工作</span>
      </nav>
      <nav>
        <span></span>
        <span>系统测评：请测评中心完成系统测评，获得测评报告</span>
      </nav>
    </aside>
    <aside class="py-3">
      <article>等级保护建设解决方案</article>
      <div></div>
      <nav>
        <span></span>
        <span>等级保护建设解决方案助力用户《信息安全技术网络安全等级保护基本要求》建设。我们以等保相关标准为依据，依托丰富的网络安全行业经验，提升用户网络关键基础设施综合管理能力，助力用户通过等级保护测评。</span>
      </nav>
      <nav>
        <span></span>
        <span>管理与运营是企业安全性的最终体现，随着安全越发受重视，企业在安全管理方面也要与时俱进。IT运维是一个很大的范畴，涉及到的部门、架构、技术、产品十分广泛。网络管理软件是运维人员应配备的管理工具。</span>
      </nav>
      <nav>
        <span></span>
        <span>用户可配套“监控+分析+运维+安管+日志+开发”六大模块进行IT运维智能管理，对网络设备、计算机、服务器、智能设备、物联网、工业设备、光设备、云设备、通信设备等所有联网设备及软件服务的集中管控，实现用户IT业务运营维护AI智能化、自动化、精细化、可视化、大数据分析、功能扩展和开发集成的需求。</span>
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