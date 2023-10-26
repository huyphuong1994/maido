<template>
  <div
    class="relative bg-whitesmoke h-[9954px] overflow-hidden text-left text-[48px] text-black font-dancing-script"
  >
    <div class="absolute top-[0px] h-[9954px] flex flex-col w-screen">
      <Navbar />
      <HeroBanner />
      <div
        class="overflow-x-auto flex flex-col items-center justify-start py-40 px-0 box-border gap-[200px]"
      >
        <Container1 /><Container />
      </div>
      <Section2 />
      <SectionAlbum />
      <Section1 />
      <div
        class="overflow-x-auto flex flex-col items-center justify-start py-40 px-0 box-border"
      >
        <div class="flex flex-row items-center justify-between gap-10">
          <img
            class="relative w-[800px] h-[734px] object-cover"
            alt=""
            src="/mask-group@2x.png"
          />
          <div class="relative w-[675px] h-[532px]">
            <div class="absolute top-[237px] left-[279px] leading-[120%] text-[72px]">
              Thank you!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Navbar from "../components/Navbar.vue";
  import HeroBanner from "../components/HeroBanner.vue";
  import Container1 from "../components/Container1.vue";
  import Container from "../components/Container.vue";
  import Section2 from "../components/Section2.vue";
  import Section1 from "../components/Section1.vue";
  import Section from "../components/Section.vue";
  import SectionAlbum from "../components/Section.vue";

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
