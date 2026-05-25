<template>
  <div class="recommendation">
    <h2>Berita Terpopuler</h2>
    <ul id="recommendation-list">
      <li v-for="item in recommendations" :key="item.title">
        <img :src="item.thumbnail" :alt="item.title" style="width: 100%; height: auto; margin-bottom: 5px;" />
        <a href="#">{{ item.title }}</a>
      </li>
      <li v-if="recommendations.length === 0">Loading recommendations...</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface RecommendationItem {
  title: string;
  thumbnail: string;
}

const recommendations = ref<RecommendationItem[]>([]);

const fetchRecommendations = async () => {
  try {
    const response = await fetch('http://localhost:6969/recommendation');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    recommendations.value = data;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
  }
};

onMounted(() => {
  fetchRecommendations();
});
</script>
