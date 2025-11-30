<template>
  <div class="product-subsection">
    <div class="controls-header">
      <div class="search-container">
        <div class="search-input-box">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#999"
            stroke-width="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="아이디로 고객 조회"
            v-model="searchQuery"
            @keyup.enter="fetchData(0)"
          />
        </div>
      </div>

      <div class="filter-wrapper">
        <div
          class="filter-btn"
          @click="toggleFilter"
          :class="{ active: isFilterOpen }"
        >
          <span>필터 : </span>
          <span class="filter-highlight">등급</span>
          <svg
            class="arrow-icon"
            :class="{ rotated: isFilterOpen }"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        <div v-if="isFilterOpen" class="filter-dropdown">
          <div class="checkbox-grid">
            <label
              v-for="grade in gradeOptions"
              :key="grade"
              class="checkbox-item"
            >
              <input type="checkbox" :value="grade" v-model="selectedGrades" />
              <span class="checkbox-label">{{ grade }}</span>
            </label>
          </div>
          <div class="filter-actions">
            <button class="apply-btn" @click="applyFilter">적용하기</button>
          </div>
        </div>
      </div>
    </div>

    <div class="table-header">
      <div class="th col-id">아이디</div>
      <div class="th col-name">이름</div>
      <div class="th col-grade">안전등급</div>
      <div class="th col-prob">부도확률</div>
      <div class="th col-action"></div>
    </div>

    <div class="table-body">
      <div v-if="loading" class="loading-msg">데이터를 불러오는 중...</div>
      <div v-if="!loading && items.length === 0" class="loading-msg">
        데이터가 없습니다.
      </div>

      <div class="table-row" v-for="(item, index) in items" :key="item.id">
        <div class="td col-id">{{ item.id }}</div>
        <div class="td col-name">{{ item.name }}</div>
        <div class="td col-grade">{{ item.grade }}</div>
        <div class="td col-prob">{{ item.probability }}</div>
        <div class="td col-action">
          <button class="detail-btn" @click="openModal(item)">자세히</button>
        </div>
      </div>
    </div>

    <div class="pagination-area" v-if="totalPages > 0">
      <div class="page-info">
        {{ currentPage + 1 }} of {{ totalPages }} pages (Total:
        {{ totalElements }})
      </div>
      <div class="page-nums">
        <button
          class="arrow"
          :disabled="first"
          @click="changePage(currentPage - 1)"
        >
          &lt;
        </button>
        <button
          v-for="page in visiblePages"
          :key="page"
          class="num"
          :class="{ active: page === currentPage + 1 }"
          @click="changePage(page - 1)"
        >
          {{ page }}
        </button>
        <button
          class="arrow"
          :disabled="last"
          @click="changePage(currentPage + 1)"
        >
          &gt;
        </button>
      </div>
    </div>

    <CustomerDetail
      v-if="isModalOpen"
      :user="selectedItem"
      @close="closeModal"
    />
  </div>
</template>

<script>
import CustomerDetail from '../customer-detail/CustomerDetail.vue';
import { useAuthStore } from '@/stores/auth';
import axios from 'axios';

export default {
  name: 'ProductSubsection',
  components: {
    CustomerDetail,
  },
  data() {
    return {
      isFilterOpen: false,
      isModalOpen: false,
      loading: false,
      searchQuery: '',
      selectedGrades: [],
      gradeOptions: ['A등급', 'B등급', 'C등급', 'D등급', 'E등급'],
      items: [],
      selectedItem: {}, // 상세 정보가 담길 객체
      currentPage: 0,
      totalPages: 0,
      totalElements: 0,
      first: true,
      last: false,
    };
  },
  computed: {
    visiblePages() {
      const current = this.currentPage + 1;
      const total = this.totalPages;
      const pages = [];
      let start = Math.max(1, current - 2);
      let end = Math.min(total, current + 2);
      if (current <= 3) end = Math.min(5, total);
      if (current >= total - 2) start = Math.max(1, total - 4);
      for (let i = start; i <= end; i++) pages.push(i);
      return pages;
    },
  },
  mounted() {
    this.fetchData(0);
  },
  methods: {
    async fetchData(page) {
      this.loading = true;
      const authStore = useAuthStore();
      const token = authStore.token;

      let gradesParam = null;
      if (this.selectedGrades.length > 0) {
        gradesParam = this.selectedGrades
          .map((g) => g.replace('등급', ''))
          .join(',');
      }

      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/dashboard/customers`,
          {
            params: {
              page: page,
              search: this.searchQuery,
              grades: gradesParam,
            },
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const json = response.data;
        if (json.status === 200) {
          const data = json.data;
          this.items = data.content.map((c) => ({
            id: c.skIdCurr,
            name: c.name,
            grade: c.grade,
            probability: (c.score * 100).toFixed(2) + '%',
          }));
          this.currentPage = data.number;
          this.totalPages = data.totalPages;
          this.totalElements = data.totalElements;
          this.first = data.first;
          this.last = data.last;
        } else {
          console.error('데이터 조회 실패:', json.message);
        }
      } catch (error) {
        console.error('API 에러:', error);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          alert('로그인이 만료되었습니다.');
          authStore.logout();
          this.$router.push('/auth/signIn');
        }
      } finally {
        this.loading = false;
      }
    },

    applyFilter() {
      this.isFilterOpen = false;
      this.fetchData(0);
    },

    changePage(page) {
      if (page >= 0 && page < this.totalPages) {
        this.fetchData(page);
      }
    },
    toggleFilter() {
      this.isFilterOpen = !this.isFilterOpen;
    },

    // ▼▼▼ [수정된 부분] 상세 API 호출 함수 ▼▼▼
    async openModal(item) {
      const authStore = useAuthStore();
      const token = authStore.token;
      const customerId = item.id;

      try {
        // 상세 조회 API 호출 (GET /customer/{id})
        const response = await axios.get(
          `http://localhost:8080/api/v1/dashboard/customer/${customerId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const json = response.data;

        if (json.status === 200) {
          // 성공 시 데이터를 받아와서 저장하고 모달 열기
          this.selectedItem = json.data;
          this.isModalOpen = true;
          console.log('상세 데이터:', this.selectedItem);
        } else {
          alert('상세 정보를 불러오지 못했습니다.');
        }
      } catch (error) {
        console.error('상세 조회 에러:', error);
        alert('데이터를 불러오는 중 오류가 발생했습니다.');
      }
    },
    // ▲▲▲ [수정 완료] ▲▲▲

    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style scoped>
/* 기존 스타일 유지 */
.product-subsection {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
  min-height: 600px;
  display: flex;
  flex-direction: column;
}
.controls-header {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-bottom: 30px;
}
.search-input-box {
  display: flex;
  align-items: center;
  background: #f8f9fb;
  padding: 8px 12px;
  border-radius: 6px;
  width: 240px;
}
.search-input-box input {
  border: none;
  background: transparent;
  margin-left: 8px;
  outline: none;
  font-size: 13px;
  width: 100%;
}
.filter-wrapper {
  position: relative;
}
.filter-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  background: #f8f9fb;
  padding: 8px 15px;
  border-radius: 6px;
  font-size: 13px;
  color: #666;
  cursor: pointer;
  user-select: none;
  transition: background 0.2s;
}
.filter-btn:hover,
.filter-btn.active {
  background-color: #f0f4ff;
}
.filter-highlight {
  font-weight: 600;
  color: #333;
}
.arrow-icon {
  transition: transform 0.2s;
}
.arrow-icon.rotated {
  transform: rotate(180deg);
}
.filter-dropdown {
  position: absolute;
  top: 40px;
  right: 0;
  background: white;
  border: 1px solid #eee;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 15px;
  width: 180px;
  z-index: 100;
}
.checkbox-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 10px;
}
.checkbox-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #555;
  cursor: pointer;
}
.checkbox-item input[type='checkbox'] {
  width: 16px;
  height: 16px;
  accent-color: #666;
}
.filter-actions {
  margin-top: 10px;
  border-top: 1px solid #eee;
  padding-top: 10px;
}
.apply-btn {
  width: 100%;
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 8px 0;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}
.apply-btn:hover {
  background-color: #2563eb;
}
.table-header {
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr 1fr 1fr;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  font-weight: 600;
  color: #999;
  font-size: 13px;
}
.table-body {
  flex: 1;
}
.table-row {
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr 1fr 1fr;
  padding: 18px 0;
  border-bottom: 1px solid #f5f5f5;
  align-items: center;
  font-size: 14px;
  color: #333;
}
.col-id {
  color: #555;
}
.col-name {
  font-weight: 600;
}
.col-grade {
  font-weight: 600;
}
.col-prob {
  font-weight: 600;
}
.col-action {
  text-align: right;
}
.detail-btn {
  background: white;
  border: 1px solid #ddd;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  color: #666;
}
.detail-btn:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}
.loading-msg {
  padding: 20px;
  text-align: center;
  color: #999;
  font-size: 14px;
}
.pagination-area {
  margin-top: auto;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
  font-size: 13px;
}
.page-nums {
  display: flex;
  gap: 4px;
}
.num,
.arrow {
  min-width: 30px;
  height: 30px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 4px;
  color: #666;
}
.num.active {
  background-color: #3b82f6;
  color: white;
}
.num:hover:not(.active),
.arrow:hover:not(:disabled) {
  background-color: #f0f0f0;
}
.arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>
