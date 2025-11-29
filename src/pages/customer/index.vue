<template>
  <div class="customer">
    <HeaderSubsection />
    <ProductSubsection />
    <FrameSubsection />
    <div class="logo">
      <img class="vector-3" alt="Vector" :src="vector3" />
      <div class="text-wrapper-18">Risk Finder</div>
    </div>
  </div>
</template>

<script>
import HeaderSubsection from "./HeaderSubsection.vue";
import ProductSubsection from "./ProductSubsection.vue";
import FrameSubsection from "./FrameSubsection.vue";
import vector3 from "./vector-3.svg";

export default {
  name: "Customer",
  components: {
    HeaderSubsection,
    ProductSubsection,
    FrameSubsection,
  },
  data() {
    return {
      vector3,
    };
  },
};
</script>

<style>
.customer {
  background-color: #ffffff;
  min-height: 1080px;
  min-width: 1920px;
  position: relative;
  width: 100%;
}

.customer .logo {
  align-items: center;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  left: 50px;
  position: absolute;
  top: 60px;
}

.customer .vector-3 {
  aspect-ratio: 1;
  height: 19.5px;
  margin-left: -0.75px;
  position: relative;
  width: 19.5px;
}

.customer .text-wrapper-18 {
  color: var(--primary);
  font-family: "Inter-Medium", Helvetica;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.20px;
  line-height: normal;
  margin-top: -1.00px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>