<template>
  <swiper
    :slides-per-view="slidesPer"
    :space-between="spaceBetween"
    :loop="true"
    :autoplay="{
      delay: 3000
    }"
    :style="{
      '--swiper-navigation-color': '#e60000'
    }"
    :modules="modules"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :navigation="true"
  >
    <slot>
      <swiper-slide v-for="item in list">
        <img :class="'img-class '" :src="item.url" />
        <a-flex vertical>
          <div v-for="leaf in item.content">
            <div v-if="leaf.type === 'sub'" class="font-title-22 mt-1">
              {{ leaf.content }}
            </div>
            <div v-if="leaf.type === 'title'">
              <a-typography-text class="text-bold font-title-30 mt-1">{{
                leaf.content
              }}</a-typography-text>
            </div>
            <div v-if="leaf.type === 'name'">
              <a-typography-text v-if="leaf" class="font-title-22 text-bold-500 mt-1">{{
                leaf.content
              }}</a-typography-text>
            </div>
            <div
              v-if="leaf.type === 'button'"
              class="button-2 font-title-14 cursor-pointer mt-1"
              @click="goToPage(item.name)"
            >
              {{ leaf.content }}
            </div>
          </div>
        </a-flex>
      </swiper-slide>
    </slot>
  </swiper>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRouter } from 'vue-router';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const router = useRouter();
const props = defineProps({
  autoplay: {
    type: Boolean,
    default: true
  },
  spaceBetween: {
    type: Number,
    default: 20
  },
  slidesPer: {
    type: Number,
    default: 3
  },
  list: {
    type: Array,
    default: () => []
  },
  onSlideChange: {
    type: Function,
    default: () => {}
  },
  onSwiper: {
    type: Function,
    default: () => {}
  },
  modules: {
    type: Array,
    default: [Navigation, Autoplay]
  }
});

const goToPage = (name: any) => {
  router.push({
    name
    // query: {
    //   keyword: 'Vue'
    // }
  });
};
</script>

<style lang="css" scoped>
.img-class {
  width: 100%;
  max-height: 400px;
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
