<script setup lang="ts">
// import MarkView from "@/components/MarkView.vue";
// const value = "input";
import HelloWorld from "../../README.md";
</script>

<template>
  <div id="Container" class="w100% bg-#fff .dark:bg-black">
    <div class="w40% m-auto container text-black .dark:text-#fff">
      <!-- <MarkView :text-value="value" /> -->
      <HelloWorld />
    </div>
  </div>
</template>

<style scoped>
p {
  color: #555;
}
</style>
