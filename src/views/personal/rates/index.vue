<template>
  <a-row :gutter="16" justify="center">
    <DetailPage
      :align="'center'"
      :direction="'vertical'"
      :size="20"
      :content="content"
      :width="'85%'"
    />

    <a-col :md="20" :sm="20" :xs="22">
      <a-row :gutter="16">
        <a-col v-for="item in list" :md="8" :sm="24" :xs="24" class="list-card">
          <CardOne :title="item.title" :content="item.content" />
        </a-col>
      </a-row>
    </a-col>
    <DetailPage
      :align="'start'"
      :direction="'vertical'"
      :size="20"
      :content="content1"
      :width="'85%'"
    />
  </a-row>
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
    title: 'Zone 1',
    content: [
      {
        title: 'Countries',
        content: '67'
      },
      {
        title: 'To Mobile',
        content: '62vt/min'
      },
      {
        title: 'To Fixed',
        content: '52vt/min'
      }
    ]
  },
  {
    title: 'Zone 2',
    content: [
      {
        title: 'Countries',
        content: '138'
      },
      {
        title: 'To Mobile',
        content: '72vt/min'
      },
      {
        title: 'To Fixed',
        content: '72vt/min'
      }
    ]
  },
  {
    title: 'Zone 3',
    content: [
      {
        title: 'Countries',
        content: '24'
      },
      {
        title: 'To Mobile',
        content: '152vt/min'
      },
      {
        title: 'To Fixed',
        content: '152vt/min'
      }
    ]
  },
  {
    title: 'Zone 4',
    content: [
      {
        title: 'To Satellite Phones'
      },
      {
        title: 'To Mobile',
        content: '515vt/min'
      },
      {
        title: 'To Fixed',
        content: '515vt/min'
      }
    ]
  },
  {
    title: 'SMS',
    content: [
      {
        title: 'To Any Destination'
      },
      {
        title: 'To Mobile',
        content: '13vt/sms'
      }
    ]
  }
]);

const content = reactive([
  {
    content: 'National Rates',
    type: 'text',
    size: 40
  },
  {
    content: '',
    type: 'space',
    size: 10
  },
  {
    content: [
      {
        left: 'Vodafone Mobile to all Vodafone network and Other operator',
        right: '28vt/min'
      },
      {
        left: 'SMS to Vodafone network and other operator',
        right: '11vt/sms'
      },
      {
        left: 'Data on Pay as you go',
        right: '11vt/mb'
      }
    ],
    type: 'text-list2',
    size: 18
  },
  {
    content: '',
    type: 'space',
    size: 20
  },
  {
    content: 'International Calling Rates',
    type: 'text',
    size: 40
  },
  {
    content: '',
    type: 'space',
    size: 10
  }
]);

const content1 = reactive([
  {
    content: 'Becoming a Vodafone Prepaid User',
    type: 'text',
    size: 22
  },
  {
    content: [
      'Visit Vodafone Shop to Buy Sim card',
      'Activate sim card by calling 171 on your Mobile',
      'Text Block to 183 – to restrict data consumption outside your data pack or pay as you go usage',
      'Recharge your sim card from any Vodafone Refill reseller - if you wish to make calls or purchase a prepaid plan',
      'To Activate Data – go to settings on your Mobile, switch on your Data. Set your APN to data.vodafone.vu',
      'To buy All in Wan, Data plan, Tok & SMS plan visit USSD by dialing *183#'
    ],
    type: 'text-list3',
    size: 18
  },
  {
    content: '',
    type: 'space',
    size: 20
  },
  {
    content: 'International Calling Rates',
    type: 'text',
    size: 40
  },
  {
    content: '',
    type: 'space',
    size: 10
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
