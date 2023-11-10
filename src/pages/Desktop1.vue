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
      <div id="cata-page-music" class="fixed bottom-2.5 left-2.5">
        <button type="button" class="hidden sm:block lg:hidden xl:block rounded-full shadow cursor-pointer" aria-label="Next">
          <img class="w-10 h-10" src="/not_nhac.png" alt=""/>
        </button>
        <div class="hidden">
          <iframe id="sc-widget" width="100%" height="180" scrolling="no" frameborder="no" allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1556049148&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"></iframe>
        </div>
      </div>
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

export default defineComponent({
  name: "Desktop1",
  components: {
    SectionAlbum,
    Navbar,
    HeroBanner,
    Container1,
    Container,
    Section2,
    Section1,
    Section,
  },
});
</script>
