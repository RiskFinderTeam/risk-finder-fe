<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-card">
      <button class="close-btn" @click="$emit('close')">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#999"
          stroke-width="2"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div class="modal-content">
        <div class="top-section">
          <div class="info-area">
            <h2 class="user-id">{{ user.skIdCurr }}</h2>
            <div class="info-row">
              <span class="label">이름</span
              ><span class="value">{{ user.name }}</span>
            </div>
            <div class="info-row">
              <span class="label">전화번호</span
              ><span class="value">{{ user.phone || '-' }}</span>
            </div>
            <div class="info-row">
              <span class="label">이메일</span
              ><span class="value">{{ user.email || '-' }}</span>
            </div>
          </div>

          <div class="grade-box">
            <div class="grade-info">
              <div class="grade-item">
                <span class="g-label">안전등급</span
                ><span class="g-value highlight">{{ user.grade }}</span>
              </div>
              <div class="vertical-divider"></div>
              <div class="grade-item">
                <span class="g-label">부도확률</span
                ><span class="g-value color-blue">{{
                  formatScore(user.score)
                }}</span>
              </div>
            </div>
            <button class="email-btn" @click="sendEmail">안내 메일 발송</button>
          </div>
        </div>

        <div class="bottom-section">
          <div class="factor-box">
            <span class="factor-title">주요요인 (Top 3)</span>

            <ul class="factor-list" v-if="parsedFeatures.length > 0">
              <li v-for="(feature, index) in parsedFeatures" :key="index">
                {{ feature }}
              </li>
            </ul>
            <div v-else class="no-data">표시할 주요 위험 요인이 없습니다.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerDetail',
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({
        skIdCurr: '-',
        name: '-',
        phone: '-',
        email: '-',
        grade: '-',
        score: 0,
        top3Features: [],
      }),
    },
  },
  // ▼▼▼ [추가됨] 데이터를 가공하는 computed 속성 ▼▼▼
  computed: {
    parsedFeatures() {
      const data = this.user.top3Features;

      // 1. 만약 데이터가 이미 배열이라면 그대로 반환
      if (Array.isArray(data)) {
        return data;
      }

      // 2. 만약 데이터가 문자열이라면 (예: "[요인1, 요인2]") -> 배열로 변환
      if (typeof data === 'string') {
        // 대괄호 '[' 와 ']' 를 제거하고, 콤마(,) 기준으로 자릅니다.
        return data
          .replace('[', '')
          .replace(']', '')
          .split(',')
          .map((item) => item.trim());
      }

      // 3. 데이터가 없으면 빈 배열 반환
      return [];
    },
  },
  methods: {
    formatScore(score) {
      if (score === undefined || score === null) return '-';
      return (score * 100).toFixed(2) + '%';
    },
    sendEmail() {
      alert('안내 메일 발송 기능은 준비 중입니다.');
    },
  },
};
</script>

<style scoped>
/* 모달 배경 (어둡게) */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* 모달 카드 (흰색 박스) */
.modal-card {
  background: white;
  /* ▼▼▼ [수정] 너비를 700px로 늘렸습니다 ▼▼▼ */
  width: 700px;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  position: relative;
  font-family: 'Inter', -apple-system, sans-serif;
  box-sizing: border-box;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
}

/* 레이아웃 */
.top-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  gap: 30px; /* 좌우 간격 조금 추가 */
}

/* 왼쪽 정보 영역 */
.info-area {
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* ▼▼▼ [수정] 왼쪽 영역이 남는 공간을 다 차지하도록 설정 ▼▼▼ */
  flex: 1;
}

.user-id {
  font-size: 28px; /* 폰트 살짝 키움 */
  font-weight: 700;
  color: #333;
  margin: 0 0 15px 0;
}

.info-row {
  display: flex;
  gap: 20px; /* 라벨과 값 사이 간격 조정 */
  font-size: 15px;
  align-items: center; /* 수직 중앙 정렬 */
}

.label {
  color: #b5b7c0;
  width: 70px; /* 라벨 너비 살짝 늘림 */
  font-weight: 500;
  flex-shrink: 0; /* 라벨 줄바꿈 방지 */
}

.value {
  color: #535353;
  font-weight: 500;
}

/* 오른쪽 등급 박스 */
.grade-box {
  width: 220px; /* 너비 살짝 키움 */
  border: 1px solid #e6edff;
  border-radius: 12px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  box-sizing: border-box;
  background-color: #fff;
  /* ▼▼▼ [수정] 박스 크기 줄어들지 않게 고정 ▼▼▼ */
  flex-shrink: 0;
}

.grade-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.grade-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.g-label {
  font-size: 12px;
  color: #000;
}

.g-value {
  font-size: 18px; /* 폰트 키움 */
  font-weight: 700;
}

.g-value.highlight {
  color: #333;
}
.g-value.color-blue {
  color: #0088ff;
}

.vertical-divider {
  width: 1px;
  height: 30px;
  background-color: #e6edff;
}

.email-btn {
  background: #0088ff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: auto; /* 버튼을 아래로 밀어줌 */
}

.email-btn:hover {
  background: #0077e6;
}

/* 하단 주요 요인 박스 */
.factor-box {
  width: 100%;
  min-height: 120px;
  border: 1px solid #e6edff;
  border-radius: 12px;
  padding: 25px; /* 패딩 늘림 */
  background: #fafbff;
  box-sizing: border-box;
}

.factor-title {
  font-size: 15px;
  font-weight: 700;
  color: #333;
  display: block;
  margin-bottom: 12px;
}

.factor-list {
  margin: 0;
  padding-left: 20px;
  font-size: 14px;
  color: #555;
  line-height: 1.6; /* 줄 간격 추가 */
}

.factor-list li {
  margin-bottom: 5px;
}

.no-data {
  font-size: 14px;
  color: #999;
}
</style>
