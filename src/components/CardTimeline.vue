<template>
  <div
    class="w-[464px] flex flex-col items-start justify-start gap-[32px] text-left text-sm text-sienna font-inter"
  >
    <img
      class="relative w-[464px] h-[296px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
      alt=""
      :src="image"
      data-animate-on-scroll
    />
    <div class="self-stretch flex flex-col items-start justify-start gap-[8px]">
      <div class="self-stretch flex flex-col items-start justify-start">
        <div
          class="self-stretch relative tracking-[3px] leading-[150%] uppercase font-medium"
        >
          {{prop}}
        </div>
      </div>
      <div
        class="self-stretch relative text-lg leading-[150%] text-darkslategray-200 text-justify"
      >
        {{nhCaoLMtTayTnGiChuyn}}
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "CardTimeline",
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
    props: {
      image: { type: String },
      prop: { type: String },
      nhCaoLMtTayTnGiChuyn: { type: String },
    },
  });
</script>
