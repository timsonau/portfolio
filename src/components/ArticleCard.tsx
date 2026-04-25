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
    <article className="editorial-card reveal-child group relative grid p-4 transition-all duration-300 lg:grid-cols-8 lg:gap-4 lg:hover:-translate-y-0.5 lg:hover:!opacity-100 lg:group-hover/list:opacity-55">
      <div className="z-10 mb-3 lg:col-span-2 lg:mb-0 lg:mt-1">
        {thumbnail ? (
          <div className="overflow-hidden rounded-xl border border-border/80">
            <img src={thumbnail} alt="" className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </div>
        ) : (
          <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-border/80 bg-muted">
            <span className="text-[10px] text-muted-foreground">No image</span>
          </div>
        )}
      </div>
      <div className="z-10 lg:col-span-6">
        <h3 className="font-medium leading-snug">
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-baseline gap-1 text-foreground transition-colors duration-300 group-hover:text-highlight">
            <span className="text-balance">{title}</span>
            <ArrowUpRight size={14} className="inline-block shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </h3>
        <time dateTime={pubDate} className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{formatDate(pubDate)}</time>
        {categories.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {categories.slice(0, 4).map((tag) => (
              <span key={tag} className="editorial-chip inline-flex items-center px-2.5 py-1 text-[11px] font-medium text-foreground/75">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
