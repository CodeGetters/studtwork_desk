<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
import { onMounted, ref } from "vue";
import { frontCheckId } from "@/api/article";
import { formatDayDate } from "@/utils/formatDate";
import type { getArticle, getData, articleInfo } from "@/types/service";

const articleId = route.query.id;

const articleInfo = ref<articleInfo>();

const getInfo = async (articleId: any): Promise<void> => {
  const res: getData<getArticle> = await frontCheckId(articleId);
  articleInfo.value = res.data.article;
  articleInfo.value.lastUpdate = formatDayDate(articleInfo.value.lastUpdate);
};

onMounted(() => {
  getInfo(articleId);
});
</script>
<template>
  <div id="viewArticle" class="w40% m-auto">
    <h1>{{ articleInfo?.articleName }}</h1>
    <div class="basicInfo"></div>
  </div>
</template>
