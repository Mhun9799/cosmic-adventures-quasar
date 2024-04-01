<template>
  <div class="q-pa-md">
    <h1> PIDs </h1>

    <div class="flex-container">
      <NewsItem v-for="pid in pids" :key="pid.id" :pid="pid" class="flex-item" />
    </div>
  </div>
</template>

<script setup>
import NewsItem from "./NewsItem.vue";
// import { defineProps } from 'vue'; // Import defineProps
//
// defineProps({
//   pids: { type: Array, required: true },
// });
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
}
.flex-item {
  width: calc(20% - 10px);
}
</style>
