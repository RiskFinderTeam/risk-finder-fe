<template>
  <div class="cards-subsection">
    <div class="card">
      <div class="top">
        <div class="text">
          <div class="text-wrapper-11">30</div>
          <div class="text-wrapper-12">외부 소스1 평균 점수</div>
        </div>
      </div>
      <div class="bottom">
        <div class="amount">
          <Up class="icon-instance-node-2" color="#0088FF" />
          <div class="text-wrapper-13">1.00</div>
        </div>
        <div class="text-wrapper-14">+1.00% 이번주</div>
      </div>
    </div>
    <img class="divider-2" alt="Divider" src="./divider.svg" />
    <div class="card">
      <div class="top-2">
        <div class="text-2">
          <div class="text-wrapper-11">30</div>
          <div class="text-wrapper-12">외부 소스2 평균 점수</div>
        </div>
      </div>
      <div class="bottom-2">
        <div class="amount">
          <Down class="icon-instance-node-2" />
          <div class="text-wrapper-13">2.00</div>
        </div>
        <div class="text-wrapper-14">-0.90% 이번주</div>
      </div>
    </div>
    <img class="divider-2" alt="Divider" src="./divider-2.svg" />
    <div class="card">
      <div class="top">
        <div class="text-3">
          <div class="text-wrapper-15">30</div>
          <div class="text-wrapper-16">외부 소스3 평균 점수</div>
        </div>
      </div>
      <div class="bottom">
        <div class="amount">
          <Down class="icon-instance-node-2" />
          <div class="text-wrapper-13">2.00</div>
        </div>
        <div class="text-wrapper-14">-0.90% 이번주</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Up } from "./Up";
import { Down } from "./Down";

export default {
  name: "CardsSubsection",
  components: {
    Up,
    Down
  }
};
</script>

<style>
.cards-subsection {
  /* Add your styles here */
}

.card {
  /* Add your styles here */
}

.top {
  /* Add your styles here */
}

.text {
  /* Add your styles here */
}

.text-wrapper-11 {
  /* Add your styles here */
}

.text-wrapper-12 {
  /* Add your styles here */
}

.bottom {
  /* Add your styles here */
}

.amount {
  /* Add your styles here */
}

.text-wrapper-13 {
  /* Add your styles here */
}

.text-wrapper-14 {
  /* Add your styles here */
}

.top-2 {
  /* Add your styles here */
}

.text-2 {
  /* Add your styles here */
}

.bottom-2 {
  /* Add your styles here */
}

.text-wrapper-15 {
  /* Add your styles here */
}

.text-wrapper-16 {
  /* Add your styles here */
}
</style>