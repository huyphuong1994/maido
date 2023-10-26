<template>
  <div
    class="w-[464px] flex flex-col items-start justify-start gap-[32px] text-left text-sm text-sienna font-inter"
  >
    <img
      class="relative w-[464px] h-[296px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
      alt=""
      :src="imageDescription"
      data-animate-on-scroll
    />
    <div class="self-stretch flex flex-col items-start justify-start gap-[8px]">
      <div class="self-stretch flex flex-col items-start justify-start">
        <div
          class="self-stretch relative tracking-[3px] leading-[150%] uppercase font-medium"
        >
          {{dateDescription}}
        </div>
      </div>
      <div
        class="self-stretch relative text-lg leading-[150%] text-darkslategray-200 whitespace-pre-wrap text-justify"
      >
        <p class="m-0">{{playfulGazeImageUrl}}</p>
        <p class="m-0">{{teaDescription}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "CardTimeline1",
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
      imageDescription: { type: String },
      dateDescription: { type: String },
      playfulGazeImageUrl: { type: String },
      teaDescription: { type: String },
    },
  });
</script>
