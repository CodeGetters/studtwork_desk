<script setup lang="ts">
const props = defineProps({
  articleTitle: {
    type: String,
    default: "文章标题",
  },
  author: {
    type: String,
    default: "张三",
  },
  readers: {
    type: Number,
    default: 0,
  },
  lastUpdate: {
    type: String,
    default: "2020-08-09",
  },
});
</script>

<template>
  <div
    id="articleItem"
    class="rounded-10px p-15px mb-25px cursor-pointer"
    @click=""
  >
    <div class="title text-20px">{{ props.articleTitle }}</div>
    <div class="text-13px flex flex-row mt-25px">
      <div class="item author w180px">
        <div class="i-material-symbols:person" />
        作者：{{ props.author }}
      </div>
      <div class="item readers w140px">
        <div class="i-material-symbols:add-reaction-outline" />
        阅读量：{{ props.readers }}
      </div>
      <div class="item lastUpdate w200px">
        <div class="i-material-symbols:nest-clock-farsight-analog-outline" />
        最后更新时间：{{ props.lastUpdate }}
      </div>
    </div>
  </div>
</template>

<style scoped>
#articleItem {
  border: 1px dotted #aaa;
}

.item {
  text-align: left;
  margin-right: 14px;
}
</style>
