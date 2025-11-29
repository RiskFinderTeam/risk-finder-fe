<template>
  <div class="sign-up">
    <div class="frame">
      <div class="logo">
        <img class="vector" alt="Vector" :src="vector" />
        <div class="text-wrapper">Risk Finder</div>
      </div>
      <div class="cards">
        <div class="card">
          <div class="top">
            <div class="text">
              <div class="div">Sign Up</div>
            </div>
          </div>
          <div class="div-wrapper">
            <div class="field">
              <input type="text" placeholder="아이디" v-model="userId" />
            </div>
          </div>
          <div class="div-wrapper">
            <div class="field">
              <input
                type="password"
                placeholder="비밀번호 입력"
                v-model="password"
              />
            </div>
          </div>
          <div class="div-wrapper">
            <div class="field">
              <input
                type="password"
                placeholder="비밀번호 재입력"
                v-model="checkPassword"
              />
            </div>
          </div>
          <div class="frame-2">
            <div class="frame-3">
              <div class="field">
                <input type="text" placeholder="이메일 입력" v-model="email" />
              </div>
            </div>
            <div class="frame-4">
              <div class="text-wrapper-4" @click="sendEmail">인증번호 전송</div>
            </div>
          </div>
          <div class="frame-2">
            <div class="frame-3">
              <div class="field">
                <input
                  type="text"
                  placeholder="인증번호 입력"
                  v-model="verifyCode"
                />
              </div>
            </div>
            <div class="frame-5">
              <div class="text-wrapper-5" @click="checkVerfiyCode">
                인증 완료
              </div>
            </div>
          </div>
          <div class="frame-6">
            <div class="frame-7">
              <div class="text-wrapper-6" @click="signUp">가입하기</div>
            </div>
          </div>
        </div>
        <img class="divider" alt="Divider" :src="divider" />
        <div class="frame-wrapper">
          <div class="frame-8">
            <div class="text-wrapper-7">회원이신가요?</div>
            <div class="frame-9">
              <div class="text-wrapper-8" @click="goToLogin">로그인</div>
            </div>
          </div>
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
  // 모든 필드가 채워졌는지 확인
  if (
    !email.value ||
    !userId.value ||
    !password.value ||
    !checkPassword.value
  ) {
    alert('모든 항목을 입력해주세요.');
    return;
  }

  // 이메일이 중복되는지 확인
  if (await checkEmailDuplicate()) {
    alert('이미 존재하는 이메일입니다.');
    return;
  }

  // 비밀번호와 비밀번호 확인 일치 여부 확인
  if (password.value !== checkPassword.value) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }

  // 이메일 인증 여부 확인
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
    return;
  }
}

// 이메일 중복 확인 코드
async function checkEmailDuplicate() {
  try {
    const response = await axios.get(
      'http://localhost:8080/api/v1/auth/check-email',
      {
        params: {
          email: userId.value,
        },
      }
    );
    const isDuplicate = response.data.data;
    return isDuplicate;
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
    const response = await axios.post(
      `http://localhost:8080/api/v1/auth/send-mail/${email.value}`
    );
    alert('인증번호가 전송되었습니다. 이메일을 확인해주세요.');
  } catch (error) {
    console.error(error);
    alert('인증번호 전송에 실패했습니다. 다시 시도해주세요.');
    return;
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
      {
        email: email.value,
        authCode: verifyCode.value,
      }
    );

    const isVerified = response.data.data;

    if (isVerified) {
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

// 로그인 페이지로 이동
async function goToLogin() {
  router.push('/auth/login');
}
</script>

<style scoped>
.sign-up {
  align-items: center;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  min-height: 1000px;
  min-width: 1920px;
  width: 100%;
}

.sign-up .frame {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 563px;
  margin-top: -66px;
  position: relative;
  width: 800px;
}

.sign-up .logo {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  position: relative;
}

.sign-up .vector {
  aspect-ratio: 1;
  height: 19.5px;
  margin-left: -0.75px;
  position: relative;
  width: 19.5px;
}

.sign-up .text-wrapper {
  color: var(--primary);
  font-family: 'Inter-Medium', Helvetica;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.2px;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.sign-up .cards {
  align-items: center;
  align-self: stretch;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--border);
  border-radius: 12px;
  display: flex;
  gap: 40px;
  height: 489px;
  padding: 42px 40px 42px 39px;
  position: relative;
  width: 100%;
}

.sign-up .card {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
  width: 350px;
}

.sign-up .top {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 61px;
  position: relative;
}

.sign-up .text {
  height: 60px;
  position: relative;
  width: 96px;
}

.sign-up .div {
  color: #535353;
  font-family: 'Inter-SemiBold', Helvetica;
  font-size: 28px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: 42px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.sign-up .div-wrapper {
  height: 36px;
  margin-left: -1px;
  margin-right: -1px;
  position: relative;
  width: 352px;
}

.sign-up .text-wrapper-2 {
  color: #ababab;
  font-family: 'Pretendard Variable-Regular', Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 12px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  top: calc(50% - 12px);
  white-space: nowrap;
  width: 89px;
}

.sign-up .text-wrapper-3 {
  color: #ababab;
  font-family: 'Pretendard Variable-Regular', Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 12px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  top: calc(50% - 12px);
  white-space: nowrap;
  width: 152px;
}

.sign-up .frame-2 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 14px;
  margin-right: -2px;
  position: relative;
}

.sign-up .frame-3 {
  height: 36px;
  position: relative;
  width: 256px;
}

.sign-up .frame-4 {
  background-color: #ffffff;
  border: 1px solid;
  border-color: #e6edff;
  border-radius: 14px;
  height: 29px;
  overflow: hidden;
  position: relative;
  width: 84px;
}

.sign-up .text-wrapper-4 {
  align-items: center;
  color: #ababab;
  display: flex;
  font-family: 'Pretendard Variable-Medium', Helvetica;
  font-size: 11px;
  font-weight: 500;
  height: 17px;
  justify-content: center;
  left: calc(50% - 30px);
  letter-spacing: 0;
  line-height: 16.5px;
  position: absolute;
  text-align: center;
  top: calc(50% - 8px);
  white-space: nowrap;
}

.sign-up .frame-5 {
  background-color: #0088ff;
  border-radius: 14px;
  height: 29px;
  overflow: hidden;
  position: relative;
  width: 84px;
}

.sign-up .text-wrapper-5 {
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: 'Pretendard Variable-Medium', Helvetica;
  font-size: 11px;
  font-weight: 500;
  height: 17px;
  justify-content: center;
  left: calc(50% - 20px);
  letter-spacing: 0;
  line-height: 16.5px;
  position: absolute;
  text-align: center;
  top: calc(50% - 8px);
  white-space: nowrap;
}

.sign-up .frame-6 {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  gap: 151px;
  height: 81px;
  justify-content: space-around;
  position: relative;
  width: 100%;
}

.sign-up .frame-7 {
  background: linear-gradient(
      0deg,
      rgba(0, 136, 255, 1) 0%,
      rgba(0, 136, 255, 1) 100%
    ),
    linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  border-radius: 16px;
  height: 36px;
  overflow: hidden;
  position: absolute;
  right: -9px;
  top: 44px;
  width: 96px;
}

.sign-up .text-wrapper-6 {
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: 'Pretendard Variable-SemiBold', Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 24px;
  justify-content: center;
  left: calc(50% - 28px);
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: calc(50% - 12px);
  white-space: nowrap;
}

.sign-up .divider {
  height: 280px;
  object-fit: cover;
  position: relative;
  width: 1px;
}

.sign-up .frame-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 82px;
  position: relative;
  width: 282px;
}

.sign-up .frame-8 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 26px;
  margin-bottom: -5px;
  position: relative;
}

.sign-up .text-wrapper-7 {
  color: var(--colors-labels-vibrant-controls-secondary);
  font-family: 'Pretendard Variable-Regular', Helvetica;
  font-size: 20px;
  font-weight: 500;
  height: 26px;
  letter-spacing: 0;
  line-height: 30px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: 240px;
}

.sign-up .frame-9 {
  align-items: flex-start;
  background-color: var(--colors-labels-vibrant-controls-secondary);
  border: 1px solid;
  border-color: #e6edff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 35px;
  overflow: hidden;
  padding: 3px 14px;
  position: relative;
  width: 80px;
}

.sign-up .text-wrapper-8 {
  align-items: center;
  align-self: stretch;
  color: var(--colors-labels-vibrant-controls-secondary);
  display: flex;
  font-family: 'Inter-Medium', Helvetica;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0;
  height: 100%;
  position: relative;
  text-align: center;
}

input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding: 8px 0;
  outline: none;
  font-family: 'Pretendard Variable-Regular', Helvetica;
  font-size: 16px;
  font-weight: 400;
  padding-left: 12px;
  color: black;
}
input::placeholder {
  color: #ababab;
}
</style>
