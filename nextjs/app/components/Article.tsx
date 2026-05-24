import { ArticleData } from "../types";

interface ArticleProps {
  article: ArticleData;
}

export default function Article({ article }: ArticleProps) {
  return (
    <div className="flex-4 min-w-0">
      <h1 className="text-black text-4xl -mt-5 font-bold py-5">
        {article.title}
      </h1>
      <img src={article.hero} alt={article.title} className="w-full block" />
      <ul className="list-none p-0 mt-10 flex flex-col gap-8">
        {article.body.map((block, index) => {
          if (block.type === "paragraph") {
            return <li key={index}>{block.content}</li>;
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
  );
}
