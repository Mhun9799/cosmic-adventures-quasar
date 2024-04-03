<template>
  <div>
    <q-layout v-if="isMainLayout" view="hHh lpR fFf">
      <q-header elevated class="main-header">
        <q-toolbar class="toolbar">
          <q-toolbar-title @click="goTo('/main-layout')" class="clickable-title">
            🅞🅑🅢🅔🅡🅥🅔🅡
          </q-toolbar-title>
          <div class="toolbar-items">
            <q-btn flat label="Home" @click="goTo('/Home')" class="toolbar-item"/>
            <q-btn flat label="Community" @click="goTo('/community')" class="toolbar-item"/>
            <q-btn flat label="Contact" @click="goTo('/contact')" class="toolbar-item"/>
            <toggle-menu :accessToken="accessToken" class="toggle-menu"/>
          </div>
          <q-btn flat icon="menu" @click="toggleSidebar" class="toggle-button"/>
        </q-toolbar>
      </q-header>
      <q-page-container class="page-container">
        <router-view/>
      </q-page-container>
    </q-layout>

    <div class="sidebar" :class="{ 'show-sidebar': showSidebar }">
      <div class="sidebar-items">
        <q-btn flat label="오늘의 사진" @click="goTo('/apod')" class="toolbar-item"/>
        <q-btn flat label="로봇이 찍은 화성사진" @click="goTo('/mars')" class="toolbar-item"/>
        <q-btn flat label="ISS 국제우주정거장" @click="goTo('/isstracker')" class="toolbar-item"/>
        <q-btn flat label="뉴스" @click="goTo('/pids')" class="toolbar-item"/>
        <q-btn flat label="Community" @click="goTo('/community')" class="toolbar-item"/>
      </div>
    </div>

    <video class="video-background" autoplay loop muted>
      <source src="https://videos.pexels.com/video-files/7664955/7664955-sd_640_360_25fps.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
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
      accessToken: null,
      isMainLayout: false,
      showSidebar: false,
    };
  },
  mounted() {
    this.checkAccessToken();
    this.setMainLayoutStatus();
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
    setMainLayoutStatus() {
      this.isMainLayout = this.$route.path === '/main-layout';
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    }
  },
};
</script>
<style scoped>
.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.clickable-title:hover {
  cursor: pointer;
}

.main-header {
  background-color: #222;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toolbar-items {
  display: flex;
}

.toolbar-item {
  margin-right: 1rem;
}

.toggle-menu {
  margin-right: 1rem;
}

.toggle-button {
  position: fixed;
  top: 5px;
  left: 250px;
  cursor: pointer;
  background-color: #222;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
}

.sidebar {
  position: fixed;
  top: 50px;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #333;
  transition: transform 0.3s ease;
  transform: translateY(-100%);
  display: flex;
  flex-direction: column;
  z-index: 1000;
}

.show-sidebar {
  transform: translateX(0);
}

.sidebar-items {
  display: flex;
  flex-direction: column;
  color: white;
}

.page-container {
  overflow: hidden;
}
</style>
