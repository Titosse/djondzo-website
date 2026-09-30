import Link from "next/link";

export function DjondzoMark({
  size = 44,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <rect width="64" height="64" rx="18" fill="#155DFC" />
      <path
        d="M10.5 27.2C10.5 18.8 16.9 15.2 24.1 15.2C27.1 15.2 29.9 16.1 32 17.4V46.5C28.8 45.1 25.1 44.2 21.5 43.8C14.3 43 10.5 39.1 10.5 32.9V27.2Z"
        fill="#C7D2FE"
      />
      <path
        d="M53.5 27.2C53.5 18.8 47.1 15.2 39.9 15.2C36.9 15.2 34.1 16.1 32 17.4V46.5C35.2 45.1 38.9 44.2 42.5 43.8C49.7 43 53.5 39.1 53.5 32.9V27.2Z"
        fill="#757DF5"
      />
      <circle cx="32" cy="10.4" r="3.2" fill="#C7D2FE" />
    </svg>
  );
}

export function Brand({
  compact = false,
  inverse = false,
}: {
  compact?: boolean;
  inverse?: boolean;
}) {
  return (
    <Link
      href="/"
      className="inline-flex min-h-11 items-center gap-2.5 rounded-xl"
      aria-label="Djondzo Escolar — página inicial"
    >
      <DjondzoMark size={compact ? 38 : 44} />
      <span
        className={`font-extrabold tracking-[-0.045em] ${
          compact ? "text-lg" : "text-xl"
        } ${inverse ? "text-white" : "text-[#0F172B]"}`}
      >
        Djondzo
      </span>
    </Link>
  );
}
