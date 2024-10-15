import { defineStore } from 'pinia';

export const CommonStore = defineStore('common', {
  // 状态库
  state: () => ({
    userInfo: 123 //用户信息
  }),
  getters: {
    getUserInfo: (state) => state.userInfo
  },
  actions: {
    // 异步
    async getUserInfoAction(params: any) {
      //互相调用
      // this.setUserInfo('xx')
      // const data = await api.getUser(params)
      // return data
    },
    // 同步
    setUserInfo(data: any) {
      this.userInfo = data;
    }
  }
  // 开启数据缓存
  // persist: {
  //   enabled: true,
  //   strategies: [
  //     {
  //       storage: localStorage, // 默认存储在sessionStorage里
  //       paths: ['userInfo'] // 指定存储state，不写则存储所有
  //     }
  //   ]
  // }
});
