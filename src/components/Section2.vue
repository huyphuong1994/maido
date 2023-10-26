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
            src="/image-11@2x.png"
            data-scroll-to="image11"
        />
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
              <p class="m-0">Thứ 3, 21-11-2023</p>
              <p class="m-0">16:00 PM – 17:30 PM</p>
            </div>
            <div class="self-stretch relative leading-[150%]">
              Số 6, Đường Hoàng Diệu, Phường Phương Lâm, TP.Hòa Bình, T.Hòa Bình
            </div>
          </div>
          <div
              class="bg-white w-[221px] overflow-hidden flex flex-row items-center justify-center p-4 box-border text-base text-gray-100"
          >
            <a target="_blank" href="https://www.google.com/maps/place/Ho%C3%A0ng+Di%E1%BB%87u,+Ph%C6%B0%C6%A1ng+L%C3%A2m,+Tp.+H%C3%B2a+B%C3%ACnh,+H%C3%B2a+B%C3%ACnh,+Vietnam/@20.8173692,105.3319223,17z/data=!3m1!4b1!4m10!1m2!2m1!1zU-G7kSA2LCDEkMaw4budbmcgSG_DoG5nIERp4buHdSwgUGjGsOG7nW5nIFBoxrDGoW5nIEzDom0sIFRQLkjDsmEgQsOsbmgsIFQuSMOyYSBCw6xuaA!3m6!1s0x31346b7356f4d43d:0xc073d96e522f8039!8m2!3d20.817365!4d105.3360182!15sClVT4buRIDYsIMSQxrDhu51uZyBIb8OgbmcgRGnhu4d1LCBQaMaw4budbmcgUGjGsMahbmcgTMOibSwgVFAuSMOyYSBCw6xuaCwgVC5Iw7JhIELDrG5okgEFcm91dGXgAQA!16s%2Fg%2F11bwfy8lp9?entry=ttu"
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
