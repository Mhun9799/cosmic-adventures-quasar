<template>
  <q-page>
    <PostList :posts="posts" />
    <q-fab icon="add" direction="up" @click="navigateToCreatePost" />
  </q-page>
</template>

<script setup>
import {useQuasar} from 'quasar';
import PostList from '../components/PostList.vue';
import {ref, onMounted} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";

const $q = useQuasar();
const router = useRouter(); // Get the router instance

const posts = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/boards/creates');
    posts.value = response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
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
