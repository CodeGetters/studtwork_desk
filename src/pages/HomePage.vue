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
    <div
      class="w-full h100px flex items-center justify-center gap-x-4 text-4xl p-2 mt-4"
    >
      <div class="grommet-icons:github:file-type-light-pnpm?mask" />
      <span class="grommet-icons:apple"></span>
      <!-- <div class="i-vscode-icons:file-type-light-pnpm?mask text-red-300" /> -->
    </div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img :src="vueSvg" class="logo vue" alt="Vue logo" />
    </a>
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
