<script setup lang="ts">
import { config } from "@/config/index";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const switchTheme = useToggle(isDark);

const logo = config.layout.header.logo;
import { JumpLinkTo } from "@/utils/useJump";
</script>

<template>
  <div id="Header" class="header w100% h50px bg-#fff .dark:bg-black">
    <div
      class="py-5px mx-80px h40px flex items-center leading-40px justify-between"
    >
      <!-- logo -->
      <div
        class="flex h40px select-none cursor-pointer w9%"
        @click="JumpLinkTo('/', {})"
      >
        <div class="logo w40px h40px mr-6px">
          <img
            class="w100% h100% transform transition-800 hover:rotate-180"
            :src="logo"
            alt="StudTWork"
          />
        </div>
        <span class=".dark:text-#fff">StudTWork</span>
      </div>
      <div class="menuList flex items-center h30px">
        <a href="" class="item"><span>Home</span></a>
        <a href="" class="item"><span>Blog</span></a>
        <a href="" class="w80px text-center mx10px"><span>Projects</span></a>
        <a href="" class="w50px text-center mx10px"><span>Demos</span></a>
        <a
          href="https://github.com/CodeGetters"
          target="_blank"
          class="iconItem"
          ><div class="i-grommet-icons:github"></div
        ></a>
        <a href="https://gitee.com/fancim" target="_blank" class="iconItem"
          ><div class="i-simple-icons:gitee"></div
        ></a>
        <a href="https://twitter.com/iridescenr_star" class="iconItem"
          ><div class="i-bx:bxl-twitter"></div
        ></a>
        <a href="" class="iconItem">
          <div class="i-simple-icons:githubsponsors" title="sponsors"></div>
        </a>
        <a href="javascript:;" class="iconItem" @click="switchTheme()">
          <div class="i-carbon-sun dark:i-carbon-moon"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  border-bottom: 1px solid #e5e7eb;
}

.logo {
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 10px #3ca3f7);
}

.item {
  width: 40px;
  height: 30px;
  color: black;
  text-align: center;
  margin-right: 10px;
  margin-left: 10px;
  line-height: 30px;
}

.iconItem {
  width: 30px;
  height: 30px;
  color: black;
  text-align: center;
  line-height: 30px;
  margin: 0 10px;
}

.item span {
  width: 100%;
  height: 100%;
}

.dark .item {
  color: #fff;
}
</style>
