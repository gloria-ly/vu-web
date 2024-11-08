<template>
  <a-space :align="align" :direction="direction" :size="size" :style="{ width }">
    <div v-for="item in content">
      <a-typography-text v-if="item.type === 'text'" :class="'font-title-' + item.size">
        {{ item.content }}
      </a-typography-text>
      <div v-if="item.type === 'space'" :style="{ height: item.size + 'px' }"></div>
      <div v-if="item.type === 'text-list'">
        <TextListOne :content="item" />
      </div>
      <div v-if="item.type === 'a-text'">
        <a> {{ item.content }}</a>
      </div>
    </div>
  </a-space>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import TextListOne from '@/views/components/TextListOne/index.vue';
const props = defineProps({
  content: {
    type: Array,
    required: false,
    default: () => [
      {
        content: [
          'Visit a Vodafone shop and sign a 12 months contract',
          'Router is charged at 13,500vt'
        ],
        type: 'text-list',
        size: 18
      }
    ]
  },
  direction: {
    type: String,
    default: 'vertical'
  },
  align: {
    type: String,
    default: 'start'
  },
  size: {
    type: Number,
    default: 20
  },
  width: {
    type: String,
    default: '95%'
  }
});
</script>

<style lang="css" scoped>
.text-list-one {
  .number {
    border-radius: 30px;
    width: 20px;
    height: 20px;
    color: #fff;
    line-height: 20px;
    background-color: #e60000;
    margin-bottom: 5px;
  }
}
</style>
