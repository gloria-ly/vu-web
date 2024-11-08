<template>
  <div class="text-list-one">
    <a-flex v-for="(item, index) in content.content">
      <div class="number">
        {{ index + 1 }}
      </div>
      <a-typography-text :class="'font-title-' + content.size">
        {{ item }}
      </a-typography-text>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  content: {
    type: Object,
    required: false,
    default: {
      content: [
        'Visit a Vodafone shop and sign a 12 months contract',
        'Router is charged at 13,500vt'
      ],
      type: 'text-list',
      size: 18
    }
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
