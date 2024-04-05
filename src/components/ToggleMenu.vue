<template>
  <div>
    <q-btn flat round dense icon="account_circle" @click="toggleMenu" class="toggle-menu-icon"/>
    <q-drawer v-model="menuOpen" side="right" overlay bordered content-class="custom-drawer" :content-style="{ backgroundColor: '#333' }">
      <q-list>
        <q-item clickable @click="goTo('/mypage')">
          <q-item-section>
            <q-item-label class="profile-label">나의 프로필</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="goTo('/edit_profile')">
          <q-item-section>
            <q-item-label class="profile-label">나의 프로필 수정</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="goTo('/updatePasswordPage')">
          <q-item-section>
            <q-item-label class="profile-label">나의 비밀번호 수정</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="goTo('/MyPosts')">
          <q-item-section>
            <q-item-label class="profile-label">나의 게시글</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="goTo('/MyLikes')">
          <q-item-section>
            <q-item-label class="profile-label">좋아요한 게시글</q-item-label>
          </q-item-section>
        </q-item>
        <!-- "로그아웃" 항목 -->
        <q-item clickable @click="logout">
          <q-item-section>
            <q-item-label class="logout-label">로그아웃</q-item-label>
          </q-item-section>
        </q-item>
        <!-- "탈퇴하기" 항목 -->
        <q-item clickable @click="goTo('/withdrawalPage')">
          <q-item-section>
            <q-item-label class="logout-label">탈퇴하기</q-item-label>
          </q-item-section>
        </q-item>
        <!-- "탈퇴취소하기" 항목 -->
        <q-item clickable @click="cancelWithdrawal">
          <q-item-section>
            <q-item-label class="logout-label">탈퇴 취소하기</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </div>
</template>

<script>
import {Cookies} from "quasar";
import axios from 'axios';
import MainLayout from "layouts/MainLayout.vue";

export default {
  props: ['accessToken'],
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    async logout() {
      try {
        const accessToken = Cookies.get("Authorization");
        const response = await axios.get('http://dearforbearance.com/api/v1/users/logout', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        if (response.status === 200) {
          alert('로그아웃이 성공적으로 처리되었습니다.');
          Cookies.remove("Authorization");
          MainLayout.accessToken = null;
          this.goTo("/login");
        } else {
          console.error('로그아웃 요청에 실패했습니다.');
        }
      } catch (error) {
        console.error('로그아웃 요청 중 오류가 발생했습니다.', error);
      }
    },
    async cancelWithdrawal() {
      try {
        const accessToken = Cookies.get("Authorization");
        const response = await axios.delete('http://dearforbearance.com/api/v1/users/withdrawalCancel', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        if (response.status === 200) {
          alert('탈퇴가 성공적으로 취소되었습니다.');
          // 원하는 동작 수행 (예: 페이지 리로드)
          window.location.reload();
        } else {
          console.error('탈퇴 취소 요청에 실패했습니다.');
        }
      } catch (error) {
        console.error('탈퇴 취소 요청 중 오류가 발생했습니다.', error);
      }
    },
    goTo(path) {
      this.$router.push({path: path});
    },
    toggleMenu() {
      if (Cookies.get("Authorization")) {
        this.menuOpen = !this.menuOpen;
      } else {
        this.goTo("/login");
      }
    }
  }
};
</script>

<style scoped>
.q-drawer-content.custom-drawer {
  background-color: #222 !important; /* 사이드바의 배경색을 #222로 변경합니다. */
}
.clickable-title:hover {
  cursor: pointer;
}

.profile-label {
  color: black;
}

.logout-label {
  color: red;
}
.toggle-menu-icon {
  margin-right: 17rem; /* 토글 메뉴 아이콘을 오른쪽으로 이동시키는 마진 값을 조정합니다. */
}
</style>
