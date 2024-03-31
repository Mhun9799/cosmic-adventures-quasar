<template>
  <div class="q-px-lg q-py-md">
    <q-timeline color="secondary">
      <q-timeline-entry
        v-for="newsItem in newsItems"
        :key="newsItem.id"
        :title="newsItem.title"
      >
        {{ newsItem.body }}
        <br>
        {{ newsItem.detail}}
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script setup>
defineProps({
  newsItems: { type: Array, required: true }
});
</script>
