<template>
  <div>
   <Carousel></Carousel>
   <Search></Search>
   <small-carousel></small-carousel>
  </div>
</template>

<script>

import Carousel from '../components/home/Carousel'
import Search from '../components/home/Search'
import SmallCarousel from '../components/home/SmallCarousel'
export default {
  name: 'Home',
  components:{
    Carousel,
    Search,
    SmallCarousel
  }
}
</script>
<style scoped>
@media screen and (max-width: 1024px) {
  
}
</style>
