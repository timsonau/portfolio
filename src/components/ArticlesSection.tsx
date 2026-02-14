import ArticleCard from "./ArticleCard";
import SectionHeading from "./SectionHeading";
import { StaggerContainer } from "./ScrollReveal";
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
        <div className="mt-3 h-3 w-full rounded bg-muted" />
        <div className="mt-1.5 h-3 w-5/6 rounded bg-muted" />
      </div>
    </div>
  );
}

export default function ArticlesSection() {
  const { articles, loading, error } = useMediumArticles();

  return (
    <section
      id="articles"
      className="scroll-mt-24 lg:scroll-mt-0"
      aria-label="Blog articles"
    >
      <SectionHeading>Articles</SectionHeading>

      {loading && (
        <div className="flex flex-col gap-12">
          <ArticleSkeleton />
          <ArticleSkeleton />
          <ArticleSkeleton />
        </div>
      )}

      {error && (
        <p className="text-sm text-muted-foreground">
          {"Unable to load articles right now. Visit my "}
          <a
            href="https://medium.com/@heeyoon.timson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-highlight transition-colors duration-300 hover:text-foreground"
          >
            Medium profile
          </a>
          {" to read them directly."}
        </p>
      )}

      {!loading && !error && articles.length === 0 && (
        <p className="text-sm text-muted-foreground">
          {"No articles yet. Check back soon, or visit my "}
          <a
            href="https://medium.com/@heeyoon.timson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-highlight transition-colors duration-300 hover:text-foreground"
          >
            Medium profile
          </a>
          .
        </p>
      )}

      {!loading && !error && articles.length > 0 && (
        <StaggerContainer className="group/list flex flex-col gap-12" staggerDelay={0.1}>
          {articles.map((article) => (
            <ArticleCard key={article.link} {...article} />
          ))}
        </StaggerContainer>
      )}
    </section>
  );
}
