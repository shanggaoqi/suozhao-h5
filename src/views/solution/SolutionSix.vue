<template>
  <div>
   <header class="d-flex flex-row flex-nowrap justify-content-between">
      <div @click="jump()">
        <img width="100%" src="../../assets/about/icon_gengduo1@2x.png" alt="西安星云宇博数据科技有限公司">
     </div>
     <div>企业IT部门</div>
   </header>
   <article>
    <header>
      <nav>企业IT部门综合网管解决方案</nav>
      <aside>
        <div></div>
      </aside>
      <article>随着经济和科技的迅猛发展，企业的信息化步入了一个崭新的时代，而随着企业规模的不断壮大，业务的不断拓展，企业信息化依赖的网络结构和IT技术越来越复杂。</article>
      <article>企业IT网管部门的网管软件和技术实力直接决定企业是否能提供提供稳定、可靠、快速、优质的服务。但是，传统网管监控设备种类受限，监控的效率不高，后期扩展困难，同时无法和企业的业务情况结合起来，无法提供足够的安全管控功能，致使企业IT系统运行维护的管理水平相对滞后。</article>
    </header>
    <aside class="py-3">
      <article>企业IT管理的需求</article>
      <div></div>
      <nav>
        <span></span>
        <span>全面深入的监控管理</span>
      </nav>
      <nav>
        <span></span>
        <span>不间断的全程监控</span>
      </nav>
      <nav>
        <span></span>
        <span>后期扩展设备的支持</span>
      </nav>
      <nav>
        <span></span>
        <span>IT复杂性与管理方便性的矛盾</span>
      </nav>
      <nav>
        <span></span>
        <span>清楚的掌控设备部署间的关系</span>
      </nav>
      <nav>
        <span></span>
        <span>与公司业务相结合</span>
      </nav>
      <nav>
        <span></span>
        <span>多层次的安全管理</span>
      </nav>
      <nav>
        <span></span>
        <span>成本的控制</span>
      </nav>
    </aside>
    <aside class="py-3">
      <article>该平台企业IT网管解决方案</article>
      <div></div>
      <nav>
        <span></span>
        <span>全面的监控管理</span>
      </nav>
      <nav>
        <span></span>
        <span>不间断的全程监控</span>
      </nav>
      <nav>
        <span></span>
        <span>对后期扩展设备的支持</span>
      </nav>
      <nav>
        <span></span>
        <span>真正解决IT复杂性与管理方便性的矛盾</span>
      </nav>
      <nav>
        <span></span>
        <span>清楚的掌控设备部署间的关系</span>
      </nav>
      <nav>
        <span></span>
        <span>提供业务管理功能</span>
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