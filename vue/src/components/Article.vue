<template>
  <div class="article">
    <h1 id="title-text">{{ article.title || 'Loading Title' }}</h1>
    <img id="hero-image" :src="article.hero" :alt="article.title" v-if="article.hero" />
    <ul class="body-content" id="body-content">
      <li v-for="(block, index) in article.body" :key="index">
        <template v-if="block.type === 'paragraph'">
          {{ block.content }}
        </template>
        <template v-else-if="block.type === 'image'">
          <img :src="block.content" alt="Image" style="max-width: 100%;" />
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface BodyBlock {
  type: 'paragraph' | 'image';
  content: string;
}

interface ArticleData {
  title: string;
  hero: string;
  body: BodyBlock[];
}

const article = ref<Partial<ArticleData>>({});

const fetchArticle = async () => {
  try {
    const response = await fetch('http://localhost:6969/article');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    article.value = data;
  } catch (error) {
    console.error('Error fetching article:', error);
  }
};

onMounted(() => {
  fetchArticle();
});
</script>
