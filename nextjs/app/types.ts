export interface ArticleBlock {
  type: "paragraph" | "image";
  content: string;
}

export interface ArticleData {
  title: string;
  hero: string;
  body: ArticleBlock[];
}

export interface RecommendationData {
  title: string;
  thumbnail: string;
}
