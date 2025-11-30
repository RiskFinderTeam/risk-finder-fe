<template>
  <div class="customer">
    <FrameSubsection class="sidebar-area" />

    <main class="main-area">
      <HeaderSubsection />
      <ProductSubsection />
    </main>
  </div>
</template>

<script>
import HeaderSubsection from './HeaderSubsection.vue';
import ProductSubsection from './ProductSubsection.vue';
import FrameSubsection from './FrameSubsection.vue';

export default {
  name: 'Customer',
  components: {
    HeaderSubsection,
    ProductSubsection,
    FrameSubsection,
  },
};
</script>

<style scoped>
.customer {
  display: flex; /* 좌우 배치 */
  background-color: #f8f9fb; /* 전체 배경색 */
  min-height: 100vh;
  width: 100%;
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui,
    Roboto, sans-serif;
}

.sidebar-area {
  width: 260px; /* 사이드바 고정 너비 */
  flex-shrink: 0;
  background: white;
  border-right: 1px solid #eee;
}

.main-area {
  flex: 1; /* 나머지 공간 차지 */
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* 세로 스크롤 */
  padding: 40px; /* 내부 여백 */
}
</style>
