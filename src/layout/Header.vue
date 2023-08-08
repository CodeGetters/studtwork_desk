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
      <div class="menuList flex items-center h40px">
        <div
          class="item i-charm:home"
          title="home"
          @click="JumpLinkTo('/', {})"
        >
          home
        </div>
        <div class="item i-jam:blogger-square" title="blog"></div>
        <div class="item i-prime:box" title="project"></div>
        <div class="item i-iconoir:yoga" title="project"></div>
        <div class="item i-bx:bxl-twitter" title="X">
          <a href="https://twitter.com/iridescenr_star" target="_blank"></a>
        </div>
        <div class="item i-grommet-icons:github" title="github">
          <a href="https://github.com/CodeGetters" target="_blank"></a>
        </div>
        <div class="item i-simple-icons:gitee" title="gitee">
          <a href="https://gitee.com/fancim" target="_blank"></a>
        </div>
        <div
          class="item i-carbon-sun dark:i-carbon-moon"
          @click="switchTheme()"
          title="theme"
        ></div>
        <div class="item i-ps:rss" title="RSS"></div>
        <div class="item i-simple-icons:githubsponsors" title="sponsors"></div>
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
  width: 25px;
  height: 25px;
  color: black;
  cursor: pointer;
  text-align: center;
  margin-right: 10px;
  margin-left: 10px;
}

.item a {
  width: 100%;
  height: 100%;
  display: block;
}

.dark .item {
  color: #fff;
}
</style>
