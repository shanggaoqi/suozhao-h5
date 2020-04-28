<template>
  <div>
   <header class="d-flex flex-row flex-nowrap justify-content-between">
      <div @click="jump()">
        <img width="100%" src="../../assets/about/icon_gengduo1@2x.png" alt="西安星云宇博数据科技有限公司">
     </div>
     <div>自动化拓扑</div>
   </header>
   <article>
    <header>
      <nav>自动化拓扑解决方案</nav>
      <aside>
        <div></div>
      </aside>
      <article>进入21世纪以来，政府、企业等各机构的正常办公、生产工作已离不开网络环境，但实际生产环境中网络情况往往非常复杂，设备数量众多且种类繁杂，而不同厂商的设备又不能在一套网管系统里进行管理，设备间复杂的链路关系也需要手动设置，为网管人员的工作增加了难度，因此提出了自动化拓扑的需求。</article>
    </header>
    <aside class="py-3">
      <article>关于自动化拓扑的需求</article>
      <div></div>
      <nav>
        <span></span>
        <span>对于不同种类和不同厂商的设备，网管能通过多种协议，将其集中显示，并自动生成拓扑。</span>
      </nav>
      <nav>
        <span></span>
        <span>拓扑需显示的设备数量庞大时，网管能自动、高效地显示拓扑。</span>
      </nav>
      <nav>
        <span></span>
        <span>对于中间件/数据库等软件服务，网管的拓扑能自动化地显示和网络设备的连接关系。</span>
      </nav>
      <nav>
        <span></span>
        <span>拓扑能显示设备告警，链路状态等重要信息。</span>
      </nav>
      <nav>
        <span></span>
        <span>拓扑能智能识别链路，区分工业环网中的主用、备用链路和链路状态。</span>
      </nav>
      <nav>
        <span></span>
        <span>拓扑能智能发现网络设备的下挂设备。</span>
      </nav>
      <nav>
        <span></span>
        <span>对于特殊的拓扑操作功能，网管可以通过特殊的定制开发进行实现，且能与常见功能很好地结合。</span>
      </nav>
    </aside>
    <aside class="py-3">
      <article>自动化拓扑解决方案</article>
      <div></div>
      <nav>
        <span></span>
        <span>多种协议类型统一管理</span>
      </nav>
      <nav>
        <span></span>
        <span>拓扑显示告警、链路信息</span>
      </nav>
      <nav>
        <span></span>
        <span>智能链路识别</span>
      </nav>
      <nav>
        <span></span>
        <span>下挂设备管理</span>
      </nav>
      <nav>
        <span></span>
        <span>定制开发</span>
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