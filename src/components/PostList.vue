<template>
  <div class="container">
    <div class="sidebar">
      <!-- Sidebar content goes here -->
    </div>
    <div class="content">
      <div class="post-list">
        <PostItem v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
    <div class="right-sidebar">
      <!-- Additional content goes here -->
    </div>
  </div>
</template>

<script setup>
import PostItem from './PostItem.vue';

defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
/* Container styles */
.container {
  display: flex;
  background-color: black;
}

/* Sidebar styles */
.sidebar {
  flex: 1;
  background-color: #f0f0f0;
  padding: 20px;
}

/* Content styles */
.content {
  flex: 3;
  padding: 20px;
}

/* Right sidebar styles */
.right-sidebar {
  flex: 1;
  background-color: #f0f0f0;
  padding: 20px;
}

/* Post list styles */
.post-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Post item styles */
.post-item {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.post-item-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.post-item-content {
  margin-top: 10px;
}

.post-item-image {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}
</style>
