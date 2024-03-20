<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Cosmic-Adventures </q-toolbar-title>
        <q-space />
        <q-btn flat label="IssTracker" @click="goTo('/isstracker')" />
        <q-btn flat label="뉴스" @click="goTo('/news')" />
        <q-btn flat label="커뮤니티" @click="goTo('/community')" />
        <q-space />
        <q-btn flat round dense icon="account_circle" @click="goTo('/login')" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      this.$router.push({ path: path });
    },
  },
};
</script>
