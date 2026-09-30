import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { postMap, posts } from "@/data/posts";
import { CTA } from "@/components/cta";
import { siteConfig } from "@/config/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

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
    publisher: {
      "@type": "Organization",
      name: siteConfig.shortName,
      url: siteConfig.url,
    },
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="section-space bg-white">
        <div className="container-djondzo">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex min-h-10 items-center gap-2 rounded-xl text-xs font-extrabold text-[#155DFC]"
            >
              <ArrowLeft size={14} />
              Voltar aos recursos
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-bold text-[#8DA0BB]">
              <span className="rounded-full bg-[#EEF3FF] px-3 py-1.5 text-[#155DFC]">
                {post.category}
              </span>
              <span>•</span>
              <time dateTime={post.publishedAt}>
                {new Intl.DateTimeFormat("pt-MZ", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  timeZone: "UTC",
                }).format(new Date(`${post.publishedAt}T00:00:00Z`))}
              </time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.05em] text-[#0F172B] sm:text-6xl sm:leading-[1.02]">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#64748B]">{post.description}</p>

            <div className="article-copy mt-12 border-t border-[#E6EBF2] pt-2">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
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
