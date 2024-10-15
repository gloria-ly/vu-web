# vu-web

VU网站前端开发项目

vite + vue3 + ts + antd 项目

### 特性

- 自动导入 Vue API
- SVG 图标解决方案
- 简单、官方的 Typescript+Eslint+Prettier 配置
- Git 提交代码校验
- 路由缓存功能
- 基于 axios 易用的 HTTP 请求库

### 安装

- vscode 安装工作区推荐的插件
- .vscode/settings.json 为工作区设置，不建议覆盖已有配置（可添加其他配置）

### 多人开发过程中禁止私人修改的文件

- .vscode，ts，eslint，prettier 相关配置文件
- build 文件夹下的配置文件

如果需要修改，请自行协商，否则可能会出现代码冲突

### 启动开发服务器和构建命令

- 开发：npm run dev
- 构建：npm run build

### 代码格式化

- js，ts 文件：通过 vscode 的 eslint 插件，在保存时自动 fix
- 其他文件：保存时使用 prettier 插件格式化
- 代码提交时会执行格式化校验
- 关闭 TS 校验（仅特殊情况下使用）：

```js
// 使用注释
// 下一行生效：
// @ts-ignore
// 整个文件生效：
// @ts-nocheck
```

### 环境变量

用于整个项目的参数，包括编译阶段+运行时用到的参数

在运行时使用环境变量：utils/env -> getEnv()

- .env 通用
- .env.development 本地开发环境
- .env.production 生产环境

### 文件夹结构和命名

- 除了组件和资源文件，都使用首字母小写的驼峰式命名
- 组件需要使用文件夹包裹起来，且采用首字母大写的驼峰式命名（为了方便在 setup 中使用：https://cn.vuejs.org/api/sfc-script-setup.html#using-components）
- 资源文件建议按页面分文件夹

### 别名

- /@/xxxx => /src/xxxx
- /#/xxxx => /types/xxxx

### HTTP 请求库

/@/utils/http/axios -> httpRequester

- 初始化配置：index -> createRequester 中传入 RequestOptions，所有配置参考 config 文件
- 发起请求单独配置（优先级最高）：get/post/put/delete 第二个参数传入 RequestOptions

配置优先级：发起请求配置 > createRequester 配置 > config 文件配置 > axios 配置

### 全局组件注册

- 需要在 components/registerGlobComp 中手动注册
- 引入 antd 组件也要在 design 中引入组件的样式文件

### 关于引用 Ant Design 中的资源路径

需要全部在 ant-design-vue/es 下引用 ESM，可以加快 vite 的预编译

### 一些特殊文件夹含义

- enums：TS 枚举值
- utils：完全通用的工具代码（可直接拖到其他项目也能使用）


### 主题

design/theme 下每个文件夹表示一个主题。

### GIT 提交规范(beta)

参考 Angular 的提交信息规范：https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit

#### type 说明

- feat：新功能 feat(browser): onUrlChange event (popstate/hashchange/polling)
- fix：bug 修复 fix(compile): couple of unit tests for IE9
- refactor：代码重构
- perf：性能优化
- build：架构代码
- chore：公共代码（组件/工具库）
- style：代码格式（不影响代码运行的变动）
- docs：文档
- revert：代码回退
