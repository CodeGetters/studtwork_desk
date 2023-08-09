<script setup lang="ts">
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";
</script>

<template>
  <div id="HomePage" class="w100% h100% bg-#fff .dark:bg-black">
    <Header />
    <main class="mt-20px overflow-hidden">
      <router-view v-slot="{ Component }">
        <transition name="studtwork">
          <component :is="Component" />
        </transition>
      </router-view>
      <Footer />
    </main>
  </div>
</template>

<style scoped></style>
