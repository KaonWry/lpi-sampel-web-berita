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
