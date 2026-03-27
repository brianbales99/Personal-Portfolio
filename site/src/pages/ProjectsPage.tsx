import { useEffect, useMemo, useState } from "react";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { site } from "../content/site";

const iconToneClass = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
} as const;

const PIXLOO_MODAL_HREF = "__MODAL_PIXLOO_DOWNLOAD__";

export function ProjectsPage() {
  useEffect(() => {
    document.title = `Projects | ${site.name}`;
  }, []);

  const [pixlooModalOpen, setPixlooModalOpen] = useState(false);

  useEffect(() => {
    if (!pixlooModalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPixlooModalOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [pixlooModalOpen]);

  const p = site.projects;

  const pixlooProject = useMemo(() => {
    return p.items.find((it) => it.slug === "ai-flutter") as
      | (typeof p.items)[number]
      | {
          title?: string;
          previewImage?: string;
          previewImageAlt?: string;
        }
      | undefined;
  }, [p.items]);

  const projectSections: Array<{
    key: "featured" | "research" | "school";
    title: string;
  }> = [
    { key: "featured", title: "Featured Apps" },
    { key: "research", title: "Master Research" },
    { key: "school", title: "School Projects" },
  ];

  return (
    <div className="selection:bg-primary/30 min-h-screen bg-surface text-on-surface">
      <SiteNav />
      <main className="relative grid-pattern">
        <section className="mx-auto max-w-screen-2xl px-8 pb-12 pt-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="font-headline mb-4 block text-sm uppercase tracking-[0.3em] text-primary">
                {p.eyebrow}
              </span>
              <h1 className="font-headline max-w-3xl text-5xl font-bold tracking-tighter text-on-surface md:text-7xl">
                {p.titleLine}{" "}
                <span className="text-primary">{p.titleAccent}</span>
              </h1>
            </div>
            <div className="md:text-right">
              <p className="font-body mb-2 max-w-sm text-on-surface-variant">
                {p.blurb}
              </p>
              <div className="font-headline inline-flex items-center gap-2 text-xs uppercase tracking-widest text-tertiary">
                <span className="h-2 w-2 rounded-full bg-tertiary" />
                {p.statusLine}
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-screen-2xl px-8 pb-32">
          <div className="space-y-16">
            {projectSections.map((sec) => {
              const items = p.items.filter(
                (it) => (it as { category?: string }).category === sec.key,
              );

              if (items.length === 0) return null;

              return (
                <div key={sec.key}>
                  <div className="mb-8">
                    <span className="font-headline text-sm uppercase tracking-[0.3em] text-primary">
                      {sec.title}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((proj) => (
                      <div
                        key={proj.slug}
                        className="group flex flex-col overflow-hidden rounded-lg bg-surface-container-highest transition-all duration-500 hover:translate-y-[-4px]"
                      >
                        <div className="aspect-video w-full overflow-hidden bg-surface-container-low">
                          <img
                            alt={proj.imageAlt}
                            className="h-full w-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                            src={proj.image}
                          />
                        </div>
                        <div className="flex grow flex-col p-8">
                          <div className="mb-4 flex items-start justify-between">
                            <h3 className="font-headline text-2xl font-bold tracking-tight text-on-surface">
                              {proj.title}
                            </h3>
                            <span
                              className={`material-symbols-outlined text-sm ${iconToneClass[proj.iconTone]}`}
                            >
                              {proj.icon}
                            </span>
                          </div>
                          <p className="mb-6 grow text-sm leading-relaxed text-on-surface-variant">
                            {proj.description}
                          </p>
                          <div className="mb-8 flex flex-wrap gap-2">
                            {proj.tags.map((t) => (
                              <span
                                key={t}
                                className="terminal-chip bg-surface-container-high px-3 py-1 font-headline text-[10px] uppercase tracking-wider text-primary"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <a
                              href={proj.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-lg bg-primary px-4 py-3 text-center font-headline text-xs font-bold uppercase tracking-widest text-on-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,238,252,0.4)] active:scale-95"
                            >
                              {proj.demoLabel}
                            </a>
                            {proj.extraButtonUrl ? (
                              <a
                                href={proj.extraButtonUrl}
                                target={proj.extraButtonTarget ?? "_blank"}
                                rel={
                                  ((proj.extraButtonTarget ?? "_blank") as string) === "_blank"
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="rounded-lg border border-outline-variant/30 bg-surface-container-highest px-4 py-3 text-center font-headline text-xs font-bold uppercase tracking-widest text-on-surface transition-all duration-300 hover:border-primary hover:text-primary active:scale-95"
                                onClick={(e) => {
                                  if (proj.extraButtonUrl !== PIXLOO_MODAL_HREF) return;
                                  e.preventDefault();
                                  setPixlooModalOpen(true);
                                }}
                              >
                                {proj.extraButtonLabel}
                              </a>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {pixlooModalOpen ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Pixloo.AI download options"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setPixlooModalOpen(false);
            }}
          >
            <div className="w-full max-w-4xl overflow-hidden rounded-stitch-xl border border-outline-variant/30 bg-surface-container-highest shadow-2xl">
              <div className="relative overflow-hidden border-b border-outline-variant/20 px-6 py-5">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(14,238,252,0.18),transparent_70%),radial-gradient(closest-side,rgba(170,255,0,0.10),transparent_60%)]" />
                <div className="relative flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-headline text-xs uppercase tracking-[0.3em] text-tertiary">
                    Download
                  </div>
                  <div className="font-headline truncate text-2xl font-bold tracking-tight text-on-surface">
                    {pixlooProject?.title ?? "Pixloo.AI"}
                  </div>
                  <div className="font-body mt-1 text-sm text-on-surface-variant">
                    Get the iOS version now. Android is coming soon.
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg border border-outline-variant/30 bg-surface-container-high px-3 py-2 text-on-surface transition hover:border-primary hover:text-primary active:scale-95"
                  onClick={() => setPixlooModalOpen(false)}
                >
                  <span className="material-symbols-outlined text-base">close</span>
                </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-0 md:grid-cols-[1.35fr_0.65fr]">
                <div className="relative overflow-hidden bg-surface-container-low">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(14,238,252,0.10),transparent_70%),radial-gradient(closest-side,rgba(180,108,255,0.08),transparent_65%)]" />
                  <div className="relative">
                    <div className="border-b border-outline-variant/15 px-6 py-4">
                      <div className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface">
                        App preview
                      </div>
                      <div className="font-body mt-1 text-xs text-on-surface-variant">
                        Mobile-first UI • text-to-image • image-to-animation
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="overflow-hidden rounded-stitch-lg border border-outline-variant/20 bg-surface-container-highest">
                        <img
                          src={pixlooProject?.previewImage ?? "/pixloo-preview.png"}
                          alt={pixlooProject?.previewImageAlt ?? "Pixloo.AI app preview"}
                          className="h-[420px] w-full object-cover md:h-[520px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-outline-variant/20 bg-surface-container-highest p-6 md:border-l md:border-t-0">
                  <div className="rounded-stitch-lg border border-outline-variant/20 bg-surface-container-low p-5">
                    <div className="font-headline text-sm font-bold tracking-tight text-on-surface">
                      Download
                    </div>
                    <div className="font-body mt-2 text-sm leading-relaxed text-on-surface-variant">
                      iOS is available now. Google Play is coming soon.
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3">
                    <a
                      href="https://www.apple.com/app-store/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-lg bg-primary px-4 py-4 text-left transition-all duration-300 hover:shadow-[0_0_18px_rgba(0,238,252,0.45)] active:scale-[0.99]"
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(closest-side,rgba(255,255,255,0.18),transparent_65%)]" />
                      <div className="relative flex items-center gap-3">
                        <span className="material-symbols-outlined text-on-primary">
                          download
                        </span>
                        <div className="min-w-0">
                          <div className="font-headline text-xs font-bold uppercase tracking-widest text-on-primary">
                            App Store
                          </div>
                          <div className="font-body mt-0.5 text-sm text-on-primary/90">
                            Download now
                          </div>
                        </div>
                      </div>
                    </a>

                    <button
                      type="button"
                      disabled
                      className="cursor-not-allowed rounded-lg border border-outline-variant/30 bg-surface-container-highest px-4 py-4 text-left opacity-70"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-on-surface">
                          android
                        </span>
                        <div className="min-w-0">
                          <div className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface">
                            Google Play
                          </div>
                          <div className="font-body mt-0.5 text-sm text-on-surface-variant">
                            Coming soon
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>

                  <div className="mt-4 font-body text-xs text-on-surface-variant">
                    Tip: I can swap the App Store button to your exact listing whenever it’s ready.
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </main>
      <SiteFooter variant="split" />
    </div>
  );
}
