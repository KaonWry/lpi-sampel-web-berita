import React from 'react';
import './App.css';

// Komponen Header untuk Navigasi
const Header = () => {
  return (
    <header className="header">
      <div className="logo">NEWSPORTAL</div>
      <nav className="nav-links">
        <a href="#home">HOME</a>
        <a href="#politics">POLITICS</a>
        <a href="#tech">TECH</a>
        <a href="#sports">SPORTS</a>
        <a href="#lifestyle">LIFESTYLE</a>
      </nav>
    </header>
  );
};

// Komponen Artikel Utama (Sisi Kiri)
const MainArticle = () => {
  return (
    <div className="main-article">
      <h1 className="main-title">
        Kabar Kemenhan Beli Sukhoi Su-35, Begini Jawaban Menkeu Purbaya
      </h1>
      {/* Menggunakan gambar placeholder, ganti src dengan URL gambar asli Anda */}
      <img 
        src="https://static.dw.com/image/18690500_605.jpg" 
        alt="Pesawat Tempur" 
        className="main-image" 
      />
    </div>
  );
};

// Komponen Sidebar (Sisi Kanan)
const Sidebar = () => {
  // Data dummy untuk berita populer
  const popularNews = [
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
      title: "Probolinggo Darurat Begal",
      imgUrl: "https://www.wartabromo.com/wp-content/uploads/2024/10/IMG-20241031-WA0002-e1730427041516.jpg"
    }
  ];

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">BERITA TERPOPULER</h3>
      <div className="popular-list">
        {popularNews.map((news) => (
          <div key={news.id} className="popular-item">
            <img src={news.imgUrl} alt={news.title} className="popular-image" />
            <a href={`#news-${news.id}`} className="popular-item-title">
              {news.title}
            </a>
          </div>
        ))}
      </div>
    </aside>
  );
};

// Komponen Utama
function App() {
  return (
    <div className="container">
      <Header />
      <main className="content-wrapper">
        <MainArticle />
        <Sidebar />
      </main>
    </div>
  );
}

export default App;