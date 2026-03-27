import { Link, NavLink } from "react-router-dom";
import { site } from "../content/site";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
    : "text-slate-400 hover:text-cyan-300 transition-colors";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-500/15 bg-slate-950/60 shadow-[0_0_20px_rgba(0,240,255,0.05)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-4">
        <Link
          to="/"
          className="font-headline text-2xl font-bold tracking-tighter text-cyan-400"
        >
          {site.navBrand}
        </Link>
        <div className="hidden items-center gap-8 font-headline tracking-tighter md:flex">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/publications" className={linkClass}>
            Publications
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About Me
          </NavLink>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative">
            <a
              href={site.resume.publicPath}
              download
              className="group rounded-lg p-2 text-cyan-400 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-300 active:scale-95"
              aria-label="Resume download"
            >
              <span className="material-symbols-outlined">description</span>
              <span className="pointer-events-none absolute right-0 top-full z-50 mt-2 hidden whitespace-nowrap rounded-md border border-cyan-500/20 bg-slate-950/90 px-3 py-1 font-label text-[11px] uppercase tracking-widest text-cyan-200 shadow-lg group-hover:block">
                Resume download
              </span>
            </a>
          </div>
          <div className="relative">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg p-2 text-cyan-400 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-300 active:scale-95"
              aria-label="GitHub link"
            >
              <span className="material-symbols-outlined">code</span>
              <span className="pointer-events-none absolute right-0 top-full z-50 mt-2 hidden whitespace-nowrap rounded-md border border-cyan-500/20 bg-slate-950/90 px-3 py-1 font-label text-[11px] uppercase tracking-widest text-cyan-200 shadow-lg group-hover:block">
                GitHub link
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
