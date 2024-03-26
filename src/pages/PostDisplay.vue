<template>
  <q-page>
    <div v-if="post">
      <div class="post-title">{{ post.title }}</div>
      <div class="post-content" v-html="post.content"></div>
      <div v-if="post.image && post.image.length > 0">
        <img v-for="(image, index) in post.image" :key="index" :src="image" :alt="'Image ' + (index + 1)" />
      </div>
      <q-carousel v-model="currentImageIndex" swipeable>
        <q-carousel-slide v-for="(image, index) in post.images" :key="index">
          <img :src="image" />
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div v-else>Loading Post...</div>
  </q-page>
</template>

<script setup>
import {ref, onMounted} from "vue";
import {useRoute} from "vue-router";
import axios from 'axios';

const post = ref(null);
const currentImageIndex = ref(0);
const route = useRoute();

onMounted(async () => {
  try {
    const postId = route.params.postId; // 라우트 파라미터에서 게시글 ID를 가져옴
    const response = await axios.get(`http://localhost:8080/boards/${postId}`); // 게시글 단건 조회 API 호출
    post.value = response.data; // API 응답을 게시글 변수에 저장
  } catch (error) {
    console.error('Error fetching post:', error);
    // 에러 처리
  }
});
</script>
