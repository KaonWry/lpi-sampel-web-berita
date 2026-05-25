<template>
  <aside class="sidebar">
    <h3 class="sidebar-title">BERITA TERPOPULER</h3>
    <div class="popular-list">
      <div v-for="news in popularNews" :key="news.id" class="popular-item">
        <img :src="news.imgUrl" :alt="news.title" class="popular-image" />
        <a :href="`#news-${news.id}`" class="popular-item-title">
          {{ news.title }}
        </a>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';

const popularNews = ref([
  {
    id: 1,
    title: "Indonesia Berminat Mengakuisisi Pesawat Tempur Generasi ke-5",
    imgUrl: "https://www.airspace-review.com/wp-content/uploads/2025/12/Su-57.jpg"
  },
  {
    id: 2,
    title: "Manfaat GYM Untuk Kesehatan Mental",
    imgUrl: "https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Probolinggo Darurat Begal, Warga Dihimbau Waspada!",
    imgUrl: "https://www.wartabromo.com/wp-content/uploads/2024/10/IMG-20241031-WA0002-e1730427041516.jpg"
  }
]);
</script>

<style scoped>
.sidebar {
  flex: 3; 
}

.sidebar-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-bottom: 2px solid #c92a2a; 
  display: inline-block; 
}

.popular-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.popular-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.popular-image {
  width: 100%;
  aspect-ratio: 16 / 9; 
  object-fit: cover;
}

.popular-item-title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  line-height: 1.4;
}

.popular-item-title:hover {
  text-decoration: underline;
}
</style>