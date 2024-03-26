<template>
  <q-page>
    <PostList :posts="posts" />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import PostList from "components/PostList.vue";

const posts = ref([]);

onMounted(async () => {
  try {
    const token = getAccessTokenFromCookie();
    if (!token) {
      console.error('Access token not found in cookie.');
      return;
    }

    const response = await axios.get('http://localhost:8080/api/v1/users/boards', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    posts.value = response.data.map(post => ({
      id: post.id,
      title: post.title,
      content: post.content,
      likeCount: post.likeCount,
      imageUrl: post.image[0] // 첫 번째 이미지만 사용하거나, 필요에 따라 다른 방식으로 처리
    }));
  } catch (error) {
    console.error('Error fetching user boards:', error);
  }
});

function getAccessTokenFromCookie() {
  const cookie = document.cookie;
  const token = cookie.split('; ').find(row => row.startsWith('Authorization='));
  return token ? token.split('=')[1] : null;
}
</script>
