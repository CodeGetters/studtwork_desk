<script setup lang="ts">
import { config } from "@/config";

const { author } = config;
const { startYear } = config.layout.footer;
</script>

<template>
  <div id="Footer" class="w100%">
    <div class="protocol w460px m-auto text-#8581818a selection:text-#000">
      <a
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        target="_blank"
        class="text-#8581818a hover:text-#ccc"
        >CC BY-NC-SA 4.0</a
      >
      {{ startYear }}-PRESENT © {{ author }}
    </div>
  </div>
</template>

<style scoped>
a:hover {
  text-decoration: underline dotted #8581818a;
}

#Footer .protocol a::selection {
  color: #000;
}

.dark a:hover {
  text-decoration: underline dotted #ccc;
}

.dark .protocol::selection,
.protocol a::selection {
  color: #ccc;
}
</style>
