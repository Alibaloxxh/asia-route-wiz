import { createFileRoute } from "@tanstack/react-router";

const heroPhone = "/hero-phone.jpeg";
const logoFull = "/rasta-logo-full.png";
const icon = "/rasta-icon.png";
import {
  Navigation,
  Fuel,
  Brain,
  MapPin,
  Sliders,
  Car,
  Gauge,
  Globe2,
  Sparkles,
  ArrowRight,
  Apple,
  Play,
  Route as RouteIcon,
  Zap,
  Mountain,
  Mail,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RastaAI — Smarter than the shortest route" },
      { name: "description", content: "AI-powered navigation built for Asia. RastaAI ranks 3 routes by time, fuel, traffic, and comfort — across 15+ major cities." },
      { property: "og:title", content: "RastaAI — Smarter than the shortest route" },
      { property: "og:description", content: "AI-powered navigation built for Asia. Compare Express, Smart, and Scenic routes in one tap." },
      { property: "og:image", content: heroPhone },
    ],
  }),
  component: Landing,
});

const cities = ["Karachi","Lahore","Islamabad","Peshawar","Mumbai","Delhi","Bangalore","Bangkok","Dubai","Tehran","Jakarta","Manila","Hanoi","Kuala Lumpur","Dhaka"];

const features = [
  { icon: RouteIcon, title: "3 Smart Routes", desc: "Express, Smart, and Scenic — ranked side-by-side by our model." },
  { icon: Fuel, title: "Fuel Cost Estimates", desc: "See exact petrol spend per route, tuned to your vehicle." },
  { icon: Navigation, title: "Turn-by-turn GPS", desc: "Live, voice-guided navigation that adapts as you drive." },
  { icon: Gauge, title: "Real-time Traffic", desc: "Live indicators built on Asia-specific traffic patterns." },
  { icon: MapPin, title: "Tap-to-Destination", desc: "Drop a pin anywhere on the map. Routing is instant." },
  { icon: Sliders, title: "Your Preferences", desc: "Fastest, Fuel-saver, Comfort, or Avoid Tolls — your call." },
  { icon: Car, title: "Car · Bike · SUV", desc: "Custom fuel efficiency per vehicle for accurate costs." },
  { icon: Globe2, title: "15+ Asian Cities", desc: "From Karachi to Bangkok — built for how Asia actually drives." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <img src={icon} alt="RastaAI" className="w-9 h-9 rounded-xl" />
            <span className="font-semibold tracking-tight text-lg">RastaAI</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#tech" className="hover:text-foreground transition">Tech</a>
            <a href="#cities" className="hover:text-foreground transition">Cities</a>
          </nav>
          <a href="#download" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
            Get the app <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary/15 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs text-muted-foreground mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              AI Navigation · Built for Asia
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Smarter than <br />
              the <span className="text-gradient">shortest route.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              RastaAI ranks three routes at once — balancing travel time, fuel cost, traffic, and road comfort. Custom-trained on Asia's roads, from Karachi to Bangkok.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#download" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-medium hover:opacity-90 transition glow-teal">
                <Apple className="w-5 h-5" /> Coming to iOS
              </a>
              <a href="#download" className="inline-flex items-center gap-2 bg-surface border border-border text-foreground px-6 py-3.5 rounded-full font-medium hover:bg-surface-elevated transition">
                <Play className="w-5 h-5" /> Coming to Android
              </a>
            </div>
            <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
              <div><div className="text-2xl font-semibold text-foreground">15+</div>cities</div>
              <div className="w-px h-10 bg-border" />
              <div><div className="text-2xl font-semibold text-foreground">3</div>route options</div>
              <div className="w-px h-10 bg-border" />
              <div><div className="text-2xl font-semibold text-foreground">AI</div>ranked</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-secondary/30 blur-3xl" />
            <img src={heroPhone} alt="RastaAI route comparison on iPhone" className="relative w-full max-w-xl mx-auto drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-sm text-primary font-medium mb-3">How it works</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Three taps. One smart route.</h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { n: "01", icon: MapPin, title: "Set your destination", desc: "Search or tap anywhere on the map. Pick your vehicle and preferences." },
              { n: "02", icon: Brain, title: "AI ranks 3 routes", desc: "Express, Smart, and Scenic — scored by time, fuel, traffic, and comfort." },
              { n: "03", icon: Navigation, title: "Drive with confidence", desc: "Turn-by-turn guidance with live traffic, adapting in real time." },
            ].map((s) => (
              <div key={s.n} className="group relative p-8 rounded-2xl bg-surface border border-border hover:border-primary/40 transition">
                <div className="text-xs font-mono text-muted-foreground mb-6">{s.n}</div>
                <s.icon className="w-9 h-9 text-primary mb-5" />
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Route comparison highlight */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Zap, label: "Express", time: "42 min", fuel: "₨ 680", color: "secondary", tag: "Fastest" },
              { icon: Sparkles, label: "Smart", time: "47 min", fuel: "₨ 540", color: "primary", tag: "AI Pick" },
              { icon: Mountain, label: "Scenic", time: "58 min", fuel: "₨ 510", color: "primary", tag: "Comfort" },
            ].map((r, i) => (
              <div key={r.label} className={`p-6 rounded-2xl bg-surface border ${i === 1 ? "border-primary/60 glow-teal" : "border-border"}`}>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${r.color === "primary" ? "bg-primary/15 text-primary" : "bg-secondary/15 text-secondary"}`}>
                    <r.icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full ${r.color === "primary" ? "bg-primary/15 text-primary" : "bg-secondary/15 text-secondary"}`}>{r.tag}</span>
                </div>
                <div className="text-sm text-muted-foreground">{r.label} route</div>
                <div className="mt-1 text-3xl font-semibold">{r.time}</div>
                <div className="mt-1 text-sm text-muted-foreground">Est. fuel · <span className="text-foreground font-medium">{r.fuel}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-sm text-primary font-medium mb-3">Features</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Everything you need on the road.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-surface border border-border hover:bg-surface-elevated hover:border-primary/30 transition">
                <f.icon className="w-7 h-7 text-primary mb-4" />
                <h3 className="font-semibold mb-1.5">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech callout */}
      <section id="tech" className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 md:p-16">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/15 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs text-primary font-medium mb-4">
                  <Sparkles className="w-3.5 h-3.5" /> Powered by AI
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  A model that <span className="text-gradient">understands</span> Asian roads.
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
                  Trained on real driving data with XGBoost and LightGBM, RastaAI predicts time, cost, and comfort with precision that generic global maps can't match.
                </p>
              </div>
              <div className="flex justify-center">
                <img src={logoFull} alt="RastaAI logo" className="w-full max-w-sm rounded-2xl border border-border" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section id="cities" className="relative py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-sm text-primary font-medium mb-3">Coverage</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">15+ cities. One Asia.</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {cities.map((c) => (
              <span key={c} className="px-4 py-2 rounded-full bg-surface border border-border text-sm hover:border-primary/50 transition">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="relative py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <img src={icon} alt="" className="w-20 h-20 rounded-2xl mx-auto mb-8 glow-teal" />
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Drive <span className="text-gradient">smarter</span>.<br />Not just shorter.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">Be first on the road when RastaAI launches.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-medium hover:opacity-90 transition glow-teal">
              <Apple className="w-5 h-5" /> Notify me on iOS
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-surface border border-border px-6 py-3.5 rounded-full font-medium hover:bg-surface-elevated transition">
              <Play className="w-5 h-5" /> Notify me on Android
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2.5">
            <img src={icon} alt="" className="w-7 h-7 rounded-lg" />
            <span className="text-sm text-muted-foreground">© 2026 RastaAI — Smart navigation, AI powered.</span>
          </div>
          <a href="mailto:halikorai@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
            <Mail className="w-4 h-4" /> halikorai@gmail.com
          </a>
          <div className="text-sm text-muted-foreground">Made for Asia 🌏</div>
        </div>
      </footer>
    </div>
  );
}
