import { site } from "../content/site";

type Variant = "split" | "compact";

const linkClass: Record<Variant, string> = {
  split:
    "font-headline text-xs uppercase tracking-[0.2em] text-slate-500 transition-colors duration-200 hover:text-purple-400 md:hover:translate-x-1",
  compact:
    "text-slate-500 transition-colors duration-200 hover:translate-x-1 hover:text-cyan-400",
};

export function SiteFooter({ variant = "split" }: { variant?: Variant }) {
  const year = new Date().getFullYear();
  const items: { label: string; href: string }[] = [
    { label: "GitHub", href: site.links.github },
    { label: "LinkedIn", href: site.links.linkedin },
    ...(site.links.twitter
      ? [{ label: "Twitter", href: site.links.twitter }]
      : []),
    { label: "Email", href: site.links.email },
  ];

  if (variant === "compact") {
    return (
      <footer className="w-full border-t border-slate-800 bg-slate-950 py-12">
        <div className="flex flex-col items-center justify-between gap-6 px-12 font-headline text-xs uppercase tracking-[0.2em] md:flex-row">
          <div className="text-lg font-black text-cyan-400">{site.name}</div>
          <div className="text-center text-slate-500">
            © {year} {site.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {items.map((l) => (
              <a key={l.label} className={linkClass.compact} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 py-12">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-6 px-12 md:flex-row">
        <div className="font-headline text-lg font-black text-cyan-400">
          {site.name}
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {items.map((l) => (
            <a key={l.label} className={linkClass.split} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="font-headline text-xs uppercase tracking-[0.2em] text-slate-500">
          © {year} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
