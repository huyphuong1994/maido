<template>
  <div
    class="w-full h-[1632px] flex flex-row items-start justify-center pt-40 px-0 pb-[200px] box-border text-left text-53xl text-darkslategray-200 font-butler"
    data-scroll-to="albumContainer"
  >
    <div class="flex flex-col items-start justify-start gap-[80px]">
      <div class="w-[1200px] flex flex-row items-start justify-between">
        <div class="flex flex-col items-start justify-start gap-[24px]">
          <div class="relative leading-[120%]">Captured Moments</div>
          <div
            class="flex flex-row items-center justify-start gap-[8px] text-lg font-inter"
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
          class="flex flex-col items-start justify-end pt-[120px] px-0 pb-0 text-xl font-inter"
        >
          <div class="flex flex-row items-center justify-start">
            <div
              class="relative leading-[150%] inline-block w-[481px] shrink-0"
            >
              Live your magic and save your precious love memories! our team of
              professional photographers is here to help you
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-[1200px] flex flex-row flex-wrap items-start justify-start gap-[32px]"
      >
        <img
          class="relative w-[379px] h-[447px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
          alt=""
          src="/rectangle-5@2x.png"
          data-animate-on-scroll
        />
        <img
          class="relative w-[378px] h-[447px] object-cover [&.animate]:animate-[1s_ease_0.4s_1_normal_forwards_slide-in-left] opacity-[0]"
          alt=""
          src="/rectangle-6@2x.png"
          data-animate-on-scroll
        />
        <img
          class="relative w-[379px] h-[447px] object-cover [&.animate]:animate-[1s_ease_0.8s_1_normal_forwards_slide-in-left] opacity-[0]"
          alt=""
          src="/rectangle-7@2x.png"
          data-animate-on-scroll
        />
        <img
          class="relative w-[379px] h-[447px] object-cover [&.animate]:animate-[1s_ease_1.2s_1_normal_forwards_slide-in-left] opacity-[0]"
          alt=""
          src="/rectangle-8@2x.png"
          data-animate-on-scroll
        />
        <img
          class="relative w-[378px] h-[447px] object-cover [&.animate]:animate-[1s_ease_1.6s_1_normal_forwards_slide-in-left] opacity-[0]"
          alt=""
          src="/rectangle-9@2x.png"
          data-animate-on-scroll
        />
        <img
          class="relative w-[379px] h-[447px] object-cover [&.animate]:animate-[1s_ease_2s_1_normal_forwards_slide-in-left] opacity-[0]"
          alt=""
          src="/rectangle-10@2x.png"
          data-animate-on-scroll
        />
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SectionAlbum",
    data() {
      return { observer: null };
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
  });
</script>
