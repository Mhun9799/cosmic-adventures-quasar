<template>
  <router-link :to="`/pids/${pid.id}`">
    <div class="news-item">
<!--      <img :src="pid.imageUrl" alt="PID Image" class="card-image">-->
      <div class="card-content">
        <div class="text-h6">{{ pid.title }}</div>
        <div class="text-caption text-grey">{{ pid.category }}</div>
        <div class="text-body">{{ pid.content }}</div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  pid: {type: Object, required: true},
});
</script>

<style scoped>
.news-item {
  border: 1px solid #ccc;
  margin: 10px; /* Adjust spacing between items */
  padding: 15px;
  border-radius: 5px;
}
.card-image {
  width: 100%;
  height: 100px;
  object-fit: cover;
}
/* Other styles for card content */
</style>
