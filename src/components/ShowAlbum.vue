<script>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

export default {
  name: "ShowAlbum",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>

<template>

  <div class="w-screen h-screen lg:w-[900px] lg:h-[100vh - 400px]">
    <carousel>
      <slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          <img :src="`/album_${slide + 1}.jpg`" alt=""/>
        </div>
      </slide>

      <template #addons class="hidden lg:block">
        <navigation/>
        <pagination/>
      </template>
    </carousel>
  </div>

</template>

<style scoped>

</style>