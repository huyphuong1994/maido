<template>
  <div
    class="relative rounded-xl bg-white w-[1200px] h-[662px] overflow-hidden flex flex-col items-center justify-start pt-8 px-6 pb-16 box-border max-w-full max-h-full text-center text-[32px] text-salmon font-inter"
  >
    <div
      class="w-[1169px] h-[658px] flex flex-col items-center justify-start gap-[64px]"
    >
      <div
        class="w-[530px] flex flex-col items-center justify-start gap-[16px]"
      >
        <b class="self-stretch relative leading-[120%]">Hộp mừng cưới</b>
        <div class="self-stretch relative text-base leading-[150%]">
          <p class="m-0">
            Mọi sự yêu thương không thể trao tay xin gửi về hộp mừng cưới này
          </p>
        </div>
      </div>
      <div
        class="self-stretch flex flex-row items-start justify-center gap-[48px] text-xl"
      >
        <div class="flex-1 flex flex-col items-center justify-start gap-[24px]">
          <div
            class="w-[270px] h-[270px] flex flex-row items-center justify-center"
          >
            <img
              class="relative w-[318px] h-[292px] object-cover"
              alt=""
              src="/techqrhp-1@2x.png"
            />
          </div>
          <div
            class="self-stretch flex flex-col items-center justify-start gap-[16px]"
          >
            <div class="self-stretch flex flex-col items-center justify-start">
              <b class="self-stretch relative leading-[150%]"
                >Mừng cưới chú rể</b
              >
            </div>
            <div
              class="self-stretch relative text-base leading-[150%] text-black"
            >
              <p class="m-0">Ngân hàng: Teckcombak</p>
              <p class="m-0">Số tài khoản: 1903 4621 8740 15</p>
              <p class="m-0">Chủ tài khoản: Phan Ngọc Độ</p>
            </div>
          </div>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start gap-[24px]">
          <div
            class="w-[270px] h-[270px] flex flex-row items-center justify-center"
          >
            <img
              class="relative w-[318px] h-[292px] object-cover"
              alt=""
              src="/techqrhp-11@2x.png"
            />
          </div>
          <div
            class="self-stretch flex flex-col items-center justify-start gap-[16px]"
          >
            <div class="self-stretch flex flex-col items-center justify-start">
              <b class="self-stretch relative leading-[150%]"
                >Mừng cưới cô dâu</b
              >
            </div>
            <div
              class="self-stretch relative text-base leading-[150%] text-black"
            >
              <p class="m-0">Ngân hàng: Teckcombak</p>
              <p class="m-0">Số tài khoản: 1903 4621 8740 15</p>
              <p class="m-0">Chủ tài khoản: Trương Thị Ngọc Mai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "TeamCircles",
  });
</script>
