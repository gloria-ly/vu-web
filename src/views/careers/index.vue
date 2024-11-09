<template>
  <DetailPage
    :align="'middle'"
    :direction="'vertical'"
    :size="20"
    :content="content"
    :width="'85%'"
  />
  <a-row :gutter="16" justify="center" class="mt-2">
    <a-col
      :md="{ span: 20, offset: 2 }"
      :sm="{ span: 20, offset: 2 }"
      :xs="{ span: 22, offset: 1 }"
    >
      <a-row :gutter="16">
        <a-col v-for="item in list" :md="8" :sm="12" :xs="24" class="list-card">
          <CardTwo :title="item.title" :img="item.img" :content="item.content" />
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { Grid } from 'ant-design-vue';
import DetailPage from '@/views/components/DetailPage/index.vue';
import CardTwo from '@/views/components/CardTwo/index.vue';
import news1 from '@/assets/image/careers/docs-127.png';
import news2 from '@/assets/image/careers/docs-128.png';
import news3 from '@/assets/image/careers/docs-129.png';
import news4 from '@/assets/image/careers/docs-130.png';
import news5 from '@/assets/image/careers/docs-131.png';
import news6 from '@/assets/image/careers/docs-132.png';
import news7 from '@/assets/image/careers/docs-133.png';
import news8 from '@/assets/image/careers/docs-134.png';
import news9 from '@/assets/image/careers/docs-135.png';
import news10 from '@/assets/image/careers/docs-136.png';

const useBreakpoint = Grid.useBreakpoint;
const screens = useBreakpoint();
const { t } = useI18n();
const router = useRouter();

const content = reactive([
  {
    content:
      'Vodafone is committed to attracting, developing and retaining the very best people by offering a motivating and inclusive workplace in which talent is truly recognised and rewarded. We actively encourage everyone to consider becoming a part of our journey. We help people and companies succeed in the digital world. Come and join the team! Find out about the opportunities we have available by clicking below.',
    type: 'text',
    size: 18
  },
  {
    content: 'View Current Opportunities',
    type: 'button1',
    size: 18
  },
  {
    type: 'space',
    size: 40
  },
  {
    content: 'The career world of Vodafone at a glance',
    type: 'text',
    size: 40
  }
]);

const list = reactive([
  {
    title: 'Retail & Customer Service',
    content:
      'Be our brand champions providing smart resolutions to guide customers to get the most out of their tech.',
    img: news1
  },
  {
    title: 'Digital & Social Media',
    content:
      'A tech savvy team that create exciting innovative digital content and help keep the look & feel of our brand– shaping our online presence.',
    img: news2
  },
  {
    title: 'Brands & Marketing',
    content:
      'Shape customer perception of our brand by ensuring our consumers connect with what we represent - connect for a better future.',
    img: news3
  },
  {
    title: 'Value Added Services',
    content:
      'Develop new services, which enhance and delight customer experience and implement services to provide rich content on the Vodafone network.',
    img: news4
  },
  {
    title: 'Human Resources',
    content:
      'Fostering a culture of success, with a rewarding work environment and developing the talent blueprint for the future.',
    img: news5
  },
  {
    title: 'Finance',
    content:
      'Extract value out of our financial data through keen analytical and auditing skills. Provide advice, analysis and insight to help make the right commercial decisions whilst protecting value.',
    img: news6
  },
  {
    title: 'Sales',
    content:
      'We strive to offer our customers the widest range of market-leading products. Our passion is offering stand out products and services to connect.',
    img: news7
  },
  {
    title: 'Data Analytics',
    content:
      'Transform the way we do business by designing analytics and automation solutions. Work with sophisticated technologies and turn unstructured data into something incredible.',
    img: news8
  },
  {
    title: 'Technology',
    content:
      'Work on the next generation of ground-breaking tech for the future to solve complex technology challenges and invent new solutions.',
    img: news9
  },
  {
    title: 'Ecommerce',
    content:
      'Develop and transform our eCommerce capability to accelerate a cashless society, leading Vodafone into a digital future.',
    img: news10
  }
]);

onMounted(() => {
  const cards: NodeListOf<Element> = document.querySelectorAll('.card-two');
  let maxHeight = 0;
  cards.forEach((card) => {
    const cardHeight = (card as HTMLElement).offsetHeight;
    if (cardHeight > maxHeight) {
      maxHeight = cardHeight;
    }
  });
  cards.forEach((card) => {
    (card as HTMLElement).style.height = `${maxHeight}px`;
  });
});
</script>
<style lang="css" scoped>
.list-card {
  margin-bottom: 30px;
}
</style>
