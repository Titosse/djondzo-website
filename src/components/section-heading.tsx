type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className={`eyebrow ${light ? "!text-[#C7D2FE]" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-4 text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl lg:text-[3.25rem] lg:leading-[1.04] ${
          light ? "text-white" : "text-[#0F172B]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg ${
            light ? "text-white/65" : "text-[#64748B]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
