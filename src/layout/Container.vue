<script setup lang="ts">
import { watch } from "vue";
import { useDark, useTitle, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const title = useTitle("Set title");

watch(isDark, () => {
  title.value = isDark.value ? "🌙 Good evening!" : "☀️ Good morning!";
});
</script>

<template>
  <div id="Container" class="w100% h90vh bg-#fff .dark:bg-black">
    <div class="w60% m-auto container text-black .dark:text-#fff">
      <!-- <div class="bg-red w100% h100% .dark:bg-black">
        <button @click="toggleDark()">{{ isDark }}</button>
        <span class="i-grommet-icons:github"></span>
        <div class="i-ph:anchor-simple-thin" />
        <div class="i-mdi:alarm text-orange-400 hover:text-teal-400" />
        <div
          class="w-2em h-2em i-logos:vue transform transition-800 hover:rotate-180"
        />
        <button
          class="i-carbon:sun dark:i-carbon:moon !w-2em !h-2em"
          @click="toggleDark()"
          title="toggle dark mode"
        />
        <div
          class="i-twemoji:grinning-face-with-smiling-eyes hover:i-twemoji:face-with-tears-of-joy"
        />
        <div class="text-base my-auto flex">
          <div class="i-carbon:arrow-left my-auto mr-1" />
          Hover it
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.vueLogo:hover {
  transform: rotate(180deg);
  transition: 0.3s ease-in-out all;
}
</style>
