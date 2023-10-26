<template>
  <div
    class="bg-linen w-full overflow-hidden flex flex-col items-center justify-center py-[156px] px-[120px] box-border text-left text-lg text-darkslategray-200 font-inter"
    data-scroll-to="wishesContainer"
  >
    <div class="w-[1200px] flex flex-col items-center justify-center">
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
          <img
            class="relative rounded-65xl w-[84px] h-[84px]"
            alt=""
            src="/testimonialavatar.svg"
          />
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
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Section1",
  });
</script>
