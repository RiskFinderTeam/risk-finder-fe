<template>
  <div class="circle-chart-subsection">
    <div class="view">
      <div class="frame-3">
        <div class="frame-4">
          <div class="a">
            <div class="ellipse-2" />
            <div class="text-wrapper-3">A등급</div>
            <div class="text-wrapper-4">15%</div>
          </div>
          <div class="b">
            <div class="ellipse-3" />
            <div class="text-wrapper-5">B등급</div>
            <div class="text-wrapper-6">17%</div>
          </div>
          <div class="c">
            <div class="ellipse-4" />
            <div class="text-wrapper-7">C등급</div>
            <div class="text-wrapper-8">32%</div>
          </div>
        </div>
        <div class="frame-5">
          <div class="d">
            <div class="ellipse-5" />
            <div class="text-wrapper-3">D등급</div>
            <div class="text-wrapper-6">26%</div>
          </div>
          <div class="e">
            <div class="ellipse-6" />
            <div class="text-wrapper-3">E등급</div>
            <div class="text-wrapper-6">10%</div>
          </div>
        </div>
      </div>
      <div class="chart-2">
        <img class="img" alt="Ellipse" :src="ellipse133" />
        <img class="ellipse-7" alt="Ellipse" :src="ellipse134" />
        <img class="ellipse-8" alt="Ellipse" :src="ellipse132" />
        <img class="ellipse-9" alt="Ellipse" :src="image" />
        <img class="ellipse-10" alt="Ellipse" :src="ellipse13" />
      </div>
      <div class="frame-6">
        <div class="text-wrapper-9">안전등급 비율</div>
        <div class="text-wrapper-10">2025년 11월 기준</div>
      </div>
    </div>
  </div>
</template>

<script>
import ellipse132 from "./ellipse-13-2.svg";
import ellipse133 from "./ellipse-13-3.svg";
import ellipse134 from "./ellipse-13-4.svg";
import ellipse13 from "./ellipse-13.svg";
import image from "./image.svg";

export default {
  name: "CircleChartSubsection",
  data() {
    return {
      ellipse132,
      ellipse133,
      ellipse134,
      ellipse13,
      image,
    };
  },
};
</script>

<style>
.circle-chart-subsection {
  /* Add your styles here */
}

.view {
  /* Add your styles here */
}

.frame-3 {
  /* Add your styles here */
}

.frame-4 {
  /* Add your styles here */
}

.a {
  /* Add your styles here */
}

.ellipse-2 {
  /* Add your styles here */
}

.text-wrapper-3 {
  /* Add your styles here */
}

.text-wrapper-4 {
  /* Add your styles here */
}

.b {
  /* Add your styles here */
}

.ellipse-3 {
  /* Add your styles here */
}

.text-wrapper-5 {
  /* Add your styles here */
}

.text-wrapper-6 {
  /* Add your styles here */
}

.c {
  /* Add your styles here */
}

.ellipse-4 {
  /* Add your styles here */
}

.text-wrapper-7 {
  /* Add your styles here */
}

.text-wrapper-8 {
  /* Add your styles here */
}

.frame-5 {
  /* Add your styles here */
}

.d {
  /* Add your styles here */
}

.ellipse-5 {
  /* Add your styles here */
}

.e {
  /* Add your styles here */
}

.ellipse-6 {
  /* Add your styles here */
}

.chart-2 {
  /* Add your styles here */
}

.img {
  /* Add your styles here */
}

.ellipse-7 {
  /* Add your styles here */
}

.ellipse-8 {
  /* Add your styles here */
}

.ellipse-9 {
  /* Add your styles here */
}

.ellipse-10 {
  /* Add your styles here */
}

.frame-6 {
  /* Add your styles here */
}

.text-wrapper-9 {
  /* Add your styles here */
}

.text-wrapper-10 {
  /* Add your styles here */
}
</style>