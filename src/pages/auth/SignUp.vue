<template>
  <div class="sign-up-container">
    <div class="content-wrapper">
      <div class="logo-section">
        <img class="logo-icon" alt="Logo" :src="vector" />
        <h1 class="logo-text">Risk Finder</h1>
      </div>

      <div class="main-card">
        <div class="form-section">
          <h2 class="form-title">Sign Up</h2>

          <div class="input-group">
            <input type="text" placeholder="아이디" v-model="userId" />
          </div>

          <div class="input-group">
            <input
              type="password"
              placeholder="비밀번호 입력"
              v-model="password"
            />
          </div>

          <div class="input-group">
            <input
              type="password"
              placeholder="비밀번호 재입력"
              v-model="checkPassword"
            />
          </div>

          <div class="input-group row-group">
            <div class="input-wrapper">
              <input type="text" placeholder="이메일 입력" v-model="email" />
            </div>
            <button class="btn-base btn-outline btn-small" @click="sendEmail">
              인증번호 전송
            </button>
          </div>

          <div class="input-group row-group">
            <div class="input-wrapper">
              <input
                type="text"
                placeholder="인증번호 입력"
                v-model="verifyCode"
              />
            </div>
            <button
              class="btn-base btn-primary btn-small"
              @click="checkVerfiyCode"
            >
              인증 완료
            </button>
          </div>

          <div class="submit-area">
            <button class="btn-base btn-gradient btn-large" @click="signUp">
              가입하기
            </button>
          </div>
        </div>

        <div class="divider-section">
          <img class="divider-img" alt="Divider" :src="divider" />
          <div class="mobile-divider"></div>
        </div>

        <div class="login-section">
          <span class="login-label">회원이신가요?</span>
          <button class="btn-base btn-outline btn-login" @click="goToLogin">
            로그인
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import vector from '@/assets/Vector.png';
import divider from '@/assets/Divider.png';
import axios from 'axios';
import router from '@/router';

const userId = ref('');
const password = ref('');
const checkPassword = ref('');
const email = ref('');
const verifyCode = ref('');
const isEmailVerified = ref(false);

// 회원가입 코드
async function signUp() {
  if (
    !email.value ||
    !userId.value ||
    !password.value ||
    !checkPassword.value
  ) {
    alert('모든 항목을 입력해주세요.');
    return;
  }
  if (await checkEmailDuplicate()) {
    alert('이미 존재하는 이메일입니다.');
    return;
  }
  if (password.value !== checkPassword.value) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }
  if (!isEmailVerified.value) {
    alert('이메일 인증을 완료해주세요.');
    return;
  }
  try {
    const response = await axios.post(
      'http://localhost:8080/api/v1/auth/signup',
      {
        email: userId.value,
        password: password.value,
      }
    );
    if (response.status === 200 || response.status === 201) {
      alert('회원가입이 완료되었습니다.');
      router.push('/auth/login');
    }
  } catch (error) {
    alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    console.error(error);
  }
}

// 이메일 중복 확인 코드
async function checkEmailDuplicate() {
  try {
    const response = await axios.get(
      'http://localhost:8080/api/v1/auth/check-email',
      { params: { email: userId.value } }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    alert('중복 확인 중 오류가 발생했습니다.');
    return true;
  }
}

// 이메일 형식 확인 코드
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// 인증 메일 발송 코드
async function sendEmail() {
  if (!isValidEmail(email.value)) {
    alert('유효한 이메일 주소를 입력해주세요.');
    return;
  }
  try {
    await axios.post(
      `http://localhost:8080/api/v1/auth/send-mail/${email.value}`
    );
    alert('인증번호가 전송되었습니다. 이메일을 확인해주세요.');
  } catch (error) {
    console.error(error);
    alert('인증번호 전송에 실패했습니다. 다시 시도해주세요.');
  }
}

// 인증 번호 확인 코드
async function checkVerfiyCode() {
  if (!verifyCode.value) {
    alert('인증번호를 입력해주세요.');
    return;
  }
  try {
    const response = await axios.post(
      `http://localhost:8080/api/v1/auth/verify-code`,
      { email: email.value, authCode: verifyCode.value }
    );
    if (response.data.data) {
      alert('이메일 인증이 완료되었습니다.');
      isEmailVerified.value = true;
    } else {
      alert('인증번호가 올바르지 않습니다.');
      isEmailVerified.value = false;
    }
  } catch (error) {
    console.error(error);
    alert('인증 확인 중 오류가 발생했습니다.');
  }
}

async function goToLogin() {
  router.push('/auth/login');
}
</script>

<style scoped>
:root {
  --primary-color: #0088ff;
  --text-dark: #535353;
  --text-gray: #ababab;
  --border-color: #e6edff;
}

.sign-up-container {
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
  max-width: 720px;
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

  /* [수정 1] space-between 제거 -> 요소들이 자연스럽게 붙도록 함 */
  /* justify-content: space-between; (삭제) */
  align-items: stretch; /* 높이 맞춤 */
}

/* --- Form Section (Left) --- */
.form-section {
  /* [수정 2] 폼 영역의 flex 동작 명시 */
  flex: 0 0 auto; /* 늘어나지 않고 내용물 크기만큼만 (max-width 따름) */
  width: 320px; /* 너비 고정 */

  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-title {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #535353;
  margin: 0 0 5px 0;
}

/* Input Styles */
.input-group {
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 2px;
}

.input-group.row-group {
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: none;
}

.input-wrapper {
  flex: 1;
  border-bottom: 1px solid #e0e0e0;
}

input {
  width: 100%;
  border: none;
  outline: none;
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 15px;
  padding: 6px 4px;
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
  /* [수정 3] 구분선 좌우 여백을 늘려서 자연스럽게 벌림 */
  padding: 0 50px;
  flex-shrink: 0; /* 줄어들지 않음 */
}

.divider-img {
  height: 100%;
  max-height: 300px;
  width: 1px;
  object-fit: cover;
}

.mobile-divider {
  display: none;
  width: 100%;
  height: 1px;
  background-color: #e6edff;
  margin: 24px 0;
}

/* --- Login Section (Right) --- */
.login-section {
  /* [수정 4] 남은 공간을 모두 차지하도록 설정 */
  flex: 1;

  display: flex;
  flex-direction: column;
  /* [수정 5] 차지한 공간 안에서 내용물을 중앙 정렬 */
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.login-label {
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 16px;
  color: #535353;
  font-weight: 500;
}

/* --- Button Component Styles --- */
.btn-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 500;
  font-size: 12px;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.btn-small {
  height: 30px;
  padding: 0 10px;
  min-width: 76px;
  font-size: 11px;
}

.btn-large {
  height: 40px;
  width: 110px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 14px;
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

.btn-primary {
  background-color: #0088ff;
  color: #ffffff;
}
.btn-primary:hover {
  background-color: #0077e6;
}

.btn-gradient {
  background: linear-gradient(0deg, #0088ff 0%, #0088ff 100%);
  color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 136, 255, 0.2);
}
.btn-gradient:hover {
  filter: brightness(0.95);
}

.btn-login {
  height: 36px;
  padding: 0 16px;
  font-size: 14px;
  color: #535353;
  border-radius: 12px;
}

.submit-area {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

/* --- Responsive Media Queries --- */
@media (max-width: 768px) {
  .main-card {
    flex-direction: column;
    padding: 24px 20px;
    align-items: center;
    max-width: 420px;
  }

  .form-section {
    width: 100%;
    max-width: 100%; /* 모바일에서는 꽉 차게 */
    flex: auto;
  }

  .divider-img {
    display: none;
  }
  .mobile-divider {
    display: block;
  }

  .divider-section {
    width: 100%;
    padding: 0;
  }

  .login-section {
    width: 100%;
    flex: auto; /* 모바일에서는 flex grow 해제 */
    flex-direction: row;
    justify-content: center;
  }
}
</style>
