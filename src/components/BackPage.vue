<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div
    id="backPage"
    class="h20px p-20px rounded-2px leading-20px"
    @click="router.push('/home')"
  >
    返回首页
  </div>
</template>

<style>
#backPage {
  border: 1px dashed #aaa;
  cursor: pointer;
}
</style>
