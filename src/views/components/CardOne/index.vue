<template>
  <a-card
    hoverable
    style="height: 100%"
    :headStyle="{ background: '#e60000', color: '#fff', ...headStyle }"
    :title="title"
    class="card-one"
  >
    <a-flex>
      <!-- <a-flex v-for="(data, index) in content" :key="index">
        <div>
          {{ data.title }}
        </div>
        <div>
          {{ data.content }}
        </div>
      </a-flex> -->
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
    .price {
      color: #e60000;
    }
    .button-2 {
      background-color: #e60000;
      color: #fff;
    }
  }
}
</style>
