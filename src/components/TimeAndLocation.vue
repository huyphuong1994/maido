<template>
  <div
      class="bg-white overflow-hidden flex flex-col items-start justify-start text-left text-53xl text-white font-butler"
  >
    <div
        class="w-full flex flex-col items-start justify-start relative gap-[8px]"
    >
      <div class="relative w-full h-[968px] z-[0]">
        <img
            class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/time_place.JPG"
            data-scroll-to="image11"
        />
        <div class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover bg-time-place"></div>
      </div>
      <div
          class="my-0 mx-[!important] absolute top-[154px] left-[120px] flex flex-col items-start justify-start gap-[96px] z-[1]"
      >
        <div class="relative leading-[120%]">Time and place</div>
        <div
            class="self-stretch flex flex-col items-start justify-start gap-[48px] text-5xl font-inter"
        >
          <div
              class="self-stretch flex flex-col items-start justify-start gap-[16px]"
          >
            <div class="self-stretch relative leading-[150%]">
              <p class="m-0">Lễ Ăn Hỏi: Thứ 3, 21-11-2023</p>
              <p class="m-0">09:30 AM</p>
            </div>
            <div class="self-stretch relative leading-[150%]">
              Số 25, Đường Hoàng Hoa Thám, Phường Thống Nhất, TP.Hòa Bình, T.Hòa Bình
            </div>
            <div
                class="bg-white w-[221px] overflow-hidden flex flex-row items-center justify-center p-4 box-border text-base text-gray-100"
            >
              <a target="_blank" href="https://www.google.com/maps?q=25+Ho%C3%A0ng+Hoa+Th%C3%A1m,+T%E1%BB%95+5+T%E1%BB%95+6,+H%C3%B2a+B%C3%ACnh&ftid=0x31346b37c9185cfd:0x73cf25c8c122eb76&hl=vi-VN&gl=vn&entry=gps&coh=0&g_ep=CAISBjYuNDAuNBgAINeCA0ICVk4%3D&g_st=iz"
                 class="relative tracking-[1px] leading-[150%]">View map</a>
            </div>
          </div>

          <div
              class="self-stretch flex flex-col items-start justify-start gap-[16px]"
          >
            <div class="self-stretch relative leading-[150%]">
              <p class="m-0">Lễ Thành Hôn: Thứ 3, 21-11-2023</p>
              <p class="m-0">16:00 PM – 17:30 PM</p>
            </div>
            <div class="self-stretch relative leading-[150%]">
              Số 6, Đường Hoàng Diệu, Phường Phương Lâm, TP.Hòa Bình, T.Hòa Bình
            </div>
          </div>
          <div
              class="bg-white w-[221px] overflow-hidden flex flex-row items-center justify-center p-4 box-border text-base text-gray-100"
          >
            <a target="_blank" href="https://www.google.com/maps/place/%C3%81o+C%C6%B0%E1%BB%9Bi+Ph%C6%B0%C6%A1ng+Anh/@20.8170651,105.3358188,17z/data=!3m1!4b1!4m6!3m5!1s0x31346b73513b5403:0xedbf371eaeaf9807!8m2!3d20.8170651!4d105.3358188!16s%2Fg%2F1hc102544?hl=vi-VN&entry=ttu"
               class="relative tracking-[1px] leading-[150%]">View map</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Section2",
});
</script>
