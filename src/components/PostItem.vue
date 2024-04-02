<template>
  <div class="post-item">
    <q-item clickable :to="`/posts/${post.id}`" class="post-item">
      <q-item-section avatar>
        <q-avatar size="md">
          <!-- Display the profile picture of the post author -->
          <img :src="post.authorImage || post.profilePicUrl || defaultAvatar" alt=""/>

        </q-avatar>
      </q-item-section>

      <q-item-section>
        <div class="text-h6">{{ post.title }}</div>
        <div class="row text-caption">
          <div class="col">
            <q-icon name="chat" size="sm" /> {{ post.commentCount }}
          </div>
          <div class="col">
            <q-icon name="favorite" size="sm" /> {{ post.likeCount }}
          </div>
        </div>
      </q-item-section>
    </q-item>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const defaultAvatar = 'https://cdn.quasar.dev/img/boy-avatar.png'; // Or any placeholder image

defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.post-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
