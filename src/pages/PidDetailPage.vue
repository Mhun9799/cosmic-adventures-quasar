<template>
  <div v-if="pid" class="detail-container">
    <div class="detail-section">
      <h1>{{ pid.title }}</h1>

      <h3>Category: {{ pid.content }}</h3>
<!--      <p>Category: {{ pid.category }}</p>-->
    </div>

    <div class="related-section">
      <h2>Related News</h2>
      <NewsTimeline :newsItems="pid.newsItems" />
    </div>
  </div>
</template>

<script setup>
import NewsTimeline from "src/components/NewsTimeLine.vue";
import {defineProps, onMounted, ref} from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from 'axios';


defineProps({
  pidId: { type: String, required: true }
});


const pid = ref(null);
const route = useRoute();
const router = useRouter();

onMounted(async () => {
  try {

    const pidId = route.params.pidId;
    const response = await axios.get(`http://localhost:8080/pids/${pidId}`);
    pid.value = response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
  }
});
</script>
<style scoped>
.detail-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  gap: 20px;
}
</style>
