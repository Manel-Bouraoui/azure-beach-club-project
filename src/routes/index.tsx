import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  X,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Music2,
  MessageCircle,
  CalendarCheck,
  Star,
  ChevronRight,
  Waves,
  Sun,
  UtensilsCrossed,
  Wine,
  Coffee,
  IceCreamCone,
  Fish,
  GlassWater,
  Mail,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import menuSeafood from "@/assets/menu-seafood.jpg";
import menuCocktail from "@/assets/menu-cocktail.jpg";
import menuPasta from "@/assets/menu-pasta.jpg";
import menuDessert from "@/assets/menu-dessert.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import eventDj from "@/assets/event-dj.jpg";
import eventSunset from "@/assets/event-sunset.jpg";
import eventWine from "@/assets/event-wine.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Azure Beach Club — Where Luxury Meets the Sea" },
      {
        name: "description",
        content:
          "Sunset cocktails, Mediterranean seafood and beachfront reservations at Azure Beach Club — a luxury beach destination on the sea.",
      },
      { property: "og:title", content: "Azure Beach Club — Where Luxury Meets the Sea" },
      {
        property: "og:description",
        content: "Signature cocktails, Mediterranean cuisine and unforgettable sunsets.",
      },
    ],
  }),
});

const menuCategories = [
  { id: "seafood", label: "Seafood", icon: Fish },
  { id: "dinner", label: "Dinner", icon: UtensilsCrossed },
  { id: "cocktails", label: "Cocktails", icon: GlassWater },
  { id: "wine", label: "Wine", icon: Wine },
  { id: "breakfast", label: "Breakfast", icon: Coffee },
  { id: "desserts", label: "Desserts", icon: IceCreamCone },
];

const menuItems: Record<
  string,
  { title: string; desc: string; price: string; img: string }[]
> = {
  seafood: [
    {
      title: "Grilled Octopus",
      desc: "Aegean octopus, smoked paprika, lemon confit",
      price: "€38",
      img: menuSeafood,
    },
    {
      title: "Oyster Selection",
      desc: "Six seasonal oysters, mignonette, citrus caviar",
      price: "€42",
      img: menuSeafood,
    },
    {
      title: "Whole Sea Bass",
      desc: "Salt-crusted, wild herbs, extra virgin olive oil",
      price: "€64",
      img: menuSeafood,
    },
  ],
  dinner: [
    {
      title: "Truffle Tagliolini",
      desc: "Fresh pasta, black truffle, aged parmesan",
      price: "€44",
      img: menuPasta,
    },
    {
      title: "Wagyu Tenderloin",
      desc: "A5 Wagyu, charred leeks, sea salt bearnaise",
      price: "€92",
      img: menuPasta,
    },
    {
      title: "Wild Mushroom Risotto",
      desc: "Carnaroli, porcini, aged pecorino",
      price: "€36",
      img: menuPasta,
    },
  ],
  cocktails: [
    {
      title: "Azure Sunset",
      desc: "Mezcal, passionfruit, hibiscus, smoked salt",
      price: "€22",
      img: menuCocktail,
    },
    {
      title: "Golden Hour",
      desc: "Champagne, saffron, elderflower, gold leaf",
      price: "€26",
      img: menuCocktail,
    },
    {
      title: "Tropical Breeze",
      desc: "White rum, coconut, lime, pandan",
      price: "€20",
      img: menuCocktail,
    },
  ],
  wine: [
    {
      title: "Assyrtiko Reserve",
      desc: "Santorini, volcanic minerality, 2021",
      price: "€120",
      img: menuCocktail,
    },
    {
      title: "Provence Rosé",
      desc: "Whispers of peach and sea breeze, 2023",
      price: "€95",
      img: menuCocktail,
    },
    {
      title: "Barolo Riserva",
      desc: "Piedmont, dark cherry, leather, 2018",
      price: "€180",
      img: menuCocktail,
    },
  ],
  breakfast: [
    {
      title: "Beach Benedict",
      desc: "Poached eggs, smoked salmon, avocado, sourdough",
      price: "€24",
      img: menuDessert,
    },
    {
      title: "Acai & Berries",
      desc: "Superfood bowl, coconut, honeycomb",
      price: "€18",
      img: menuDessert,
    },
    {
      title: "French Toast Brioche",
      desc: "Vanilla cream, mascarpone, seasonal fruit",
      price: "€22",
      img: menuDessert,
    },
  ],
  desserts: [
    {
      title: "Millefoglie",
      desc: "Layered pastry, wild berries, gold leaf",
      price: "€18",
      img: menuDessert,
    },
    {
      title: "Chocolate Sphere",
      desc: "70% Valrhona, salted caramel, hazelnut",
      price: "€20",
      img: menuDessert,
    },
    {
      title: "Yuzu Cheesecake",
      desc: "Citrus curd, meringue, basil sorbet",
      price: "€19",
      img: menuDessert,
    },
  ],
};

const gallery = [
  { src: g1, h: "h-[420px]" },
  { src: g2, h: "h-[320px]" },
  { src: g3, h: "h-[360px]" },
  { src: g4, h: "h-[460px]" },
  { src: g5, h: "h-[340px]" },
  { src: g6, h: "h-[400px]" },
];

const events = [
  {
    date: "SAT · JUL 27",
    title: "Sunset Sessions with DJ Mira",
    desc: "A cinematic 6-hour set at the water's edge as the sky turns gold.",
    img: eventDj,
  },
  {
    date: "FRI · AUG 09",
    title: "Golden Hour Champagne Ritual",
    desc: "Vintage champagne, oysters, and a hosted tasting on the deck.",
    img: eventSunset,
  },
  {
    date: "SUN · AUG 18",
    title: "Estate Wine Tasting",
    desc: "Six terroirs paired with our chef's seasonal small plates.",
    img: eventWine,
  },
];

const testimonials = [
  {
    name: "Sofia Marchetti",
    role: "Travel Editor, Vogue",
    rating: 5,
    text: "Azure isn't a restaurant — it's a slow, radiant afternoon that turns into the most beautiful night of your trip.",
  },
  {
    name: "James Whitmore",
    role: "Guest since 2019",
    rating: 5,
    text: "The service is telepathic and the seafood is the best I've had this side of the Mediterranean.",
  },
  {
    name: "Anaïs Laurent",
    role: "Sommelier",
    rating: 5,
    text: "A wine list with real soul and a sunset that makes every glass unforgettable.",
  },
];

function useSunsetCountdown() {
  const [remaining, setRemaining] = useState({ h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const target = new Date(now);
      target.setHours(20, 15, 0, 0);
      if (target.getTime() <= now.getTime()) target.setDate(target.getDate() + 1);
      const diff = target.getTime() - now.getTime();
      const h = Math.floor(diff / 3.6e6);
      const m = Math.floor((diff % 3.6e6) / 6e4);
      const s = Math.floor((diff % 6e4) / 1000);
      setRemaining({ h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return remaining;
}

function Index() {
  const [activeCat, setActiveCat] = useState("seafood");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const sunset = useSunsetCountdown();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section id="home" className="relative h-[100dvh] min-h-[720px] w-full overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Azure Beach Club at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/80"
          >
            <span className="h-px w-10 bg-accent" />
            Est. Since 2011
            <span className="h-px w-10 bg-accent" />
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.75rem,7vw,6rem)] font-light leading-[1.05]"
          >
            Where Luxury <br />
            <span className="italic text-gradient-gold">Meets the Sea</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-6 max-w-xl text-base text-white/85 sm:text-lg"
          >
            Unforgettable sunsets, signature cocktails, and Mediterranean cuisine served
            steps from the turquoise sea.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#reserve"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium tracking-wide text-accent-foreground shadow-2xl shadow-accent/30 transition hover:scale-[1.03] hover:shadow-accent/60"
            >
              <CalendarCheck size={18} /> Reserve a Table
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10"
            >
              Explore Menu <ChevronRight size={16} />
            </a>
          </motion.div>

          {/* Sunset countdown */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 glass rounded-full px-6 py-3 text-xs uppercase tracking-[0.3em] text-white/90 flex items-center gap-3"
          >
            <Sun size={14} className="text-accent" />
            Next sunset in {String(sunset.h).padStart(2, "0")}h{" "}
            {String(sunset.m).padStart(2, "0")}m {String(sunset.s).padStart(2, "0")}s
          </motion.div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          {[
            { k: "13", l: "Years by the sea" },
            { k: "48", l: "Signature cocktails" },
            { k: "2 Star", l: "Michelin recognition" },
            { k: "365", l: "Sunsets a year" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08} className="text-center">
              <div className="font-display text-3xl text-primary md:text-4xl">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.l}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="mx-auto max-w-7xl px-6 py-28">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-accent">La Carte</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">A Taste of the Coast</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Mediterranean plates, fire-kissed seafood and cocktails crafted the moment the
            sun begins to soften.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="flex flex-wrap justify-center gap-2">
            {menuCategories.map((c) => {
              const Icon = c.icon;
              const active = activeCat === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCat(c.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition ${
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground/70 hover:border-accent hover:text-accent"
                  }`}
                >
                  <Icon size={15} /> {c.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {menuItems[activeCat].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <article className="group overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition hover:shadow-2xl hover:shadow-primary/10">
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-display text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="shrink-0 font-display text-xl text-accent">
                    {item.price}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative overflow-hidden bg-primary text-primary-foreground"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-28 md:grid-cols-2">
          <Reveal>
            <img
              src={aboutImg}
              alt="Azure Beach Club dining terrace"
              loading="lazy"
              className="h-[600px] w-full rounded-3xl object-cover shadow-2xl"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <span className="text-xs uppercase tracking-[0.35em] text-accent">
              Our Story
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              A Sanctuary Between <span className="italic">Sand & Stars</span>
            </h2>
            <p className="mt-6 text-primary-foreground/80">
              For over a decade, Azure has been a refuge for those who chase the last
              light of day. Our chefs source directly from Aegean fishermen and local
              farms, our sommeliers curate cellars from small European estates, and our
              hosts remember your name.
            </p>
            <p className="mt-4 text-primary-foreground/80">
              Whether it's a private dinner beneath the pergola or an all-night beach
              session, every hour at Azure is designed to feel effortlessly ours.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { k: "Chef", v: "Elena Voss" },
                { k: "Cuisine", v: "Mediterranean" },
                { k: "Dress", v: "Elegant Casual" },
              ].map((v) => (
                <div key={v.k}>
                  <div className="text-xs uppercase tracking-widest text-accent">
                    {v.k}
                  </div>
                  <div className="mt-1 font-display text-lg">{v.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="mx-auto max-w-7xl px-6 py-28">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-accent">Gallery</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">
            Moments by the Water
          </h2>
        </Reveal>
        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <button
                onClick={() => setLightbox(g.src)}
                className="mb-6 block w-full overflow-hidden rounded-3xl bg-muted"
              >
                <img
                  src={g.src}
                  alt=""
                  loading="lazy"
                  className={`${g.h} w-full object-cover transition-transform duration-[1200ms] hover:scale-110`}
                />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6 backdrop-blur-xl"
        >
          <img
            src={lightbox}
            alt="Gallery view"
            className="max-h-[90dvh] max-w-6xl rounded-2xl object-contain shadow-2xl"
          />
          <button
            aria-label="Close"
            className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <X size={22} />
          </button>
        </div>
      )}

      {/* EVENTS */}
      <section id="events" className="bg-secondary/40 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-accent">
              What's On
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">Upcoming Evenings</h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {events.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={e.img}
                      alt={e.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white backdrop-blur-md">
                      {e.date}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl">{e.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{e.desc}</p>
                    <a
                      href="#reserve"
                      className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all"
                    >
                      Reserve spot <ChevronRight size={16} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-accent">
            Kind Words
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">Guest Impressions</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-3xl bg-card p-8 ring-1 ring-border">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-6 font-display text-xl leading-snug text-foreground/90">
                  "{t.text}"
                </p>
                <div className="mt-8 border-t border-border pt-4">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {t.role}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RESERVATION */}
      <section
        id="reserve"
        className="relative overflow-hidden bg-primary text-primary-foreground"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${g4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-28 md:grid-cols-2">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.35em] text-accent">
              Reservations
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">
              Reserve Your <span className="italic">Sunset</span>
            </h2>
            <p className="mt-6 max-w-md text-primary-foreground/80">
              Tables are limited. We recommend booking two weeks in advance for weekend
              seatings and sunset hours.
            </p>
            <ul className="mt-10 space-y-4 text-primary-foreground/85">
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-accent" /> Open daily · 10:00 – 02:00
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" /> +30 210 000 0000
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-accent" /> 1 Azure Bay, Mykonos, GR
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you — we'll confirm your reservation shortly.");
              }}
              className="rounded-3xl bg-card p-8 text-foreground shadow-2xl ring-1 ring-border"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" required className="mt-2" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="guests">Guests</Label>
                  <Input id="guests" type="number" min={1} defaultValue={2} className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" required className="mt-2" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" defaultValue="20:00" className="mt-2" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="notes">Special requests</Label>
                  <Textarea id="notes" rows={3} className="mt-2" />
                </div>
              </div>
              <Button
                type="submit"
                className="mt-6 w-full rounded-full bg-accent py-6 text-accent-foreground hover:bg-accent/90"
              >
                Confirm Reservation
              </Button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* CONTACT / MAP */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.35em] text-accent">
              Find Us
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">On the Shoreline</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              A short drive from the harbor, tucked between the cliffs and the open sea.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-secondary p-3 text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="font-medium">Address</div>
                  <div className="text-sm text-muted-foreground">
                    1 Azure Bay, Mykonos 84600, Greece
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-secondary p-3 text-primary">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="font-medium">Opening Hours</div>
                  <div className="text-sm text-muted-foreground">
                    Mon – Sun · 10:00 – 02:00
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-secondary p-3 text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="font-medium">Reservations</div>
                  <div className="text-sm text-muted-foreground">+30 210 000 0000</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-secondary p-3 text-primary">
                  <Waves size={18} />
                </div>
                <div>
                  <div className="font-medium">Parking & Valet</div>
                  <div className="text-sm text-muted-foreground">
                    Complimentary valet from 18:00
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="h-[520px] overflow-hidden rounded-3xl ring-1 ring-border">
              <iframe
                title="Azure Beach Club location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=25.32%2C37.44%2C25.36%2C37.46&layer=mapnik"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-secondary/40 pt-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 md:grid-cols-4">
          <div>
            <div className="font-display text-2xl">Azure</div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Beach Club
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              A luxury beachfront restaurant crafted for slow days and unforgettable
              nights.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold">Visit</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>1 Azure Bay, Mykonos</li>
              <li>Daily · 10:00 – 02:00</li>
              <li>+30 210 000 0000</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Explore</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#menu" className="hover:text-accent">
                  Menu
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-accent">
                  Events
                </a>
              </li>
              <li>
                <a href="#reserve" className="hover:text-accent">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-accent">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Newsletter</div>
            <p className="mt-4 text-sm text-muted-foreground">
              Sunset invitations, new menus and private events.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed. À bientôt.");
              }}
              className="mt-4 flex gap-2"
            >
              <Input type="email" required placeholder="you@sea.com" />
              <Button type="submit" size="icon" className="bg-primary text-primary-foreground">
                <Mail size={16} />
              </Button>
            </form>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Music2].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="rounded-full border border-border p-2 text-foreground/70 transition hover:border-accent hover:text-accent"
                >
                  <I size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border py-6">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-xs text-muted-foreground sm:flex-row">
            <div>© {new Date().getFullYear()} Azure Beach Club. All rights reserved.</div>
            <div>Crafted with love by the sea.</div>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTIONS */}
      <a
        href="https://wa.me/302100000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition hover:scale-110"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href="#reserve"
        className="fixed bottom-6 right-6 z-40 hidden md:inline-flex items-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-medium text-accent-foreground shadow-xl shadow-accent/30 transition hover:scale-105"
      >
        <CalendarCheck size={16} /> Reserve
      </a>
    </div>
  );
}
