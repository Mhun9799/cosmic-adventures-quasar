<template>
  <q-page>
    <div class="post-create">
      <q-form @submit.prevent="submitPost">
        <div><q-input v-model="postTitle" label="Title" /></div>
        <div><q-editor v-model="postContent" /></div>
        <div><q-file v-model="postImages" multiple label="Upload Images (Optional)" /></div>
        <div>
          <q-btn type="submit" label="Create Post" />
          <q-btn label="취소" @click="cancelPost" />
        </div>
      </q-form>
    </div>

  </q-page>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {apiClient} from "src/api/apiClient";
import { defineEmits } from 'vue';

const emit = defineEmits(['cancel']);
const postTitle = ref('');
const postContent = ref('');
const postImages = ref([]);
const router = useRouter();

function cancelPost() {
  emit('cancel');
}
async function submitPost() {
  const formData = new FormData();
  formData.append('title', postTitle.value);
  formData.append('content', postContent.value);
  postImages.value.forEach(file => formData.append('images', file));

  try {
    // 응답헤더에 토큰값도 같이 보내기
    await apiClient.post('/boards', formData, {
    });
    window.location.reload();
  } catch (error) {
    console.error('Error fetching post:', error);
  }
}
</script>
<style>
.post-title {
}
.post-create {
  background-color: #f0f0f0;
}
</style>
