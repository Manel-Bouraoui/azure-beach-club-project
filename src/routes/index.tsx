import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  X,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  CalendarCheck,
  Star,
  ChevronRight,
  Waves,
  Sun,
  Mail,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig, socialIconMap, menuIconMap } from "@/config/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: siteConfig.seo.title },
      { name: "description", content: siteConfig.seo.description },
      { property: "og:title", content: siteConfig.seo.ogTitle },
      { property: "og:description", content: siteConfig.seo.ogDescription },
      ...(siteConfig.seo.ogImage
        ? [
            { property: "og:image", content: siteConfig.seo.ogImage },
            { name: "twitter:image", content: siteConfig.seo.ogImage },
          ]
        : []),
    ],
  }),
});

function useSunsetCountdown() {
  const { hour, minute } = siteConfig.hero.sunset;
  const [remaining, setRemaining] = useState({ h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const target = new Date(now);
      target.setHours(hour, minute, 0, 0);
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
  }, [hour, minute]);
  return remaining;
}

function Index() {
  const {
    brand,
    contact,
    hours,
    social,
    hero,
    stats,
    about,
    menu,
    gallery,
    events,
    testimonials,
    reservation,
    contactSection,
    footer,
  } = siteConfig;

  const [activeCat, setActiveCat] = useState(menu.categories[0]?.id ?? "");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const sunset = useSunsetCountdown();
  const activeItems = menu.items[activeCat] ?? [];
  const reservationBg = gallery.items[3]?.src ?? gallery.items[0]?.src;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section id="home" className="relative h-[100dvh] min-h-[720px] w-full overflow-hidden">
        <motion.img
          src={hero.image}
          alt={hero.imageAlt}
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
            {hero.eyebrow}
            <span className="h-px w-10 bg-accent" />
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.75rem,7vw,6rem)] font-light leading-[1.05]"
          >
            {hero.titleLine1} <br />
            <span className="italic text-gradient-gold">{hero.titleLine2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-6 max-w-xl text-base text-white/85 sm:text-lg"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium tracking-wide text-accent-foreground shadow-2xl shadow-accent/30 transition hover:scale-[1.03] hover:shadow-accent/60"
            >
              <CalendarCheck size={18} /> {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10"
            >
              {hero.secondaryCta.label} <ChevronRight size={16} />
            </a>
          </motion.div>

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

      {/* STATS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="font-display text-3xl text-primary md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="mx-auto max-w-7xl px-6 py-28">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-accent">{menu.eyebrow}</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">{menu.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{menu.intro}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="flex flex-wrap justify-center gap-2">
            {menu.categories.map((c) => {
              const Icon = menuIconMap[c.icon];
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
          {activeItems.map((item, i) => (
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
                  <span className="shrink-0 font-display text-xl text-accent">{item.price}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-28 md:grid-cols-2">
          <Reveal>
            <img
              src={about.image}
              alt={about.imageAlt}
              loading="lazy"
              className="h-[600px] w-full rounded-3xl object-cover shadow-2xl"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <span className="text-xs uppercase tracking-[0.35em] text-accent">{about.eyebrow}</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              {about.titleLine1} <span className="italic">{about.titleLineItalic}</span>
            </h2>
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "mt-6 text-primary-foreground/80" : "mt-4 text-primary-foreground/80"}>
                {p}
              </p>
            ))}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {about.facts.map((v) => (
                <div key={v.key}>
                  <div className="text-xs uppercase tracking-widest text-accent">{v.key}</div>
                  <div className="mt-1 font-display text-lg">{v.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="mx-auto max-w-7xl px-6 py-28">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-accent">{gallery.eyebrow}</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">{gallery.title}</h2>
        </Reveal>
        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {gallery.items.map((g, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <button
                onClick={() => setLightbox(g.src)}
                className="mb-6 block w-full overflow-hidden rounded-3xl bg-muted"
              >
                <img
                  src={g.src}
                  alt={g.alt ?? ""}
                  loading="lazy"
                  className={`${g.height} w-full object-cover transition-transform duration-[1200ms] hover:scale-110`}
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
          <img src={lightbox} alt="Gallery view" className="max-h-[90dvh] max-w-6xl rounded-2xl object-contain shadow-2xl" />
          <button aria-label="Close" className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
            <X size={22} />
          </button>
        </div>
      )}

      {/* EVENTS */}
      <section id="events" className="bg-secondary/40 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-accent">{events.eyebrow}</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">{events.title}</h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {events.items.map((e, i) => (
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
          <span className="text-xs uppercase tracking-[0.35em] text-accent">{testimonials.eyebrow}</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">{testimonials.title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-3xl bg-card p-8 ring-1 ring-border">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-6 font-display text-xl leading-snug text-foreground/90">"{t.text}"</p>
                <div className="mt-8 border-t border-border pt-4">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RESERVATION */}
      <section id="reserve" className="relative overflow-hidden bg-primary text-primary-foreground">
        {reservationBg && (
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: `url(${reservationBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
        )}
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-28 md:grid-cols-2">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.35em] text-accent">{reservation.eyebrow}</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">
              {reservation.titleLine1} <span className="italic">{reservation.titleLineItalic}</span>
            </h2>
            <p className="mt-6 max-w-md text-primary-foreground/80">{reservation.description}</p>
            <ul className="mt-10 space-y-4 text-primary-foreground/85">
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-accent" /> {hours.label}
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" /> {contact.phone}
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-accent" /> {contact.address.full}
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(reservation.successMessage);
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
                  <Input id="guests" type="number" min={1} defaultValue={reservation.defaultGuests} className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" required className="mt-2" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" defaultValue={reservation.defaultTime} className="mt-2" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="notes">Special requests</Label>
                  <Textarea id="notes" rows={3} className="mt-2" />
                </div>
              </div>
              <Button type="submit" className="mt-6 w-full rounded-full bg-accent py-6 text-accent-foreground hover:bg-accent/90">
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
            <span className="text-xs uppercase tracking-[0.35em] text-accent">{contactSection.eyebrow}</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">{contactSection.title}</h2>
            <p className="mt-4 max-w-md text-muted-foreground">{contactSection.intro}</p>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-secondary p-3 text-primary"><MapPin size={18} /></div>
                <div>
                  <div className="font-medium">Address</div>
                  <div className="text-sm text-muted-foreground">{contact.address.full}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-secondary p-3 text-primary"><Clock size={18} /></div>
                <div>
                  <div className="font-medium">Opening Hours</div>
                  <div className="text-sm text-muted-foreground">{hours.detail}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-secondary p-3 text-primary"><Phone size={18} /></div>
                <div>
                  <div className="font-medium">Reservations</div>
                  <div className="text-sm text-muted-foreground">{contact.phone}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-secondary p-3 text-primary"><Waves size={18} /></div>
                <div>
                  <div className="font-medium">Parking & Valet</div>
                  <div className="text-sm text-muted-foreground">{contact.parkingNote}</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="h-[520px] overflow-hidden rounded-3xl ring-1 ring-border">
              <iframe
                title={`${brand.name} ${brand.suffix} location`}
                src={contact.mapEmbedUrl}
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
            <div className="font-display text-2xl">{brand.name}</div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{brand.suffix}</div>
            <p className="mt-4 text-sm text-muted-foreground">{footer.description}</p>
          </div>
          <div>
            <div className="text-sm font-semibold">Visit</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>{contact.address.full}</li>
              <li>{hours.detail}</li>
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
            </ul>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold">{col.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-accent">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div className="text-sm font-semibold">{footer.newsletter.title}</div>
            <p className="mt-4 text-sm text-muted-foreground">{footer.newsletter.description}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(footer.newsletter.successMessage);
              }}
              className="mt-4 flex gap-2"
            >
              <Input type="email" required placeholder={footer.newsletter.placeholder} />
              <Button type="submit" size="icon" className="bg-primary text-primary-foreground">
                <Mail size={16} />
              </Button>
            </form>
            <div className="mt-6 flex gap-3">
              {social.map((s) => {
                const Icon = socialIconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="rounded-full border border-border p-2 text-foreground/70 transition hover:border-accent hover:text-accent"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border-t border-border py-6">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-xs text-muted-foreground sm:flex-row">
            <div>© {new Date().getFullYear()} {brand.name} {brand.suffix}. All rights reserved.</div>
            <div>{footer.tagline}</div>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTIONS */}
      <a
        href={contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition hover:scale-110"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href={hero.primaryCta.href}
        className="fixed bottom-6 right-6 z-40 hidden md:inline-flex items-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-medium text-accent-foreground shadow-xl shadow-accent/30 transition hover:scale-105"
      >
        <CalendarCheck size={16} /> Reserve
      </a>
    </div>
  );
}
