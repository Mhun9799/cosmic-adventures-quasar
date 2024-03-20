<template>
  <q-page padding>
    <NewsList :items="newsItems" />

    <div class="row justify-center">
      <q-pagination v-model="page" :max="totalPages" />
    </div>
  </q-page>
</template>

<script setup>
import NewsList from "src/components/NewsList.vue";
import { ref, onMounted } from "vue";

const newsItems = ref([]);
const page = ref(1);
const totalPages = ref(10);

onMounted(async () => {
  // 뉴스 아이템을 로드하는 로직을 여기에 작성합니다.
  // 예를 들어, API 호출을 통해 데이터를 가져올 수 있습니다.
  // 이 예제에서는 임시 데이터를 사용하겠습니다.
  newsItems.value = [
    {
      id: "1",
      title: "뉴스 제목 1",
      summary: "뉴스 요약 1",
      content: "뉴스 내용 1",
      imageUrl: "https://cdn.quasar.dev/img/parallax2.jpg",
      category: "카테고리 1",
    },
    // 다른 뉴스 아이템 데이터...
  ];
});
</script>
