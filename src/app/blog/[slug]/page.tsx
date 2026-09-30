import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { postMap, posts } from "@/data/posts";
import { CTA } from "@/components/cta";
import { siteConfig } from "@/config/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = postMap[slug];
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${slug}`,
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = postMap[slug];
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: siteConfig.language,
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    publisher: { "@type": "Organization", name: siteConfig.shortName, url: siteConfig.url },
  };

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="section-space bg-white">
        <div className="container-djondzo">
          <div className="mx-auto max-w-[72ch]">
            <Link href="/blog" className="btn-tertiary -ml-2">
              <ArrowLeft size={14} />
              Voltar aos recursos
            </Link>

            <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-base text-[var(--color-text-muted)]">
              <span className="font-medium text-[var(--color-action)]">{post.category}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.publishedAt}>
                {new Intl.DateTimeFormat("pt-MZ", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${post.publishedAt}T00:00:00Z`))}
              </time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="ui-h1 mt-4">{post.title}</h1>
            <p className="ui-body mt-5">{post.description}</p>

            <div className="article-copy mt-10 border-t border-[var(--color-border)] pt-1">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && (
                    <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CTA />
    </main>
  );
}
