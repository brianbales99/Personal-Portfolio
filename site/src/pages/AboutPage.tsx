import { useEffect } from "react";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { site } from "../content/site";

export function AboutPage() {
  useEffect(() => {
    document.title = `About Me | ${site.name}`;
  }, []);

  const a = site.home.aboutSection;

  return (
    <div className="selection:bg-primary/30 min-h-screen bg-surface text-on-surface">
      <SiteNav />
      <main className="relative grid-pattern">
        <section className="mx-auto max-w-screen-2xl px-8 pb-12 pt-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-headline mb-4 block text-sm uppercase tracking-[0.3em] text-primary">
                {a.eyebrow}
              </span>
              <h1 className="font-headline max-w-3xl text-5xl font-bold tracking-tighter text-on-surface md:text-7xl">
                {a.title}
              </h1>
            </div>
            <p className="font-body max-w-xl text-on-surface-variant md:text-right">
              {a.blurb}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-8 pb-32">
          <div className="space-y-10">
            {a.items.map((it, idx) => {
              const tone =
                it.tone === "primary"
                  ? "border-primary/30 text-primary"
                  : it.tone === "secondary"
                    ? "border-secondary/30 text-secondary"
                    : "border-tertiary/30 text-tertiary";

              return (
                <article
                  key={it.id}
                  className={`overflow-hidden rounded-stitch-xl border bg-surface-container-highest transition-all duration-500 hover:translate-y-[-3px] ${tone}`}
                >
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 ${idx % 2 === 0 ? "" : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"}`}
                  >
                    <div className="relative aspect-[16/11] w-full bg-surface-container-low">
                      <img
                        src={it.imageSrc}
                        alt={it.imageAlt}
                        className="h-full w-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(14,238,252,0.10),transparent_70%)] opacity-70" />
                    </div>

                    <div className="p-8 md:p-10">
                      <div className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-4xl">
                          {it.icon}
                        </span>
                        <div className="space-y-3">
                          <h2 className="font-headline text-2xl font-bold text-on-surface">
                            {it.title}
                          </h2>
                          <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                            {it.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter variant="split" />
    </div>
  );
}

