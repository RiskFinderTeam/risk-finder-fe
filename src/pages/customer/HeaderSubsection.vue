<template>
  <header class="header-subsection">
    <div class="title">
      <div class="text-wrapper">Customer</div>
      <div class="div">고객의 상세정보를 확인하세요.</div>
    </div>
    <div class="group">
      <div class="frame">
        <div class="ellipse" />
        <div class="name">
          <div class="admin">Admin</div>
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

.text-wrapper {
  /* Add your styles here */
}

.div {
  /* Add your styles here */
}

.group {
  /* Add your styles here */
}

.frame {
  /* Add your styles here */
}

.ellipse {
  /* Add your styles here */
}

.name {
  /* Add your styles here */
}

.admin {
  /* Add your styles here */
}

.down-arrow {
  /* Add your styles here */
}
</style>