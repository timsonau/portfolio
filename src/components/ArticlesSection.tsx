import ArticleCard from "./ArticleCard";
import SectionHeading from "./SectionHeading";
import useMediumArticles from "../hooks/useMediumArticles";

function ArticleSkeleton() {
  return (
    <div className="animate-pulse border-b border-border/70 py-8 first:pt-0 sm:flex sm:gap-6">
      <div className="mb-4 sm:mb-0 sm:w-40 sm:shrink-0">
        <div className="aspect-[4/3] w-full rounded-sm bg-muted" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="h-3 w-16 rounded-sm bg-muted" />
        <div className="mt-3 h-6 w-3/4 rounded-sm bg-muted" />
        <div className="mt-3 h-3 w-1/3 rounded-sm bg-muted" />
      </div>
    </div>
  );
}

export default function ArticlesSection() {
  const { articles, loading, error } = useMediumArticles();

  return (
    <section id="articles" className="scroll-mt-24 lg:scroll-mt-0" aria-label="Blog articles">
      <SectionHeading index="03">Writing</SectionHeading>
      {loading && (
        <div className="flex flex-col">
          <ArticleSkeleton />
          <ArticleSkeleton />
        </div>
      )}
      {error && (
        <p className="text-sm text-muted-foreground" data-reveal>
          {"Unable to load articles. Visit my "}
          <a href="https://medium.com/@heeyoon.timson" target="_blank" rel="noopener noreferrer" className="text-highlight hover:text-foreground transition-colors duration-300">Medium profile</a>
          {" directly."}
        </p>
      )}
      {!loading && !error && articles.length === 0 && (
        <p className="text-sm text-muted-foreground" data-reveal>
          {"No articles yet. Visit my "}
          <a href="https://medium.com/@heeyoon.timson" target="_blank" rel="noopener noreferrer" className="text-highlight hover:text-foreground transition-colors duration-300">Medium</a>
          {" for updates."}
        </p>
      )}
      {!loading && !error && articles.length > 0 && (
        <div className="stagger flex flex-col" data-reveal>
          {articles.map((article) => (
            <ArticleCard key={article.link} {...article} />
          ))}
        </div>
      )}
    </section>
  );
}
