<template>
  <div
      class="relative w-full flex flex-row items-start justify-start cursor-pointer max-w-full max-h-full overflow-auto"
      @click="openFramePopup1"
  >
    <div class="w-full px-5 ">
      <carousel>
        <slide v-for="slide in 17" :key="slide">
          <div class="carousel__item">
            <img class="w-full" :src="`/album_${slide + 1}.jpg`" alt=""/>
          </div>
        </slide>

        <template #addons class="hidden lg:block">
          <navigation/>
          <pagination/>
        </template>
      </carousel>
    </div>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import PortalPopup from "./PortalPopup.vue";
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

export default defineComponent({
  name: "FrameComponent",
  data() {
    return {isFramePopup1Open: false};
  },
  components: {
    PortalPopup, Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    onClose: {type: Function},
  },
  methods: {
    openFramePopup1() {
      this.isFramePopup1Open = true;
    },
    closeFramePopup1() {
      this.isFramePopup1Open = false;
    },
  },
});
</script>