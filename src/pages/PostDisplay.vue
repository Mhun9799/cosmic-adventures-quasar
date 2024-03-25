<template>
  <q-page>
    <div v-if="post">
      <div class="post-title">{{ post.title }}</div>
      <div class="post-content" v-html="post.content"></div>

      <q-carousel v-model="currentImageIndex" swipeable>
        <q-carousel-slide v-for="(image, index) in post.images" :key="index">
          <img :src="image" />
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div v-else>Loading Post...</div>
  </q-page>
</template>

<script setup>
import {ref, onMounted} from "vue";
import {useRoute} from "vue-router";

const post = ref(null);
const currentImageIndex = ref(0);
const route = useRoute();

onMounted(() => {
  // Remove API call for now, and use dummy data
  post.value = {
    id: 1,
    title: "Sample Post Title",
    content: "This is some sample post content",
    images: [
      "https://i.pravatar.cc/150?u=user1",
      "https://i.pravatar.cc/150?u=user2"
    ]
  };
});
</script>
