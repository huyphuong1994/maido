<template>
  <div
    class="bg-white h-screen overflow-hidden flex flex-col items-start justify-start relative gap-[8px] text-center text-5xl text-gray-300 font-inter"
  >
    <div class="relative bg-silver w-full h-[872px] z-[0]">
      <img
        class="hidden lg:block absolute h-[122.42%] w-full top-[0%] right-[0%] bottom-[-22.42%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-3@2x.jpg"
      />
      <img
          class="block lg:hidden absolute h-[122.42%] w-full top-[0%] right-[0%] bottom-[-22.42%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image-3@2x-mobile.jpg"
      />
    </div>
    <div
      class="my-0 mx-[!important] absolute top-[798px] left-[120px] lg:w-[1200px] z-[1]"
    />
    <div
      class="my-0 mx-[!important] w-full absolute top-[270px] lg:top-[268px] flex flex-col items-center justify-start gap-[16px] z-[2]"
    >
      <div
        class="text-[16px] lg:text-[24px] relative tracking-[0.02em] leading-[150%] uppercase [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
        data-animate-on-scroll
      >
        My Love For You Is a Journey
      </div>
      <div
        class="relative lg:text-85xl text-[38px] leading-[120%] uppercase font-butler text-white [&.animate]:animate-[1.5s_ease_1s_1_normal_forwards_slide-in-top] opacity-[0]"
        data-animate-on-scroll
      >
        We're Married
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "HeroBanner",
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
