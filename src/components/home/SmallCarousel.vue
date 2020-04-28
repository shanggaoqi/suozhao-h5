<template>
  <div class="small">
    <article>产品展示</article>
    <aside>
      <div></div>
    </aside>
    <!-- <b-carousel
      :interval="3000"
       img-width="1024"
       img-height="480"
       controls
    >
     
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../assets/home/chanpin@2x.png"
            alt="西安索兆信息科技有限公司"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../assets/home/chanpin2@2x.png"
            alt="西安索兆信息科技有限公司"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../assets/home/chanpin3@2x.png"
            alt="西安索兆信息科技有限公司"
          >
        </template>
      </b-carousel-slide>
    </b-carousel> -->
    <section class="pb-3">
      <img width="100%" src="../../assets/home/chanpin@2x.png" alt="西安星云宇博数据科技有限公司">
    </section>
    <section class="pb-3">
      <img width="100%" src="../../assets/home/chanpin2@2x.png" alt="西安星云宇博数据科技有限公司">
    </section>
    <section class="p-0">
      <img width="100%" src="../../assets/home/chanpin3@2x.png" alt="西安星云宇博数据科技有限公司">
    </section>
  </div>
</template>

<script>
export default {
  name:'SmallCarousel'
}
</script>

<style scoped>
@media screen and (max-width: 1024px) {
  .small{
    background: #f1f3f6;
    padding:4% 5%;
  }
  .small>article{
    width:100%;
    text-align: center;
    font-size: 1.1rem;
    color: #333333;
  }
  .small>aside{
   width: 100%;
  }
  .small>aside>div{
   width:18%;
   height: 3px;
   background: #50B8F6;
   /* text-align: center; */
   margin-left: 41%;
   margin-bottom: 3%;
  }
}
</style>