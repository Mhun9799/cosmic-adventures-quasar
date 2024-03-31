<template>
  <q-page padding>
    <q-list bordered separator>
      <NewsItem v-for="pid in filteredPids" :key="pid.id" :pid="pid" />

    </q-list>

    <div class="row justify-center">
      <q-pagination v-model="page" :max="totalPages" />
    </div>

      <div class="search-bar">
        <q-select v-model="selectedField" :options="['title', 'category']" label="Search By" />
        <q-input v-model="searchQuery" placeholder="Enter your search term" />
        <q-btn label="Search" @click="searchNews" />
      </div>
  </q-page>
</template>

<script setup>
import NewsItem from "/src/components/NewsItem.vue";
import axios from 'axios';
import { ref, onMounted, computed } from "vue";

const pids = ref([]);
const page = ref(1);
const totalPages = ref(10);
const searchQuery = ref('');
const selectedField = ref('title'); // Initial selection

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8080/pids`); // Adjust path as needed
    pids.value = response.data.content;
  } catch (error) {
    // Handle errors
    console.error(error);
  }
});
const searchNews = async () => {
  if (selectedField.value === 'title') {
    const response = await axios.get(`/search?query=${searchQuery.value}`);
    pids.value = response.data;
  } else if (selectedField.value === 'category') {
    const response = await axios.get(`/category/${searchQuery.value}`);
    pids.value = response.data;
  }
}

const filteredPids = computed(() => {
  if (selectedField.value === 'title') {
    return pids.value.filter((pid) =>
      pid.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  } else if (selectedField.value === 'content') {
    return pids.value.filter((pid) =>
      pid.category.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  } else {
    return pids.value;
  }
});


</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center; /* Centers the search bar horizontally */
}
/* Add additional styles as needed */
</style>
