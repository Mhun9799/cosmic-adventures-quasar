<template>
  <q-page>
    <PostList :posts="posts" />
    <q-fab icon="add" direction="up" @click="navigateToCreatePost" />
  </q-page>
</template>

<script setup>
import { useQuasar} from 'quasar';
import PostList from '../components/PostList.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";

const $q = useQuasar();
const router = useRouter(); // Get the router instance

const posts = ref([
  { id: '1', title: 'Sample Post 1', content: '...', readCount: 10, commentCount: 2, likeCount: 5, authorImage: 'https://i.pravatar.cc/150?u=user1' },
  { id: '2', title: 'Another Great Post', content: '...', readCount: 5, commentCount: 0, likeCount: 2, authorImage: 'https://i.pravatar.cc/150?u=user2' }
]);

onMounted(async () => {
  try {
    const response = await axios.get('http://your-backend-api/boards');
    posts.value = response.data;
  } catch (error) {
    // Handle API errors (show an error message maybe)
  }
});

function navigateToCreatePost() {
  try {
    router.push('/posts/create'); // Use the router instance
  } catch (error) {
    console.error("Navigation Error:", error);
    // Maybe display an error message to the user
  }
}
</script>
