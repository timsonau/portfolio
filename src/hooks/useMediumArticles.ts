import { useEffect, useState } from "react";

export interface MediumArticle {
  title: string;
  link: string;
  thumbnail: string;
  pubDate: string;
  excerpt: string;
  categories: string[];
}

interface RssItem {
  title: string;
  link: string;
  thumbnail: string;
  pubDate: string;
  description: string;
  categories: string[];
}

interface RssResponse {
  status: string;
  items: RssItem[];
}

const MEDIUM_RSS_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@heeyoon.timson";

/**
 * Strips HTML tags from a string and returns clean text,
 * then truncates to a given max length.
 */
function stripHtml(html: string, maxLength = 160): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const text = doc.body.textContent || "";
  return text.length > maxLength ? text.slice(0, maxLength).trim() + "..." : text;
}

/**
 * Extracts the first <img> src from an HTML string
 * to use as a thumbnail fallback.
 */
function extractFirstImage(html: string): string {
  const match = html.match(/<img[^>]+src="([^"]+)"/);
  return match ? match[1] : "";
}

export default function useMediumArticles() {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchArticles() {
      try {
        const response = await fetch(MEDIUM_RSS_URL);
        if (!response.ok) throw new Error("Failed to fetch articles");

        const data: RssResponse = await response.json();

        if (data.status !== "ok") throw new Error("RSS feed unavailable");

        if (!cancelled) {
          const parsed: MediumArticle[] = data.items.map((item) => ({
            title: item.title,
            link: item.link,
            thumbnail: item.thumbnail || extractFirstImage(item.description),
            pubDate: item.pubDate,
            excerpt: stripHtml(item.description),
            categories: item.categories || [],
          }));
          setArticles(parsed);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "An error occurred");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchArticles();

    return () => {
      cancelled = true;
    };
  }, []);

  return { articles, loading, error };
}
