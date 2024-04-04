<template>
  <q-page>
    <div v-if="post" class="post-container">
      <div class="board">
        <h2>{{ post.name }}</h2>
        <q-toolbar>
          <q-space />
          <q-btn label="Remove" @click="confirmRemoval" color="negative" class="remove-button"/>
        </q-toolbar>
        <div class="post-content">
          <h2 class="post-title">{{ post.title }}</h2>
          <p class="post-body" v-html="post.content"></p>
          <div class="post-images" v-if="post.image && post.image.length > 0">
            <img v-for="(image, index) in post.image" :key="index" :src="image" :alt="'Image ' + (index + 1)" />
          </div>
          <div class="post-footer">
            <div><q-btn label="Like" @click="likeUp" color="pink" class="like-btn"/></div>
            <p class="post-createAt">{{ post.creatAt }}</p>
          </div>
          <p>{{ post.likeCount }}</p>
        </div>
        <q-input rounded standout v-model="newCommentText" label="댓글 추가" />
        <q-btn label="댓글 달기" @click="addComment" />
        <div v-for="comment in comments" :key="comment.id">
          <CommentItem :comment="comment" />
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
import CommentItem from "components/CommentItem.vue";

const comments = ref([]);
const newCommentText = ref('');
const post = ref(null);
const route = useRoute();
const router = useRouter();

//댓글 추가
async function addComment() {
  const commentData = {
    content: newCommentText.value
  };
  try {
    const  postId = route.params.postId
    const response = await apiClient.post(`http://localhost:8080/boards/comments?boardId=${postId}`, commentData, {})
    const newComment = response.data;
    comments.value.push(newComment);
    newCommentText.value = ''; // 입력 필드 초기화
    await fetchComments();
  } catch (error) {
    console.log('Error fetching type', error)
  }
}
async function fetchComments() {
  const postId = route.params.postId
  try {
    const responseComments = await axios.get(`http://localhost:8080/boards/comments?boardId=${postId}`);
    comments.value = responseComments.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
}
onMounted(async () => {
  const postId = route.params.postId;

  try {
    // 게시글 불러오기
    const response = await axios.get(`http://localhost:8080/boards/${postId}`);
    post.value = response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
  }
  //댓글 불러오기
  await fetchComments();
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
.q-page {
  background-color: #000; /* 배경색을 검은색으로 설정 */
  color: #fff; /* 전체 텍스트 색상을 흰색으로 설정 */
}
.board {
  border-radius: 10px;
  margin: 0 100px 0 100px;
}
.post-container {
  margin: 50px auto; /* 상하 여백을 50px로, 좌우는 자동으로 설정하여 중앙 정렬 */
  width: 80%; /* 너비를 80%로 설정 */
  padding: 20px;
  border-radius: 10px;
  background-color: #333; /* 게시글 배경색을 어두운 회색으로 설정 */
}

.edit-button, .remove-button {
  margin-left: 10px;
  width: 60px;
}

.post-content {
  padding: 20px;
  background-color: #222; /* 내용 배경색을 더 어두운 회색으로 설정 */
  border-radius: 10px;
  border: 1px solid #444; /* 경계선 추가 */
}
.post-footer {
  display: flex;
  justify-content: space-between;
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
.q-input {
  color: #fff; /* 입력 텍스트 색상을 흰색으로 설정 */
  border: 1px solid #444; /* 경계선 추가 */
}
.q-input::placeholder {
  color: #aaa; /* 플레이스홀더 텍스트 색상을 밝은 회색으로 설정 */
}
.post-images img {
  max-width: 100%;
  border-radius: 5px;
}

.loading-container {
  background-color: #000; /* 배경색을 검은색으로 설정 */
}
</style>
