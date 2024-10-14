import type { UserConfig, ConfigEnv } from 'vite';
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from "path";
import { loadEnv } from 'vite';
import { createVitePlugins } from './build/vite/plugin';
import { FILES_USE_GLOBAL_THEME_VAR } from './build/constant';

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  env.MODE = mode;
  console.log(mode,env)

  // https://vitejs.dev/config/
  return{
    plugins: createVitePlugins(env),
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"), // 设置 `@` 指向 `src` 目录
        "#": resolve(__dirname, "types"), // 设置 `@` 指向 `src` 目录
      },
      extensions: ['.js', '.json', '.ts', '.vue'], // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    base: "./", // 公共基础路径，设置打包路径
    server: { //开发服务器选项
      port: 4000, // 设置服务启动端口号
      open: true, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域

      //设置代理，根据我们项目实际情况配置
      proxy: {
        '/api': {
          target: env.VITE_DEV_SERVER_PROXY,
          changeOrigin: true,  //是否允许不同源
          secure: false,   //支持https
          rewrite: (path) => path.replace('/api/', '/')
        }
      }
    },
    build: {
      outDir: 'dist',  //指定打包路径
      terserOptions:{
        compress:{
          keep_infinity:true, // 防止Infinity被压缩成1/0，这可能会导致chrome上的性能问题
          drop_console:true, // 生产环境除去console
          drop_debugger:true // 生产环境除去debugger
        }
      },
      chunkSizeWarningLimit:1500  //chunk大小警告的限制（以kbs为单位）
    },
    css: {
      preprocessorOptions: {
          less: {
            javascriptEnabled: true,
            additionalData: (content: string, filePath: string) => {
              let rst: string = "@import '@/style/util.less';";
              const path = FILES_USE_GLOBAL_THEME_VAR.find((item: string) => {
                return filePath.includes(item);
              });
              if (path) {
                rst += "@import '@/style/theme/default/global.less';";
              }
              rst += content;
              return rst;
            }
          }
      }
    },
  }
}
