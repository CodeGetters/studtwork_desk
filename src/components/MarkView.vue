<script setup lang="ts">
// @ts-ignore
import { Viewer } from "@bytemd/vue-next";

const props = defineProps<{
  textValue: string;
}>();
</script>

<template>
  <div class="MarkView">
    <Viewer :tabindex="2" :value="props.textValue" class="100% h100% p2%" />
  </div>
</template>
