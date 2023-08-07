<script setup lang="ts">
import { config } from "@/config/index";
const logo = config.layout.header.logo;
</script>

<template>
  <div id="Header" class="w100% h50px bg-#fff .dark:bg-black">
    <div
      class="py-5px px-80px h40px flex items-center leading-40px justify-between"
    >
      <div class="flex h40px select-none cursor-pointer">
        <div class="w40px h40px mr-6px">
          <img class="w100% h100%" :src="logo" alt="StudTWork" />
        </div>
        <span class=".dark:text-#fff">StudTWork</span>
      </div>
      <div class="menuList flex items-center">
        <div class="item">blog</div>
        <div class="item">project</div>
        <div class="item">demos</div>
        <div class="item">X</div>
        <div class="item">github</div>
        <div class="item">theme</div>
        <div class="item">Rss</div>
        <div class="item">sponsors</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-right: 20px;
  color: black;
  cursor: pointer;
  text-align: center;
}

.dark .item {
  color: #fff;
}
</style>
