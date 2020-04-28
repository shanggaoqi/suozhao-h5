<template>
  <div>
    <header>
      <img width="100%" src="../assets/solution/banner_jjfa@2x.png" alt="西安星云宇博数据科技有限公司">
    </header>
    <article>
      <nav>行业解决方案</nav>
      <article>
        <div></div>
      </article>
      <aside class="py-4 d-flex flex-row flex-nowrap justify-content-between">
        <nav @click="solution1_1()">
          <img src="../assets/solution/zfdw@2x.png" alt="西安星云宇博数据科技有限公司">
          <div>政府单位</div>
        </nav>
        <nav @click="solution1_2()">
          <img src="../assets/solution/jrhy@2x.png" alt="西安星云宇博数据科技有限公司">
          <div>金融行业</div>
        </nav>
        <nav @click="solution1_3()">
          <img src="../assets/solution/jthy@2x.png" alt="西安星云宇博数据科技有限公司">
          <div>交通行业</div>
        </nav>
         
      </aside>
      <aside class="d-flex flex-row flex-nowrap justify-content-between">
        
        <nav @click="solution1_6()">
          <img src="../assets/solution/qyIT@2x.png" alt="西安星云宇博数据科技有限公司">
          <div>企业IT部门</div>
        </nav>
        <nav @click="solution1_7()">
          <img src="../assets/solution/dlhy@2x.png" alt="西安星云宇博数据科技有限公司">
          <div>电力行业</div>
        </nav>
         <nav @click="solution1_8()">
          <img src="../assets/solution/zzy@2x.png" alt="西安星云宇博数据科技有限公司">
          <div>制造业</div>
        </nav>
      </aside>
    </article>
     <article>
      <nav>应用解决方案</nav>
      <article>
        <div></div>
      </article>
      <aside class="py-4 d-flex flex-row flex-nowrap justify-content-between">
        <nav @click="solution2_1()">
          <img src="../assets/solution/wlaq@2x.png" alt="西安星云宇博数据科技有限公司">
          <div>网络安全</div>
        </nav>
        <nav @click="solution2_2()">
          <img src="../assets/solution/gchyy@2x.png" alt="西安星云宇博数据科技有限公司">
          <div>国产化应用</div>
        </nav>
        <nav @click="solution2_3()">
          <img src="../assets/solution/sbgk@2x.png" alt="西安星云宇博数据科技有限公司">
          <div>设备管控</div>
        </nav>
         <nav @click="solution2_4()">
          <img src="../assets/solution/wlyw@2x.png" alt="西安星云宇博数据科技有限公司">
          <div>网络运维</div>
        </nav>
      </aside>
      <aside class="d-flex flex-row flex-nowrap justify-content-between">
        <nav @click="solution2_5()">
          <img src="../assets/solution/zdhtp@2x.png" alt="西安星云宇博数据科技有限公司">
          <div>自动化拓扑</div>
        </nav>
        <nav @click="solution2_6()">
          <img src="../assets/solution/ywkz@2x.png" alt="西安星云宇博数据科技有限公司">
          <div>业务控制</div>
        </nav>
        <nav @click="solution2_7()">
          <img src="../assets/solution/djbh@2x.png" alt="西安星云宇博数据科技有限公司">
          <div>等级保护建设</div>
        </nav>
         <nav @click="solution2_8()">
          <img src="../assets/solution/gd@2x.png" alt="西安星云宇博数据科技有限公司">
          <div>更多</div>
        </nav>
      </aside>
    </article>
  </div>
</template>

<script>
export default {
  name:'Solution',
  methods:{
    //跳转政府单位
    solution1_1(){
      this.$router.push({name:'solution_one'});
    },
    //跳转金融单位
    solution1_2(){
      this.$router.push({name:'solution_two'});
    },
    //跳转交通行业
    solution1_3(){
      this.$router.push({name:'solution_three'});
    },
    //跳转企业it部门
    solution1_6(){
      this.$router.push({name:'solution_six'});
    },
    //跳转企业it部门
    solution1_7(){
      this.$router.push({name:'solution_seven'});
    },
    //跳转企业it部门
    solution1_8(){
      this.$router.push({name:'solution_eight'});
    },
    //跳转网络安全
    solution2_1(){
      this.$router.push({name:'solution_one1'});
    },
     //跳转网络安全
    solution2_2(){
      this.$router.push({name:'solution_two1'});
    },
    solution2_3(){
      this.$router.push({name:'solution_three1'});
    },
    solution2_4(){
      this.$router.push({name:'solution_four1'});
    },
    solution2_5(){
      this.$router.push({name:'solution_five1'});
    },
    solution2_6(){
      this.$router.push({name:'solution_six1'});
    },
    solution2_7(){
      this.$router.push({name:'solution_seven1'});
    },
    solution2_8(){
      // this.$router.push({name:'solution_eight1'});
    },
  }
}
</script>

<style scoped>
@media screen and (max-width: 1024px) {
  div>article{
    padding:6% 2%;
  }
  div>article>nav{
    width:100%;
    text-align: center;
    font-size: 1.3rem;
    color: #333333;
  }
  div>article>article{
   width: 100%;
  }
  div>article>article>div{
    width:18%;
    height: 3px;
    background: #50B8F6;
    /* text-align: center; */
    margin-left: 41%;
    margin-bottom: 3%;
  }
   div>article>aside>nav{
     width:20%;
     cursor: pointer;
   }
   div>article>aside>nav>img{
     width:100%;
   }
  div>article>aside>nav>div{
    padding-top: .5rem;
    font-size: .8rem;
    text-align: center;
  }
}
</style>