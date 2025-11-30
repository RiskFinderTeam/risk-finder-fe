<template>
  <div class="circle-chart-subsection">
    <div class="view">
      <div class="chart-header">
        <div class="text-wrapper-9">안전등급 비율</div>
        <div class="text-wrapper-10">2025년 11월 기준</div>
      </div>

      <div class="chart-body">
        <div class="chart-container">
          <Doughnut :data="chartData" :options="chartOptions" />
        </div>

        <div class="legend-container">
          <div class="legend-column">
            <div class="legend-item">
              <span class="dot color-a"></span>
              <span class="grade-text">A등급</span>
              <span class="percent-text">{{ formatPercent(ratios.A) }}</span>
            </div>
            <div class="legend-item">
              <span class="dot color-b"></span>
              <span class="grade-text">B등급</span>
              <span class="percent-text">{{ formatPercent(ratios.B) }}</span>
            </div>
            <div class="legend-item">
              <span class="dot color-c"></span>
              <span class="grade-text">C등급</span>
              <span class="percent-text">{{ formatPercent(ratios.C) }}</span>
            </div>
          </div>
          <div class="legend-column">
            <div class="legend-item">
              <span class="dot color-d"></span>
              <span class="grade-text">D등급</span>
              <span class="percent-text">{{ formatPercent(ratios.D) }}</span>
            </div>
            <div class="legend-item">
              <span class="dot color-e"></span>
              <span class="grade-text">E등급</span>
              <span class="percent-text">{{ formatPercent(ratios.E) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'vue-chartjs';

// Chart.js 등록
ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: 'CircleChartSubsection',
  components: {
    Doughnut,
  },
  props: {
    // 부모(Dashboard)에서 받을 데이터
    ratios: {
      type: Object,
      default: () => ({ A: 0, B: 0, C: 0, D: 0, E: 0 }),
    },
  },
  computed: {
    chartData() {
      return {
        labels: ['A등급', 'B등급', 'C등급', 'D등급', 'E등급'],
        datasets: [
          {
            backgroundColor: [
              '#0088ff',
              '#5CACEE',
              '#87CEFA',
              '#B0E0E6',
              '#E0FFFF',
            ], // 색상 (진한 파랑 -> 연한 파랑)
            data: [
              this.ratios.A,
              this.ratios.B,
              this.ratios.C,
              this.ratios.D,
              this.ratios.E,
            ],
            borderWidth: 0, // 테두리 없음
            hoverOffset: 4,
          },
        ],
      };
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%', // 도넛 구멍 크기
        plugins: {
          legend: {
            display: false, // 기본 범례 숨김 (우리가 커스텀으로 만들었으니까)
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.label + ': ' + context.raw + '%';
              },
            },
          },
        },
      };
    },
  },
  methods: {
    formatPercent(val) {
      return val + '%';
    },
  },
};
</script>

<style scoped>
.circle-chart-subsection {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 12px;
  border: 1px solid #e6edff;
  padding: 24px;
  box-sizing: border-box;
}

.chart-header {
  margin-bottom: 20px;
}

.text-wrapper-9 {
  font-size: 18px;
  font-weight: 700;
  color: #333;
}

.text-wrapper-10 {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}

.chart-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.chart-container {
  width: 200px;
  height: 200px;
  position: relative;
}

.legend-container {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 10px;
}

.legend-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #555;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

/* 색상 매칭 */
.color-a {
  background-color: #0088ff;
}
.color-b {
  background-color: #5cacee;
}
.color-c {
  background-color: #87cefa;
}
.color-d {
  background-color: #b0e0e6;
}
.color-e {
  background-color: #e0ffff;
}

.grade-text {
  font-weight: 500;
}

.percent-text {
  font-weight: 700;
  color: #333;
}
</style>
