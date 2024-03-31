<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title
          @click="goTo('/main-layout')"
          class="clickable-title"
        >
          Observer
        </q-toolbar-title>
        <q-space />
        <q-btn flat label="오늘의 행성" @click="goTo('/apod')" />
        <q-btn flat label="로봇이 찍은 화성" @click="goTo('/mars')" />
        <q-btn flat label="Iss우주정거장" @click="goTo('/isstracker')" />
        <q-btn flat label="뉴스" @click="goTo('/pids')" />
        <q-btn flat label="커뮤니티" @click="goTo('/community')" />
        <q-space />
        <!-- 토글 메뉴 컴포넌트 추가 -->
        <toggle-menu :accessToken="accessToken"/>
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
.clickable-title:hover {
  cursor: pointer;
}
</style>
