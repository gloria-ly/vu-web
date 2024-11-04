<template>mobilePrepaid</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { Grid } from 'ant-design-vue';

const useBreakpoint = Grid.useBreakpoint;
const screens = useBreakpoint();
const { t } = useI18n();
const router = useRouter();
// const commonStore = CommonStore();
// const sd = 111;
// commonStore.setUserInfo('修改userInfo');
</script>
<style lang="css" scoped>
@media only screen and (max-width: 991px) {
  .top-4 {
    display: flex;
    flex-direction: column-reverse;
    .content-carousel {
      position: relative;
      &::before {
        left: 0;
        right: 0;
        transform: skew(0deg);
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .top-3 {
    .content {
      max-width: 900px;
    }
    .item {
      .button-2 {
        padding: 8px 12px;
      }
    }
  }
}

@media only screen and (max-width: 576px) {
  .top-3 {
    .content {
      max-width: 540px;
    }
  }
}
</style>
