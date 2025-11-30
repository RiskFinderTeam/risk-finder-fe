<template>
  <div class="sign-in">
    <div class="frame">
      <div class="logo">
        <!-- 이미지가 없을 경우를 대비해 텍스트만 남기거나 경로 확인 필요 -->
        <!-- <img class="vector" alt="Vector" :src="vector" /> -->
        <div class="text-wrapper">Risk Finder</div>
      </div>
      <div class="cards">
        <div class="card">
          <div class="top">
            <div class="text">
              <div class="div">Log In</div>
            </div>
          </div>
          <div class="div-wrapper">
            <div class="field">
              <input
                type="text"
                placeholder="아이디"
                v-model="userId"
                @keyup.enter="login"
              />
            </div>
          </div>

          <div class="div-wrapper">
            <div class="field">
              <input
                type="password"
                placeholder="비밀번호"
                v-model="userPassword"
                @keyup.enter="login"
              />
            </div>
          </div>
          <div class="frame-wrapper">
            <div class="frame-2">
              <div class="text-wrapper-4" @click="login">로그인</div>
            </div>
          </div>
        </div>

        <!-- 구분선 이미지 -->
        <!-- <img class="divider" alt="Divider" :src="divider" /> -->
        <div class="divider-line"></div>

        <div class="card-2">
          <div class="frame-3">
            <div class="text-wrapper-5">아직 회원이 아니신가요?</div>
            <div class="frame-4">
              <div class="text-wrapper-6" @click="goToRegister">회원가입</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 이미지 경로가 확실하지 않아 주석 처리했습니다. 필요시 주석 해제하세요.
// import vector from '@/assets/Vector.png';
// import divider from '@/assets/Divider.png';

import { ref } from 'vue';
import axios from 'axios';
import router from '@/router';
import { useAuthStore } from '@/stores/auth'; // ★ Pinia 스토어 import

const userId = ref('');
const userPassword = ref('');
const authStore = useAuthStore(); // ★ 스토어 인스턴스 생성

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
    console.log('토큰 저장 완료:', response.data.data.accessToken);

    router.push('/customers');
  } catch (error) {
    console.error('로그인 실패:', error);
    alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
  }
}

async function goToRegister() {
  router.push('/auth/signUp');
}
</script>

<style scoped>
.sign-in {
  align-items: center;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  min-height: 100vh; /* 1000px 대신 뷰포트 높이 사용 권장 */
  min-width: 100%;
  width: 100%;
}

.sign-in .frame {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  position: relative;
  width: 800px;
}

.sign-in .logo {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;
}

.sign-in .text-wrapper {
  color: #000000;
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.2px;
}

.sign-in .cards {
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e6edff; /* 테두리 색상 명시 */
  border-radius: 12px;
  display: flex;
  gap: 40px;
  height: auto;
  padding: 50px 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); /* 그림자 추가 */
}

.sign-in .card {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 320px;
}

.sign-in .top {
  margin-bottom: 10px;
}

.sign-in .div {
  color: #333;
  font-size: 28px;
  font-weight: 700;
}

.sign-in .div-wrapper {
  width: 100%;
}

.sign-in .field {
  width: 100%;
}

input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding: 12px 5px;
  outline: none;
  font-size: 16px;
  color: #333;
  transition: border-color 0.2s;
}

input:focus {
  border-bottom-color: #0088ff;
}

input::placeholder {
  color: #ababab;
}

.sign-in .frame-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬 */
  margin-top: 10px;
}

.sign-in .frame-2 {
  background: linear-gradient(90deg, #0088ff 0%, #0055ff 100%);
  border-radius: 8px;
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s;
}

.sign-in .frame-2:hover {
  opacity: 0.9;
}

.sign-in .text-wrapper-4 {
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
}

/* 이미지 대신 CSS로 세로선 구현 */
.divider-line {
  width: 1px;
  height: 250px;
  background-color: #e0e0e0;
}

.sign-in .card-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
}

.sign-in .frame-3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.sign-in .text-wrapper-5 {
  color: #666;
  font-size: 18px;
  font-weight: 500;
}

.sign-in .frame-4 {
  border: 1px solid #0088ff;
  border-radius: 8px;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}

.sign-in .frame-4:hover {
  background-color: #f0f8ff;
}

.sign-in .text-wrapper-6 {
  color: #0088ff;
  font-size: 16px;
  font-weight: 600;
}
</style>
