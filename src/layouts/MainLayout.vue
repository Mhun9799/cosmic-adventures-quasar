<template>
  <q-layout view="hHh lpR fFf" class="black-background">
    <q-header elevated>
      <q-toolbar class="toolbar">
        <q-space />
        <q-toolbar-title
          @click="goTo('/main-layout')"
          class="clickable-title"
        >
          🅞🅑🅢🅔🅡🅥🅔🅡
        </q-toolbar-title>
        <q-space />
        <q-btn flat label="오늘의 사진" @click="goTo('/apod')" class="toolbar-item"/>
        <q-btn flat label="로봇이 찍은 화성" @click="goTo('/mars')" class="toolbar-item"/>
        <q-btn flat label="Iss우주정거장" @click="goTo('/isstracker')" class="toolbar-item"/>
        <q-btn flat label="뉴스" @click="goTo('/pids')" class="toolbar-item"/>
        <q-btn flat label="커뮤니티" @click="goTo('/community')" class="toolbar-item"/>

        <q-space />
        <!-- 토글 메뉴 컴포넌트 추가 -->
        <toggle-menu :accessToken="accessToken" class="toolbar-item toggle-menu"/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import ToggleMenu from '/src/components/ToggleMenu.vue';
import { Cookies } from "quasar";

export default {
  components: {
    ToggleMenu
  },
  data() {
    return {
      accessToken: null
    };
  },
  mounted() {
    this.checkAccessToken();
  },
  methods: {
    goTo(path) {
      this.$router.push({ path: path });
    },
    checkAccessToken() {
      const storedToken = Cookies.get("Authorization");
      if (storedToken) {
        this.accessToken = storedToken;
      } else {
        this.goTo("/login");
      }
    },
  }
};
</script>

<style scoped>

.black-background {
  background-image: url('https://tobirobucket.s3.ap-northeast-2.amazonaws.com/profile/433ed7cd-f012-4d5b-acfa-3a77f8cad1ca-%EC%A7%80%EA%B5%AC.png'); /* 이미지 경로를 설정합니다 */
  background-size: cover; /* 이미지를 화면에 꽉 채우도록 설정합니다 */
  background-position: center; /* 이미지를 가운데 정렬합니다 */
}

.clickable-title:hover {
  cursor: pointer;
}

.toolbar {
  display: flex;
}

.toolbar-item {
  margin-left: 0.5rem; /* 아이템들을 왼쪽으로 이동시키기 위해 margin을 조정합니다. */
}

.toggle-menu {
  margin-left: 10rem; /* 토글 메뉴를 왼쪽으로 이동시키기 위해 margin을 조정합니다. */
}
</style>
