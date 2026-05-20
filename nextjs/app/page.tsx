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
  let article: Article | null = null;

  try {
    article = await getArticle();
  } catch (error) {
    console.error("Error fetching article:", error);
  }

  if (!article) {
    return (
      <div className="max-w-240 mx-auto px-5 mt-10 text-center">
        <p className="text-red-500 font-bold">Failed to load article data.</p>
        <p className="text-gray-500 mt-2">Please ensure the backend server is running on port 6969.</p>
      </div>
    );
  }

  return (
    <main className="bg-white text-black">
      <div
        className="relative h-125 bg-cover bg-center"
        style={{ backgroundImage: `url('${article.hero}')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="absolute bottom-0 left-0 p-5 text-white text-4xl font-bold">
          {article.title}
        </h1>
      </div>

      <ul className="max-w-240 px-5 mx-auto my-25 list-none p-0 space-y-25">
        {article.body.map((block, index) => {
          if (block.type === "paragraph") {
            return (
              <li key={index}>
                <p className="leading-relaxed">
                  {block.content}
                </p>
              </li>
            );
          } else if (block.type === "image") {
            return (
              <li key={index}>
                <img
                  src={block.content}
                  alt="Image"
                  className="block max-w-full h-auto"
                />
              </li>
            );
          }
          return null;
        })}
      </ul>
    </main>
  );
}
