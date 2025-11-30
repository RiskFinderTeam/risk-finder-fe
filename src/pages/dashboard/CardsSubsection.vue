<template>
  <div class="cards-subsection">
    <div class="card">
      <div class="top">
        <div class="text">
          <div class="text-wrapper-11">{{ formatScore(scores.s1) }}</div>
          <div class="text-wrapper-12">외부 소스1 평균 점수</div>
        </div>
      </div>
      <div class="bottom">
        <div class="amount">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 19V5M12 5L5 12M12 5L19 12"
              stroke="#0088FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="text-wrapper-13">1.00</div>
        </div>
        <div class="text-wrapper-14">+1.00% 이번주</div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="card">
      <div class="top">
        <div class="text">
          <div class="text-wrapper-11">{{ formatScore(scores.s2) }}</div>
          <div class="text-wrapper-12">외부 소스2 평균 점수</div>
        </div>
      </div>
      <div class="bottom">
        <div class="amount">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L19 12M12 19L5 12"
              stroke="#FF383C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="text-wrapper-13">2.00</div>
        </div>
        <div class="text-wrapper-14">-0.90% 이번주</div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="card">
      <div class="top">
        <div class="text">
          <div class="text-wrapper-11">{{ formatScore(scores.s3) }}</div>
          <div class="text-wrapper-12">외부 소스3 평균 점수</div>
        </div>
      </div>
      <div class="bottom">
        <div class="amount">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L19 12M12 19L5 12"
              stroke="#FF383C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="text-wrapper-13">2.00</div>
        </div>
        <div class="text-wrapper-14">-0.90% 이번주</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardsSubsection',
  props: {
    // 부모(Dashboard)에서 받을 데이터
    scores: {
      type: Object,
      default: () => ({ s1: 0, s2: 0, s3: 0 }),
    },
  },
  methods: {
    // 소수점 4자리까지 표시
    formatScore(val) {
      if (val === undefined || val === null) return '0.0000';
      return Number(val).toFixed(4);
    },
  },
};
</script>

<style scoped>
.cards-subsection {
  display: flex;
  align-items: center;
  justify-content: space-between; /* ★ 카드 사이 간격 자동 조절 */
  gap: 20px;
  background-color: #ffffff;
  border: 1px solid #e6edff;
  border-radius: 12px;
  padding: 24px 30px;

  /* ▼▼▼ [수정] 너비를 100%로 변경 ▼▼▼ */
  width: 100%;
  box-sizing: border-box; /* 패딩 포함 크기 계산 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
  margin-bottom: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1; /* 카드끼리 같은 너비 가지도록 */
}

/* ... 나머지 폰트 스타일 등은 유지하되, 너무 크면 줄이세요 ... */
.text-wrapper-11 {
  font-size: 24px;
  font-weight: 700;
  color: #333;
}
.text-wrapper-12 {
  font-size: 13px;
  color: #666;
  margin-top: 4px;
}
.divider {
  width: 1px;
  height: 50px;
  background-color: #e6edff;
}
</style>
