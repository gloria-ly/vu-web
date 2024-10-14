/**
 * 通过PKG字段区分的环境变量
 * 比如：VITE_API_BASE_URL
 */
export const ENVS_BY_PKG: string[] = ['VITE_PUBLIC_PATH', 'VITE_DEV_SERVER_PORT'];

// 使用全局主题变量的文件路径（相对于根目录），用于在less中按需引用全局主题文件
export const FILES_USE_GLOBAL_THEME_VAR: string[] = [
  'src/components/TableOperateButton/src/TableOperateButton.vue',
  'src/components/TableOperateButton/src/TableOperateGroup.vue',
  'src/components/AnchorNav/index.vue',
  'src/components/AnchorCard/index.vue',
  'src/components/StatusWithPoint/index.vue',
  'src/components/BasicModal/index.vue',
  'src/layouts/admin/index.vue',
  'src/views/common/DataPanel/index.vue',
  'src/views/common/DataPanel/ExtraDataCommon.vue',
  'src/views/common/CommonDetailPage/HeaderCard/index.vue',
  'src/views/common/CommonDetailPage/DisplayCard1/index.vue',
  'src/views/assets/operationSystem/index.vue',
  'src/views/assets/internetExposureSurface/index.vue',
  'src/views/assets/itAssets/hostComputer/index.vue',
  'src/views/assets/itAssets/database/index.vue',
  'src/views/assets/itAssets/application/index.vue',
  'src/views/assets/itAssets/middleware/index.vue',
  'src/views/assets/noITAssets/networkEquipment/index.vue',
  'src/views/assets/noITAssets/safeEquipment/index.vue',
  'src/views/assets/noITAssets/storageEquipment/index.vue',
  'src/views/assets/noITAssets/otherEquipment/index.vue',
  'src/views/main/dashboard/index.vue',
  'src/views/assets/operationSystem/update/index.vue',
  'src/views/assets/itAssets/hostComputer/update/index.vue',
  'src/views/assets/itAssets/database/update/index.vue',
  'src/views/common/CommonDetailPage/NetInfo/index.vue',
  'src/views/common/ImprovedButton/index.vue',
  'src/views/assets/itAssets/application/update/index.vue',
  'src/views/assets/itAssets/middleware/update/index.vue',
  'src/views/assets/microApplication/app/index.vue',
  'src/views/assets/microApplication/miniProgram/index.vue',
  'src/views/assets/microApplication/publicAccount/index.vue',
  'src/views/assets/greyAssets/claim/updateModal.vue',
  'src/views/assets/noITAssets/networkEquipment/update/index.vue',
  'src/views/assets/noITAssets/otherEquipment/update/index.vue',
  'src/views/assets/noITAssets/safeEquipment/update/index.vue',
  'src/views/assets/noITAssets/storageEquipment/update/index.vue',
  'src/views/assets/greyAssets/public/index.vue'
];
