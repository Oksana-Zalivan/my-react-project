import axios from "axios";
import type { Article, ArticlesHttpResponse } from "../types/article";

const API_KEY = import.meta.env.VITE_API_KEY;

export async function fetchArticles(topic: string): Promise<Article[]> {
    const response = await axios.get<ArticlesHttpResponse>(
        "https://hn.algolia.com/api/v1/search",
        {
        params: {
            query: topic,
            apiKey: API_KEY,
        },
        }
    );

    return response.data.hits;
}
