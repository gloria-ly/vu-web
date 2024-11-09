<template>
  <div class="text-list-two">
    <div v-for="(item, index) in content.content" class="item">
      <div class="left">
        <a-typography-text :class="'font-title-18 text-color-red'">
          {{ item.left }}
        </a-typography-text>
      </div>
      <div class="right">
        <a-typography-text :class="'font-title-18 text-bold'">
          {{ item.right }}
        </a-typography-text>
      </div>
    </div>
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
        {
          left: '',
          right: ''
        }
      ],
      type: 'text-list',
      size: 18
    }
  }
});
</script>

<style lang="css" scoped>
.text-list-two {
  .item {
    background-color: #fff;
    margin-bottom: 20px;
    box-shadow: 0 0 6px rgba(15, 17, 21, 0.1);
    border-radius: 5px;
    text-align: left;
    overflow: hidden;
  }
  .left {
    text-align: left;
    display: inline-block;
    width: calc(100% - 206px);
    padding: 22px 20px;
    font-size: 20px;
    line-height: 22px;
    color: #e60000;
    border-radius: 0;
    margin: 0;
    font-family: 'vodafone_rgregular';
    position: relative;
  }
  .right {
    display: inline-block;
    font-size: 20px;
    line-height: 22px;
    margin-bottom: 0;
    padding: 4px 20px;
  }
}
</style>
