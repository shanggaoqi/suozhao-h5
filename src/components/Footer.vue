<template>
  <div>
    <header class=" d-flex flex-row flex-nowrap justify-content-between">
      <aside>
        <article>联系电话</article>
        <nav>19991960904</nav>
        <article>公司邮箱</article>
        <nav>suozhao@xiansz.top</nav>
        <article>公司地址</article>
        <nav>陕西省西安市高新区海星城市广场A座1609室</nav>
      </aside>
      <nav>
        <img src="../assets/erweima@2x.png" alt="西安星云宇博数据科技有限公司">
      </nav>
    </header>
    <footer>
      <span>
        <a href="http://www.beian.miit.gov.cn/" target="_blank">陕ICP备17016241号</a>
      </span>
      <span>西安星云宇博数据科技有限公司</span>
    </footer>
  </div>
</template>

<script>
export default {
  name:'Footer'
}
</script>

<style scoped>
 @media screen and (max-width: 1024px) {
   div>header{
     background:#3A3D41;
     color: #FFFFFF;
     font-size:.9rem;
     padding:5% 2% 0;
   }
   div>header>aside>nav{
    opacity: .5;
    padding-bottom: 5%;
   }
   div>header>nav{
     width: 20%;
   }
   div>header>nav>img{
     width: 100%;
   }
   div>footer{
     background: #2A2D30;
     padding:2% 0;
     text-align: center;
   }
   div>footer>span:first-child{
     display: inline-block;
     margin-right: .5rem;
   }
   div>footer>span:first-child>a{
     color:#ffffff;
     font-size:.7rem;
     opacity: .5;
     text-decoration: none;
   }
   div>footer>span:last-child{
     opacity: .5;
     color:#ffffff;
     font-size:.7rem;
   }
 }
</style>