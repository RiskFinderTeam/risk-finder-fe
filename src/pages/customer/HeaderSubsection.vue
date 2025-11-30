<template>
  <header class="header-subsection">
    <div class="title-group">
      <div class="page-title">Customer</div>
      <div class="page-desc">고객의 상세정보를 확인하세요.</div>
    </div>

    <div class="user-profile">
      <div class="avatar-circle"></div>
      <div class="user-info">
        <span class="admin-name">Admin</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderSubsection',
};
</script>

<style scoped>
.header-subsection {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  width: 100%;
}

.page-title {
  font-size: 28px;
  font-weight: 700;
  color: #111;
  margin-bottom: 8px;
}

.page-desc {
  font-size: 14px;
  color: #999;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.avatar-circle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #e0e0e0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 14px;
  color: #333;
}
</style>
