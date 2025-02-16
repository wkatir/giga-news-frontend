import { Article } from "@/interfaces/Article";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const API_URL = "https://newsapi.org/v2";

export async function getTechNewsInSpanish(): Promise<Article[]> {
  try {
    const response = await fetch(
      `${API_URL}/everything?q=tecnología&language=es&apiKey=${API_KEY}`
    );
    const data = await response.json();

    if (!data.articles) {
      return [];
    }

    return data.articles.filter((article: Article) => article.urlToImage);
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}
