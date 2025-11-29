<template>
  <header class="header-subsection">
    <div class="title">
      <div class="text-wrapper-2">Dashboard</div>
      <p class="p">고객의 점수와 등급을 한눈에 확인하세요.</p>
    </div>
    <div class="group">
      <div class="frame-2">
        <div class="ellipse" />
        <div class="name">
          <div class="name-2">Admin</div>
          <img class="down-arrow" alt="Down arrow" :src="downArrow" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import downArrow from './down-arrow.svg';

export default {
  name: 'HeaderSubsection',
  data() {
    return {
      downArrow,
    };
  },
};
</script>

<style>
.header-subsection {
  /* Add your styles here */
}

.title {
  /* Add your styles here */
}

.text-wrapper-2 {
  /* Add your styles here */
}

.p {
  /* Add your styles here */
}

.group {
  /* Add your styles here */
}

.frame-2 {
  /* Add your styles here */
}

.ellipse {
  /* Add your styles here */
}

.name {
  /* Add your styles here */
}

.name-2 {
  /* Add your styles here */
}

.down-arrow {
  /* Add your styles here */
}
</style>