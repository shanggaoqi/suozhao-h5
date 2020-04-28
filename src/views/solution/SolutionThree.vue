<template>
  <div>
   <header class="d-flex flex-row flex-nowrap justify-content-between">
      <div @click="jump()">
        <img width="100%" src="../../assets/about/icon_gengduo1@2x.png" alt="西安星云宇博数据科技有限公司">
     </div>
     <div>交通行业</div>
   </header>
   <article>
    <header>
      <nav>交通行业综合网管解决方案</nav>
      <aside>
        <div></div>
      </aside>
      <article>该网管平台立足于平台的安全性、可扩展性、管理性、可靠性和易用性，针对交通行业网络特点定制的专属网络管理解决方案。</article>
      
    </header>
    <aside class="py-3">
      <article>交通行业网管需求</article>
      <div></div>
      <nav>
        <span></span>
        <span>自动搜索发现核心层、汇聚层、接入层等网络中交换机设备、服务器等设备  </span>
      </nav>
      <nav>
        <span></span>
        <span>自动生成拓扑，形成工业冗余环网并标识阻塞链路和阻塞点</span>
      </nav>
      <nav>
        <span></span>
        <span>基于面板图的方式管理交换机设备，重点监控工业交换机的光口</span>
      </nav>
      <nav>
        <span></span>
        <span>对交换机设备的端口状态、链路状态监控。流量等性能数据采集</span>
      </nav>
      <nav>
        <span></span>
        <span>对服务器设备的系统资源如CPU、内存、磁盘使用率的监控</span>
      </nav>
      <nav>
        <span></span>
        <span>必须能够第一时间发现故障，通过多种方式通知管理员</span>
      </nav>
      <nav>
        <span></span>
        <span>尽可能长时间的保留网管数据，提供统计报表</span>
      </nav>
    </aside>
    <aside class="py-3">
      <article>该网管平台交通行业综合网管解决方案</article>
      <div></div>
      <nav>
        <span></span>
        <span>安全性：通过支持对用户网络、用户权限进行设置，对MAC-IP和黑白名单的控制，通过多层次多角度提升网络安全性，保障用户网络安全。</span>
      </nav>
      <nav>
        <span></span>
        <span>管理性：该网管平台平台统一管理全网网络设备，无品牌和类型的限制，支持同时对多台设备进行配置/备份和设备软件管理以及设备参数管理，以减少管理员的工作量，提高系统的可用性。</span>
      </nav>
      <nav>
        <span></span>
        <span>可靠性：电信级软件架构的微内核精简技术，100% Java多层分布式技术，提供了电信级可靠性保障。支持容灾方案以及双机热备方案，网管平台安全可靠。</span>
      </nav>
      <nav>
        <span></span>
        <span>易用性：键式智能化网管，一键搜索、发现、识别网络设备、资源、链路，自动生成拓扑图，全面完整呈现网络的拓扑结构，智能化故障管理，最大限度提高产品的易用性。</span>
      </nav>
      <nav>
        <span></span>
        <span>可扩展性：的设备类型、未知设备种类，用户无需开发编程，系统提供的策略扩展GUI界面，就可完成对新设备的支持。同时，提供众多可复用可扩展的框架模块以及深入代码级的开发模式，能够在原有通用功能的基础上对平台进行扩展开发。</span>
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