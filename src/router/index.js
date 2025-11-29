import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/pages/auth/Login.vue';
import path from 'path';

const routes = [
  {
    path: '/auth/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/auth/signUp',
    name: 'SignUp',
    component: () => import('@/pages/auth/SignUp.vue'),
  },
  {
    path: '/',
    name: 'dashbaord',
    component: () => import('@/pages/dashboard/Dashboard.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
