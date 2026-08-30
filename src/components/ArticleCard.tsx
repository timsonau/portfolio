import { ArrowUpRight } from "lucide-react";
import type { MediumArticle } from "../hooks/useMediumArticles";

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export default function ArticleCard({ title, link, thumbnail, pubDate, categories }: MediumArticle) {
  return (
    <article className="reveal-child group border-b border-border/70 py-8 first:pt-0 last:border-b-0 sm:flex sm:gap-6">
      {thumbnail && (
        <div className="mb-4 overflow-hidden rounded-sm sm:mb-0 sm:w-40 sm:shrink-0">
          <img
            src={thumbnail}
            alt=""
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="min-w-0">
        <time dateTime={pubDate} className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {formatDate(pubDate)}
        </time>
        <h3 className="editorial-title mt-1 text-xl font-semibold leading-snug text-foreground sm:text-2xl">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline gap-1.5 transition-colors duration-300 hover:text-highlight"
          >
            <span className="text-balance">{title}</span>
            <ArrowUpRight size={16} className="inline-block shrink-0 translate-y-0.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </h3>
        {categories.length > 0 && (
          <p className="mt-3 text-[11px] uppercase tracking-[0.12em] text-muted-foreground/70">
            {categories.slice(0, 4).join(" · ")}
          </p>
        )}
      </div>
    </article>
  );
}
