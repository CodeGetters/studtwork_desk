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
        <router-link to="/" title="home" class="item">
          <span>Home</span>
        </router-link>
        <router-link to="/blog" title="blog" class="item">
          <span>Blog</span>
        </router-link>

        <router-link
          to="/projects"
          title="projects"
          class="w80px text-center mx10px text-#aaa hover:text-#000 .dark:text-#aaa .dark:hover:text-#fff"
        >
          <span class="selection:text-#000 dark:selection:text-#fff"
            >Projects</span
          >
        </router-link>

        <router-link
          to="/demos"
          class="w50px text-center mx10px text-#aaa hover:text-#000 .dark:text-#aaa dark:hover:text-#fff"
          title="demos"
        >
          <span class="selection:text-#000 dark:selection:text-#fff"
            >Demos</span
          >
        </router-link>
        <a
          href="https://github.com/CodeGetters"
          target="_blank"
          class="iconItem"
          title="GitHub"
          ><div class="i-grommet-icons:github"></div>
        </a>
        <a
          href="https://gitee.com/fancim"
          target="_blank"
          title="Gitee"
          class="iconItem"
          ><div class="i-simple-icons:gitee"></div
        ></a>
        <a href="https://twitter.com/iridescenr_star" title="X" class="iconItem"
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
  color: #aaa;
  text-align: center;
  margin-right: 10px;
  margin-left: 10px;
  line-height: 30px;
}

.item:hover {
  color: #000;
}

.iconItem {
  width: 30px;
  height: 30px;
  color: #aaa;
  text-align: center;
  line-height: 30px;
  margin: 0 10px;
}

.iconItem:hover {
  color: #000;
}

.item span {
  width: 100%;
  height: 100%;
}

.dark .item,
.dark .iconItem {
  color: #aaa;
}

.dark .item:hover,
.dark .iconItem:hover {
  color: #fff;
}

.item span::selection {
  color: #000;
}

.dark .item span::selection {
  color: #fff;
}
</style>
