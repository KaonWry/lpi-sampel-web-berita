interface ArticleBlock {
  type: "paragraph" | "image";
  content: string;
}

interface Article {
  title: string;
  hero: string;
  body: ArticleBlock[];
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

export default async function Home() {
  let article: Article

  try {
    article = await getArticle();
  } catch (error) {
    console.error("Error fetching article:", error);
    return (
      <main className="bg-white text-black p-5">
        Failed to load data.
      </main>
    );
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

      <div className="max-w-240 mx-auto px-5 mb-25">
        <h1 className="text-black text-4xl font-bold py-5">
          {article.title}
        </h1>
        <img
          src={article.hero}
          alt={article.title}
          className="max-w-240 mx-auto block"
        />
        <ul className="list-none p-0 mt-20 flex flex-col gap-20">
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
    </main>
  );
}
