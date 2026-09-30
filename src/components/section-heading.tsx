type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#8b6722]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#111827] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-7 text-[#667085] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
