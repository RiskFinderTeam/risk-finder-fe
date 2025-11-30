<template>
  <aside class="frame-subsection">
    <div class="logo-area">
      <div class="logo-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="9" height="9" rx="2" fill="#3B82F6" />
          <rect x="13" y="2" width="9" height="9" rx="2" fill="#3B82F6" />
          <rect x="2" y="13" width="9" height="9" rx="2" fill="#3B82F6" />
          <rect x="13" y="13" width="9" height="9" rx="2" fill="#93C5FD" />
        </svg>
      </div>
      <span class="logo-text">Risk Finder</span>
    </div>

    <nav class="nav-menu">
      <div class="nav-item">
        <div class="icon-box">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M18 20V10M12 20V4M6 20v-6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <span class="menu-text">Dashboard</span>
      </div>

      <div class="nav-item active">
        <div class="icon-box">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle
              cx="12"
              cy="7"
              r="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <span class="menu-text">Customer</span>
      </div>
    </nav>

    <div class="bottom-menu">
      <div class="nav-item">
        <div class="icon-box">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle cx="8" cy="11" r="0.5" fill="currentColor" stroke="none" />
            <circle cx="12" cy="11" r="0.5" fill="currentColor" stroke="none" />
            <circle cx="16" cy="11" r="0.5" fill="currentColor" stroke="none" />
          </svg>
        </div>
        <span class="menu-text">Contact</span>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'FrameSubsection',
};
</script>

<style scoped>
/* 전체 프레임 스타일 */
.frame-subsection {
  width: 260px; /* 너비 고정 */
  min-height: 100vh; /* ★ 핵심 수정: 화면 전체 높이로 강제 설정 */
  background-color: #ffffff;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 로고 영역 */
.logo-area {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 60px; /* 로고와 메뉴 사이 간격 */
}

.logo-text {
  font-size: 18px;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.02em;
}

/* 메뉴 공통 스타일 */
.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 30px; /* ★ 메뉴끼리 너무 붙지 않게 간격 넓힘 */
}

.bottom-menu {
  margin-top: auto; /* Contact 메뉴를 화면 맨 아래로 밀어줌 */
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  color: #9ca3af;
  transition: all 0.2s ease;
  padding: 5px 0; /* 터치 영역 확보 */
}

.menu-text {
  font-size: 15px;
  font-weight: 500;
}

/* 아이콘 박스 */
.icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px; /* 아이콘 영역 고정 */
}

/* 활성화 상태 (Active) 스타일 */
.nav-item.active {
  color: #3b82f6;
}

.nav-item.active .menu-text {
  font-weight: 600;
}

.nav-item:hover {
  color: #3b82f6;
}
</style>
