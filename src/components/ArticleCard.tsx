import { ArrowUpRight } from "lucide-react";
import type { MediumArticle } from "../hooks/useMediumArticles";

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ArticleCard({
  title,
  link,
  thumbnail,
  pubDate,
  excerpt,
  categories,
}: MediumArticle) {
  return (
    <article className="group relative grid pb-1 transition-all lg:grid-cols-8 lg:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all lg:block lg:group-hover:bg-card/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

      {/* Thumbnail */}
      <div className="z-10 mb-3 lg:col-span-2 lg:mb-0 lg:mt-1">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt=""
            className="aspect-video w-full rounded border border-border object-cover transition-all duration-300 group-hover:border-accent/30"
            loading="lazy"
          />
        ) : (
          <div className="flex aspect-video w-full items-center justify-center rounded border border-border bg-muted/50">
            <span className="text-xs text-muted-foreground">No image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="z-10 lg:col-span-6">
        <h3 className="font-medium leading-snug">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline gap-1 text-foreground transition-colors duration-300 group-hover:text-accent"
          >
            <span className="text-balance">{title}</span>
            <ArrowUpRight
              size={14}
              className="inline-block shrink-0 translate-y-px transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </h3>

        <time
          dateTime={pubDate}
          className="mt-1 block text-xs font-medium uppercase tracking-wide text-muted-foreground"
        >
          {formatDate(pubDate)}
        </time>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {excerpt}
        </p>

        {categories.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {categories.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
