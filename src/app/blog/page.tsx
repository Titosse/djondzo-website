import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Recursos sobre gestão escolar",
  description: "Artigos do Djondzo sobre mensalidades, assiduidade, gestão escolar e Mediateca.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main id="main-content" className="section-space bg-white">
      <div className="container-djondzo">
        <div className="max-w-3xl">
          <h1 className="ui-h1">Gestão escolar explicada de forma prática.</h1>
          <p className="ui-body mt-5">Conteúdo sobre processos académicos, financeiros e administrativos que fazem parte do dia a dia das escolas.</p>
        </div>

        <div className="mt-10 border-t border-[var(--color-border)]">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group grid gap-3 border-b border-[var(--color-border)] py-6 transition-colors duration-150 hover:bg-[var(--color-canvas)] md:grid-cols-[150px_1fr_auto] md:px-3"
            >
              <div>
                <p className="text-base font-medium text-[var(--color-action)]">{post.category}</p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">{post.readingTime}</p>
              </div>
              <div>
                <h2 className="ui-h3">{post.title}</h2>
                <p className="mt-2 max-w-[68ch] text-base leading-7 text-[var(--color-text-secondary)]">{post.description}</p>
              </div>
              <ArrowRight size={17} className="mt-1 text-[var(--color-text-muted)] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-[var(--color-action)]" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
