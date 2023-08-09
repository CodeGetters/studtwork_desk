<template>
  <router-view v-slot="{ Component }">
    <transition name="studtwork">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
