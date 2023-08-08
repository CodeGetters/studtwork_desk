<script setup lang="ts">
import Header from "@/layout/Header.vue";
import Container from "@/layout/Container.vue";
import Footer from "@/layout/Footer.vue";
</script>

<template>
  <div id="HomePage" class="bg-#fff .dark:bg-black">
    <Header />
    <main class="mt-20px h100vh overflow-hidden">
      <Container />
      <Footer />
    </main>
  </div>
</template>

<style scoped></style>
