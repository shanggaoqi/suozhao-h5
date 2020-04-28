<template>
  <div>
      <b-carousel
      :interval="3000"
      img-width="1024"
      img-height="480"
      controls
    >
      <!-- Text slides with image -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../assets/home/banner@2x.png"
            alt="西安星云宇博数据科技有限公司"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../assets/home/banner1@2x.png"
            alt="西安星云宇博数据科技有限公司"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../assets/home/banner2@2x.png"
            alt="西安星云宇博数据科技有限公司"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name:'Carousel'
}
</script>

<style scoped>
@media screen and (max-width: 1024px) {

}
</style>