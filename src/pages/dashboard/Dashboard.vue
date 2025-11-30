<template>
  <div class="dashboard-layout">
    <FrameSubsection class="sidebar" />

    <main class="main-content">
      <HeaderSubsection />

      <CardsSubsection :scores="extScores" />

      <div class="bottom-grid">
        <div class="left-col">
          <CircleChartSubsection :ratios="gradeRatios" />
        </div>

        <div class="right-col">
          <div class="middle-cards-container">
            <div class="info-card">
              <div class="card-top">
                <div class="card-value">{{ eGradePercent }}%</div>
                <div class="card-label">안전등급 E 고객 비율</div>
              </div>
              <div class="card-bottom">
                <div class="trend-box">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF383C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 19V5M12 5L5 12M12 5L19 12" />
                  </svg>
                  <span class="trend-val">0.00</span>
                </div>
                <span class="trend-text">전주 대비 변동</span>
              </div>
            </div>

            <div class="vertical-divider"></div>

            <div class="info-card">
              <div class="card-top">
                <div class="card-value">{{ totalProb }}%</div>
                <div class="card-label">전체 고객 부도확률</div>
              </div>
              <div class="card-bottom">
                <div class="trend-box">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF383C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 19V5M12 5L5 12M12 5L19 12" />
                  </svg>
                  <span class="trend-val">0.00</span>
                </div>
                <span class="trend-text">전주 대비 변동</span>
              </div>
            </div>
          </div>

          <BarGraphSubsection />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import FrameSubsection from './FrameSubsection.vue';
import HeaderSubsection from './HeaderSubsection.vue'; // ★ import 확인
import CardsSubsection from './CardsSubsection.vue';
import CircleChartSubsection from './CircleChartSubsection.vue';
import BarGraphSubsection from './BarGraphSubsection.vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/auth';

export default {
  name: 'Dashboard',
  components: {
    FrameSubsection,
    HeaderSubsection, // ★ 등록 확인
    CardsSubsection,
    CircleChartSubsection,
    BarGraphSubsection,
  },
  data() {
    return {
      gradeRatios: { A: 0, B: 0, C: 0, D: 0, E: 0 },
      eGradePercent: 0,
      totalProb: 0,
      extScores: { s1: 0, s2: 0, s3: 0 },
    };
  },
  mounted() {
    this.fetchStatistics();
  },
  methods: {
    async fetchStatistics() {
      const authStore = useAuthStore();
      const token = authStore.token;
      try {
        const response = await axios.get(
          'http://localhost:8080/api/v1/dashboard/statistics',
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const data = response.data.data;
        if (data) {
          this.gradeRatios = {
            A: (data.gradeAverageA * 100).toFixed(1),
            B: (data.gradeAverageB * 100).toFixed(1),
            C: (data.gradeAverageC * 100).toFixed(1),
            D: (data.gradeAverageD * 100).toFixed(1),
            E: (data.gradeAverageE * 100).toFixed(1),
          };
          this.eGradePercent = (data.gradeAverageE * 100).toFixed(2);
          this.totalProb = (data.scoreAverage * 100).toFixed(2);
          this.extScores = {
            s1: data.extSource1Average,
            s2: data.extSource2Average,
            s3: data.extSource3Average,
          };
        }
      } catch (error) {
        console.error('통계 데이터 조회 실패:', error);
      }
    },
  },
};
</script>

<style scoped>
/* 전체 레이아웃 (화면 크기에 딱 맞춤) */
.dashboard-layout {
  display: flex;
  width: 100%;
  height: 100vh; /* 높이를 화면 전체로 고정 */
  background-color: #fafbfc;
  overflow: hidden; /* 화면 전체 스크롤 없앰 */
}

/* 사이드바 영역 */
.sidebar {
  flex-shrink: 0;
  height: 100%; /* 부모 높이(100vh)를 따라감 */
  z-index: 10;
}

/* 메인 컨텐츠 영역 (여기만 스크롤 됨) */
.main-content {
  flex: 1;
  height: 100%; /* 높이 꽉 채움 */
  padding: 40px;
  overflow-y: auto; /* ★ 핵심: 내용이 길면 여기서 스크롤 생김 */
  min-width: 0;
}

/* ... (아래는 기존 스타일 그대로 유지) ... */
.page-header {
  margin-bottom: 30px;
}
.page-title {
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px 0;
}
.page-desc {
  font-size: 14px;
  color: #999;
  margin: 0;
}

.bottom-grid {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  align-items: stretch;
}
.left-col {
  flex: 0 0 320px;
  min-width: 300px;
}
.right-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
}

.middle-cards-container {
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid #e6edff;
  border-radius: 12px;
  padding: 20px;
  gap: 20px;
  height: 100%;
}
.info-card {
  flex: 1;
}
.card-top {
  margin-bottom: 10px;
}
.card-value {
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 4px;
}
.card-label {
  font-size: 13px;
  color: #666;
}
.card-bottom {
  display: flex;
  align-items: center;
  gap: 8px;
}
.trend-box {
  display: flex;
  align-items: center;
  gap: 4px;
}
.trend-val {
  font-size: 13px;
  color: #999;
}
.trend-text {
  font-size: 12px;
  color: #999;
}
.vertical-divider {
  width: 1px;
  height: 60px;
  background-color: #e6edff;
}
</style>
