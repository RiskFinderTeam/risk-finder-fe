<template>
  <div class="sign-in">
    <div class="frame">
      <div class="logo">
        <img class="vector" alt="Vector" :src="vector" />
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
              <input type="text" placeholder="아이디" v-model="userId" />
            </div>
          </div>

          <div class="div-wrapper">
            <div class="field">
              <input
                type="password"
                placeholder="비밀번호"
                v-model="userPassword"
              />
            </div>
          </div>
          <div class="frame-wrapper">
            <div class="frame-2">
              <div class="text-wrapper-4" @click="login">로그인</div>
            </div>
          </div>
        </div>
        <img class="divider" alt="Divider" :src="divider" />
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
import vector from '@/assets/Vector.png';
import divider from '@/assets/Divider.png';
import { ref } from 'vue';
import axios from 'axios';
import router from '@/router';

const userId = ref('');
const userPassword = ref('');

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
    console.log('로그인 성공:', response.data);

    sessionStorage.setItem('accessToken', response.data.accessToken);
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
  min-height: 1000px;
  min-width: 1920px;
  width: 100%;
}

.sign-in .frame {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 424px;
  justify-content: center;
  margin-top: -108px;
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
}

.sign-in .vector {
  aspect-ratio: 1;
  height: 19.5px;
  margin-left: -0.75px;
  position: relative;
  width: 19.5px;
}

.sign-in .text-wrapper {
  color: #000000;
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

.sign-in .cards {
  align-items: center;
  align-self: stretch;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--border);
  border-radius: 12px;
  display: flex;
  gap: 40px;
  height: 350px;
  padding: 42px 40px 42px 39px;
  position: relative;
  width: 100%;
}

.sign-in .card {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
  width: 350px;
}

.sign-in .top {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 61px;
  position: relative;
}

.sign-in .text {
  height: 60px;
  position: relative;
  width: 96px;
}

.sign-in .div {
  color: #535353;
  font-family: 'Pretendard Variable-SemiBold', Helvetica;
  font-size: 28px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: 42px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.sign-in .div-wrapper {
  height: 36px;
  margin-left: -1px;
  margin-right: -1px;
  position: relative;
  width: 352px;
}

.sign-in .text-wrapper-2 {
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
}

.sign-in .text-wrapper-3 {
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

.sign-in .frame-wrapper {
  align-self: stretch;
  height: 81px;
  position: relative;
  width: 100%;
}

.sign-in .frame-2 {
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
  height: 35px;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 46px;
  width: 80px;
}

.sign-in .text-wrapper-4 {
  color: #ffffff;
  font-family: 'Pretendard Variable-SemiBold', Helvetica;
  font-size: 16px;
  font-weight: 600;
  left: calc(50% - 21px);
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  top: calc(50% - 12px);
  white-space: nowrap;
}

.sign-in .divider {
  height: 200px;
  object-fit: cover;
  position: relative;
  width: 1px;
}

.sign-in .card-2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 82px;
  position: relative;
  width: 282px;
}

.sign-in .frame-3 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 26px;
  margin-bottom: -9px;
  position: relative;
}

.sign-in .text-wrapper-5 {
  color: var(--colors-labels-vibrant-controls-secondary);
  font-family: 'Pretendard Variable-Medium', Helvetica;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 30px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.sign-in .frame-4 {
  background-color: var(--colors-labels-vibrant-controls-secondary);
  border: 1px solid;
  border-color: #e6edff;
  border-radius: 16px;
  height: 35px;
  overflow: hidden;
  position: relative;
  width: 96px;
}

.sign-in .text-wrapper-6 {
  color: var(--colors-labels-vibrant-controls-secondary);
  font-family: 'Pretendard Variable-SemiBold', Helvetica;
  font-size: 16px;
  font-weight: 600;
  left: calc(50% - 28px);
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  top: calc(50% - 12px);
  white-space: nowrap;
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
