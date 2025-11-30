import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const token = ref(sessionStorage.getItem('accessToken') || null);

  const isAuthenticated = computed(() => !!token.value);

  function login(newToken) {
    token.value = newToken;
    sessionStorage.setItem('accessToken', newToken);
  }

  function logout() {
    token.value = null;
    sessionStorage.removeItem('accessToken');
  }

  return { token, isAuthenticated, login, logout };
});
