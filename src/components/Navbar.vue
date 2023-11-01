<template>
  <div
    class="bg-whitesmoke [backdrop-filter:blur(20px)] w-full overflow-hidden flex flex-col items-center justify-center box-border text-left text-base text-gray-200 font-inter"
  >
    <div class="lg:block hidden w-full p-6">
      <div class="w-full flex flex-row items-center justify-center">
        <div class="w-[1200px] flex flex-row items-center justify-between px-5">
          <div class="flex flex-row items-start justify-start">
            <img class="relative w-[60px] h-9" alt="" src="/logo.svg" />
          </div>
          <div
              class="overflow-hidden flex flex-row items-center justify-start gap-[48px]"
          >
            <div
                class="flex flex-row items-center justify-center py-3 px-0 cursor-pointer"
                :onClick="onNavbarLinkContainerClick"
            >
              <div class="relative leading-[150%]">Couple</div>
            </div>
            <div
                class="flex flex-row items-center justify-center py-3 px-0 cursor-pointer"
                :onClick="onNavbarLinkContainer1Click"
            >
              <div class="relative leading-[150%]">Love Story</div>
            </div>
            <div
                class="flex flex-row items-center justify-start py-3 px-0 cursor-pointer"
                :onClick="onNavbarLinkContainer2Click"
            >
              <div class="relative leading-[150%]">Time place</div>
            </div>
            <!--          <div-->
            <!--            class="flex flex-row items-center justify-center py-3 px-0 cursor-pointer"-->
            <!--            :onClick="onNavbarLinkContainer3Click"-->
            <!--          >-->
            <!--            <div class="relative leading-[150%]">Lời chúc</div>-->
            <!--          </div>-->
            <div
                class="flex flex-row items-center justify-center py-3 px-0 cursor-pointer"
                :onClick="onNavbarLinkContainer4Click"
            >
              <div class="relative leading-[150%]">Album</div>
            </div>
            <div
                class="flex flex-row items-center justify-center py-3 px-0 cursor-pointer"
                :onClick="openBoxGift"
            >
              <div class="relative leading-[150%]">Gift</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:hidden w-full">
      <div class="w-full flex justify-between bg-[rgb(150,106,61)]">
        <div class="p-5 flex items-center">
          <div class="relative leading-[150%]" :onClick="onNavbarLinkContainerClick">Couple</div>
        </div>
        <div class="p-5 flex items-center">
          <div class="relative leading-[150%]" :onClick="onNavbarLinkContainer1Click">Love Story</div>
        </div>
        <div class="p-5 flex items-center">
          <div class="relative leading-[150%]" :onClick="onNavbarLinkContainer2Click">Time place</div>
        </div>
        <div class="p-5 flex items-center">
          <div class="relative leading-[150%]" :onClick="onNavbarLinkContainer4Click">Album</div>
        </div>
        <div class="p-5 flex items-center">
          <div class="relative leading-[150%]" :onClick="openBoxGift">Gift</div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isBoxGiftOpen">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :relativeLayerRef="$refs[navbarLinkContainer5Ref]"
      :onOutsideClick="closeBoxGift"
    >
      <TeamCircles :onClose="closeBoxGift" />
    </PortalPopup>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import TeamCircles from "./TeamCircles.vue";
  import PortalPopup from "./PortalPopup.vue";

  export default defineComponent({
    name: "Navbar",
    data() {
      return { isBoxGiftOpen: false };
    },
    components: { TeamCircles, PortalPopup },
    methods: {
      onNavbarLinkContainerClick() {
        const anchor = document.querySelector("[data-scroll-to='container1']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onNavbarLinkContainer1Click() {
        const anchor = document.querySelector("[data-scroll-to='container']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onNavbarLinkContainer2Click() {
        const anchor = document.querySelector("[data-scroll-to='image11']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onNavbarLinkContainer3Click() {
        const anchor = document.querySelector(
          "[data-scroll-to='wishesContainer']"
        );
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onNavbarLinkContainer4Click() {
        const anchor = document.querySelector(
          "[data-scroll-to='albumContainer']"
        );
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      openBoxGift() {
        this.isBoxGiftOpen = true;
      },
      closeBoxGift() {
        this.isBoxGiftOpen = false;
      },
    },
  });
</script>
