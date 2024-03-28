<template>
  <q-item clickable :to="`/posts/${post.id}`" class="post-item">
    <q-item-section avatar>
      <q-avatar size="md">
        <img :src="post.authorImage || defaultAvatar" />
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <div class="text-h6">{{ post.title }}</div>
<!--      <div class="text-caption text-grey-6">{{ post.content }}</div>-->

      <div class="row text-caption">
<!--        <div class="col">-->
<!--          <q-icon name="visibility" size="sm" /> {{ post.readCount }}-->
<!--        </div>-->
        <div class="col">
          <q-icon name="chat" size="sm" /> {{ post.commentCount }}
        </div>

        <div class="col">
          <q-icon name="favorite" size="sm" /> {{ post.likeCount }}
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const defaultAvatar = 'https://cdn.quasar.dev/img/boy-avatar.png'; // Or any placeholder image
</script>


<style scoped>
.post-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
