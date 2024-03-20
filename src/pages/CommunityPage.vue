<template>
  <q-page>
    <PostList :posts="posts" />
  </q-page>
</template>

<script setup>
import PostList from 'src/components/PostList.vue';
import { ref } from 'vue';

const posts = ref([
  { id: '1', title: 'Sample Post 1', content: '...', readCount: 10, commentCount: 2, likeCount: 5, authorImage: 'https://i.pravatar.cc/150?u=user1' },
  // ... (Similar updates to other post data)
]);
</script>
