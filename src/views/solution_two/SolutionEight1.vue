<template>
  <div>
   <header class="d-flex flex-row flex-nowrap justify-content-between">
      <div @click="jump()">
        <img width="100%" src="../../assets/about/icon_gengduo1@2x.png" alt="西安星云宇博数据科技有限公司">
     </div>
     <div>制造业</div>
   </header>
   <article>
    <header>
      <nav>制造业综合网管解决方案</nav>
      <aside>
        <div></div>
      </aside>
      <article>制造业网络规模不是很大，但是设备由于企业发展规模的改变，采购时间不一，设备多种多样。管理复杂，网络上运行的系统一般为OA、MIS等，主要需求是对网络的基本特点进行管理，但是由于IT部门不是企业的利润部门，大部分企业对其投入都不大，这就要求管理产品简单、直观、易用。</article>
      <article>制造业网管解决方案具有整体性，既考虑了园区网建设，又注重了广域网互连及多种接入手段。在设计网络管理方案时，综合考虑了网络安全、网络管理和网络优化等方面的问题。符合制造业对网络管理的要求，提供简单、智能的管理。是真正能用的起来，能为客户解决问题的系统。</article>
    </header>
    <aside class="py-3">
      <article>制造业网管解决方案</article>
      <div></div>
      <nav>
        <span></span>
        <span>支持可视化管理，以拓扑图的形式展示网络</span>
      </nav>
      <nav>
        <span></span>
        <span>实现数据管理功能，支持支持多维度数据的统计分析</span>
      </nav>
      <nav>
        <span></span>
        <span>具有可扩展性，支持网络管理标准，提供开发式API接口，能够支持多种网络管理协议</span>
      </nav>
      <nav>
        <span></span>
        <span>实现主动及时的故障管理，并支持对历史故障数据的回放和统计分析</span>
      </nav>
      <nav>
        <span></span>
        <span>支持7×24小时连续运行，保持快速的实时响应能力，以保证整个业务系统的通常运行</span>
      </nav>
    </aside>
    <!-- <aside class="py-3">
      <article>政府部门综合网管解决方案</article>
      <div></div>
      <nav>
        <span></span>
        <span>全面实现国产化，完全支持基于国产龙芯等处理器，曙光、龙芯、银河服务器；支持中标麒麟、红旗Linux操作系统；支持达梦、金仓数据库。</span>
      </nav>
      <nav>
        <span></span>
        <span>分布式部署，以一级网络辐射下级网络，在上级管理机上可以查看、监管下级管理机的管理视图，并通过下级管理机实时地了解下级网络的运行状况。</span>
      </nav>
      <nav>
        <span></span>
        <span>网络资源能够自动发现并进行图形化展示。 对设备故障自动报警、自动通知、自动响应。 具有全面的安全管理功能。</span>
      </nav>
      <nav>
        <span></span>
        <span>监控网络设备端口使用率，CPU使用率，内存的利用率，并可以为设备监控参数设定阈值。</span>
      </nav>
      <nav>
        <span></span>
        <span>具有可扩展性，支持网络管理标准，提供开发式API接口，能够支持多种网络管理协议。</span>
      </nav>
      <nav>
        <span></span>
        <span>对网络管理信息进行历史积累，可生成统计报表进行分析。</span>
      </nav>
    </aside> -->
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