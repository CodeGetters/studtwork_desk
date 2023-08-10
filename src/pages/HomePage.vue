<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Home = defineAsyncComponent(() => import("@/docs/Home.md"));
</script>

<template>
  <div id="Container" class="w100% bg-#fff .dark:bg-black">
    <div class="w40% m-auto container text-black .dark:text-#fff">
      <Home style="min-height: 600px" />
    </div>
  </div>
</template>

<style>
@import url("@/assets/styles/markdown.css");

p {
  color: #555;
}
</style>
