<template>
  <q-layout view="hHh lpR fFf">
    <AppHeader @toggle-sidebar="toggleSidebar" />
    <Sidebar :showSidebar="showSidebar" />
    <q-page-container class="page-container">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import AppHeader from 'components/AppHeader.vue';
import Sidebar from 'components/AppSidebar.vue';

export default {
  components: {
    AppHeader,
    Sidebar
  },
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    }
  }
};
</script>

<style scoped>
.page-container {
  overflow: hidden;
}
</style>
