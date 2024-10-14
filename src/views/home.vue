<script setup lang="ts">
import { ref } from 'vue'
import { CommonStore } from '@/store/modules/common'
const commonStore = CommonStore()

commonStore.setUserInfo('修改userInfo')
</script>

<template>
  <h1>{{ commonStore.userInfo }}</h1>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
