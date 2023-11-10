<template>
  <div
      class="relative bg-whitesmoke h-full text-left text-[48px] text-black font-dancing-script"
  >
    <div class="absolute top-[0px] flex flex-col w-screen">
      <Navbar/>
      <HeroBanner/>
      <div
          class="overflow-x-auto flex flex-col items-center justify-start lg:py-40 px-0 box-border gap-[200px]"
      >
        <Container1/>
        <Container/>
      </div>
      <Section2/>
      <SectionAlbum/>
      <!--      <Section1 />-->
      <div
          class="lg:flex lg:flex-col items-center justify-start px-0 box-border"
      >
        <div class="flex flex-row items-center justify-between gap-10">
          <img
              class="relative w-full lg:w-[700px] lg:h-[734px] object-cover"
              alt=""
              src="/thank_you.png"
          />
          <div class="hidden lg:block relative lg:w-[565px] lg:h-[532px]">
            <div class="absolute top-[237px] left-[220px] leading-[120%] text-[72px]">
              Thank you!
            </div>
          </div>
        </div>
      </div>
        <playlist/>
    </div>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import Navbar from "../components/Navbar.vue";
import HeroBanner from "../components/HeroBanner.vue";
import Container1 from "../components/Container1.vue";
import Container from "../components/Container.vue";
import Section2 from "../components/TimeAndLocation.vue";
import Section1 from "../components/Wishes.vue";
import Section from "../components/Album.vue";
import SectionAlbum from "../components/Album.vue";
import Playlist from "../components/Playlist.vue";

export default defineComponent({
  name: "Desktop1",
  components: {
    Playlist,
    SectionAlbum,
    Navbar,
    HeroBanner,
    Container1,
    Container,
    Section2,
    Section1,
    Section,
  },
  data() {
    return {
      playList: [
        "1", "2", "3"
      ]
    }
  }
});
</script>
