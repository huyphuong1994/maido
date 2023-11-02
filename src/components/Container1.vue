<template>
  <div
      class="lg:w-[1200px] lg:flex flex-row items-center justify-between relative text-left text-53xl text-darkslategray-200 font-butler"
      data-scroll-to="container1"
  >
    <div class="flex flex-col items-start justify-start gap-[24px] z-[0]">
      <div class="flex flex-col items-start justify-center text-center w-full">
        <div class="self-stretch relative text-[42px] md:text-[56px] lg:text-[72px]">Ngọc Độ & Ngọc Mai</div>
      </div>
      <div
          class="self-stretch flex flex-row items-center justify-start gap-[56px] text-center text-sienna"
      >
        <div class="flex flex-col items-center justify-start">
          <div class="relative uppercase inline-block w-20 text-[42px] md:text-[56px] lg:text-[72px]">
            {{ days }}
          </div>
          <div
              class="relative text-xl leading-[150%] uppercase font-inter text-dimgray"
          >
            Days
          </div>
        </div>
        <div class="flex flex-col items-center justify-start">
          <div class="relative uppercase text-[42px] md:text-[56px] lg:text-[72px]">{{hours}}</div>
          <div
              class="relative text-xl leading-[150%] uppercase font-inter text-dimgray"
          >
            Hours
          </div>
        </div>
        <div class="flex flex-col items-center justify-start">
          <div class="relative uppercase text-[42px] md:text-[56px] lg:text-[72px]">{{minutes}}</div>
          <div
              class="relative text-xl leading-[150%] uppercase font-inter text-dimgray"
          >
            Mins
          </div>
        </div>
        <div class="flex flex-col items-center justify-start">
          <div class="relative uppercase text-[42px] md:text-[56px] lg:text-[72px]">{{seconds}}</div>
          <div
              class="relative text-xl uppercase font-inter text-dimgray"
          >
            Secs
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 flex justify-center">
      <div class="relative w-[379px] h-[532px] z-[1]">
        <img
            class="absolute top-[0px] left-[0px] rounded-461xl w-[379px] h-[532px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            alt=""
            src="/countdown.jpg"
            data-animate-on-scroll
        />
      </div>
      <div
          class="absolute my-0 mx-[!important] bottom-[-50px] lg:bottom-[24px] lg:left-[719px] w-40 h-40 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[2]"
          data-animate-on-scroll
      >
        <img
            class="app-logo absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group.svg"
        />
        <img
            class="absolute h-[30.38%] w-[30.38%] top-[34.94%] right-[34.69%] bottom-[34.69%] left-[34.94%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/arrow-downward-fill0-wght400-grad0-opsz24-1.svg"
        />
      </div>
    </div>
  </div>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Container1",
  data() {
    return {
      observer: null,
      targetDate: new Date('2023-11-21T00:00:00'),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },

  mounted() {
    setInterval(this.timeRemaining, 1000)

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
    timeRemaining() {
      var currentTime = new Date();
      var timeDifference = this.targetDate - currentTime;

      if (timeDifference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }


      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    }
  },

  beforeUnmount() {
    this.observer.disconnect();
  },
});
</script>
