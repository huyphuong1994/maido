<template>
  <div
      class="w-full flex flex-row items-start justify-center pt-40 px-0 pb-[200px] box-border text-left text-[72px] text-darkslategray font-butler"
  >
    <div class="flex-1 flex flex-col items-center justify-center gap-[80px]">
      <div
          class=" max-w-[1200px]  lg:flex lg:flex-row lg:items-start lg:justify-start gap-[133px] flex-col items-center justify-center"
      >
        <div
            class="flex flex-col items-start justify-start gap-[24px] md:self-stretch md:w-full"
        >
          <div
              class="relative leading-[120%] md:text-[56px] md:text-center text-[42px] text-center w-full"
          >
            Captured Moments
          </div>
          <div
              class="lg:flex flex-row items-center justify-start gap-[8px] text-[14px] font-inter hidden lg:text-[18px]"
          >
            <div class="relative leading-[120%]">View collections</div>
            <img
                class="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/arrow-outward-fill0-wght400-grad0-opsz24-1.svg"
            />
          </div>
        </div>
        <div
            class="px-5 flex flex-col items-start justify-end pt-[120px] lg:px-0 pb-0 text-[20px] font-inter md:self-stretch md:w-auto md:pl-6 md:pr-6 md:box-border"
        >
          <div
              class="flex flex-col items-center justify-start md:self-stretch md:w-auto"
          >
            <div
                class="text-[16px] lg:text-[18px] relative leading-[150%] inline-block w-full md:self-stretch md:w-auto"
            >
              Live your magic and save your precious love memories! our team of
              professional photographers is here to help you
            </div>
          </div>
        </div>
      </div>
      <div
          class="mx-auto max-w-[1200px] self-stretch flex lg:flex-row flex-wrap items-start lg:justify-center gap-[32px] text-center text-[48px] text-maroon font-inter flex-col :items-center justify-center"
      >
        <img
            class="relative w-[378px] h-[530px] object-cover [&.animate]:animate-[1s_ease_0.2s_1_normal_forwards_slide-in-left] opacity-[0]"
            alt=""
            src="/album_1.jpg"
            data-animate-on-scroll
        />
        <img
            class="relative w-[379px] h-[530px] object-cover [&.animate]:animate-[1s_ease_0.4s_1_normal_forwards_slide-in-left] opacity-[0]"
            alt=""
            src="/album_2.jpg"
            data-animate-on-scroll
        />
        <img
            class="relative w-[379px] h-[530px] object-cover [&.animate]:animate-[1s_ease_0.6s_1_normal_forwards_slide-in-left] opacity-[0]"
            alt=""
            src="/album_3.jpg"
            data-animate-on-scroll
        />
        <img
            class="relative w-[379px] h-[530px] object-cover [&.animate]:animate-[1s_ease_0.8s_1_normal_forwards_slide-in-left] opacity-[0]"
            alt=""
            src="/album_4.jpg"
            data-animate-on-scroll
        />
        <img
            class="relative w-[378px] h-[530px] object-cover [&.animate]:animate-[1s_ease_1s_1_normal_forwards_slide-in-left] opacity-[0]"
            alt=""
            src="/album_5.jpg"
            data-animate-on-scroll
        />
        <div
            class="relative w-[379px] h-[530px] [&.animate]:animate-[1s_ease_1.2s_1_normal_forwards_slide-in-left] opacity-[0] cursor-pointer"
            :onClick="openFramePopup"
            data-animate-on-scroll
        >
          <img
              class="absolute top-[0px] left-[0px] w-[379px] h-[530px] object-cover"
              alt=""
              src="/album_6.jpg"
          />
          <div
              class="absolute top-[265px] left-[158px] flex items-center justify-center w-[62px] h-[68.8px] text-[#8C1414]"
          >
            +9
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isFramePopupOpen">
    <PortalPopup
        overlayColor="rgba(113, 113, 113, 0.6)"
        placement="Centered"
        :relativeLayerRef="$refs[groupContainerRef]"
        :onOutsideClick="closeFramePopup"
    >
      <FrameComponent :onClose="closeFramePopup" />
    </PortalPopup>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import FrameComponent from "../components/FrameComponent.vue";
import PortalPopup from "../components/PortalPopup.vue";

export default defineComponent({
  name: "SectionAlbum",
  data() {
    return {isFramePopupOpen: false, observer: null};
  },

  mounted() {
    const scrollAnimElements = document.querySelectorAll(
        "[data-animate-on-scroll]"
    );
    this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              const targetElement = entry.target;
              targetElement.classList.add("animate");
              this.observer.unobserve(targetElement);
            }
          }
        },
        {
          threshold: 0.15,
        }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      this.observer.observe(scrollAnimElements[i]);
    }
  },
  beforeUnmount() {
    this.observer.disconnect();
  },
  components: {FrameComponent, PortalPopup},
  methods: {
    openFramePopup() {
      this.isFramePopupOpen = true;
    },
    closeFramePopup() {
      this.isFramePopupOpen = false;
    },
  },
});
</script>