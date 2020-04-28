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
      <nav>2020年11项网络安全预测</nav>
      <aside>
        <div></div>
      </aside>
      <section style="text-align:center;color:#999999;font-size:1rem;">
        <span >3月25日</span>
        <!-- <span>浏览量: 56次</span> -->
      </section>
      <article>我们向Gurucul高管查询了2020年的预测，并确定了以下2020年的11项网络安全预测。我们将在明年的这个时候回头检查我们的准确性。同时，留意幽默学家里奥·罗斯滕（Leo Rosten）的话是明智的：“有些事情太出乎意料了，没人为他们做准备。” 这是合理的建议，尤其是对于不断发展的网络安全行业。</article>
      <article>预计2020年将进行大规模5G网络部署。该技术将为许多行业创造机遇，但也将带来来自网络黑暗面的更多威胁。根据ResearchAndMarkets.com的预测，预计EU5 5G市场将在2019年至2025年的预测期内呈现三位数的增长率。使用5G的企业面临的安全问题是，网络配置不同，供应商的解决方案和方法也大相径庭。我们可以预期在2020年看到的一些最大的5G问题涉及供应链和部署。庞大的5G供应链容易受到诸如恶意软件或硬件以及不良设计之类的漏洞的影响。此外，许多为5G网络提供硬件和软件的公司都有自己的安全漏洞。因此，我们应该期望网络资产妥协的增加和对数据机密性的负面影响。至于5G网络的部署，安全问题将包括增加的攻击面。这是由于与上一代无线网络相比，使用了更多的信息和通信技术（ICT）组件。</article>
    </header>
   </article>
   <section>
     <img width="100%" src="../../assets/company/six_one.6855bbbb.jpg" alt="西安星云宇博数据科技有限公司">
   </section>
   <nav>自动化攻击工具导致网络安全团队必须处理的数据量大量增加。人类不可能跟上如此大量的数据。组织进行反击的唯一有效方法是使用自己的自动化安全技术。自动化可以为IT部门带来很多繁重的工作。这样一来，网络安全团队就可以将更少的时间花费在尝试通过人工手段抵抗攻击上，徒劳无功。我们应该期望机器学习技术的有效性（和需求）有所提高，以便在异常行为和行动表明正在进行网络攻击时自动识别并进行干预。
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