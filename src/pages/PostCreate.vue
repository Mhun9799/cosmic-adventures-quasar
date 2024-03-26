<template>
  <q-page>
    <q-form @submit.prevent="submitPost">
      <q-input v-model="postTitle" label="Title" />
      <q-editor v-model="postContent" />
      <q-file v-model="postImages" multiple label="Upload Images (Optional)" />
      <q-btn type="submit" label="Create Post" />
    </q-form>
  </q-page>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import {apiClient} from "src/api/apiClient";

const postTitle = ref('');
const postContent = ref('');
const postImages = ref([]);
const router = useRouter();

async function submitPost() {
  const formData = new FormData();
  formData.append('title', postTitle.value);
  formData.append('content', postContent.value);
  postImages.value.forEach(file => formData.append('images', file));

  try {
    // const token = document.cookie.split('; ').find(row => row.startsWith('Authorization=')).split('=')[1];
    // 쿠키에서 토큰 가져오기

    await apiClient.post('/boards', formData, {
    });
    await router.push('/community');
  } catch (error) {
    console.error('Error fetching post:', error);
  }
}
</script>
