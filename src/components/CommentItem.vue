<template>
  <p> {{ comment.name }} </p>
  <div class="comment-model">
    <div class="comment-item">{{ comment.content }}</div>
    <p> {{ comment.likeCount }} </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  comment: {
    type: Object,
    required: true,
  },
});
</script>
<style>
.comment-model {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
</style>
