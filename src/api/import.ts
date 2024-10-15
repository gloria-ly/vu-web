import { httpRequester } from '@/utils/http/index';

enum Api {
  getImportManagerTemplate = '/workbench/importManager/template',
  downloadTemplate = '/workbench/importManager/downloadTemplate',
  importTemplate = '/workbench/importManager/import',
  getHistory = '/workbench/importManager/getHistory',
  getOrigFile = '/workbench/importManager/getOrigFile',
  getError = '/workbench/importManager/getError'
}

// 批量导入下载模板列表
export const getImportManagerTemplate = (data: Recordable) =>
  httpRequester.get({
    url: Api.getImportManagerTemplate,
    data
  });

// 下载模板
export const downloadTemplate = (data: Recordable) =>
  httpRequester.get(
    {
      url: Api.downloadTemplate,
      data,
      responseType: 'blob'
    },
    {
      showCustomErrorTip: false
    }
  );

// 导入模板
export const importTemplate = (file: File[]) =>
  httpRequester.uploadFile({
    url: Api.importTemplate,
    file
  });

// 导入历史
export const getHistory = (data: Recordable) =>
  httpRequester.post({
    url: Api.getHistory,
    data
  });

// 下载原文件
export const getOrigFile = (data: Recordable) =>
  httpRequester.get(
    {
      url: Api.getOrigFile,
      data,
      responseType: 'blob'
    },
    {
      showCustomErrorTip: false
    }
  );

// 下载错误报告
export const getError = (data: Recordable) =>
  httpRequester.get(
    {
      url: Api.getError,
      data,
      responseType: 'blob'
    },
    {
      showCustomErrorTip: false
    }
  );
