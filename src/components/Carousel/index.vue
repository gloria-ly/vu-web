<template>
  <a-carousel :autoplay="autoplay" :dots="dots" :dotsClass="'slick-dots' + dotsClass">
    <div v-for="item in list">
      <img :class="'img-class' + imgClass" :src="item.url" />
    </div>
  </a-carousel>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  autoplay: {
    type: Boolean,
    default: true
  },
  dots: {
    type: Boolean,
    default: true
  },
  dotsClass: {
    type: String,
    default: ''
  },
  list: {
    type: Object,
    default: () => []
  },
  imgClass: {
    type: String,
    default: ''
  }
});
</script>

<style lang="css" scoped>
.img-class {
  width: 100%;
}
:deep(.slick-dots li button) {
  height: 10px;
  width: 10px;
  border-radius: 10px;
}
</style>
