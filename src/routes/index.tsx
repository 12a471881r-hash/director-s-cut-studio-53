import { createFileRoute } from "@tanstack/react-router";
import { Aperture, ArrowRight, Film, Menu, Play, Plus, Sparkles, UploadCloud, WandSparkles } from "lucide-react";
import { useRef, useState, type ChangeEvent, type CSSProperties, type DragEvent } from "react";

import directorFrame from "@/assets/director-frame.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Video Director | Vantage" },
      {
        name: "description",
        content:
          "Vantage is the AI video director: it watches your long footage, finds the best moments and builds the shorts.",
      },
      { property: "og:title", content: "AI Video Director | Vantage" },
      {
        property: "og:description",
        content:
          "Vantage is the AI video director: it watches your long footage, finds the best moments and builds the shorts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pipeline = ["Source", "Analyzing", "Hook found", "Building story", "Directing", "Final cut"];

const scores = [
  { label: "Hook", value: 98 },
  { label: "Retention", value: 91 },
  { label: "Emotion", value: 87 },
  { label: "Clarity", value: 94 },
  { label: "Payoff", value: 95 },
];

const workflow = [
  { n: "01", title: "Find", copy: "Find the best moments." },
  { n: "02", title: "Shape", copy: "Build the story." },
  { n: "03", title: "Direct", copy: "Direct pace and style." },
  { n: "04", title: "Polish", copy: "Polish the result." },
  { n: "05", title: "Release", copy: "Ready for the feed." },
];

const moments = [
  { n: "01", title: "The contrarian take", score: 94 },
  { n: "02", title: "The breakthrough", score: 91 },
  { n: "03", title: "The unexpected answer", score: 89 },
];

const modes = [
  { name: "Auto", copy: "The Director chooses the approach." },
  { name: "Viral", copy: "Maximum retention." },
  { name: "Story", copy: "Story first." },
  { name: "Authority", copy: "Clean and authoritative." },
  { name: "Energy", copy: "Fast and expressive." },
  { name: "Cinematic", copy: "Atmosphere and rhythm." },
  { name: "Raw", copy: "Minimal intervention." },
];

const markers = ["Hook", "Context", "Peak", "Payoff", "Loop"];

function Index() {
  const [isDragging, setIsDragging] = useState(false);
  const [analysisActive, setAnalysisActive] = useState(false);
  const [sourceName, setSourceName] = useState("DEMO_SOURCE.MOV");
  const [sourceUrl, setSourceUrl] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const startAnalysis = (file?: File) => {
    if (file && file.size > 2 * 1024 * 1024 * 1024) {
      setUploadError("File too large. Maximum size is 2GB.");
      return;
    }

    if (file && !file.type.startsWith("video/")) {
      setUploadError("Choose an MP4 or MOV video file.");
      return;
    }

    setUploadError("");
    if (file) {
      if (sourceUrl) URL.revokeObjectURL(sourceUrl);
      setSourceUrl(URL.createObjectURL(file));
      setSourceName(file.name);
    } else {
      if (sourceUrl) URL.revokeObjectURL(sourceUrl);
      setSourceUrl(null);
      setSourceName("DEMO_SOURCE.MOV");
    }
    setAnalysisActive(true);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) startAnalysis(file);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) startAnalysis(file);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/85 px-4 backdrop-blur-md sm:px-7">
        <div className="flex items-center gap-3">
          <Aperture aria-hidden="true" className="size-5 text-primary" />
          <span className="font-black uppercase tracking-tight">Vantage</span>
          <span className="hidden font-mono text-[10px] uppercase text-muted-foreground sm:inline">/ Director</span>
        </div>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 font-mono text-[10px] uppercase text-muted-foreground lg:flex"
        >
          <a className="gradient-tab text-foreground transition-colors" data-active="true" href="#studio">01 Studio</a>
          <a className="gradient-tab transition-colors hover:text-foreground" href="#director">02 Director</a>
          <a className="gradient-tab transition-colors hover:text-foreground" href="#workflow">03 Workflow</a>
          <a className="gradient-tab transition-colors hover:text-foreground" href="#moments">04 Moments</a>
          <a className="gradient-tab transition-colors hover:text-foreground" href="#modes">05 Modes</a>
        </nav>
        <div className="flex items-center gap-3 font-mono text-[9px] uppercase text-muted-foreground">
          <span className="director-pulse size-1.5 rounded-full bg-accent" />
          <span className="hidden sm:inline">Director online</span>
          <Button
            aria-label="Open menu"
            size="icon"
            variant="ghost"
            className="rounded-full border border-border text-foreground transition-all hover:border-transparent hover:bg-[linear-gradient(90deg,var(--primary),var(--accent))] hover:text-background lg:hidden"
          >
            <Menu />
          </Button>
        </div>
      </header>

      {/* HERO — upload utility transitions into the live director */}
      <section id="studio" className="mx-auto min-h-[calc(100svh-4rem)] max-w-[1600px] px-4 pb-14 pt-10 sm:px-7 lg:px-10 lg:pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="relative z-10">
            <p className="director-reveal font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
              AI video director / studio 01
            </p>
            <h1 className="mt-6 uppercase leading-[0.82]">
              <span className="director-reveal block text-5xl font-black sm:text-7xl lg:text-[6.4rem]">I tuoi video,</span>
              <span
                className="director-reveal mt-2 block font-display text-[3.7rem] font-normal normal-case italic sm:text-[5.5rem] lg:text-[6.8rem]"
                style={{ "--reveal-delay": "90ms" } as CSSProperties}
              >
                tagliati per i
              </span>
              <span
                className="gradient-word director-reveal mt-1 block text-6xl font-black sm:text-8xl lg:text-[7.6rem]"
                style={{ "--reveal-delay": "170ms" } as CSSProperties}
              >
                social.
              </span>
            </h1>
            <p
              className="director-reveal mt-8 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base"
              style={{ "--reveal-delay": "240ms" } as CSSProperties}
            >
              Carica un video lungo. Vantage trova i momenti migliori e li trasforma in clip verticali pronte da pubblicare.
            </p>
            <div className="mt-8 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-14 bg-gradient-to-r from-primary to-accent" />
              {analysisActive ? "The director is watching" : "Ready for source"}
            </div>
          </div>

          <div className="relative min-h-[420px] sm:min-h-[500px]">
            <div className="absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_50%_45%,var(--studio-light),transparent_62%)]" />
            {!analysisActive ? (
              <div
                role="button"
                tabIndex={0}
                aria-label="Upload a video by dragging it here or selecting a file"
                onClick={() => fileInputRef.current?.click()}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") fileInputRef.current?.click();
                }}
                onDragEnter={(event) => {
                  event.preventDefault();
                  setIsDragging(true);
                }}
                onDragOver={(event) => event.preventDefault()}
                onDragLeave={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsDragging(false);
                }}
                onDrop={handleDrop}
                data-dragging={isDragging}
                className="upload-zone director-reveal group relative flex min-h-[420px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border border-border bg-card/65 px-6 text-center backdrop-blur-md transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring data-[dragging=true]:border-primary sm:min-h-[500px]"
              >
                <div className="upload-grid absolute inset-0 opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
                <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
                  <div className="director-scan h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-accent" />
                </div>
                <div className="relative flex size-20 items-center justify-center rounded-full border border-primary/35 bg-background/60 shadow-[0_0_40px_var(--studio-light)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                  <UploadCloud className="size-8 text-primary transition-colors group-hover:text-accent" />
                  <span className="director-pulse absolute inset-2 -z-10 rounded-full bg-primary/15" />
                </div>
                <p className="relative mt-7 text-2xl font-black uppercase">Drop your footage</p>
                <p className="relative mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  Drag & drop / MP4, MOV • max 2GB
                </p>
                <div className="relative mt-8 flex flex-wrap justify-center gap-3">
                  <Button
                    variant="studio"
                    size="lg"
                    onClick={(event) => {
                      event.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                  >
                    <Film /> Carica video
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-mono text-[10px] uppercase tracking-[0.16em]"
                    onClick={(event) => {
                      event.stopPropagation();
                      startAnalysis();
                    }}
                  >
                    <WandSparkles /> Carica demo
                  </Button>
                </div>
                {uploadError && <p className="relative mt-5 text-xs text-primary">{uploadError}</p>}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/mp4,video/quicktime,video/*"
                  className="sr-only"
                  onChange={handleFileChange}
                />
                <span className="absolute left-4 top-4 font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground">Input / waiting</span>
                <span className="absolute bottom-4 right-4 font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground">Secure local preview</span>
              </div>
            ) : (
              <div className="analysis-enter pt-3">
                <div className="mb-5 flex items-center justify-between border-b border-border pb-4 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="flex min-w-0 items-center gap-2"><span className="director-pulse size-1.5 shrink-0 rounded-full bg-primary" /><span className="truncate">Live / {sourceName}</span></span>
                  <Button variant="ghost" size="sm" className="font-mono text-[9px] uppercase tracking-[0.16em]" onClick={() => setAnalysisActive(false)}>New source</Button>
                </div>
                <div className="grid items-center gap-5 sm:grid-cols-[1.75fr_auto_0.62fr]">
                  <figure>
                    <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-card p-[1.5px]">
                      <div className="relative h-full overflow-hidden rounded-[7px] bg-card">
                        {sourceUrl ? (
                          <video src={sourceUrl} className="h-full w-full object-cover" autoPlay muted loop playsInline />
                        ) : (
                          <img src={directorFrame} alt="Director reviewing long-form footage" className="h-full w-full object-cover" />
                        )}
                        <div className="director-vertical-scan absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-accent" />
                        <div className="absolute left-3 top-3 rounded-full border border-foreground/15 bg-background/75 px-3 py-1 font-mono text-[8px] uppercase tracking-[0.16em] backdrop-blur-sm">Source / analyzing</div>
                        <div className="absolute bottom-3 right-3 font-mono text-[8px] uppercase text-foreground/70">00:42:17 / 00:58:00</div>
                      </div>
                      <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-br from-primary via-primary/30 to-accent opacity-40" />
                    </div>
                    <figcaption className="mt-3 font-mono text-[8px] uppercase tracking-[0.2em] text-muted-foreground">Original footage</figcaption>
                  </figure>
                  <div className="hidden flex-col items-center gap-2 sm:flex">
                    <span className="h-8 w-px bg-gradient-to-b from-transparent to-primary" />
                    <ArrowRight className="size-4 text-accent" />
                    <span className="h-8 w-px bg-gradient-to-t from-transparent to-accent" />
                  </div>
                  <figure className="mx-auto w-36 sm:w-full">
                    <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-primary/45 bg-card">
                      {sourceUrl ? (
                        <video src={sourceUrl} className="h-full w-full object-cover" autoPlay muted loop playsInline />
                      ) : (
                        <img src={directorFrame} alt="Vertical short preview" className="h-full w-full scale-[1.6] object-cover object-[62%_38%]" />
                      )}
                      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background to-transparent" />
                      <div className="absolute left-2 top-2 rounded-full border border-foreground/15 bg-background/75 px-2 py-0.5 font-mono text-[7px] uppercase">Final cut</div>
                      <div className="absolute bottom-3 left-2 font-mono text-[7px] uppercase text-foreground/80"><span className="gradient-word font-sans text-xl font-black">94</span> Attention</div>
                    </div>
                    <figcaption className="mt-3 font-mono text-[8px] uppercase tracking-[0.2em] text-muted-foreground">Vertical short</figcaption>
                  </figure>
                </div>
                <ul className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4 font-mono text-[8px] uppercase tracking-[0.16em] text-muted-foreground">
                  {pipeline.map((step, index) => <li key={step} className={`flex items-center gap-2 ${index === 2 ? "text-foreground" : ""}`}><span className={`size-1 rounded-full ${index <= 2 ? "bg-primary" : "bg-muted-foreground/40"}`} />{step}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* THE DIRECTOR */}
      <section id="director" className="mx-auto max-w-[1600px] px-4 py-16 sm:px-7 lg:px-10">
        <div className="grid gap-12 border-t border-border pt-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">The director</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.02em] sm:text-6xl">
              The director<br />
              <span className="font-display text-[0.88em] font-normal normal-case italic tracking-tight">is</span>{" "}
              <span className="gradient-word">watching.</span>
            </h2>
            <div className="mt-10 flex items-end gap-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Attention</p>
                <p className="gradient-word mt-2 text-[6rem] font-black leading-none tracking-[-0.04em] sm:text-[8rem]">94</p>
              </div>
              <div className="mb-4 h-16 w-px bg-border" />
              <p className="mb-4 max-w-[13rem] font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
                Composite signal across hook, retention, emotion, clarity, payoff
              </p>
            </div>
          </div>

          <div className="lg:pl-10">
            <ul className="divide-y divide-border border-y border-border">
              {scores.map((s) => (
                <li key={s.label} className="flex items-center gap-5 py-4">
                  <span className="w-24 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.label}
                  </span>
                  <span className="relative h-px flex-1 bg-border">
                    <span
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent"
                      style={{ width: `${s.value}%` }}
                    />
                  </span>
                  <span className="w-12 text-right text-2xl font-black tabular-nums">{s.value}</span>
                </li>
              ))}
            </ul>

            <figure className="mt-8 border-l border-primary/50 pl-5">
              <figcaption className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                Director’s note
              </figcaption>
              <blockquote className="mt-3 font-display text-2xl italic leading-snug sm:text-3xl">
                “Strong opening. High curiosity. Clear payoff.”
              </blockquote>
            </figure>

            <div className="mt-10 border-t border-border pt-6">
              <div className="relative h-px bg-border">
                <div className="absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-primary to-accent" />
                {[8, 28, 47, 69, 90].map((pos, i) => (
                  <span
                    key={pos}
                    className={`absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${i === 2 ? "bg-accent" : "bg-foreground"}`}
                    style={{ left: `${pos}%` }}
                  />
                ))}
              </div>
              <div className="mt-4 grid grid-cols-5 font-mono text-[8px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px]">
                {markers.map((marker, index) => (
                  <span key={marker} className={index === 2 ? "text-accent" : ""}>
                    {marker}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="mx-auto max-w-[1600px] px-4 py-16 sm:px-7 lg:px-10">
        <div className="border-t border-border pt-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Workflow</p>
          <ol className="mt-8 divide-y divide-border">
            {workflow.map((step) => (
              <li key={step.n} className="group grid grid-cols-[3rem_1fr] items-baseline gap-x-6 gap-y-2 py-7 sm:grid-cols-[5rem_1fr_1.1fr]">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-primary">
                  {step.n}
                </span>
                <h3 className="text-3xl font-black uppercase tracking-[-0.02em] sm:text-5xl">{step.title}</h3>
                <p className="col-start-2 text-sm text-muted-foreground sm:col-start-3 sm:text-right">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ONE VIDEO. MULTIPLE MOMENTS. */}
      <section id="moments" className="mx-auto max-w-[1600px] px-4 py-16 sm:px-7 lg:px-10">
        <div className="border-t border-border pt-10">
          <h2 className="text-4xl font-black uppercase leading-[0.86] tracking-[-0.02em] sm:text-7xl">
            One video.<br />
            <span className="gradient-word">Multiple moments.</span>
          </h2>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <figure className="relative">
              <div className="relative aspect-video overflow-hidden rounded-lg border border-border">
                <img
                  src={directorFrame}
                  alt="Original long-form video being split into multiple short cuts"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/80">
                  Source / 3 moments detected
                </div>
              </div>
            </figure>

            <ol className="divide-y divide-border border-y border-border">
              {moments.map((m) => (
                <li key={m.n} className="group flex items-center gap-5 py-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{m.n}</span>
                  <div className="relative h-14 w-8 shrink-0 overflow-hidden rounded-sm border border-border">
                    <img src={directorFrame} alt="" className="h-full w-full scale-[1.8] object-cover" />
                  </div>
                  <h3 className="flex-1 text-lg font-black uppercase leading-tight tracking-[-0.01em] transition-colors group-hover:text-primary sm:text-2xl">
                    {m.title}
                  </h3>
                  <div className="text-right">
                    <span className="text-3xl font-black tabular-nums">{m.score}</span>
                    <span className="ml-2 font-mono text-[9px] uppercase text-muted-foreground">att</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* DIRECTING MODES */}
      <section id="modes" className="mx-auto max-w-[1600px] px-4 py-16 sm:px-7 lg:px-10">
        <div className="border-t border-border pt-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Directing modes</p>
          <ul className="mt-8 grid gap-x-12 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {modes.map((mode, index) => (
              <li key={mode.name} className="border-t border-border pt-4">
                <button
                  type="button"
                  data-active={index === 0}
                  className="gradient-tab font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground"
                >
                  {mode.name}
                </button>
                <p className="mt-3 text-sm text-muted-foreground">{mode.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FUTURE WORKFLOW */}
      <section className="mx-auto max-w-[1600px] px-4 py-16 sm:px-7 lg:px-10">
        <div className="border-t border-border pt-10">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            <span className="text-foreground">Vantage</span>
            <ArrowRight aria-hidden="true" className="size-3 text-accent" />
            <span>First cut</span>
            <ArrowRight aria-hidden="true" className="size-3 text-accent" />
            <span>Premiere Pro</span>
            <ArrowRight aria-hidden="true" className="size-3 text-accent" />
            <span>Final edit</span>
          </div>
          <h2 className="mt-7 max-w-3xl text-3xl font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-5xl">
            AI does the first cut.<br />
            <span className="font-display text-[0.92em] font-normal normal-case italic tracking-tight">you make the</span>{" "}
            <span className="gradient-word">final call.</span>
          </h2>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="mx-auto max-w-[1600px] px-4 pb-20 sm:px-7 lg:px-10">
        <div className="relative border-t border-foreground/30 pt-9">
          <div className="absolute left-0 top-0 h-1 w-32 bg-gradient-to-r from-primary to-accent sm:w-56" />
          <div className="flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Next project</p>
              <h2 className="mt-3 text-4xl font-black uppercase leading-[0.88] tracking-[-0.02em] sm:text-6xl">
                Create something<br />worth watching.
              </h2>
              <p className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
                <Sparkles className="size-4 text-accent" /> The Director starts working as soon as you upload the video.
              </p>
            </div>
            <Button variant="studio" size="lg">
              <Plus /> Create new project
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
