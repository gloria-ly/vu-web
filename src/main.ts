import { createApp } from 'vue';
import './style.css';
import '@/style/index.css';
import App from './App.vue';
import { setupStore } from '@/store';
import router from '@/router';
import i18n from '@/i18n';
import { registerGlobComp } from '@/components/registerGlobComp';
import 'dayjs';

function bootstrap() {
  const app = createApp(App);
  setupStore(app);
  // registerGlobComp(app);
  app.use(router);
  app.use(i18n);
  app.mount('#app');
}

bootstrap();
