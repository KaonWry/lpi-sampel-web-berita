<template>
  <header class="header">
    <div class="logo">NEWSPORTAL</div>
    <nav class="nav-links">
      <a href="#home">HOME</a>
      <a href="#politics">POLITICS</a>
      <a href="#tech">TECH</a>
      <a href="#sports">SPORTS</a>
      <a href="#lifestyle">LIFESTYLE</a>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eaeaea;
}

.logo {
  color: #c92a2a; 
  font-size: 26px;
  font-weight: 800;
  letter-spacing: 0.5px;
}

.nav-links a {
  margin-left: 25px;
  text-decoration: none;
  color: #333;
  font-weight: 700;
  font-size: 14px;
}

.nav-links a:hover {
  color: #c92a2a;
}
</style>