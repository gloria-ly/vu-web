<template>
  <a-row class="bottom-2" :gutter="[0, 24]">
    <a-col
      v-for="item in footerList"
      :key="item.id"
      :md="12"
      :sm="12"
      :xs="24"
      :lg="24 / footerList.length"
      :class="screens.sm ? 'text-align-left' : 'text-align-center'"
    >
      <a-typography-text class="font-title-1 text-white-color">
        {{ item.title.toUpperCase() }}
      </a-typography-text>
      <a-row :gutter="[0, 12]">
        <a-col :span="24" v-for="childItem in item.list" :key="childItem.id">
          <div v-if="childItem.type === 'email'">
            <div>
              <a-typography-text class="font-title-3 text-white-color">
                {{ childItem.title }}
              </a-typography-text>
            </div>
            <div>
              <a :href="'mailto:' + childItem.content" class="font-title-2 text-white-color">
                {{ childItem.content }}
              </a>
            </div>
          </div>

          <div v-if="childItem.type === 'fullUrl'">
            <div>
              <a :href="childItem.content" class="font-title-2 text-white-color">
                <DoubleRightOutlined class="icon" />
                {{ childItem.title }}
              </a>
            </div>
          </div>
          <div v-if="childItem.type === 'internalTo'">
            <div @click="goToPage(childItem.content)">
              <a class="font-title-2 text-white-color">
                <DoubleRightOutlined class="icon" />
                {{ childItem.title }}
              </a>
            </div>
          </div>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
  <a-flex justify="center">
    <div class="bottom-3 cursor-pointer">
      <a-typography-text class="font-title-1 text-white-color">
        CALLING FROM OVERSEAS
      </a-typography-text>
      <a-typography-text class="font-title-2 text-white-color">TEL:+6787781111</a-typography-text>
    </div>
  </a-flex>

  <div class="bottom-1">
    2024 Copyright
    <span class="cursor-pointer vodafone-click" @click="goToPage('business-bundle')"
      >Vodafone Vanuatu.</span
    >
    All Rights reserved.
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Grid } from 'ant-design-vue';

const useBreakpoint = Grid.useBreakpoint;
const screens = useBreakpoint();
const router = useRouter();
const footerList = ref([
  {
    id: '1',
    title: 'Contact Details',
    list: [
      {
        id: '1',
        type: 'email',
        title: 'Customer Service',
        content: 'customercare@vodafone.com.vu'
      },
      {
        id: '2',
        type: 'email',
        title: 'Commercial Sales',
        content: 'sales@vodafone.com.vu'
      },
      {
        id: '3',
        type: 'email',
        title: 'Marketing Department',
        content: 'marketing@vodafone.com.vu'
      }
    ]
  },
  {
    id: '2',
    title: 'For users',
    list: [
      {
        id: '1',
        title: 'Inbox',
        type: 'fullUrl',
        content: 'https://webmail.vanuatu.com.vu/surgeweb'
      },
      {
        id: '2',
        title: 'Speed Test',
        type: 'internalTo',
        content: 'speed-test'
      },
      {
        id: '3',
        title: 'Login',
        type: 'fullUrl',
        content: 'https://gptoweb.vodafone.com.vu/portal/secureShowCustomer.do'
      },
      {
        id: '4',
        title: 'My Account',
        type: 'fullUrl',
        content: 'https://gptoweb.vodafone.com.vu/portal/secureShowCustomer.do'
      }
    ]
  },
  {
    id: '3',
    title: 'Main menus',
    list: [
      {
        id: '1',
        title: 'Home',
        type: 'internalTo',
        content: '/'
      },
      {
        id: '2',
        title: 'About Us',
        type: 'internalTo',
        content: 'about'
      },
      {
        id: '3',
        title: 'Services',
        type: 'internalTo',
        content: 'services'
      }
    ]
  },
  {
    id: '4',
    title: 'Helping Menus',
    list: [
      {
        id: '1',
        title: 'Support',
        type: 'internalTo',
        content: 'business-bundle'
      },
      {
        id: '2',
        title: 'Faq',
        type: 'internalTo',
        content: 'faq'
      },
      {
        id: '3',
        title: 'Online Help',
        type: 'internalTo',
        content: 'services'
      },
      {
        id: '4',
        title: 'Contact Us',
        type: 'internalTo',
        content: 'contact'
      }
    ]
  }
]);
const goToPage = (name: any) => {
  router.push({
    name
    // query: {
    //   keyword: 'Vue'
    // }
  });
};

watch(screens, () => {
  console.log(screens.value);
});
</script>

<style lang="css" scoped>
.bottom-1 {
  background-color: #e60000;
  height: 74px;
  line-height: 74px;
  width: 100%;
  color: #fff;
  position: absolute;
  .vodafone-click {
    color: #fff;
    &:hover {
      color: #070707f3;
    }
  }
}
.bottom-2 {
  margin: 50px 30px;
  a {
    display: flex;
    .icon {
      color: #e60000;
      display: none;

      font-size: 9px;
    }
    &:hover {
      color: #e60000;
      .icon {
        display: inline-flex;
        transition: all 0.3s ease-in-out;
      }
    }
  }
}
.bottom-3 {
  padding: 20px 36px;
  border-radius: 5px;
  line-height: 24px;
  margin-bottom: 20px;
  background: #2f3438;
  &:hover {
    background-color: #e60000;
  }
}
@media only screen and (max-width: 1366px) {
  .font-title-1 {
    font-size: 20px;
  }
  .font-title-2 {
    font-size: 16px;
  }

  .bottom-3 {
    padding: 15px 30px;
  }
}

@media only screen and (max-width: 576px) {
  .font-title-1 {
    font-size: 16px;
  }
  .font-title-2 {
    font-size: 14px;
  }
  .bottom-2 {
    a {
      justify-content: center;
    }
  }

  .bottom-3 {
    padding: 5px 10px;
  }
}
</style>
