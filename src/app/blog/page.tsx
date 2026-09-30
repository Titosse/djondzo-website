import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Recursos sobre gestão escolar",
  description:
    "Artigos do Djondzo sobre mensalidades, assiduidade, gestão escolar e Mediateca.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main id="main-content" className="section-space bg-[#F8FAFC]">
      <div className="container-djondzo">
        <div className="max-w-3xl">
          <p className="eyebrow">Recursos</p>
          <h1 className="ui-h1 mt-4">
            Gestão escolar explicada de forma prática.
          </h1>
          <p className="ui-body mt-5">
            Conteúdo sobre processos académicos, financeiros e administrativos que fazem parte do dia a dia das escolas.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group rounded-[28px] border p-7 transition hover:-translate-y-1 hover:border-[#C7D2FE] hover:shadow-[0_18px_48px_rgba(15,23,43,0.08)] ${
                index === 0
                  ? "border-[#C7D2FE] bg-[#EEF3FF] md:col-span-2"
                  : "border-[#DCE3ED] bg-white"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-bold text-[#155DFC]">{post.category}</p>
                <p className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#8DA0BB]">
                  {post.readingTime}
                </p>
              </div>
              <h2
                className={`mt-5 font-bold tracking-[-0.04em] text-[#0F172B] ${
                  index === 0 ? "max-w-3xl text-2xl" : "text-xl"
                }`}
              >
                {post.title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[#52617A]">
                {post.description}
              </p>
              <span className="mt-7 inline-flex min-h-10 items-center gap-2 rounded-xl text-xs font-bold text-[#155DFC]">
                Ler artigo
                <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
