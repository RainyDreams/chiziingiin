// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/home/index.vue';
import AboutView from '../views/about/index.vue';
import NotFoundView from '../views/404/index.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/:pathMatch(.*)*', component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
