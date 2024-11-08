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
      <a-typography-text class="font-title-22 text-white-color">
        {{ item.title.toUpperCase() }}
      </a-typography-text>
      <a-row :gutter="[0, 12]">
        <a-col :span="24" v-for="childItem in item.list" :key="childItem.id">
          <div v-if="childItem.type === 'email'">
            <div>
              <a-typography-text class="font-title-14 text-white-color">
                {{ childItem.title }}
              </a-typography-text>
            </div>
            <div>
              <a :href="'mailto:' + childItem.content" class="font-title-18 text-white-color">
                {{ childItem.content }}
              </a>
            </div>
          </div>

          <div v-if="childItem.type === 'fullUrl'">
            <div>
              <a :href="childItem.content" class="font-title-18 text-white-color">
                <DoubleRightOutlined class="icon" />
                {{ childItem.title }}
              </a>
            </div>
          </div>
          <div v-if="childItem.type === 'internalTo'">
            <div @click="goToPage(childItem.content)">
              <a class="font-title-18 text-white-color">
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
      <a-typography-text class="font-title-22 text-white-color">
        CALLING FROM OVERSEAS
      </a-typography-text>
      <a-typography-text class="font-title-18 text-white-color">TEL:+6787781111</a-typography-text>
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
import { footerList } from '@/utils/logics.ts';
const useBreakpoint = Grid.useBreakpoint;
const screens = useBreakpoint();
const router = useRouter();

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
  .bottom-3 {
    padding: 15px 30px;
  }
}

@media only screen and (max-width: 576px) {
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
