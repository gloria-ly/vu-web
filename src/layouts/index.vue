<template>
  <div>layout加载。。。。。</div>
  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route" />
  </router-view>
</template>

<script setup lang="ts"></script>
