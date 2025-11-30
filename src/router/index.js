import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/pages/auth/Login.vue';
import path from 'path';
import Customer from '@/pages/customer/Customer.vue';

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
    path: '/dashboard',
    name: 'dashbaord',
    component: () => import('@/pages/dashboard/Dashboard.vue'),
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customer,
  },
  {},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
