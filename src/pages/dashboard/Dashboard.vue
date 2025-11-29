<template>
  <div class="dashboard">
    <div class="logo">
      <img class="vector" alt="Vector" :src="vector" />
      <div class="text-wrapper-19">Risk Finder</div>
    </div>
    <FrameSubsection />
    <HeaderSubsection />
    <CircleChartSubsection />
    <div class="cards">
      <div class="card-2">
        <div class="top-3">
          <div class="text-4">
            <div class="text-wrapper-20">13</div>
            <div class="text-wrapper-21">안전등급 E 고객 수</div>
          </div>
        </div>
        <div class="bottom-3">
          <div class="amount-2">
            <Up class="up-instance" color="#FF383C" />
            <div class="text-wrapper-22">3.00</div>
          </div>
          <div class="text-wrapper-23">+1.00% 이번주</div>
        </div>
      </div>
      <img class="divider-3" alt="Divider" :src="divider3" />
      <div class="card-2">
        <div class="top-3">
          <div class="text-4">
            <div class="text-wrapper-20">23%</div>
            <div class="text-wrapper-21">전체 고객 부도확률</div>
          </div>
        </div>
        <div class="bottom-3">
          <div class="amount-2">
            <Up class="up-instance" color="#FF383C" />
            <div class="text-wrapper-22">3.00</div>
          </div>
          <div class="text-wrapper-23">+1.00% 이번주</div>
        </div>
      </div>
    </div>
    <CardsSubsection />
    <BarGraphSubsection />
  </div>
</template>

<script>
import FrameSubsection from './FrameSubsection.vue';
import HeaderSubsection from './HeaderSubsection.vue';
import CircleChartSubsection from './CircleChartSubsection.vue';
import Up from './Up.vue';
import divider3 from './divider-3.svg';
import vector from './vector.svg';

export default {
  name: 'Dashboard',
  components: {
    FrameSubsection,
    HeaderSubsection,
    CircleChartSubsection,
    Up,
  },
  data() {
    return {
      divider3,
      vector,
    };
  },
};
</script>

<style>
.dashboard {
  background-color: #ffffff;
  min-height: 1000px;
  min-width: 1920px;
  position: relative;
  width: 100%;
}

.dashboard .logo {
  align-items: center;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  left: 50px;
  position: absolute;
  top: 60px;
}

.dashboard .vector {
  aspect-ratio: 1;
  height: 19.5px;
  margin-left: -0.75px;
  position: relative;
  width: 19.5px;
}

.dashboard .text-wrapper-19 {
  color: var(--primary);
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

.dashboard .cards {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--border);
  border-radius: 12px;
  display: flex;
  gap: 30px;
  left: 712px;
  padding: 20px;
  position: absolute;
  top: 351px;
  width: 438px;
}

.dashboard .card-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 165px;
}

.dashboard .top-3 {
  height: 66px;
  position: relative;
  width: 118px;
}

.dashboard .text-4 {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  position: relative;
}

.dashboard .text-wrapper-20 {
  color: var(--primary);
  font-family: 'Inter-SemiBold', Helvetica;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 42px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.dashboard .text-wrapper-21 {
  color: var(--primary);
  font-family: 'Pretendard Variable-Regular', Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.dashboard .bottom-3 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 12px;
  position: relative;
  width: 100%;
}

.dashboard .amount-2 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;
}

.dashboard .up-instance {
  height: 20px !important;
  position: relative !important;
  width: 20px !important;
}

.dashboard .text-wrapper-22 {
  color: var(--secondary);
  font-family: 'Pretendard Variable-Regular', Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 21px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.dashboard .text-wrapper-23 {
  color: var(--secondary);
  flex: 1;
  font-family: 'Pretendard Variable-Regular', Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 21px;
  margin-top: -1px;
  position: relative;
}

.dashboard .divider-3 {
  height: 102px;
  object-fit: cover;
  position: relative;
  width: 1px;
}
</style>
