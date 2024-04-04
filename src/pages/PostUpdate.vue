<template>
  <q-page>
    <div v-if="post">
      <q-input v-model="editedTitle" label="제목" />
      <q-editor v-model="editedContent" label="내용" />
      <q-file v-model="editedImages" multiple label="이미지 업로드 (선택사항)" />

      <q-btn label="Update Post" color="primary" @click="updatePost" />
    </div>
    <div v-else>
      <q-circular-progress
      indeterminate
      rounded
      size="50px"
      color="lime"
      class="q-ma-md"
    />
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import {apiClient} from "src/api/apiClient";

const post = ref(null);
const editedTitle = ref("");
const editedContent = ref("");
const editedImages = ref([]);
const route = useRoute();
const router = useRouter();
const postId = route.params.postId;
onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost/boards/${postId}`);
    const postData = response.data;

    // 기존 게시물 정보를 편집 폼에 설정
    editedTitle.value = postData.title;
    editedContent.value = postData.content;

    // 이미지가 있는 경우 이미지 정보도 설정
    if (postData.image && postData.image.length > 0) {
      editedImages.value = postData.image;
    }
    post.value = postData;
  } catch (error) {
    console.error("Error fetching post:", error);
  }
});

async function updatePost() {
  try {
    const formData = new FormData();
    formData.append("title", editedTitle.value);
    formData.append("content", editedContent.value);

    // 이미지가 새로 추가된 경우에만 FormData에 추가
    if (editedImages.value.length > 0) {
      editedImages.value.forEach((image) => {
        formData.append("images", image);
      });
    }
    await apiClient.put(`/boards/${postId}`, formData);

    // 게시물 수정 후 상세 페이지로 이동
    await router.push(`/posts/${postId}`);
  } catch (error) {
    console.error("Error updating post:", error);
  }
}
</script>
