<template>
  <div class="card-two">
    <a-card hoverable :style="{ height: '100%', ...style }">
      <a-flex vertical class="item">
        <div>
          <img :src="img" style="width: 100px; height: 99px" />
        </div>
        <a-typography-text class="font-title-22">{{ title }}</a-typography-text>
        <a-typography-text class="font-title-18" type="secondary">{{ content }}</a-typography-text>
      </a-flex>
      <!-- <div v-if="buttonText" class="button-2 font-title-14 cursor-pointer">{{ buttonText }}</div> -->
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    default: 'Retail & Customer Service'
  },
  content: {
    type: String,
    required: false,
    default: () =>
      'Be our brand champions providing smart resolutions to guide customers to get the most out of their tech.'
  },
  style: {
    type: Object,
    default: () => {}
  },
  img: {
    type: String,
    default: ''
  }
  // buttonText: {
  //   type: String,
  //   default: 'Info 081111 | Terms and Conditions apply'
  // }
});
</script>

<style lang="css" scoped>
.card-two {
  position: relative;
  .ant-card .ant-card-body {
    padding: 20px 0px 30px 0px;
  }
  .ant-card-hoverable:hover {
    border-color: #e60000;
    .button-2 {
      background-color: #e60000;
      color: #fff;
      box-shadow: 0px 5px 5px rgba(15, 17, 21, 0.2);
    }
  }
  .item {
    border-top: solid 1px #e0e6e7;
    &:first-child {
      border-top: unset;
    }
    padding: 14px 0px;
  }
  .button-2 {
    border-radius: 3px;
    color: #e60000;
    padding: 10px 10px;
    text-transform: uppercase;
    background-color: #fff;
    border: solid 1px #e60000;
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, 50%);
    &:hover {
      background-color: #e60000;
      color: #fff;
      box-shadow: 0px 5px 5px rgba(15, 17, 21, 0.2);
    }
  }
}
</style>
