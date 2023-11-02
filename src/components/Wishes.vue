<template>
  <div
      class="bg-linen w-full overflow-hidden flex flex-col items-center justify-center py-[156px] px-[120px] box-border text-left text-lg text-darkslategray-200 font-inter"
      data-scroll-to="wishesContainer"
  >
    <div class="lg:w-[1200px] flex flex-col items-center justify-center">
      <div class="w-[886px] flex flex-col items-start justify-start gap-[32px]">
        <div class="flex flex-row items-center justify-start gap-[24px]">
          <div class="relative leading-[150%]">(03/03)</div>
          <div class="relative leading-[150%]">-</div>
          <div class="relative leading-[150%]">(PREV / NEXT)</div>
        </div>
        <div
            class="self-stretch relative text-17xl leading-[140%] text-justify"
        >
          Chúc cho cô dâu, chú rể trăm năm hạnh phúc, thủy chung trọn vẹn, đi về
          có nhau, dù sống đến tuổi răng long đầu bạc nhưng xem nhau như những
          ngày mới gặp nhé. Happy Wedding!
        </div>
        <div class="flex flex-row items-center justify-start gap-[20px]">
          <div class="relative">
            <div class="absolute rounded-65xl w-[84px] h-[84px]">
              <svg class="relative rounded-65xl" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewbox="0 0 100 100">
                <circle cx="50" cy="50" r="40" pathLength="1"/>
              </svg>
            </div>
            <img
                class="relative rounded-65xl w-[84px] h-[84px]"
                alt=""
                src="/testimonialavatar.svg"
            />
          </div>
          <div class="flex flex-col items-start justify-start gap-[4px]">
            <div class="relative leading-[150%]">Lê Mai Anh</div>
            <div class="relative leading-[150%]">Ha Noi</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Section1",
});
</script>

<style>
circle {
  stroke: green;
  stroke-width: 2;
  fill: pink;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: dash 5s linear infinite;
}

@keyframes dash {
  from {
    stroke-dashoffset: 1;
  }
  to {
    stroke-dashoffset: 0;
  }
}

svg {
  display: block;
  transform: rotate(-90deg);
  margin: auto;
}

</style>
