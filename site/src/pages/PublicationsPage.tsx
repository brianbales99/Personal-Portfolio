import { useEffect } from "react";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { site } from "../content/site";

const articleHover = {
  primary:
    "hover:border-primary hover:bg-surface-container group-hover:text-primary",
  secondary:
    "hover:border-secondary hover:bg-surface-container group-hover:text-secondary",
  tertiary:
    "hover:border-tertiary hover:bg-surface-container group-hover:text-tertiary",
} as const;

const tagBorder = {
  primary: "border-primary text-primary",
  secondary: "border-secondary text-secondary",
  tertiary: "border-tertiary text-tertiary",
} as const;

export function PublicationsPage() {
  useEffect(() => {
    document.title = `Publications | ${site.name}`;
  }, []);

  const pub = site.publications;

  return (
    <div className="selection:bg-primary/30 selection:text-primary bg-background font-body text-on-background">
      <SiteNav />
      <main className="relative min-h-screen grid-bg">
        <header className="mx-auto max-w-screen-2xl px-8 pb-12 pt-20">
          <div className="flex flex-col justify-between gap-6 border-l-4 border-primary pl-6 md:flex-row md:items-end">
            <div>
              <span className="font-label text-sm uppercase tracking-[0.2em] text-primary">
                {pub.archiveLabel}
              </span>
              <h1 className="font-headline mt-2 text-5xl font-bold tracking-tighter text-on-surface md:text-7xl">
                {pub.title}
              </h1>
            </div>
            <div className="font-label text-right text-xs uppercase leading-relaxed text-outline">
              TOTAL_ENTRIES: {String(pub.totalEntries).padStart(2, "0")}
              <br />
              LAST_UPDATE: {pub.lastUpdate}
              <br />
              STATUS: OPERATIONAL
            </div>
          </div>
        </header>
        <section className="mx-auto max-w-screen-2xl space-y-6 px-8 pb-24">
          {pub.items.map((item) => (
            <article
              key={item.id}
              className={`group relative overflow-hidden rounded-stitch-lg border-l-2 border-transparent bg-surface-container-low transition-all duration-300 ${articleHover[item.accent]}`}
            >
              <div className="flex flex-col items-start gap-8 p-8 lg:flex-row">
                <div className="space-y-4 lg:w-3/4">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="rounded bg-secondary/10 px-3 py-1 font-label text-xs font-bold tracking-widest text-secondary">
                      {item.kindLabel}
                    </span>
                    <span className="font-label text-xs uppercase text-outline">
                      {item.date}
                    </span>
                  </div>
                  <h2
                    className={`font-headline text-2xl font-bold text-on-surface transition-colors md:text-3xl ${
                      item.accent === "primary"
                        ? "group-hover:text-primary"
                        : item.accent === "secondary"
                          ? "group-hover:text-secondary"
                          : "group-hover:text-tertiary"
                    }`}
                  >
                    {item.title}
                  </h2>
                  <p className="max-w-4xl italic leading-relaxed text-on-surface-variant">
                    &quot;{item.abstract}&quot;
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className={`font-label border-l bg-surface-container-highest px-2 py-1 text-[10px] uppercase ${tagBorder[item.accent]}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex h-full w-full flex-col justify-between gap-6 lg:w-1/4 lg:items-end">
                  <div className="hidden text-right text-on-surface-variant lg:block">
                    <div className="font-label mb-1 text-[10px] uppercase">
                      {item.side.label}
                    </div>
                    <div
                      className={`font-headline text-2xl font-bold ${
                        item.accent === "primary"
                          ? "text-tertiary"
                          : item.accent === "secondary"
                            ? "text-secondary"
                            : "text-tertiary"
                      }`}
                    >
                      {item.side.value}
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-3 lg:items-end">
                    <a
                      className="font-label inline-flex w-full items-center justify-center gap-3 rounded-stitch-lg bg-primary px-8 py-4 font-bold uppercase text-on-primary transition-all hover:shadow-[0_0_20px_rgba(143,245,255,0.3)] active:scale-95 lg:w-auto"
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.pdfLabel}
                      <span className="material-symbols-outlined">open_in_new</span>
                    </a>

                    <a
                      className="font-label inline-flex w-full items-center justify-center gap-2 rounded-stitch-lg border border-outline-variant/30 bg-surface-container-highest px-8 py-4 text-center text-sm font-bold uppercase tracking-wider text-on-surface transition-all hover:border-primary hover:text-primary active:scale-95 lg:w-auto"
                      href={item.instantPdfUrl}
                      download
                    >
                      <span className="flex flex-col leading-tight">
                        <span className="text-sm">PDF Download</span>
                        <span className="mt-1 text-[11px] text-on-surface-variant">
                          instant pdf download
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
        <section className="mx-auto max-w-screen-2xl px-8 pb-32">
          <div className="relative overflow-hidden rounded-stitch-xl border-t border-primary/15 bg-surface-variant/60 p-12 backdrop-blur-3xl">
            <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
            <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="md:max-w-xl">
                <h3 className="font-headline mb-4 text-3xl font-bold md:text-4xl">
                  {pub.contact.title}
                </h3>
                <p className="text-lg text-on-surface-variant">{pub.contact.body}</p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
                <a
                  href={site.links.email}
                  className="font-label inline-flex items-center justify-center gap-2 rounded-stitch-lg border border-outline-variant/30 px-8 py-4 text-sm font-bold uppercase tracking-wider text-on-surface transition-all hover:border-primary hover:text-primary"
                >
                  <span className="material-symbols-outlined">mail</span>
                  Email
                </a>
                <a
                  href={site.resume.publicPath}
                  download
                  className="font-label inline-flex items-center justify-center gap-2 rounded-stitch-lg bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-on-primary transition-all hover:shadow-[0_0_30px_rgba(143,245,255,0.4)]"
                >
                  <span className="material-symbols-outlined">download</span>
                  {site.resume.buttonLabel}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter variant="compact" />
    </div>
  );
}
