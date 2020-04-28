<template>
  <div>
   <header class="d-flex flex-row flex-nowrap justify-content-between">
      <div @click="jump()">
        <img width="100%" src="../../assets/about/icon_gengduo1@2x.png" alt="西安星云宇博数据科技有限公司">
     </div>
     <div>金融行业</div>
   </header>
   <article>
    <header>
      <nav>金融行业综合网管解决方案</nav>
      <aside>
        <div></div>
      </aside>
      <article>网络已成为新经济时代的基础设施,它的质量直接决定了社会及经济生活的质量。同样，伴随着市场经济的发展，金融行业也逐步走向网络化，金融行业的网络管理和维护已经成为金融管理的一个重要环节，金融行业网络运行管理和维护的质量直接影响了金融行业的运行质量，而故障处理的响应速度直接影响到了用户对运行商的信赖程度及评价。</article>
    </header>
    <aside class="py-3">
      <article>金融行业网管需求</article>
      <div></div>
      <nav>
        <span></span>
        <span>支持可视化管理，以拓扑图的形式展示网络</span>
      </nav>
      <nav>
        <span></span>
        <span>分布式管理，网管可以在能上网的任何地方（本地和远程管理），统一管理整个集团的网络。</span>
      </nav>
      <nav>
        <span></span>
        <span>具有全面的网络管理功能，支持权限分配</span>
      </nav>
      <nav>
        <span></span>
        <span>具有数据管理功能，支持支持多维度数据的统计分析</span>
      </nav>
      <nav>
        <span></span>
        <span>具有可扩展性，支持网络管理标准，提供开发式API接口，能够支持多种网络管理协议。</span>
      </nav>
      <nav>
        <span></span>
        <span>支持用户自定义策略，对所收集到的事件进行自动处理，做出各种响应动作。</span>
      </nav>
    </aside>
    <aside class="py-3">
      <article>金融行业综合网管解决方案</article>
      <div></div>
      <nav>
        <span></span>
        <span>自动发现网络设备，迅速搜索整个网络内的所有节点，支持多厂商的设备组成的“混合”网络</span>
      </nav>
      <nav>
        <span></span>
        <span>智能分析网络拓扑结构，自动勾画出整个网络的的真实物理拓扑图，真实反映整个网络的运行状态。</span>
      </nav>
      <nav>
        <span></span>
        <span>支持7×24小时连续运行，保持快速的实时响应能力，以保证整个业务系统的通常运行。</span>
      </nav>
      <nav>
        <span></span>
        <span>支持多种告警机制，自定义配置告警阈值，支持快速标示已经执行操作的告警，迅速定位告警设备。</span>
      </nav>
      <nav>
        <span></span>
        <span>从用户网络、用户权限进行设置、对黑白名单的控制和MAC-IP的角度对全网设备进行安全监控。</span>
      </nav>
      <nav>
        <span></span>
        <span>实现对网络设备、数据流量、服务器、网络应用的全面监控，确保整个IT系统从网络到应用的正常运行。</span>
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