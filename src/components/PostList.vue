<template>
  <div class="container">
      <div class="post-list">
        <PostItem v-for="post in posts" :key="post.id" :post="post" />
      </div>
    <div class="right-sidebar"></div>
  </div>
</template>

<script setup>
import PostItem from './PostItem.vue';
import { defineProps } from 'vue';

defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

</script>

