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
    <div className={centered ? "mx-auto max-w-[72ch] text-center" : "max-w-[72ch]"}>
      {eyebrow && (
        <p className={`eyebrow ${light ? "!text-[#C7D2FE]" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`ui-h2 mt-4 ${light ? "!text-white" : ""}`}>
        {title}
      </h2>
      {description && (
        <p className={`ui-body mt-4 ${light ? "!text-white/72" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
