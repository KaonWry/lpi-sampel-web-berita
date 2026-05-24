interface ArticleBlock {
  type: "paragraph" | "image";
  content: string;
}

interface Article {
  title: string;
  hero: string;
  body: ArticleBlock[];
}

interface Recommendation {
  title: string;
  thumbnail: string;
}

async function getArticle(): Promise<Article> {
  const res = await fetch("http://localhost:6969/article", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  return res.json();
}

async function getRecommendations(): Promise<Recommendation[]> {
  const res = await fetch("http://localhost:6969/recommendation", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch recommendations");
  }

  return res.json();
}

export default async function Home() {
  let article: Article;
  let recommendations: Recommendation[] = [];

  try {
    [article, recommendations] = await Promise.all([
      getArticle(),
      getRecommendations(),
    ]);
  } catch (error) {
    console.error("Error fetching data:", error);
    if (!article!) {
      return (
        <main className="bg-white text-black p-5">
          Failed to load data.
        </main>
      );
    }
  }

  return (
    <main className="bg-white text-black min-h-screen">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 py-4">
        <div className="max-w-240 mx-auto px-5 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-red-700 uppercase">
            NewsPortal
          </a>
          <ul className="flex gap-5 list-none m-0 p-0">
            <li><a href="#" className="text-sm font-bold text-gray-800 uppercase hover:text-red-700">Home</a></li>
            <li><a href="#" className="text-sm font-bold text-gray-800 uppercase hover:text-red-700">Politics</a></li>
            <li><a href="#" className="text-sm font-bold text-gray-800 uppercase hover:text-red-700">Tech</a></li>
            <li><a href="#" className="text-sm font-bold text-gray-800 uppercase hover:text-red-700">Sports</a></li>
            <li><a href="#" className="text-sm font-bold text-gray-800 uppercase hover:text-red-700">Lifestyle</a></li>
          </ul>
        </div>
      </nav>

      <div className="max-w-240 mt-10 mx-auto px-5 mb-25 flex gap-10">
        <div className="flex-4 min-w-0 ">
          <h1 className="text-black text-4xl -mt-5 font-bold py-5">
            {article.title}
          </h1>
          <img
            src={article.hero}
            alt={article.title}
            className="w-full block"
          />
          <ul className="list-none p-0 mt-10 flex flex-col gap-8">
            {article.body.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <li key={index}>
                    {block.content}
                  </li>
                );
              } else if (block.type === "image") {
                return (
                  <li key={index}>
                    <img
                      src={block.content}
                      alt="Image"
                      className="max-w-full block"
                    />
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
        <aside className="flex-1 min-w-50">
          <h2 className="text-lg font-bold border-b-2 border-red-700 pb-1 mt-0 mb-5 uppercase">
            Berita Terpopuler
          </h2>
          <ul className="list-none p-0 flex flex-col gap-6">
            {recommendations.map((item, index) => (
              <li key={index} className="pb-4 cursor-pointer">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-auto mb-2 block"
                />
                <a href="#" className="no-underline text-gray-800 font-medium text-base leading-tight">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}
