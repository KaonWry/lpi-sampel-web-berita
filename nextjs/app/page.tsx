import Article from "./components/Article";
import Navbar from "./components/Navbar";
import Recommendation from "./components/Recommendation";
import { ArticleData, RecommendationData } from "./types";

async function getArticle(): Promise<ArticleData> {
  const res = await fetch("http://localhost:6969/article", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  return res.json();
}

async function getRecommendations(): Promise<RecommendationData[]> {
  const res = await fetch("http://localhost:6969/recommendation", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch recommendations");
  }

  return res.json();
}

export default async function Home() {
  let article: ArticleData | null = null;
  let recommendations: RecommendationData[] = [];

  try {
    const [articleData, recommendationsData] = await Promise.all([
      getArticle(),
      getRecommendations(),
    ]);
    article = articleData;
    recommendations = recommendationsData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  if (!article) {
    return (
      <main className="bg-white text-black p-5">Failed to load data.</main>
    );
  }

  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />
      <div className="max-w-240 mt-10 mx-auto px-5 mb-25 flex gap-10">
        <Article article={article} />
        <Recommendation recommendations={recommendations} />
      </div>
    </main>
  );
}
