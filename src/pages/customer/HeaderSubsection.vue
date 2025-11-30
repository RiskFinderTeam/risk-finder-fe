<template>
  <header class="header-subsection">
    <div class="title-group">
      <div class="page-title">Customer</div>
      <div class="page-desc">고객의 상세정보를 확인하세요.</div>
    </div>

    <div class="profile-container" @click="toggleDropdown" ref="profileRef">
      <div class="user-profile">
        <div class="avatar-circle"></div>
        <div class="user-info">
          <span class="admin-name">Admin</span>
          <svg
            class="arrow-icon"
            :class="{ rotated: isDropdownOpen }"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      <div v-if="isDropdownOpen" class="dropdown-menu">
        <div class="menu-item" @click.stop="handleLogout">로그아웃</div>
      </div>
    </div>
  </header>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'HeaderSubsection', // 파일명에 맞춰서 이름 변경 가능 (예: CustomerHeader)
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    const isDropdownOpen = ref(false);
    const profileRef = ref(null);

    // 드롭다운 토글
    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    // 로그아웃 처리
    const handleLogout = () => {
      if (confirm('로그아웃 하시겠습니까?')) {
        authStore.logout();
        router.push('/auth/Login');
      }
      isDropdownOpen.value = false;
    };

    // 화면의 다른 곳을 클릭하면 드롭다운 닫기
    const handleClickOutside = (event) => {
      if (profileRef.value && !profileRef.value.contains(event.target)) {
        isDropdownOpen.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    return {
      isDropdownOpen,
      toggleDropdown,
      handleLogout,
      profileRef,
    };
  },
};
</script>

<style scoped>
.header-subsection {
  display: flex;
  justify-content: space-between;
  /* ▼▼▼ [수정] 위쪽 정렬 대신 중앙 정렬로 변경하여 균형 맞춤 ▼▼▼ */
  align-items: center;
  margin-bottom: 40px; /* 아래 여백 조금 더 줌 */
  width: 100%;
}

/* 타이틀 스타일 */
.title-group {
  display: flex;
  flex-direction: column;
  gap: 6px; /* 제목과 설명 사이 간격 살짝 늘림 */
}

.page-title {
  /* ▼▼▼ [수정] 폰트 크기 키움 (28px -> 32px) ▼▼▼ */
  font-size: 32px;
  font-weight: 700; /* 굵게 */
  color: #111827; /* 진한 검정 (Tailwind gray-900) */
  margin: 0;
  letter-spacing: -0.02em; /* 자간 살짝 좁혀서 단단한 느낌 */
}

.page-desc {
  font-size: 16px; /* 설명 글씨도 14px -> 16px로 살짝 키움 */
  color: #6b7280; /* Tailwind gray-500 */
  margin: 0;
}

/* 프로필 영역 */
.profile-container {
  position: relative;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 6px 8px; /* 클릭 영역 확보 */
  border-radius: 8px;
  transition: background 0.2s;
}

.user-profile:hover {
  background-color: #f3f4f6;
}

.avatar-circle {
  /* ▼▼▼ [수정] 아바타 크기 키움 (40px -> 48px) ▼▼▼ */
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #d1d5db; /* 회색 배경 */
  border: 2px solid white; /* 흰색 테두리로 깔끔하게 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* 살짝 그림자 */
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.admin-name {
  font-weight: 600;
  font-size: 16px; /* 이름 폰트도 살짝 키움 */
  color: #111827;
}

.arrow-icon {
  color: #6b7280;
  transition: transform 0.2s;
}

.arrow-icon.rotated {
  transform: rotate(180deg);
}

/* 드롭다운 메뉴 */
.dropdown-menu {
  position: absolute;
  top: 60px; /* 위치 조정 */
  right: 0;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  width: 140px; /* 너비 살짝 늘림 */
  overflow: hidden;
  z-index: 50;
}

.menu-item {
  padding: 12px 16px;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  transition: background 0.1s;
  font-weight: 500;
}

.menu-item:hover {
  background-color: #f3f4f6;
  color: #ef4444;
}
</style>
