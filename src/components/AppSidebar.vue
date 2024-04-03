<template>
  <div class="sidebar" :class="{ 'show-sidebar': showSidebar }">
    <div class="sidebar-items">
      <q-btn flat label="오늘의 사진" @click="goTo('/apod')" class="toolbar-item"/>
      <q-btn flat label="로봇이 찍은 화성사진" @click="goTo('/marsRover')" class="toolbar-item"/>
      <q-btn flat label="ISS 국제우주정거장" @click="goTo('/isstracker')" class="toolbar-item"/>
      <q-btn flat label="뉴스" @click="goTo('/pids')" class="toolbar-item"/>
      <q-btn flat label="Earth" @click="goTo('/earth')" class="toolbar-item"/>
      <q-btn flat label="Mars" @click="goTo('/Mars')" class="toolbar-item"/>
      <q-btn flat label="Saturn" @click="goTo('/saturn')" class="toolbar-item"/>
      <q-btn flat label="Venus" @click="goTo('/venus')" class="toolbar-item"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showSidebar: Boolean
  },
  methods: {
    goTo(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>

<style scoped>
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
</style>
