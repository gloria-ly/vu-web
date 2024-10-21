<template>
  {{ renderHTML }}
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  html: {
    type: String,
    default: '默认标题样式1'
  }
});

const renderHTML = computed(() => {
  console.log(props.html);
  return h('div', { innerHTML: props.html });
});
</script>
