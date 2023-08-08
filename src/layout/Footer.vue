<script setup lang="ts">
import { config } from "@/config";

const { startYear, author } = config.layout.footer;
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
a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline dotted #8581818a;
}

.protocol a::selection {
  color: #000;
}

.dark a:hover {
  text-decoration: underline dotted #ccc;
}

.dark .protocol::selection,
a::selection {
  color: #ccc;
}
</style>
