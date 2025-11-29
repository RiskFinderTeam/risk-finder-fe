<template>
  <div class="product-subsection">
    <img class="rectangle" alt="Rectangle" :src="rectangle30" />

    <div class="element-to-of">1 to 8 of&nbsp;&nbsp;256</div>

    <div class="group-2">
      <div class="navbar">
        <div class="text-wrapper-2">아이디</div>

        <div class="text-wrapper-3">이름</div>

        <div class="text-wrapper-4">안전등급</div>

        <div class="text-wrapper-5">부도확률</div>
      </div>

      <div class="frame-2">
        <div class="frame-3" v-for="(item, index) in items" :key="index">
          <div class="text-wrapper-6">{{ item.probability }}</div>

          <div class="text-wrapper-7">{{ item.grade }}</div>

          <div class="text-wrapper-8">{{ item.id }}</div>

          <div class="text-wrapper-9">{{ item.name }}</div>

          <div class="div-wrapper">
            <div class="text-wrapper-10">자세히</div>
          </div>
        </div>
      </div>
    </div>

    <div class="frame-4">
      <div class="frame-5">
        <div class="search">
          <img class="vector" alt="Vector" :src="vector" />

          <img class="img" alt="Vector" :src="image" />
        </div>

        <div class="text-wrapper-11">아이디로 고객 조회</div>
      </div>

      <div class="frame-6">
        <p class="p">
          <span class="span">필터 : </span>

          <span class="text-wrapper-12">등급</span>
        </p>

        <div class="chevron-down">
          <img class="vector-2" alt="Vector" :src="vector2" />
        </div>
      </div>
    </div>

    <div class="filter">
      <div class="frame-7">
        <div class="frame-8" v-for="(grade, index) in grades" :key="index">
          <div class="frame-9">
            <div class="rectangle-2" />

            <div class="text-wrapper-13">{{ grade }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="group-3">
      <div class="frame-12">
        <div class="text-wrapper-14">&lt;</div>
      </div>

      <div class="frame-13">
        <div class="text-wrapper-15">1</div>
      </div>

      <div class="frame-14">
        <div class="text-wrapper-14">2</div>
      </div>

      <div class="frame-15">
        <div class="text-wrapper-14">3</div>
      </div>

      <div class="frame-16">
        <div class="text-wrapper-14">4</div>
      </div>

      <div class="text-wrapper-16">...</div>

      <div class="frame-17">
        <div class="text-wrapper-14">32</div>
      </div>

      <div class="frame-18">
        <div class="text-wrapper-14">&gt;</div>
      </div>
    </div>
  </div>
</template>

<script>
import image from './image.svg';
import rectangle30 from './rectangle-30.svg';
import vector2 from './vector-2.svg';
import vector from './vector.svg';

export default {
  name: 'ProductSubsection',
  data() {
    return {
      image,
      rectangle30,
      vector2,
      vector,
      items: [
        { probability: '8.00%', grade: 'A', id: 'abcd1234', name: 'Microsoft' },
        { probability: '8.00%', grade: 'A', id: 'abcd1234', name: 'Microsoft' },
        { probability: '8.00%', grade: 'A', id: 'abcd1234', name: 'Microsoft' },
        { probability: '8.00%', grade: 'A', id: 'abcd1234', name: 'Microsoft' },
        { probability: '8.00%', grade: 'A', id: 'abcd1234', name: 'Microsoft' },
        { probability: '8.00%', grade: 'A', id: 'abcd1234', name: 'Microsoft' },
        { probability: '8.00%', grade: 'A', id: 'abcd1234', name: 'Microsoft' },
        { probability: '8.00%', grade: 'A', id: 'abcd1234', name: 'Microsoft' },
      ],
      grades: ['A등급', 'B등급', 'C등급', 'D등급', 'E등급'],
    };
  },
};
</script>

<style>
.product-subsection {
  /* Add your styles here */
}

.rectangle {
  /* Add your styles here */
}

.element-to-of {
  /* Add your styles here */
}

.group-2 {
  /* Add your styles here */
}

.navbar {
  /* Add your styles here */
}

.text-wrapper-2 {
  /* Add your styles here */
}

.text-wrapper-3 {
  /* Add your styles here */
}

.text-wrapper-4 {
  /* Add your styles here */
}

.text-wrapper-5 {
  /* Add your styles here */
}

.frame-2 {
  /* Add your styles here */
}

.frame-3 {
  /* Add your styles here */
}

.text-wrapper-6 {
  /* Add your styles here */
}

.text-wrapper-7 {
  /* Add your styles here */
}

.text-wrapper-8 {
  /* Add your styles here */
}

.text-wrapper-9 {
  /* Add your styles here */
}

.div-wrapper {
  /* Add your styles here */
}

.text-wrapper-10 {
  /* Add your styles here */
}

.frame-4 {
  /* Add your styles here */
}

.frame-5 {
  /* Add your styles here */
}

.search {
  /* Add your styles here */
}

.vector {
  /* Add your styles here */
}

.img {
  /* Add your styles here */
}

.text-wrapper-11 {
  /* Add your styles here */
}

.frame-6 {
  /* Add your styles here */
}

.p {
  /* Add your styles here */
}

.span {
  /* Add your styles here */
}

.text-wrapper-12 {
  /* Add your styles here */
}

.chevron-down {
  /* Add your styles here */
}

.vector-2 {
  /* Add your styles here */
}

.filter {
  /* Add your styles here */
}

.frame-7 {
  /* Add your styles here */
}

.frame-8 {
  /* Add your styles here */
}

.frame-9 {
  /* Add your styles here */
}

.rectangle-2 {
  /* Add your styles here */
}

.text-wrapper-13 {
  /* Add your styles here */
}

.frame-10 {
  /* Add your styles here */
}

.frame-11 {
  /* Add your styles here */
}

.group-3 {
  /* Add your styles here */
}

.frame-12 {
  /* Add your styles here */
}

.frame-13 {
  /* Add your styles here */
}

.text-wrapper-14 {
  /* Add your styles here */
}

.frame-14 {
  /* Add your styles here */
}

.frame-15 {
  /* Add your styles here */
}

.frame-16 {
  /* Add your styles here */
}

.text-wrapper-16 {
  /* Add your styles here */
}

.frame-17 {
  /* Add your styles here */
}

.frame-18 {
  /* Add your styles here */
}
</style>