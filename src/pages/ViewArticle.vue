<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();

// TODO:使用 articleId 去查询文章
const articleId = route.query.id;
</script>
<template>
  <div id="viewArticle">{{ articleId }}</div>
</template>
