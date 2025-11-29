<template>
  <div class="bar-graph-subsection">
    <div class="frame-7">
      <div class="frame-8">
        <div class="text-wrapper-17">전체 고객 부도확률</div>
        <div class="text-wrapper-18">최근 6개월 기준</div>
      </div>
      <div class="chart-3">
        <div class="frame-9">
          <div class="frame-10">
            <div class="element">30%</div>
            <img class="line" alt="Line" :src="line7" />
          </div>
          <div class="frame-10">
            <div class="element">20%</div>
            <img class="line" alt="Line" :src="line4" />
          </div>
          <div class="frame-10">
            <div class="element">10%</div>
            <img class="line" alt="Line" :src="line5" />
          </div>
          <div class="frame-11">
            <div class="element">0%</div>
            <img class="line-2" alt="Line" :src="line6" />
          </div>
        </div>
        <div class="group-2">
          <div class="element-2">05</div>
          <img class="rectangle" alt="Rectangle" :src="rectangle6" />
        </div>
        <div class="group-3">
          <div class="element-3">06</div>
          <img class="rectangle-2" alt="Rectangle" :src="rectangle62" />
        </div>
        <div class="group-4">
          <div class="element-4">07</div>
          <img class="rectangle-3" alt="Rectangle" :src="rectangle63" />
        </div>
        <div class="group-5">
          <div class="element-5">08</div>
          <img class="rectangle-4" alt="Rectangle" :src="rectangle64" />
        </div>
        <div class="group-6">
          <div class="element-6">09</div>
          <img class="rectangle-5" alt="Rectangle" :src="rectangle65" />
        </div>
        <div class="group-7">
          <div class="element-7">10</div>
          <img class="rectangle-6" alt="Rectangle" :src="rectangle66" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import line4 from "./line-4.svg";
import line5 from "./line-5.svg";
import line6 from "./line-6.svg";
import line7 from "./line-7.svg";
import rectangle62 from "./rectangle-6-2.svg";
import rectangle63 from "./rectangle-6-3.svg";
import rectangle64 from "./rectangle-6-4.svg";
import rectangle65 from "./rectangle-6-5.svg";
import rectangle66 from "./rectangle-6-6.svg";
import rectangle6 from "./rectangle-6.svg";

export default {
  name: "BarGraphSubsection",
  data() {
    return {
      line4,
      line5,
      line6,
      line7,
      rectangle62,
      rectangle63,
      rectangle64,
      rectangle65,
      rectangle66,
      rectangle6,
    };
  },
};
</script>

<style>
.bar-graph-subsection {
  /* Add your styles here */
}

.frame-7 {
  /* Add your styles here */
}

.frame-8 {
  /* Add your styles here */
}

.text-wrapper-17 {
  /* Add your styles here */
}

.text-wrapper-18 {
  /* Add your styles here */
}

.chart-3 {
  /* Add your styles here */
}

.frame-9 {
  /* Add your styles here */
}

.frame-10 {
  /* Add your styles here */
}

.element {
  /* Add your styles here */
}

.line {
  /* Add your styles here */
}

.frame-11 {
  /* Add your styles here */
}

.element-2 {
  /* Add your styles here */
}

.rectangle {
  /* Add your styles here */
}

.group-2 {
  /* Add your styles here */
}

.group-3 {
  /* Add your styles here */
}

.element-3 {
  /* Add your styles here */
}

.rectangle-2 {
  /* Add your styles here */
}

.group-4 {
  /* Add your styles here */
}

.element-4 {
  /* Add your styles here */
}

.rectangle-3 {
  /* Add your styles here */
}

.group-5 {
  /* Add your styles here */
}

.element-5 {
  /* Add your styles here */
}

.rectangle-4 {
  /* Add your styles here */
}

.group-6 {
  /* Add your styles here */
}

.element-6 {
  /* Add your styles here */
}

.rectangle-5 {
  /* Add your styles here */
}

.group-7 {
  /* Add your styles here */
}

.element-7 {
  /* Add your styles here */
}

.rectangle-6 {
  /* Add your styles here */
}
</style>