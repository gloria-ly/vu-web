import { createApp } from 'vue';
import './style.css';
import '@/style/index.less';
import App from './App.vue';
import { setupStore } from '@/store';
import router from '@/router';
import { registerGlobComp } from '@/components/registerGlobComp';

function bootstrap() {
  const app = createApp(App);
  setupStore(app);
  registerGlobComp(app);
  app.use(router);
  app.mount('#app');
}

bootstrap();
