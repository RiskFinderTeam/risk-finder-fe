<template>
  <div class="bar-graph-subsection">
    <div class="header">
      <div class="title">전체 고객 부도확률</div>
      <div class="subtitle">최근 6개월 기준</div>
    </div>

    <div class="chart-container">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Bar } from 'vue-chartjs';

// Chart.js 컴포넌트 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: 'BarGraphSubsection',
  components: {
    Bar,
  },
  data() {
    return {
      // 차트 데이터 (이미지와 거의 동일한 값으로 설정)
      chartData: {
        labels: ['05', '06', '07', '08', '09', '10'], // X축 (월)
        datasets: [
          {
            label: '부도확률',
            backgroundColor: '#0088FF', // 이미지의 파란색 (Vivid Blue)
            hoverBackgroundColor: '#0077E6', // 호버 시 약간 진하게
            data: [23, 18, 20, 15, 26, 28], // 이미지 높이에 맞춘 데이터
            borderRadius: 4, // 막대 상단 둥글게
            barThickness: 16, // 막대 두께 (이미지에 맞춰 조정)
          },
        ],
      },
      // 차트 옵션 (스타일 디테일 설정)
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // 범례(네모 박스) 숨김
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: 10,
            callbacks: {
              label: (context) => context.raw + '%', // 툴팁에 % 붙이기
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 30, // Y축 최대값 30%로 고정
            ticks: {
              stepSize: 10, // 0, 10, 20, 30 단위
              callback: (value) => value + '%', // 눈금에 % 표시
              color: '#BDBDBD', // 연한 회색 글씨
              font: { size: 11, family: "'Inter', sans-serif" },
              padding: 10,
            },
            grid: {
              color: '#F0F0F0', // 아주 연한 회색 그리드
              borderDash: [4, 4], // 점선 스타일 (실선 아님)
              drawBorder: false, // Y축 세로선 제거
              tickLength: 0, // 눈금 돌기 제거
            },
            border: { display: false },
          },
          x: {
            grid: {
              display: false, // X축 세로 그리드 제거
            },
            ticks: {
              color: '#BDBDBD',
              font: { size: 12, family: "'Inter', sans-serif" },
            },
            border: { display: false }, // X축 가로선 제거 (깔끔하게)
          },
        },
        layout: {
          padding: {
            top: 10,
            bottom: 5,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.bar-graph-subsection {
  /* ▼▼▼ [수정] 고정 너비 제거하고 100%로 설정 ▼▼▼ */
  width: 100%;
  height: 300px;
  background: white;
  border: 1px solid #e6edff;
  border-radius: 12px;
  padding: 24px;
  box-sizing: border-box;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);

  /* position: absolute;  <-- 이거 절대 있으면 안 됩니다! 지우세요 */
}

.header {
  margin-bottom: 15px;
}
.title {
  font-size: 16px;
  font-weight: 700;
  color: #333;
}
.subtitle {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}
.chart-container {
  height: 200px;
  width: 100%;
}
</style>
