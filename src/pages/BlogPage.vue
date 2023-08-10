<script setup lang="ts">
import { onMounted, ref } from "vue";
import { frontCheck } from "@/api/article";
import ArticleItem from "@/components/ArticleItem.vue";
import { formatDayDate } from "@/utils/formatDate";
import { JumpLinkTo } from "@/utils/useJump";
import type { articleInfo, getArticles, getData } from "@/types/service";
import BackPage from "@/components/BackPage.vue";

const article = ref<Array<articleInfo>>();

const getArticleList = async () => {
  const res: getData<getArticles> = await frontCheck();
  article.value = res.data.articleList;

  for (let item in article.value) {
    article.value[item].lastUpdate = formatDayDate(
      article.value[item].lastUpdate,
    );
  }
};

onMounted(() => {
  getArticleList();
});
</script>

<template>
  <div id="blogPage" class="m-auto w40%">
    <h1>Blogs</h1>
    <div class="articleList" v-for="(item, index) in article" :key="index">
      <ArticleItem
        :article-title="item.articleName"
        :author="item.author"
        :last-update="item.lastUpdate"
        :readers="item.readers"
        @click="JumpLinkTo('/viewArticle', { id: item.id })"
      />
    </div>
    <BackPage />
  </div>
</template>
