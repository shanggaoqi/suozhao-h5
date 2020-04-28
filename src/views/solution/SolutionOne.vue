<template>
  <div>
   <header class="d-flex flex-row flex-nowrap justify-content-between">
      <div @click="jump()">
        <img width="100%" src="../../assets/about/icon_gengduo1@2x.png" alt="西安星云宇博数据科技有限公司">
     </div>
     <div>政府单位</div>
   </header>
   <article>
    <header>
      <nav>政府单位综合网关解决方案</nav>
      <aside>
        <div></div>
      </aside>
      <article>随着信息化建设的日益推进，各地政府的网络基础架构已经基本成熟，相应的网络设备、防火墙等都已配置得相对完善，在加紧网络安全策略的同时，各地方政府的下一步的信息化重点之一将是加强对网络的管理。因为，政府的信息化需要对网络资源进行有效使用，就是基于网络基础架构的各种应用的持续、稳定运行，而这些也都必须有自动化、智能化的网络管理软件作为保障。</article>
      <article>凡是网络存在的地方、有服务器或应用的地方都需要网络管理，都是网管软件的用武之地。从实际运用来看，网管软件在政府中主要应用于网络设备、服务器、中间件、数据库、电子邮件、WEB系统等方面。</article>
    </header>
    <aside class="py-3">
      <article>政府部门网管要求</article>
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
    </aside>
    <aside class="py-3">
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