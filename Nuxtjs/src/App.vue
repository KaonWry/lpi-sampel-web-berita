<template>
  <div class="container">
    <Header />
    
    <main class="content-wrapper">
      <MainArticle />
      <Sidebar />
    </main>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import MainArticle from './components/MainArticle.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<style>
/* Reset & Style Global */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: #222;
  background-color: #fff;
}

.container {
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-wrapper {
  display: flex;
  gap: 50px; 
  margin-top: 35px;
  margin-bottom: 50px;
}

/* Responsif Layar HP */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }
}
</style>