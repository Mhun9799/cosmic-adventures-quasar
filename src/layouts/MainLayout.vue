<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>  Cosmic-Adventures </q-toolbar-title>
        <q-space />
        <q-btn flat label="IssTracker" @click="goTo('/isstracker')" />
        <q-btn flat label="뉴스" @click="goTo('/news')" />
        <q-btn flat label="커뮤니티" @click="goTo('/community')" />
        <q-btn flat label="로그아웃" @click="logout" />
        <q-space />
        <q-btn flat round dense icon="account_circle" @click="checkAccessToken" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      accessToken: null // 로그인 상태에 따라 업데이트됩니다.
    };
  },



  methods: {
    goTo(path) {
      this.$router.push({ path: path });
    },
    logout() {
      // 엑세스 토큰 삭제
      localStorage.removeItem('Authorization');
      // 로그인 상태 갱신
      this.accessToken = null;
      // 로그인 페이지로 이동
      this.goTo('/login');
    },
    checkAccessToken() {
      const storedToken = localStorage.getItem('Authorization');
      if (storedToken) {
        // 토큰이 있으면 mypage로 이동
        this.goTo('/mypage');
      } else {
        // 토큰이 없으면 login으로 이동
        this.goTo('/login');
      }
    }
  },

};
</script>
