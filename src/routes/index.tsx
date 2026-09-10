import { createFileRoute } from "@tanstack/react-router";
import { Aperture, Menu, Play, Plus, Sparkles } from "lucide-react";
import type { CSSProperties } from "react";

import directorFrame from "@/assets/director-frame.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Video Director | Vantage" },
      {
        name: "description",
        content: "A cinematic AI video studio for finding moments, directing cuts, and preparing stories for the feed.",
      },
      { property: "og:title", content: "AI Video Director | Vantage" },
      {
        property: "og:description",
        content: "A cinematic AI video studio for finding moments, directing cuts, and preparing stories for the feed.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const modes = ["Auto", "Viral", "Story", "Authority", "Energy", "Cinematic", "Raw"];
const markers = ["Hook", "Context", "Peak", "Payoff", "Loop"];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="flex h-16 items-center justify-between border-b border-border px-4 sm:px-7">
        <div className="flex items-center gap-3">
          <Aperture aria-hidden="true" className="size-5 text-primary" />
          <span className="font-black uppercase">Vantage</span>
          <span className="hidden font-mono text-[10px] uppercase text-muted-foreground sm:inline">/ Director</span>
        </div>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 font-mono text-[10px] uppercase text-muted-foreground lg:flex">
          <a className="gradient-tab text-foreground transition-colors" data-active="true" href="#studio">01 Studio</a>
          <a className="gradient-tab transition-colors hover:text-foreground" href="#projects">02 Projects</a>
          <a className="gradient-tab transition-colors hover:text-foreground" href="#cuts">03 Cuts</a>
          <a className="gradient-tab transition-colors hover:text-foreground" href="#modes">04 Modes</a>
        </nav>
        <div className="flex items-center gap-3 font-mono text-[9px] uppercase text-muted-foreground">
          <span className="director-pulse size-1.5 rounded-full bg-accent" />
          <span className="hidden sm:inline">Director online</span>
          <Button aria-label="Open menu" size="icon" variant="ghost" className="rounded-none border border-border text-foreground transition-all hover:border-transparent hover:bg-[linear-gradient(90deg,var(--primary),var(--accent))] hover:text-background lg:hidden"><Menu /></Button>
        </div>
      </header>

      <section id="studio" className="mx-auto max-w-[1600px] px-4 pb-12 pt-8 sm:px-7 lg:px-10 lg:pt-12">
        <div className="grid items-end gap-8 lg:grid-cols-[0.72fr_1.75fr_0.7fr]">
          <div className="relative z-10 lg:pb-10">
            <p className="director-reveal font-mono text-[10px] uppercase text-primary">Live analysis / source 01</p>
            <h1 className="director-reveal mt-5 text-6xl font-black uppercase leading-[0.82] sm:text-8xl lg:text-[7.5rem]" style={{ "--reveal-delay": "90ms" } as CSSProperties}>
              Find<br /><span className="font-display text-[0.78em] font-normal normal-case italic tracking-tight">the</span><br /><span className="gradient-word">moment.</span>
            </h1>
            <div className="director-reveal mt-9 flex items-center gap-3" style={{ "--reveal-delay": "200ms" } as CSSProperties}>
              <span className="h-px w-14 bg-gradient-to-r from-primary to-accent" />
              <span className="font-mono text-[10px] uppercase text-muted-foreground">The director is watching</span>
            </div>
          </div>

          <div className="relative lg:-ml-16">
            <div className="absolute -inset-6 -z-10 bg-[radial-gradient(circle_at_70%_42%,var(--studio-light),transparent_58%)]" />
            <div className="relative aspect-video overflow-hidden border border-border bg-card p-[2px]">
              <div className="relative h-full overflow-hidden border border-border bg-card">
                <img src={directorFrame} alt="Director reviewing footage in a dark editing studio" width={1536} height={864} className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
                  <div className="director-scan h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-accent" />
                </div>
                <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-foreground/15 bg-background/75 py-1 pl-2.5 pr-3 font-mono text-[9px] uppercase backdrop-blur-sm">
                  <span className="director-pulse size-1.5 rounded-full bg-gradient-to-r from-primary to-accent" /> scanning source
                </div>
                <div className="absolute bottom-3 right-3 font-mono text-[9px] uppercase text-foreground/70">00:42:17 / 00:58:00</div>
                <Button aria-label="Play footage" size="icon" variant="ghost" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-foreground/30 bg-background/40 backdrop-blur-sm"><Play className="fill-current" /></Button>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary/40 to-accent opacity-40" />
            </div>

            <div className="absolute -left-4 top-[17%] hidden border border-border bg-secondary/90 px-3 py-2 font-mono text-[9px] uppercase text-muted-foreground backdrop-blur-md md:block">Hook / detected</div>
            <div className="absolute -right-5 top-[34%] hidden border border-primary/40 bg-secondary/90 px-3 py-2 font-mono text-[9px] uppercase text-foreground backdrop-blur-md md:block">Peak / reviewing</div>
            <div className="absolute -right-3 bottom-[18%] hidden border border-border bg-secondary/90 px-3 py-2 font-mono text-[9px] uppercase text-muted-foreground backdrop-blur-md xl:block">Retention / pending</div>
          </div>

          <div className="grid grid-cols-2 gap-7 border-t border-border pt-6 lg:block lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
            <div>
              <p className="font-mono text-[10px] uppercase text-muted-foreground">Attention</p>
              <p className="mt-2 text-7xl font-black leading-none">—</p>
              <p className="mt-3 font-mono text-[9px] uppercase text-muted-foreground">Awaiting analysis</p>
            </div>
            <div className="lg:mt-16">
              <p className="font-mono text-[10px] uppercase text-primary">Director’s note</p>
              <p className="mt-3 max-w-56 text-sm leading-relaxed text-muted-foreground">Insights will appear here when the analysis is complete.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-y border-border py-6">
          <div className="relative h-px bg-border">
            <div className="absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-primary to-accent" />
            <span className="absolute left-[8%] top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground" />
            <span className="absolute left-[28%] top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground" />
            <span className="absolute left-[47%] top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
            <span className="absolute left-[69%] top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground" />
            <span className="absolute left-[90%] top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground" />
          </div>
          <div className="mt-4 grid grid-cols-5 font-mono text-[8px] uppercase text-muted-foreground sm:text-[10px]">
            {markers.map((marker, index) => <span key={marker} className={index === 2 ? "text-accent" : ""}>{marker}</span>)}
          </div>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-[1fr_1.3fr]">
          <section id="modes">
            <p className="font-mono text-[10px] uppercase text-muted-foreground">Directing modes</p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-4">
              {modes.map((mode, index) => (
                <Button key={mode} variant="ghost" size="sm" data-active={index === 0} className={`gradient-tab h-auto rounded-none px-0 py-1 font-mono text-[11px] uppercase shadow-none hover:bg-transparent ${index === 0 ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>{mode}</Button>
              ))}
            </div>
          </section>
          <section id="cuts" className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div className="flex items-end justify-between">
              <div><p className="font-mono text-[10px] uppercase text-primary">The cuts</p><h2 className="mt-2 text-4xl font-black uppercase sm:text-6xl">Building<br /><span className="font-display text-[0.9em] font-normal normal-case italic tracking-tight">the</span> <span className="gradient-word">story.</span></h2></div>
              <span className="font-mono text-[10px] uppercase text-muted-foreground">No cuts yet</span>
            </div>
            <div className="mt-7 flex items-center gap-4 border-t border-border pt-4 text-muted-foreground">
              <Sparkles className="size-4 text-accent" />
              <p className="text-sm">Selected moments will assemble here after analysis.</p>
            </div>
          </section>
        </div>

        <section id="projects" className="relative mt-16 border-t border-foreground/30 pt-8">
          <div className="absolute left-0 top-0 h-1 w-32 bg-gradient-to-r from-primary to-accent sm:w-56" />
          <div className="flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-end">
            <div><p className="font-mono text-[10px] uppercase text-muted-foreground">Next project</p><h2 className="mt-3 text-4xl font-black uppercase sm:text-6xl">Create something<br />worth watching.</h2></div>
            <Button variant="studio" size="lg"><Plus /> Create new project</Button>
          </div>
        </section>
      </section>
    </main>
  );
}