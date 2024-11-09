<template>
  <a-row :gutter="16" justify="center">
    <a-col :md="24" :sm="24" :xs="24">
      <a-typography-text :class="'font-title-' + title1.title.type">
        {{ title1.title.content }}
      </a-typography-text>
    </a-col>
    <a-col :md="20" :sm="20" :xs="22">
      <a-row :gutter="16">
        <a-col v-for="item in list" :md="8" :sm="24" :xs="24" class="list-card">
          <CardOne :title="item.title" :content="item.content" :buttonText="item.buttonText" />
        </a-col>
      </a-row>
    </a-col>
    <a-col :md="20" :sm="20" :xs="22">
      <a-row :gutter="16">
        <a-col v-for="item in list1" :md="12" :sm="24" :xs="24" class="list-card">
          <CardOne :title="item.title" :content="item.content" :buttonText="item.buttonText" />
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
  <DetailPage
    :align="'start'"
    :direction="'vertical'"
    :size="20"
    :content="content"
    :width="'85%'"
  />
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { Grid } from 'ant-design-vue';
import CardOne from '@/views/components/CardOne/index.vue';
import TextListOne from '@/views/components/TextListOne/index.vue';
import DetailPage from '@/views/components/DetailPage/index.vue';
const useBreakpoint = Grid.useBreakpoint;
const screens = useBreakpoint();
const { t } = useI18n();
const router = useRouter();
const list = reactive([
  {
    title: 'LTE BB 50GB',
    content: [
      {
        title: 'Volume GB',
        content: '50GB'
      },
      {
        title: 'FUP Speed',
        content: '256Kpbs'
      },
      {
        title: '',
        content: '6000vt (VAT Excl.)'
      }
    ],
    buttonText: 'select plan'
  },
  {
    title: 'LTE BB 100GB',
    content: [
      {
        title: 'Volume GB',
        content: '100Gb'
      },
      {
        title: 'FUP Speed',
        content: '256Kpbs'
      },
      {
        title: '',
        content: '12,000vt (VAT Excl.)'
      }
    ],
    buttonText: 'select plan'
  },
  {
    title: 'LTE BB 250GB',
    content: [
      {
        title: 'Volume GB',
        content: '250GB'
      },
      {
        title: 'FUP Speed',
        content: '512Kpbs'
      },
      {
        title: '',
        content: '25,000vt (VAT Excl.)'
      }
    ],
    buttonText: 'select plan'
  }
]);
const list1 = reactive([
  {
    title: 'LTE BB 500GB',
    content: [
      {
        title: 'Volume GB',
        content: '500GB'
      },
      {
        title: 'FUP Speed',
        content: '1Mbps'
      },
      {
        title: '',
        content: '45,000vt (VAT Excl.)'
      }
    ],
    buttonText: 'select plan'
  },
  {
    title: 'LTE BB 1000GB',
    content: [
      {
        title: 'Volume GB',
        content: '1000Gb'
      },
      {
        title: 'FUP Speed',
        content: '1Mbps'
      },
      {
        title: '',
        content: '85,000vt (VAT Excl.)'
      }
    ],
    buttonText: 'select plan'
  }
]);
const title1 = reactive({
  title: {
    content: 'Business LTE Broadband Plans',
    type: 40
  }
});
const title2 = reactive([
  {
    content: 'UNLIMITED INTERNET',
    type: 'text',
    size: 30
  },
  {
    content: '10 PM - 6 AM',
    type: 'text',
    size: 18
  },
  {
    type: 'space',
    size: 80
  }
]);
const content = reactive([
  {
    content: 'Price are Vat Excluded',
    type: 'text',
    size: 22
  },
  {
    content: 'HOW TO GET A CONNECTION?',
    type: 'text',
    size: 22
  },
  {
    content: [
      'Visit a Vodafone shop and sign a 12 months contract',
      'Router is charged at 13,500vt'
    ],
    type: 'text-list',
    size: 18
  },
  {
    content: 'TERMS AND CONDITIONS',
    type: 'text',
    size: 22
  },
  {
    content: [
      'Fair Usage Policy (FUP) is applied once data volume exceeds',
      'Top up applicable on once off basis'
    ],
    type: 'text-list',
    size: 18
  },
  {
    content: 'Terms and Conditions',
    type: 'text',
    size: 22
  },
  {
    content: 'Click here to download our terms and conditions',
    type: 'a-text',
    size: 18
  },
  {
    type: 'space',
    size: 80
  }
]);
// const commonStore = CommonStore();
// const sd = 111;
// commonStore.setUserInfo('修改userInfo');
</script>
<style lang="css" scoped>
.list-card {
  margin-bottom: 50px;
}
</style>
