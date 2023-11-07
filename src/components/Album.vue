<template>
  <div
      class="w-full flex flex-row items-start justify-center pt-40 px-0 pb-[200px] box-border text-left text-53xl text-darkslategray-200 font-butler"
      data-scroll-to="albumContainer"
  >
    <div class="flex flex-col items-start justify-start gap-[80px]">
      <div class="lg:w-[1200px] flex flex-row items-start justify-between w-full">
        <div class="lg:flex lg:flex-col lg:items-start items-center text-center justify-start gap-[24px] w-full">
          <div class="relative leading-[120%] w-full text-[42px] md:text-[56px] lg:text-[72px] lg:text-start">Captured
            Moments
          </div>
          <div
              class="lg:flex lg:flex-row lg:items-center justify-start gap-[8px] text-lg font-inter"
          >
            <div class="hidden lg:flex relative leading-[120%] cursor-pointer">View collections</div>
            <img
                class="hidden lg:flex relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/arrow-outward-fill0-wght400-grad0-opsz24-1.svg"
            />
          </div>
        </div>
        <div
            class="hidden lg:flex flex-col items-start justify-end pt-[120px] px-0 pb-0 text-xl font-inter"
        >
          <div class="flex flex-row items-center justify-start">
            <div
                class="relative leading-[150%] inline-block lg:w-[481px] shrink-0"
            >
              You may only be one person to the world but you may be the world to one person.
            </div>
          </div>
        </div>
      </div>
      <div
          class="w-full text-center lg:w-[1200px] lg:flex lg:flex-row lg:flex-wrap items-start justify-start lg:gap-[32px]">
        <img
            class="relative w-[90%] lg:w-[378px] lg:h-[500px] [&.animate]:animate-[1s_ease_0.2s_1_normal_forwards_slide-in-left] opacity-[0] object-cover"
            alt=""
            src="/album_1.jpg"
            data-animate-on-scroll
        />
        <img
            class="relative w-[90%] lg:w-[378px] lg:h-[500px] [&.animate]:animate-[1s_ease_0.4s_1_normal_forwards_slide-in-left] opacity-[0] object-cover"
            alt=""
            src="/album_2.jpg"
            data-animate-on-scroll
        />
        <img
            class="relative w-[90%] lg:w-[378px] lg:h-[500px] [&.animate]:animate-[1s_ease_0.6s_1_normal_forwards_slide-in-left] opacity-[0] object-cover"
            alt=""
            src="/album_3.jpg"
            data-animate-on-scroll
        />
        <img
            class="relative w-[90%] lg:w-[378px] lg:h-[500px] [&.animate]:animate-[1s_ease_0.8s_1_normal_forwards_slide-in-left] opacity-[0] object-cover"
            alt=""
            src="/album_4.jpg"
            data-animate-on-scroll
        />
        <img
            class="relative w-[90%] lg:w-[378px] lg:h-[500px] [&.animate]:animate-[1s_ease_1s_1_normal_forwards_slide-in-left] opacity-[0] object-cover"
            alt=""
            src="/album_5.jpg"
            data-animate-on-scroll
        />
        <div class="relative after:content-['+9'] album-last" @click="openBoxAlbum()">
          <img
              class="relative w-[90%] lg:w-[378px] lg:h-[500px] [&.animate]:animate-[1s_ease_1.2s_1_normal_forwards_slide-in-left] opacity-[0] object-cover cursor-pointer"
              alt=""
              src="/album_6.jpg"
              data-animate-on-scroll
          />
        </div>
      </div>
    </div>
    <div v-if="isBoxGiftOpen">
      <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.8)"
          placement="Centered"
          :relativeLayerRef="$refs[navbarLinkContainer5Ref]"
          :onOutsideClick="closeBoxGift"
      >
        <ShowAlbum :onClose="closeBoxGift" />
      </PortalPopup>
    </div>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import PortalPopup from "./PortalPopup.vue";
import ShowAlbum from "./ShowAlbum.vue";

export default defineComponent({
  name: "SectionAlbum",
  components: {ShowAlbum, PortalPopup},
  data() {
    return {observer: null, isBoxGiftOpen: false};
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

  methods: {
    renderDelay(key) {
      return "w-[378px] h-[500px] object-cover animate__animated animate__backInLeft animate__delay-" + (key * 250) + "ms"
    },

    openBoxAlbum() {
      this.isBoxGiftOpen = true;
    },

    closeBoxGift() {
      this.isBoxGiftOpen = false;
    }
  },

  beforeUnmount() {
    this.observer.disconnect();
  },
});
</script>
