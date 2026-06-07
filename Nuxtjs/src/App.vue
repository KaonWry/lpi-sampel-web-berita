<template>
  <div>
    <Navbar />
    <main>
      <div class="content">
        <Article />
        <Recommendation />
      </div>
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Article from './components/Article.vue';
import Recommendation from './components/Recommendation.vue';
</script>

<style>
/* Global styles are in style.css */
</style>
