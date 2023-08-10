<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
import { onMounted, ref } from "vue";
import { frontCheckId } from "@/api/article";
import { formatDayDate } from "@/utils/formatDate";
import type { getArticle, getData, articleInfo } from "@/types/service";
import MarkView from "@/components/MarkView.vue";

const articleId = route.query.id;

const articleInfo = ref<articleInfo>();

const getInfo = async (articleId: any): Promise<void> => {
  const res: getData<getArticle> = await frontCheckId(articleId);
  console.log(res.data.article.articleCon);
  articleInfo.value = res.data.article;
  articleInfo.value.lastUpdate = formatDayDate(articleInfo.value.lastUpdate);
};

onMounted(() => {
  getInfo(articleId);
});
</script>
<template>
  <div id="viewArticle" class="w40% m-auto flex flex-col">
    <h1>{{ articleInfo?.articleName }}</h1>
    <div class="basicInfo flex flex-row text-12px">
      <div class="item author w180px">
        <div class="i-material-symbols:person" />
        作者：{{ articleInfo?.author }}
      </div>
      <div class="item readers w140px">
        <div class="i-material-symbols:add-reaction-outline" />
        阅读量：{{ articleInfo?.readers }}
      </div>
      <div class="item lastUpdate w200px">
        <div class="i-material-symbols:nest-clock-farsight-analog-outline" />
        最后更新时间：{{ articleInfo?.lastUpdate }}
      </div>
    </div>
    <div class="articleCon text-20px mt-40px">
      <MarkView
        :textValue="articleInfo?.articleCon"
        v-if="articleInfo?.articleCon"
      />
    </div>
  </div>
</template>
