import type { Plugin, PluginOption } from 'vite';

import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import { configAutoImportPlugin } from './autoImport';
import { configVueJsxPlugin } from './vueJsx';
import { configComponentsImportPlugin } from './componentsImport';

export function createVitePlugins(env: ViteEnv) {
  const vitePlugins: (Plugin | Plugin[] | PluginOption | PluginOption[])[] = [
    // have to
    vue(),
    vueSetupExtend()
  ];

  vitePlugins.push(configAutoImportPlugin());
  vitePlugins.push(configVueJsxPlugin());
  vitePlugins.push(configComponentsImportPlugin());

  return vitePlugins;
}
