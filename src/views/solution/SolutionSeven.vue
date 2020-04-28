<template>
  <div>
   <header class="d-flex flex-row flex-nowrap justify-content-between">
      <div @click="jump()">
        <img width="100%" src="../../assets/about/icon_gengduo1@2x.png" alt="西安星云宇博数据科技有限公司">
     </div>
     <div>电力行业</div>
   </header>
   <article>
    <header>
      <nav>电力行业综合网管解决方案</nav>
      <aside>
        <div></div>
      </aside>
      <article>电力行业是国家的重点单位，关系到国计民生。随着电力行业的不断发展，电力的关键业务不断增长，因此信息化应用也不断增强，网络系统中的应用越来越多，网络管理的难度也越来越大。同时，随着互联网技术的发展，建立在互联网上的跨地区、全行业系统内部信息网开始逐步建立，网上应用着各种电力业务。</article>
      <article>与此同时，电力信息网络系统的网络安全问题愈来愈显得重要。那么，如何保障电力单位的网络系统畅通无阻，及时发现网络故障，避免网络安全事故发生成了电力企业IT人员的一个挑战。</article>
    </header>
    <aside class="py-3">
      <article>电力行业网管需求</article>
      <div></div>
      <nav>
        <span></span>
        <span>减轻网络管理部门的工作压力，为电网的安全生产和企业信息化提供保障。</span>
      </nav>
      <nav>
        <span></span>
        <span>具备7*24小时监控的能力，能采集并分析整个网络的所有数据</span>
      </nav>
      <nav>
        <span></span>
        <span>可对整个网络以及网络中所有节点进行流量统计的功能</span>
      </nav>
      <nav>
        <span></span>
        <span>可分析网络中具体应用的功能</span>
      </nav>
      <nav>
        <span></span>
        <span>精确监测电力网络中的关键应用</span>
      </nav>
      <nav>
        <span></span>
        <span>具备自动、快速准确排查故障的能力，网络一旦发生故障，可以第一时间准确定位故障点，将故障损失降到最低</span>
      </nav>
      <nav>
        <span></span>
        <span>可提供丰富的图表和报表报告</span>
      </nav>
    </aside>
    <aside class="py-3">
      <article>电力行业综合网管解决方案</article>
      <div></div>
      <nav>
        <span></span>
        <span>全面的网络监视，全面监控整个网络、一个部门、一个网段、关键设备、网络服务器以及终端PC的情况，从而对网络进行全方面多角度监控，保障电力网的正常运营，并为网络评估、网络整改、网络扩充提供原始数据依据。</span>
      </nav>
      <nav>
        <span></span>
        <span>网络出口带宽分析，对整个网络的出口带宽进行分析，从而确定当出口带宽的负载情况。</span>
      </nav>
      <nav>
        <span></span>
        <span>网络资源能够自动发现并进行图形化展示。 对设备故障自动报警、自动通知、自动响应。 具有全面的安全管理功能。</span>
      </nav>
      <nav>
        <span></span>
        <span>支持7×24小时连续运行，具备对网络通讯的长期捕获和海量存储能力。借助该功能，网络管理人员可以对整个网络进行长期监控，保障网络的持续可靠运行。</span>
      </nav>
      <nav>
        <span></span>
        <span>实时诊断出网络中的故障，并自动告诉用户当前网络故障原因和推荐的解决方法。实现对网络故障进行快速分析和准确定位，从而简化了网络故障的排查过程。</span>
      </nav>
      <nav>
        <span></span>
        <span>支持网络故障回放的能力。通过对网络故障数据进行回放，可重现网络通讯的原始信息，并对网络故障的整个工程进行全方位跟踪，从而增加对故障的认知，减轻故障的排查难度，并提高故障排查效率。</span>
      </nav>
       <nav>
        <span></span>
        <span>生成全局的统计报表，也可以为每个主机或每个节点单独生成报表，网络管理人员通过报表的数据，可以从宏观上了解整个网络、某个网段、某个部门或某个主机的整体工作情况。</span>
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