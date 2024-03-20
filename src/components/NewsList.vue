<template>
  <q-list bordered separator>
    <NewsItem v-for="item in items" :key="item.id" v-bind="item" />
  </q-list>
</template>

<script setup>
import NewsItem from "./NewsItem.vue";
import { defineProps } from "vue";

defineProps({
  items: { type: Array, default: () => [] },
});
</script>

<style lang="scss" scoped></style>
