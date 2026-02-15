import ArticleCard from "./ArticleCard";
import SectionHeading from "./SectionHeading";
import useMediumArticles from "../hooks/useMediumArticles";

function ArticleSkeleton() {
  return (
    <div className="grid animate-pulse lg:grid-cols-8 lg:gap-4">
      <div className="mb-3 lg:col-span-2 lg:mb-0">
        <div className="aspect-video w-full rounded-lg bg-muted" />
      </div>
      <div className="lg:col-span-6">
        <div className="h-5 w-3/4 rounded bg-muted" />
        <div className="mt-2 h-3 w-1/4 rounded bg-muted" />
        <div className="mt-3 flex gap-1.5">
          <div className="h-5 w-16 rounded-full bg-muted" />
          <div className="h-5 w-12 rounded-full bg-muted" />
        </div>
      </div>
    </div>
  );
}

export default function ArticlesSection() {
  const { articles, loading, error } = useMediumArticles();

  return (
    <section id="articles" className="scroll-mt-24 lg:scroll-mt-0" aria-label="Blog articles">
      <SectionHeading>My Articles</SectionHeading>
      {loading && (
        <div className="flex flex-col gap-10">
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
        <div className="group/list flex flex-col gap-10 stagger" data-reveal>
          {articles.map((article) => (
            <ArticleCard key={article.link} {...article} />
          ))}
        </div>
      )}
    </section>
  );
}
