<template>
  <div class="customer-detail">
    <div class="frame">
      <div class="text-wrapper">abcd1234</div>

      <div class="div">
        <div class="frame-2">
          <div class="text-wrapper-2">이름</div>

          <div class="text-wrapper-3">Microsoft</div>
        </div>

        <div class="frame-2">
          <div class="text-wrapper-2">전화번호</div>

          <div class="text-wrapper-4">010-1234-5678</div>
        </div>

        <div class="frame-2">
          <div class="text-wrapper-2">이메일</div>

          <div class="text-wrapper-4">abcd@gmail.com</div>
        </div>
      </div>
    </div>

    <div class="frame-3">
      <div class="div-wrapper">
        <div class="text-wrapper-5">안내 메일 발송</div>
      </div>

      <img class="divider" alt="Divider" src="./divider.svg" />

      <div class="frame-4">
        <div class="text-wrapper-6">안전등급</div>

        <div class="text-wrapper-7">A</div>
      </div>

      <div class="frame-5">
        <div class="text-wrapper-8">부도확률</div>

        <div class="text-wrapper-9">8.00%</div>
      </div>
    </div>

    <div class="frame-6">
      <div class="text-wrapper-10">주요요인</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerDetail",
};
</script>

<style>
.customer-detail {
  background-color: #ffffff;
  border: 1px solid;
  border-color: #e5e8eb;
  min-height: 400px;
  min-width: 480px;
  position: relative;
  width: 100%;
}

.customer-detail .frame {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  left: 49px;
  position: absolute;
  top: 53px;
  width: 165px;
}

.customer-detail .text-wrapper {
  color: var(--colors-labels-vibrant-controls-primary);
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1.00px;
  opacity: 0.9;
  position: relative;
  width: fit-content;
}

.customer-detail .div {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  margin-right: -4.00px;
  position: relative;
}

.customer-detail .frame-2 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 11px;
  position: relative;
}

.customer-detail .text-wrapper-2 {
  color: #b5b7c0;
  font-family: "Poppins-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.14px;
  line-height: normal;
  margin-top: -1.00px;
  position: relative;
  width: fit-content;
}

.customer-detail .text-wrapper-3 {
  color: #535353;
  font-family: "Inter-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1.00px;
  position: relative;
  text-align: center;
  width: fit-content;
}

.customer-detail .text-wrapper-4 {
  color: #535353;
  font-family: "Inter-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1.00px;
  position: relative;
  width: fit-content;
}

.customer-detail .frame-3 {
  border: 1px solid;
  border-color: #e6edff;
  border-radius: 12px;
  height: 140px;
  left: 250px;
  overflow: hidden;
  position: absolute;
  top: 45px;
  width: 190px;
}

.customer-detail .div-wrapper {
  align-items: center;
  background: linear-gradient(
      0deg,
      rgba(0, 136, 255, 1) 0%,
      rgba(0, 136, 255, 1) 100%
    ),
    linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  border-radius: 12px;
  display: flex;
  height: 35px;
  justify-content: center;
  left: calc(50.00% - 70px);
  overflow: hidden;
  position: absolute;
  top: 86px;
  width: 140px;
}

.customer-detail .text-wrapper-5 {
  color: #ffffff;
  font-family: "Pretendard Variable-SemiBold", Helvetica;
  font-size: 14px;
  font-weight: 600;
  height: 21px;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
  width: 80px;
}

.customer-detail .divider {
  height: 40px;
  left: 95px;
  object-fit: cover;
  position: absolute;
  top: 26px;
  width: 1px;
}

.customer-detail .frame-4 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3px;
  left: calc(50.00% - 71px);
  position: absolute;
  top: 29px;
  width: 52px;
}

.customer-detail .text-wrapper-6 {
  color: #000000;
  font-family: "Inter-Medium", Helvetica;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1.00px;
  position: relative;
  width: fit-content;
}

.customer-detail .text-wrapper-7 {
  color: var(--colors-labels-vibrant-controls-primary);
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  opacity: 0.9;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.customer-detail .frame-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 3px;
  left: calc(50.00% + 19px);
  position: absolute;
  top: 29px;
  width: 50px;
}

.customer-detail .text-wrapper-8 {
  align-self: stretch;
  color: #000000;
  font-family: "Inter-Medium", Helvetica;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1.00px;
  position: relative;
}

.customer-detail .text-wrapper-9 {
  align-self: stretch;
  color: var(--colors-labels-vibrant-controls-primary);
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  opacity: 0.9;
  position: relative;
}

.customer-detail .frame-6 {
  align-items: center;
  border: 1px solid;
  border-color: #e6edff;
  border-radius: 12px;
  display: flex;
  height: 160px;
  left: 40px;
  overflow: hidden;
  position: absolute;
  top: 208px;
  width: 400px;
}

.customer-detail .text-wrapper-10 {
  color: var(--colors-labels-vibrant-controls-primary);
  flex: 1;
  font-family: "Inter-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  height: 17px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 6.5%;
  margin-right: 77.11%;
  margin-top: -97px;
  opacity: 0.9;
  width: 65.56px;
}
</style>