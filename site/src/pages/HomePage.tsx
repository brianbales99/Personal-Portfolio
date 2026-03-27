import { useEffect } from "react";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { site } from "../content/site";

export function HomePage() {
  useEffect(() => {
    document.title = site.documentTitle;
  }, []);

  const h = site.home;
  const resume = site.resume;

  return (
    <div className="selection:bg-primary/30 selection:text-primary bg-background text-on-background">
      <SiteNav />
      <main className="relative min-h-screen">
        <section className="relative grid-bg overflow-hidden px-6 pb-24 pt-12 md:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="z-10 space-y-8 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border-l-2 border-primary bg-surface-container-high px-3 py-1">
                <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
                <span className="font-label text-xs uppercase tracking-widest text-primary">
                  {h.statusBadge}
                </span>
              </div>
              <h1 className="font-headline text-6xl font-bold leading-tight tracking-tighter md:text-8xl">
                {h.headline.line1}{" "}
                <span className="text-primary italic">{h.headline.accent}</span>
                <br />
                {h.headline.line2}
              </h1>
              <p className="font-body max-w-xl text-lg leading-relaxed text-on-surface-variant">
                {h.intro}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={resume.publicPath}
                  download
                  className="group font-headline flex items-center gap-2 rounded-stitch-lg bg-primary px-8 py-4 font-bold uppercase tracking-wider text-on-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(143,245,255,0.4)]"
                >
                  {resume.buttonLabel}
                  <span className="material-symbols-outlined transition-transform group-hover:translate-y-1">
                    download
                  </span>
                </a>
                <div className="flex items-center gap-2">
                  <a
                    className="font-label flex items-center rounded-stitch-lg border border-outline-variant/20 p-4 text-secondary transition-all duration-300 hover:bg-secondary hover:text-on-secondary"
                    href={site.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined">link</span>
                    <span className="ml-2 text-xs uppercase">GitHub</span>
                  </a>
                  <a
                    className="font-label flex items-center rounded-stitch-lg border border-outline-variant/20 p-4 text-secondary transition-all duration-300 hover:bg-secondary hover:text-on-secondary"
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined">share</span>
                    <span className="ml-2 text-xs uppercase">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-stitch-xl bg-surface-container shadow-2xl">
                <img
                  alt={h.portraitAlt}
                  className="h-full w-full object-cover opacity-80 grayscale contrast-125 transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                  src={h.portraitSrc}
                />
              </div>
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-[80px]" />
              <div className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-secondary/10 blur-[100px]" />
            </div>
          </div>
        </section>
        <section className="bg-surface-container-low py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="mt-20">
              <div className="mb-10 space-y-2">
                <span className="font-label text-xs uppercase tracking-widest text-tertiary">
                  {h.educationSection.eyebrow}
                </span>
                <h3 className="font-headline text-3xl font-bold md:text-4xl">
                  {h.educationSection.title}
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {h.educationSection.items.map((ed) => (
                  <div
                    key={ed.id}
                    className="rounded-stitch-xl border border-primary/15 bg-surface-container-highest p-8"
                  >
                    <div className="font-label text-xs uppercase tracking-widest text-tertiary">
                      {ed.school}
                    </div>
                    <div className="mt-2 font-headline text-xl font-bold text-on-surface">
                      {ed.degree}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-20">
              <div className="mb-10 space-y-2">
                <span className="font-label text-xs uppercase tracking-widest text-tertiary">
                  {h.experienceSection.eyebrow}
                </span>
                <h3 className="font-headline text-3xl font-bold md:text-4xl">
                  {h.experienceSection.title}
                </h3>
              </div>

              <div className="space-y-6">
                {h.experienceSection.items.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-stitch-xl border border-primary/15 bg-surface-container-highest p-8"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                      <div className="space-y-1">
                        <div className="font-label text-xs uppercase tracking-widest text-tertiary">
                          {item.company}
                        </div>
                        <h3 className="font-headline text-2xl font-bold text-on-surface">
                          {item.role}
                        </h3>
                        <div className="font-label text-xs uppercase tracking-[0.06em] text-on-surface-variant">
                          {item.location} · {item.range}
                        </div>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((b) => (
                        <li
                          key={b}
                          className="font-body text-sm leading-relaxed text-on-surface-variant"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-20">
              <div className="mb-10 space-y-2">
                <span className="font-label text-xs uppercase tracking-widest text-tertiary">
                  Skills
                </span>
                <h3 className="font-headline text-3xl font-bold md:text-4xl">
                  SKILLS
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {h.techSection.skills.map((cat) => {
                  const toneClass =
                    cat.tone === "primary"
                      ? "border-primary text-primary"
                      : cat.tone === "secondary"
                        ? "border-secondary text-secondary"
                        : "border-tertiary text-tertiary";

                  return (
                    <div
                      key={cat.title}
                      className={`group rounded-stitch-xl border border-primary/15 bg-surface-container-highest p-6 transition-all duration-300 hover:translate-y-[-4px] border-l-4 ${toneClass.split(" ")[0]}`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`material-symbols-outlined text-3xl ${toneClass.split(" ").slice(1).join(" ")}`}
                        >
                          {cat.icon}
                        </span>
                        <h4 className="font-headline text-xl font-bold text-on-surface">
                          {cat.title}
                        </h4>
                      </div>

                      <div className="mt-4 flex flex-col gap-2">
                        {cat.items.map((i) => (
                          <div
                            key={i}
                            className="font-label block text-sm uppercase tracking-[0.03em] text-on-surface-variant"
                          >
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
          <div className="rounded-stitch-xl border border-primary/15 bg-surface-container-highest p-8 md:p-12">
            <div className="flex flex-col gap-10 md:flex-row md:items-center">
              <div className="w-full md:w-2/5">
                {h.certifications.items.map((c) => (
                  <img
                    key={c.verifyUrl}
                    src={c.imageSrc}
                    alt={c.imageAlt}
                    className="h-auto w-full rounded-lg border border-outline-variant/15 shadow-[0_0_20px_rgba(143,245,255,0.08)]"
                  />
                ))}
              </div>
              <div className="space-y-4 md:w-3/5">
                <span className="font-label text-xs uppercase tracking-widest text-tertiary">
                  {h.certifications.eyebrow}
                </span>
                <h3 className="font-headline text-3xl font-bold md:text-4xl">
                  {h.certifications.title}
                </h3>
                <div className="space-y-2 text-on-surface-variant">
                  {h.certifications.items.map((c) => (
                    <div key={c.verifyUrl} className="space-y-1">
                      <div>
                        <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                          Issuer
                        </span>
                        <div className="font-body">{c.issuer}</div>
                      </div>
                      <div>
                        <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                          Issued
                        </span>
                        <div className="font-body">{c.issued}</div>
                      </div>
                      <div>
                        <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                          {c.credentialId}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {h.certifications.items.map((c) => (
                    <a
                      key={c.verifyUrl}
                      href={c.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-stitch-lg bg-primary px-8 py-4 font-label text-xs font-bold uppercase tracking-wider text-on-primary transition-all hover:shadow-[0_0_30px_rgba(143,245,255,0.4)] active:scale-95"
                    >
                      Verify on Trailhead
                      <span className="material-symbols-outlined">
                        open_in_new
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter variant="split" />
    </div>
  );
}
