import { Requester } from './requester';
import { message } from 'ant-design-vue/es';
import type { RequestOptions } from './types';

function createRequester(options: RequestOptions = {}) {
  return new Requester(options);
}

export const httpRequester = createRequester({
  validateCustomStatus: (response: {
    request: { responseType: string };
    data: { type: string; code: number };
  }) => {
    if (response.request.responseType === 'blob') {
      return response.data instanceof Blob && response.data.type !== 'application/json';
    }
    return response.data?.code === 200 || false;
  },
  handleCustomError: function (response: { data: any }, { showErrorTip }: any) {
    const data = response.data;
    if (showErrorTip) {
      if (data && data.msg) {
        message.error(data.msg);
      }
    }
  }
});

/**
 * 从响应中获取下载文件名
 */
export function getDownloadFileName(response: any) {
  const contentDisposition: string = response.headers['content-disposition'];
  if (!contentDisposition) {
    return '';
  }
  const found = contentDisposition.match(/(filename=(\S+);)|(filename=(\S+)$)/);
  return found ? decodeURIComponent(found[2] || found[4]) : '';
}
