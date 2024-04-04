<template>
  <div class="post-item">
    <p>{{ post.name }}</p>
    <q-item clickable :to="`/posts/${post.id}`" class="post-item-in">
      <q-item-section avatar>
        <q-avatar size="md">
          <!-- Display the profile picture of the post author -->
          <img :src="post.authorImage || post.profilePicUrl || defaultAvatar" alt=""/>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <div class="text-h6">
          {{ post.title }}
        </div>
        <div class="post-board-in">

          <div>
            <q-icon class="post-board-in-icon" name="chat" size="sm" /> {{ post.commentCount }}
            <q-icon class="post-board-in-icon" name="favorite" size="sm" /> {{ post.likeCount }}
          </div>
          <div>
          </div>
          <div>
            {{ post.creatAt}}
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
.post-item-in {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
.post-board-in {
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
}
.post-board-in-icon {
  margin: 0 10px;
}
</style>
