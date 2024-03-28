<template>
  <div class="container">
    <div class="sidebar">
      내용
      <!-- Sidebar content goes here -->
    </div>
    <div class="content">
      <div class="post-list">
        <PostItem v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
    <div class="right-sidebar">
<!--      <div v-if="!isLoggedIn">-->
<!--        <p>로그인이 필요합니다.</p>-->
<!--        <q-btn label="로그인" color="primary" @click="goToLoginPage" />-->
<!--      </div>-->
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
<style>
.right-sidebar {
  flex: 1;
  background-color: #f0f0f0;
  padding: 20px;
}
.container {
  display: flex;
  background-color: black;
}

.sidebar {
  flex: 1;
  background-color: #f0f0f0;
  padding: 20px;
}

.content {
  flex: 3;
  padding: 20px;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 게시글 아이템 스타일 */
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
