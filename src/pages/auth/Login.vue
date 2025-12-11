<template>
  <div class="sign-in-container">
    <div class="content-wrapper">
      <div class="logo-section">
        <img class="logo-icon" alt="Logo" :src="vector" />
        <h1 class="logo-text">Risk Finder</h1>
      </div>

      <div class="main-card">
        <div class="form-section">
          <h2 class="form-title">Log In</h2>

          <div class="input-group">
            <input
              type="text"
              placeholder="아이디"
              v-model="userId"
              @keyup.enter="login"
            />
          </div>

          <div class="input-group">
            <input
              type="password"
              placeholder="비밀번호"
              v-model="userPassword"
              @keyup.enter="login"
            />
          </div>

          <div class="submit-area">
            <button class="btn-base btn-gradient btn-large" @click="login">
              로그인
            </button>
          </div>
        </div>

        <div class="divider-section">
          <div class="vertical-line"></div>
          <div class="mobile-divider"></div>
        </div>

        <div class="register-section">
          <span class="register-label">아직 회원이 아니신가요?</span>
          <button
            class="btn-base btn-outline btn-register"
            @click="goToRegister"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import vector from '@/assets/Vector.png';
import divider from '@/assets/Divider.png'; // 이미지 있으면 사용
import { ref } from 'vue';
import axios from 'axios';
import router from '@/router';
import { useAuthStore } from '@/stores/auth';

const userId = ref('');
const userPassword = ref('');
const authStore = useAuthStore();

async function login() {
  if (!userId.value || !userPassword.value) {
    alert('아이디와 비밀번호를 모두 입력해주세요.');
    return;
  }
  try {
    const response = await axios.post(
      'http://localhost:8080/api/v1/auth/login',
      {
        email: userId.value,
        password: userPassword.value,
      }
    );
    authStore.login(response.data.data.accessToken);
    console.log('토큰 저장 완료');
    router.push('/dashboard');
  } catch (error) {
    console.error('로그인 실패:', error);
    alert('로그인에 실패했습니다. 정보를 확인해주세요.');
  }
}

async function goToRegister() {
  router.push('/auth/signUp');
}
</script>

<style scoped>
/* 색상 변수 (회원가입 페이지와 동일하게 맞춤) */
:root {
  --primary-color: #0088ff;
  --text-dark: #535353;
  --text-gray: #ababab;
  --border-color: #e6edff;
}

.sign-in-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #ffffff;
  padding: 20px;
  box-sizing: border-box;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 720px; /* 회원가입 페이지와 동일한 너비 */
}

/* --- Logo Section --- */
.logo-section {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  width: 18px;
  height: 18px;
}

.logo-text {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #0088ff;
  margin: 0;
}

/* --- Main Card --- */
.main-card {
  display: flex;
  background-color: #ffffff;
  border: 1px solid #e6edff;
  border-radius: 12px;
  padding: 30px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  align-items: stretch; /* 높이 꽉 차게 */
}

/* --- Form Section (Left) --- */
.form-section {
  flex: 0 0 auto;
  width: 320px; /* 고정 너비 */
  display: flex;
  flex-direction: column;
  gap: 20px; /* 간격 조정 */
}

.form-title {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #535353;
  margin: 0 0 10px 0;
}

/* Input Styles */
.input-group {
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 2px;
}

input {
  width: 100%;
  border: none;
  outline: none;
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 15px;
  padding: 8px 4px;
  color: #000;
  background: transparent;
}

input::placeholder {
  color: #ababab;
}

/* --- Divider Section (Center) --- */
.divider-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px; /* 좌우 여백 확보 */
  flex-shrink: 0;
}

.vertical-line {
  width: 1px;
  height: 100%;
  min-height: 200px;
  background-color: #e6edff; /* 매우 연한 회색/파란색 */
}

.mobile-divider {
  display: none;
  width: 100%;
  height: 1px;
  background-color: #e6edff;
  margin: 24px 0;
}

/* --- Register Section (Right) --- */
.register-section {
  flex: 1; /* 남은 공간 모두 차지 */
  display: flex;
  flex-direction: column;
  align-items: center; /* 가로 중앙 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
  gap: 15px;
}

.register-label {
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 16px;
  color: #535353;
  font-weight: 500;
}

/* --- Button Styles (컴포넌트화) --- */
.btn-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.btn-large {
  height: 40px;
  width: 110px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 14px;
}

.btn-gradient {
  background: linear-gradient(0deg, #0088ff 0%, #0088ff 100%);
  color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 136, 255, 0.2);
}
.btn-gradient:hover {
  filter: brightness(0.95);
}

.btn-outline {
  background-color: transparent;
  border: 1px solid #e6edff;
  color: #ababab;
}
.btn-outline:hover {
  background-color: #f8f9fa;
  color: #888;
}

.btn-register {
  height: 36px;
  padding: 0 16px;
  font-size: 14px;
  color: #535353;
  border-radius: 12px;
}

.submit-area {
  display: flex;
  justify-content: center; /* 왼쪽(flex-start) -> 가운데(center) */
  margin-top: 10px;
}

/* --- Responsive --- */
@media (max-width: 768px) {
  .main-card {
    flex-direction: column;
    padding: 24px 20px;
    align-items: center;
    max-width: 420px;
  }

  .form-section {
    width: 100%;
  }

  .vertical-line {
    display: none;
  }
  .mobile-divider {
    display: block;
  }

  .divider-section {
    width: 100%;
    padding: 0;
  }

  .register-section {
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
