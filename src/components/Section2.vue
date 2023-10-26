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
              <p class="m-0">Monday, 25 Sep, 2023</p>
              <p class="m-0">1:00 PM – 4:30 PM</p>
            </div>
            <div class="self-stretch relative leading-[150%]">
              Estern Star Plaza, Road 123, USA
            </div>
          </div>
          <div
            class="bg-white w-[221px] overflow-hidden flex flex-row items-center justify-center p-4 box-border text-base text-gray-100"
          >
            <div class="relative tracking-[1px] leading-[150%]">View map</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Section2",
  });
</script>
