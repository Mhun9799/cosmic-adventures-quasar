<template>
  <q-page>
    <div v-if="post" class="post-container">
      <div class="button-container">
<!--        <div class="button-profile"><img src="https://cdn.quasar.dev/img/boy-avatar.png" class="profile-img"></div>-->
        <q-btn label="Edit" @click="startEdit" color="primary"/>
        <q-btn label="Remove" @click="confirmRemoval" color="negative" class="remove-button"/>
      </div>
      <div class="post-content">
        <h2 class="post-title">{{ post.title }}</h2>
        <p class="post-body" v-html="post.content"></p>
        <div class="post-images" v-if="post.image && post.image.length > 0">
          <img v-for="(image, index) in post.image" :key="index" :src="image" :alt="'Image ' + (index + 1)" />
        </div>
        <div class="post-footer">

          <div><q-btn label="Like" @click="likeUp" color="pink" class="like-btn"/></div>
          <p class="post-createAt">24.03.28</p>
        </div>
      </div>
    </div>
    <div v-else class="loading-container">
      <q-circular-progress
        indeterminate
        rounded
        size="50px"
        color="lime"
        class="q-ma-md"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from 'axios';
import { apiClient } from "src/api/apiClient";

const post = ref(null);
const route = useRoute();
const router = useRouter();

onMounted(async () => {
  try {
    const postId = route.params.postId;
    const response = await axios.get(`http://localhost:8080/boards/${postId}`);
    post.value = response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
  }
});
onMounted(async () => {
  try {
    const postId = route.params.postId;
    const response = await axios.get(`http://localhost:8080/boards/comments/${postId}`);
    post.value = response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
  }
});

function startEdit() {
  router.push(`/posts/${route.params.postId}/edit`);
}

function confirmRemoval() {
  if (window.confirm("게시글을 삭제하시겠습니까?")) {
    removePost();
  }
}

async function removePost() {
  try {
    await apiClient.delete(`http://localhost:8080/boards/${route.params.postId}`);
    await router.push('/community');
  } catch (error) {
    console.error("Error removing post:", error);
  }
}

async function likeUp() {
  try {
    await apiClient.post(`http://localhost:8080/boards/${route.params.postId}`)
  } catch (error) {
    console.error("Error LikeUp Post", error)
  }
}
</script>

<style>
.post-container {
  padding: 20px;
  border-radius: 10px;
  background-color: #f0f0f0;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  width: 79%;
  margin: 10px 0 10px 94px;
}

.button-fo


.edit-button, .remove-button {
  margin-left: 10px;
  width: 60px;
}

.post-content {
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  margin: auto;
  width: 80%;

}

.post-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
.post-createAt {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
.post-body {
  font-size: 16px;
  line-height: 1.6;
  padding: 0 10px; /* 좌우 여백을 10px로 설정 */
}

.post-images img {
  max-width: 100%;
  border-radius: 5px;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
</style>
