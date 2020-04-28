<template>
  <div>
    <header>
      <img width="100%" src="../assets/company/banner_cpdt@2x.png" alt="西安星云宇博数据科技有限公司">
    </header>
    
      <nav @click="jump1()" class="pb-3 d-flex flex-row flex-nowrap justify-content-between">
        <article>
          <header>2020年11项网络安全预测</header>
          <nav>我们向Gurucul高管查询了2020年的预测，并确定了以下2020年的11项网络安全预测。我们将在明年的这个时候......</nav>
          <section>
            <span>3月25日</span>
            <span>12:53:00</span>
          </section>
        </article>
        <div>
          <img src="../assets/company/six_one.6855bbbb.jpg" alt="西安星云宇博数据科技有限公司">
        </div>
      </nav>
      <nav  @click="jump4()" class="pb-3 d-flex flex-row flex-nowrap justify-content-between">
        <article>
          <header>2020年十大网络安全热点</header>
          <nav>随着网络威胁泛化的愈演愈烈，安全形势变得越来.......</nav>
          <section>
            <span>3月23日</span>
            <span>11:40:00</span>
          </section>
        </article>
        <div>
          <img src="../assets/company/five_one.99bb4aa8.jpg" alt="西安星云宇博数据科技有限公司">
        </div>
      </nav>
      <nav  @click="jump5()" class="pb-3 d-flex flex-row flex-nowrap justify-content-between">
        <article>
          <header>三国专家论道网络安全云峰会</header>
          <nav>在“你中有我，我中有你”的全球化时代，疫情的蔓延让所有.......</nav>
          <section>
            <span>3月21日</span>
            <span>11:52:00</span>
          </section>
        </article>
        <div>
          <img src="../assets/company/four_two.a6cee122.jpg" alt="西安星云宇博数据科技有限公司">
        </div>
      </nav>
      <nav  @click="jump2()" class="pb-3 d-flex flex-row flex-nowrap justify-content-between">
        <article>
          <header>自动化运维监控工具诞生</header>
          <nav>自动化运维监控工具诞生,通过DCOS的全生命周期自动化平台管理.......</nav>
          <section>
            <span>3月19日</span>
            <span>18:00:00</span>
          </section>
        </article>
        <div>
          <img src="../assets/company/three_one.8184bae1.jpg" alt="西安星云宇博数据科技有限公司">
        </div>
      </nav>
      <nav  @click="jump6()" class="pb-3 d-flex flex-row flex-nowrap justify-content-between">
        <article>
          <header>2020年IPv6端到端贯通能力提升</header>
          <nav>工业和信息化部近日发文部署开展.......</nav>
          <section>
            <span>3月18日</span>
            <span>15:40:00</span>
          </section>
        </article>
        <div>
          <img src="../assets/company/pc_nes@2x.png" alt="西安星云宇博数据科技有限公司">
        </div>
      </nav>
      <div v-show="show2">
        <nav  @click="jump3()" class="pb-3 d-flex flex-row flex-nowrap justify-content-between">
        <article>
          <header>中小企业数字化赋能行动方案</header>
          <nav>《方案》提出，要坚持统筹推进新冠肺炎疫情防控和经济社会发展，以新一代信息技术与应用为支撑......</nav>
          <section>
            <span>3月17日</span>
            <span>15:00:00</span>
          </section>
        </article>
        <div>
          <img src="../assets/company/pc_nes@2x.png" alt="西安星云宇博数据科技有限公司">
        </div>
      </nav>
      </div> 
    <footer @click="show1()" class="my-2" v-show="xianshi">
      <span>查看更多</span>
      <img width="70%" src="../assets/about/icon_gengduo1@2x.png" alt="西安星云宇博数据科技有限公司">
    </footer>
  </div>
</template>

<script>
export default {
  name:'Company',
  data(){
    return{
      xianshi:true,
      show2:false
    }
  },
  methods:{
     show1(){
      this.xianshi=false;
      this.show2=true;
    },
    jump1(){
      this.$router.push({name:'company_one'})
    },
    jump2(){
       this.$router.push({name:'company_two'})
    },
    jump3(){
       this.$router.push({name:'company_three'})
    },
    jump4(){
      this.$router.push({name:'company_four'})
    },
    jump5(){
      this.$router.push({name:'company_five'})
    },
    jump6(){
      this.$router.push({name:'company_six'})
    },
  }
  
}
</script>

<style scoped>
@media screen and (max-width: 1024px) {
  div>nav{
    padding:1rem 2%;
  }
 div>nav>article{
   width: 59%;
 }
 div>nav>article>header{
   color: #222222;
   font-size:1rem;
   font-weight: bold;
   padding-bottom:.3rem;  
 }
 div>nav>article>nav{
   font-size: .9rem;
   color: #666666;
 }
 div>nav>article>section{
   color: #999999;
   font-size: .9rem;
   padding:.8rem 0 0;
 }
 div>nav>article>section>span:last-child{
   font-size: .9rem;
   padding-left:1rem;
 }
 div>nav>div{
   width: 40%;
 }
 div>nav>div>img{
   width: 100%;
 }
 div>footer{
    font-size:.9rem;
    color: #999999;
    width: 100%;
    text-align: center;
  }
  div>footer>img{
    margin-left: .7rem;
    width:4%;
    padding-bottom:.2rem; 
  }
}

</style>