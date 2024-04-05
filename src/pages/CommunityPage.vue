<template>
  <q-page class="post-board">
    <div class="left-board">
      <div class="left-first">
        <q-card-section class="first-cards">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by Observer</div>
        </q-card-section>
      </div>
      <div class="left-second">
        <p><q-btn outline rounded color="primary" label="Home" /></p>
        <p><q-btn outline rounded color="primary" label="Popular board" /></p>
        <p><q-btn outline rounded color="primary" label="CreatedAt board" /></p>
      </div>
      <div>
        --------
      </div>
    </div>
    <div class="post-list-board">
      <div class="post-list-first">
        <h1 class="post-h1">자유 글쓰기 </h1>
        <div class="post-img">
<!--          <img width="800" height="500" src="https://i.namu.wiki/i/ELEti36-zZZfv1LmXkTjghalmEnwFWeFM5NTVizV4SVp230pkjHgXWefSNtY9xpydSzELZrj4Z1qSmgyS6Irfw.webp" alt="...">-->
        </div>
      </div>

      <!-- 글쓰기 -->
      <div v-if="creatingPost">
        <PostCreate @cancel="backToListFromCreate" />
      </div>

      <div v-else>
        <q-fab icon="add" direction="up" @click="navigateToCreatePost" />
        <PostList :posts="posts" @selectPost="selectPost" />
      </div>

    </div>
    <div class="right-board"><h2 class="right-post"> 인기 순위</h2></div>
  </q-page>
</template>

<script setup>
import {useQuasar} from 'quasar';
import PostList from '../components/PostList.vue';
import {ref, onMounted} from 'vue';
import axios from 'axios';
import { useRouter } from "vue-router";
import PostCreate from "pages/PostCreate.vue";

const selectedPostId = ref(null);
const creatingPost = ref(false);
const $q = useQuasar();
const router = useRouter(); // Get the router instance
const posts = ref([]);


onMounted(async () => {
  try {
    const response = await axios.get('http://dearforbearance.com/boards/creates');
    posts.value = response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
});
function selectPost(postId) {
  selectedPostId.value = postId;
}
// 글쓰기 모드로 전환
function navigateToCreatePost() {
  creatingPost.value = true;
  selectedPostId.value = null;
}
// 글쓰기 취소 또는 완료 후 목록으로 돌아가기
function backToListFromCreate() {
  creatingPost.value = false;
}
</script>
<style>
.first-cards {
  margin-bottom: 200px;
}
.left-second {
  min-width: 200px;
  margin-bottom: 500px;
}
.left-second p .q-btn {
  min-width: 200px;
}
.post-img {
  width: 50%;
}
.right-post {
  background-color: #1D1D1D;
}
.post-list-first {

}
.post-h1 {
  color: darkgray;
}
.left-first {
  width: 250px;
}
.right-board {

  padding: 50px;
}
.left-board {

  padding: 50px;
}
.post-list-background {
  background: transparent;
}
.post-list-board {
  width: 1000px;
}
.post-board {
  display: flex;
  justify-content: center;
  background-color: #0D0D0D;
  color: grey;
}
</style>
