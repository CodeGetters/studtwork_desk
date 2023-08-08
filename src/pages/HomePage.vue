<script setup lang="ts">
import Header from "@/layout/Header.vue";
import Container from "@/layout/Container.vue";
import Footer from "@/layout/Footer.vue";
</script>

<template>
  <div id="HomePage" class="w100% h100% bg-#fff .dark:bg-black">
    <Header />
    <main class="mt-20px overflow-hidden">
      <Container />
      <Footer />
    </main>
  </div>
</template>

<style scoped></style>
