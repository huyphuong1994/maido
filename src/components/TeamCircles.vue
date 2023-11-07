<template>
  <div
    class="overflow-y-auto relative rounded-xl bg-white lg:w-[1200px] h-[662px] overflow-hidden flex flex-col items-center justify-start pt-8 px-6 pb-16 box-border max-w-full max-h-full text-center text-[32px] text-[rgb(150,106,61]) font-inter"
  >
    <div
      class="w-full h-[658px] flex flex-col items-center justify-start gap-[64px]"
    >
      <div
        class="w-full flex flex-col items-center justify-start gap-[16px] text-[rgb(150,106,61)"
      >
        <b class="self-stretch relative leading-[120%] text-[rgb(150,106,61)]">Hộp mừng cưới</b>
        <div class="self-stretch relative text-base leading-[150%]">
          <p class="m-0 text-[rgb(150,106,61)]">
            Mọi sự yêu thương không thể trao tay xin gửi về hộp mừng cưới này
          </p>
        </div>
      </div>
      <div class="self-stretch lg:flex flex-row items-start justify-center gap-[48px] text-xl">
        <div class="flex-1 flex flex-col items-center justify-start gap-[24px]">
          <div
            class="w-[270px] h-[270px] flex flex-row items-center justify-center"
          >
            <img
              class="relative w-[318px] h-[292px] object-cover"
              alt=""
              src="/techqrhp-1@2x.jpg"
            />
          </div>
          <div
            class="self-stretch flex flex-col items-center justify-start gap-[16px]"
          >
            <div class="self-stretch flex flex-col items-center justify-start">
              <b class="self-stretch relative leading-[150%] text-[rgb(150,106,61)]"
                >Mừng cưới chú rể</b
              >
            </div>
            <div
              class="self-stretch relative text-base leading-[150%] text-black"
            >
              <p class="m-0">Ngân hàng: MBbank</p>
              <p class="m-0">Số tài khoản: 0000 1100 3199 8</p>
              <p class="m-0">Chủ tài khoản: Phan Ngọc Độ</p>
            </div>
          </div>
        </div>
        <div class="my-24 lg:my-0 flex-1 flex flex-col items-center justify-start gap-[24px]">
          <div
            class="w-[270px] h-[270px] flex flex-row items-center justify-center"
          >
            <img
              class="relative w-[318px] h-[292px] object-cover"
              alt=""
              src="/techqrhp-11@2x.jpg"
            />
          </div>
          <div
            class="self-stretch flex flex-col items-center justify-start gap-[16px]"
          >
            <div class="self-stretch flex flex-col items-center justify-start">
              <b class="self-stretch relative leading-[150%] text-[rgb(150,106,61)]"
                >Mừng cưới cô dâu</b
              >
            </div>
            <div
              class="self-stretch relative text-base leading-[150%] text-black"
            >
              <p class="m-0">Ngân hàng: Techcombank</p>
              <p class="m-0">Số tài khoản: 1903 7245 2220 19</p>
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
