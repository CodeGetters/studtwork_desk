<script setup lang="ts">
import MarkView from "@/components/MarkView.vue";
const value = "input";
</script>

<template>
  <div id="Container" class="w100% h80vh bg-#fff .dark:bg-black">
    <div class="w40% m-auto container text-black .dark:text-#fff">
      <MarkView :text-value="value" />
    </div>
  </div>
</template>

<style scoped>
p {
  color: #555;
}
</style>
