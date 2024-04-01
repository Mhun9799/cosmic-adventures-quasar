<template>
  <q-page>
    <PostList :posts="posts" />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { getAccessTokenFromCookie, getRefreshTokenFromCookie, refreshAccessToken } from 'src/Module/authModule';
import PostList from "components/PostList.vue";

const posts = ref([]);

onMounted(async () => {
  try {
    await fetchPosts();
  } catch (error) {
    console.error('Error fetching user boards:', error);
  }
});

async function fetchPosts() {
  const token = await getAccessTokenFromCookie();
  if (!token) {
    console.error('Access token not found in cookie.');
    return;
  }

  try {
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
    if (error.response && error.response.status === 401) {
      // 만료된 액세스 토큰으로 요청했을 때
      const refreshToken = await getRefreshTokenFromCookie();
      if (!refreshToken) {
        console.error('Refresh token not found in cookie.');
        return;
      }
      // 리프레시 토큰을 사용하여 새로운 액세스 토큰 발급 요청
      try {
        const newAccessToken = await refreshAccessToken(refreshToken);
        document.cookie = `Authorization=${newAccessToken}; path=/;`;
        // 새로운 액세스 토큰을 사용하여 포스트 정보 다시 가져오기
        await fetchPosts();
      } catch (error) {
        console.error('Error refreshing token:', error);
        // 리프레시 토큰을 사용하여 새로운 액세스 토큰 발급 실패 시 로그인 페이지로 이동 등의 처리
        this.$router.push('/login');
      }
    } else {
      console.error('Error fetching user boards:', error);
    }
  }
}
</script>
