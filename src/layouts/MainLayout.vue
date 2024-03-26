<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>  Cosmic-Adventures </q-toolbar-title>
        <q-space />
        <q-btn flat label="Iss우주정거장" @click="goTo('/isstracker')" />
        <q-btn flat label="뉴스" @click="goTo('/news')" />
        <q-btn flat label="커뮤니티" @click="goTo('/community')" />
        <q-btn v-if="accessToken" flat label="프로필수정" @click="edit_profile" />
        <q-btn v-if="accessToken" flat label="로그아웃" @click="logout" />
        <q-space />
        <q-btn flat round dense icon="account_circle" @click="handleAccountIconClick"/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {Cookies} from "quasar";

export default {
  data() {
    return {
      accessToken: null // 로그인 상태에 따라 업데이트됩니다.
    };
  },
  mounted() {
    this.checkAccessToken(); // 페이지가 로드될 때 엑세스 토큰을 확인합니다.
  },
  methods: {
    goTo(path) {
      this.$router.push({path: path});
    },
    logout() {
      // 엑세스 토큰 삭제
      Cookies.remove('Authorization');
      // 로그인 상태 갱신
      this.accessToken = null;
      // 로그인 페이지로 이동
      this.goTo('/login');
    },
    checkAccessToken() {
      const storedToken = Cookies.get('Authorization');
      if (storedToken) {
        // 토큰이 있으면 accessToken을 설정합니다.
        this.accessToken = storedToken;
      } else {
        // 토큰이 없으면 로그인 페이지로 이동합니다.
        this.goTo('/login');
      }
    },
    handleAccountIconClick() {
      // 아이콘을 클릭했을 때 토큰의 유무에 따라 마이페이지 또는 로그인 페이지로 이동합니다.
      if (this.accessToken) {
        this.goTo('/mypage');
      } else {
        this.goTo('/login');
      }
    },
    edit_profile() {
      this.$router.push('/edit_profile');
    }
  }
};
</script>
