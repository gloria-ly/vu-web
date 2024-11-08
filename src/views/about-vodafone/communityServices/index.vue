<template>
  <DetailPage
    :align="'start'"
    :direction="'vertical'"
    :size="20"
    :content="title1"
    :width="'85%'"
  />
  <a-row :gutter="16" justify="center">
    <a-col :md="20" :sm="20" :xs="22">
      <a-row :gutter="16" justify="start">
        <a-col v-for="item in list" :md="12" :sm="12" :xs="24" class="list-card">
          <img :src="item.img" width="100%" height="460px" />
          <div class="list-text">
            <a-typography-text :class="'font-title-18'">
              {{ item.content }}
            </a-typography-text>
          </div>
          <div class="list-text">
            <a>READ MORE</a>
          </div>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
  <DetailPage
    :align="'center'"
    :direction="'vertical'"
    :size="20"
    :content="title2"
    :width="'85%'"
  />
  <a-row :gutter="16" justify="center">
    <a-col :md="20" :sm="20" :xs="22">
      <img :src="news3" width="100%" />
    </a-col>
  </a-row>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { Grid } from 'ant-design-vue';
import DetailPage from '@/views/components/DetailPage/index.vue';
import news1 from '@/assets/image/about/news1.jpg';
import news2 from '@/assets/image/about/news2.jpeg';
import news3 from '@/assets/image/about/news3.jpeg';
const useBreakpoint = Grid.useBreakpoint;
const screens = useBreakpoint();
const { t } = useI18n();
const router = useRouter();
const list = reactive([
  {
    img: news1,
    content:
      'Vodafone in partnership with theDepartment of Cooperatives with the first 25 Cooperative sites to be Equipped with VSAT solutions.'
  },
  {
    img: news2,
    content: 'Vodafone Vanuatu Successfully launched 4 new Mobile Towers on Tanna Island.'
  }
]);
const title1 = reactive([
  {
    content: 'News',
    type: 'text',
    size: 30
  }
]);
const title2 = reactive([
  {
    content: 'Vodafone Vanuatu proud sponsors of the 2021-2022 PVFA Premier League',
    type: 'text',
    size: 30
  }
]);
</script>
<style lang="css" scoped>
.list-card {
  margin-bottom: 50px;
  .list-text {
    width: 100%;
    text-align: left;
    padding-bottom: 20px;
  }
}
</style>
