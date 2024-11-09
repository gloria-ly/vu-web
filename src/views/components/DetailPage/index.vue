<template>
  <a-space
    :align="align"
    :direction="direction"
    :size="size"
    :style="{ width }"
    class="detail-page"
  >
    <div v-for="item in content" class="item">
      <a-typography-text v-if="item.type === 'text'" :class="'font-title-' + item.size">
        {{ item.content }}
      </a-typography-text>
      <div v-if="item.type === 'space'" :style="{ height: item.size + 'px' }"></div>
      <div v-if="item.type === 'text-list'">
        <TextListOne :content="item" />
      </div>
      <div v-if="item.type === 'text-list2'">
        <TextListTwo :content="item" />
      </div>
      <div v-if="item.type === 'text-list3'">
        <TextListThree :content="item" />
      </div>
      <div v-if="item.type === 'a-text'">
        <a> {{ item.content }}</a>
      </div>
      <div v-if="item.type === 'button1'">
        <div class="button-2 cursor-pointer">
          <span :class="'font-title-' + item.size">
            {{ item.content }}
          </span>
        </div>
      </div>
    </div>
  </a-space>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import TextListOne from '@/views/components/TextListOne/index.vue';
import TextListTwo from '@/views/components/TextListTwo/index.vue';
import TextListThree from '@/views/components/TextListThree/index.vue';
interface ContentInfo {
  title?: string;
  content?:
    | string[]
    | string
    | {
        left: string;
        right: string;
      }[]
    | undefined;
  type: string;
  size?: number;
}
const props = defineProps({
  content: {
    type: Array<ContentInfo>,
    required: false,
    default: () => []
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
.detail-page {
  .ant-space-item {
    width: 100%;
  }
  .item {
    width: 100%;
  }
}
.button-2 {
  border-radius: 3px;
  color: #e60000;
  padding: 10px 20px;
  text-transform: uppercase;
  background-color: #fff;
  border: solid 1px #e60000;
  display: inline-block;
  &:hover {
    background-color: #e60000;
    color: #fff;
    box-shadow: 0px 5px 5px rgba(15, 17, 21, 0.2);
  }
}
</style>
