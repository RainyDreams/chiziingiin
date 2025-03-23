// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './styles/tw.css';
import './styles/animate.css';

createApp(App).use(router).mount('#app');
