<script setup lang="ts">
import vueSvg from "@/assets/vue.svg";
import { watch } from "vue";
import { useDark, useTitle, useToggle } from "@vueuse/core";
import Header from "@/layout/Header.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const title = useTitle("Set title");

watch(isDark, () => {
  title.value = isDark.value ? "🌙 Good evening!" : "☀️ Good morning!";
});
</script>

<template>
  <Header />
  <div class="bg-red w100% h100% .dark:bg-black">
    <button @click="toggleDark()">{{ isDark }}</button>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img :src="vueSvg" class="logo vue" alt="Vue logo" />
    </a>
    <!-- Phosphor 图标中的基本锚点图标 -->
    <div class="i-ph-anchor-simple-thin" />
    <!-- 来自 Material Design 图标的橙色闹钟 -->
    <div class="i-mdi-alarm text-orange-400" />
    <!-- 大号 Vue 标志 -->
    <div class="i-logos-vue text-3xl" />
    <!-- Linght 模式下显示太阳，Dark 模式下显示月亮，引用自 Carbon -->
    <button class="i-carbon-sun dark:i-carbon-moon" />
    <!-- Twemoji 笑脸，悬停时变成眼泪 -->
    <div
      class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy"
    />
    <span class="i-grommet-icons:github"></span>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
