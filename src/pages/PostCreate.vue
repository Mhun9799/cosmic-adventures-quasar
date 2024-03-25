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

const postTitle = ref('');
const postContent = ref('');
const postImages = ref([]);

async function submitPost() {
  const formData = new FormData();
  formData.append('title', postTitle.value);
  formData.append('content', postContent.value);

  postImages.value.forEach(file => formData.append('images', file));

  try {
    await axios.post('http://your-backend-api/boards', formData, {
      headers: {'Content-Type': 'multipart/form-data'}
    });
    // Success! Maybe redirect to post display
  } catch (error) {
    // Handle API errors
  }
}
</script>
