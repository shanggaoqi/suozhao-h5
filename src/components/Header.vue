<template>
  <div v-if="isShowBack">
    <header>西安星云宇博数据科技有限公司</header>
    <nav>
      <span style="width:50px;" class="nav1" @click="nav1()">首页</span>
      <span class="nav2" @click="nav2()">产品中心</span>
      <span class="nav3" @click="nav3()">解决方案</span>
      <span class="nav4" @click="nav4()">技术服务</span>
      <span class="nav5" @click="nav5()">企业动态</span>
      <span class="nav6" @click="nav6()">关于我们</span>
    </nav>
  </div>
</template>

<script>
var that;
export default {
  name:'Header',
    data() {
      return {
        msg: '',
        isShowBack:true
      }
    },
    watch:{
      '$route':function(){
        that = this;
        // console.log('watch里面',that.$route.name);
        if(that.$route.name == 'home'){
          that.isShowBack = true;
        }else if(that.$route.name == 'product'){
          that.isShowBack = true;
        }else if(that.$route.name == 'solution'){
          that.isShowBack = true;
        }else if(that.$route.name == 'technology'){
          that.isShowBack = true;
        }else if(that.$route.name == 'company'){
          that.isShowBack = true;
        }else if(that.$route.name == 'about'){
          that.isShowBack = true;
        }else{
          that.isShowBack = false;
        }
      }
    },
  methods:{
    nav1(){
      $('.nav1').addClass('add');
      $('.nav2').removeClass('add');
      $('.nav3').removeClass('add');
      $('.nav4').removeClass('add');
      $('.nav5').removeClass('add');
      $('.nav6').removeClass('add');
      this.$router.push({name:'home'});
    },
    nav2(){
      $('.nav2').addClass('add');
      // $('nav').addClass('addnav');
      $('.nav1').removeClass('add');
      $('.nav3').removeClass('add');
      $('.nav4').removeClass('add');
      $('.nav5').removeClass('add');
      $('.nav6').removeClass('add');
      this.$router.push({name:'product'});
    },
    nav3(){
      $('.nav3').addClass('add');
      // $('nav').addClass('addnav2');
      $('.nav1').removeClass('add');
      $('.nav2').removeClass('add');
      $('.nav4').removeClass('add');
      $('.nav5').removeClass('add');
      $('.nav6').removeClass('add');
      this.$router.push({name:'solution'});
    },
    nav4(){
       $('.nav4').addClass('add');
      //  $('nav').removeClass('addnav');
       $('.nav1').removeClass('add');
      $('.nav2').removeClass('add');
      $('.nav3').removeClass('add');
       $('.nav5').removeClass('add');
      $('.nav6').removeClass('add');
      this.$router.push({name:'technology'});

    },
    nav5(){
      $('.nav5').addClass('add');
      // $('nav').addClass('addnav');
      $('.nav1').removeClass('add');
      $('.nav2').removeClass('add');
      $('.nav3').removeClass('add');
      $('.nav4').removeClass('add');
      $('.nav6').removeClass('add');
      this.$router.push({name:'company'});
    },
    nav6(){
      $('.nav6').addClass('add');
      $('.nav1').removeClass('add');
      $('.nav2').removeClass('add');
      $('.nav3').removeClass('add');
      $('.nav4').removeClass('add');
      $('.nav5').removeClass('add');
      this.$router.push({name:'about'});
    }
  },
  mounted:function(){
    $('.nav1').addClass('add');
  }
  
}
</script>

<style scoped>
  @media screen and (max-width: 1024px) {
    div{
      background: #2F3A4A;
    }
    div>header{
      width: 100%;
      text-align: center;
      font-size:1rem;
      font-weight:800;
      color:rgba(255,255,255,1);
      padding: 1rem 0 1.3rem;
    }
    div>nav{
    width:100%;
    overflow-x: scroll;
    overflow-y:hidden;
    /* vertical-align: top; */
    white-space: nowrap;
    padding-left:5%;   
    -webkit-overflow-scrolling: touch;
    
      /* display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      cursor: pointer; */
    }
    .addnav{
      transform: translate(-20%, 0); 
    }
    /* .addnav2{
      transform: translate(-16%, 0); 
    }
    .addnav3{
      transform: translate(-24%, 0); 
    } */
    .add{
      color: #01BFEF;
      border-bottom:2px solid #01BFEF;
    }
    div>nav>span{
      color:rgba(255,255,255,1);
      opacity:0.5;
      font-size: .95rem;
      box-sizing: border-box;
      padding-bottom: .3rem;
      width:90px;
      display: inline-block;
      text-align: center;
      border-bottom:2px solid transparent;
      
    }
  }
</style>