import { RecommendationData } from "../types";

interface RecommendationProps {
  recommendations: RecommendationData[];
}

export default function Recommendation({ recommendations }: RecommendationProps) {
  return (
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
            <a
              href="#"
              className="no-underline text-gray-800 font-medium text-base leading-tight"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
