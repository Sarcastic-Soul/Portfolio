export function SectionHeading({
  title,
  intro,
  as: Tag = "h2",
}: {
  title: string;
  intro?: string;
  as?: "h1" | "h2";
}) {
  return (
    <header className="mb-10 space-y-3 sm:mb-14">
      <Tag
        className={`font-bold tracking-tight text-foreground ${
          Tag === "h1" ? "text-5xl sm:text-7xl" : "text-3xl sm:text-4xl"
        }`}
      >
        {title}
      </Tag>
      {intro && <p className="max-w-xl text-base text-muted-foreground sm:text-lg">{intro}</p>}
    </header>
  );
}
