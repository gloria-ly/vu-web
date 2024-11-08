<template>
  <a-card
    hoverable
    style="height: 100%"
    :headStyle="{ background: '#e60000', color: '#fff', ...headStyle }"
    :title="title"
    class="card-one"
  >
    <a-flex vertical>
      <a-flex vertical v-for="(data, index) in content" :key="index" class="item">
        <a-typography-text class="font-title-1">{{ data.title }}</a-typography-text>
        <a-typography-text class="font-title-2">{{ data.content }}</a-typography-text>
      </a-flex>
      <hr />
    </a-flex>
    <div class="button-2 font-title-3 cursor-pointer">{{ buttonText }}</div>
  </a-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    default: 'Roaming via Optus Australia & Spark New Zealand at an affordable rate!'
  },
  content: {
    type: Array,
    required: false,
    default: () => [
      {
        title: 'Call to Vanuatu',
        content: '82vt/min'
      },
      {
        title: 'National call',
        content: '66vt/min'
      },
      {
        title: 'SMS to Vanuatu',
        content: '21vt/SMS'
      }
    ]
  },
  headStyle: {
    type: Object,
    default: () => {}
  },
  buttonText: {
    type: String,
    default: 'Info 081111 | Terms and Conditions apply'
  }
});
</script>

<style lang="css" scoped>
.card-one {
  .ant-card-hoverable:hover {
    border-color: #e60000;
  }
  .item {
    padding-bottom: 5px 0px;
  }
  .button-2 {
    background-color: #e60000;
    color: #fff;
  }
}
</style>
