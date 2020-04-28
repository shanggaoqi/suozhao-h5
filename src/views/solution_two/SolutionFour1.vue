<template>
  <div>
   <header class="d-flex flex-row flex-nowrap justify-content-between">
      <div @click="jump()">
        <img width="100%" src="../../assets/about/icon_gengduo1@2x.png" alt="西安星云宇博数据科技有限公司">
     </div>
     <div>网络运维</div>
   </header>
   <article>
    <header>
      <nav>网络运维解决方案</nav>
      <aside>
        <div></div>
      </aside>
      <article>随着网络应用的普及，各行各业的运行和发展都已离不开网络，网络运维的意义和面临的挑战都越来越大。优质的网管软件可以提升网络运维效率，从而让企业提供更优质的服务、减少运营成本、提升用户体验，所以选取优质高效的网管系统至关重要。</article>
    </header>
    <aside class="py-3">
      <article>网络运维面临的难题</article>
      <div></div>
      <nav>
        <span></span>
        <span>网管无法集中监控：网络中设备类型众多，思科、华为、DELL等各厂家的设备都需要使用特定的监控软件，功能操作复杂且监控软件部署分散，无法使用统一的一套网管系统监控全网的所有设备。</span>
      </nav>
      <nav>
        <span></span>
        <span>网管功能操作复杂：网络中设备数量众多，连接情况复杂，搭建网管系统或增加、删除设备时需要手动修改设备和链路信息，费时费力。</span>
      </nav>
      <nav>
        <span></span>
        <span>网管对中间件、数据库和虚拟化监控不足：传统的网管软件往往监控的是网络设备，如交换机、路由器等，对中间件、数据库和虚拟化监控能力不足。</span>
      </nav>
      <nav>
        <span></span>
        <span>网管操作终端单一：网管软件的操作界面往往依赖于客户端，想在其它终端上查看网管信息，需要重新安装客户端。</span>
      </nav>
      <nav>
        <span></span>
        <span>网管安装部署困难：对于不同的操作系统版本，需要选用特定版本的网管软件，软件安装和设置的操作过程各不相同，部署成本高且无法跨平台移植使用。</span>
      </nav>
      <nav>
        <span></span>
        <span>网管对国产化平台兼容性差：在“国产化”的浪潮下，越来越多的政府和企事业单位选择了使用国产化的设备和软件，如龙芯、浪潮的服务器，中标麒麟、红旗麒麟的操作系统，金仓、达梦的数据库和东方通的中间件等，而网管软件对国产化平台的兼容性往往不尽人意，尤其是外国的网管软件，无法满足国产化平台的需求。</span>
      </nav>
      
    </aside>
    <aside class="py-3">
      <article>网络运维网管解决方案</article>
      <div></div>
      <nav>
        <span></span>
        <span>管控万物、集中监控</span>
      </nav>
      <nav>
        <span></span>
        <span>操作简单、智能化管理</span>
      </nav>
      <nav>
        <span></span>
        <span>实现对中间件、数据库、虚拟化的监控</span>
      </nav>
      <nav>
        <span></span>
        <span>多种方式通知告警</span>
      </nav>
      <nav>
        <span></span>
        <span>多种方式操作网管</span>
      </nav>
      <nav>
        <span></span>
        <span>安装简单、跨平台运行</span>
      </nav>
      <nav>
        <span></span>
        <span>实现成本控制</span>
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