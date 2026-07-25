/**
 * ============================================================
 *  BEACH BAR RESTAURANT — SITE CONFIGURATION
 * ============================================================
 *  Everything on the website is driven from this file.
 *  Rebrand the whole site by editing values here — do NOT edit
 *  the components. All images live in `src/assets/`.
 *
 *  Sections covered:
 *   - Brand (name, tagline, logo text, colors, fonts)
 *   - Contact (phone, email, address, whatsapp, map)
 *   - Opening hours
 *   - Social links
 *   - Navigation
 *   - Hero
 *   - Stats strip
 *   - About
 *   - Menu categories + items
 *   - Gallery
 *   - Events
 *   - Testimonials
 *   - Reservation form settings
 *   - Footer
 *   - SEO
 * ============================================================
 */

import type { LucideIcon } from "lucide-react";
import {
  Fish,
  UtensilsCrossed,
  GlassWater,
  Wine,
  Coffee,
  IceCreamCone,
  Instagram,
  Facebook,
  Music2,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";

// -- Images ---------------------------------------------------
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

// -- Types ----------------------------------------------------
export type SocialIconName =
  | "instagram"
  | "facebook"
  | "tiktok"
  | "twitter"
  | "youtube"
  | "linkedin";

export type MenuIconName =
  | "seafood"
  | "dinner"
  | "cocktails"
  | "wine"
  | "breakfast"
  | "desserts";

export const socialIconMap: Record<SocialIconName, LucideIcon> = {
  instagram: Instagram,
  facebook: Facebook,
  tiktok: Music2,
  twitter: Twitter,
  youtube: Youtube,
  linkedin: Linkedin,
};

export const menuIconMap: Record<MenuIconName, LucideIcon> = {
  seafood: Fish,
  dinner: UtensilsCrossed,
  cocktails: GlassWater,
  wine: Wine,
  breakfast: Coffee,
  desserts: IceCreamCone,
};

export interface SiteConfig {
  brand: {
    name: string;
    suffix: string;
    tagline: string;
    established: string;
    /** Optional logo image URL. When null, text logo (name + suffix) is used. */
    logoUrl: string | null;
    /** Brand colors as oklch() values (map to CSS custom properties at runtime). */
    colors: {
      ocean: string;
      turquoise: string;
      gold: string;
      sand: string;
    };
  };
  contact: {
    phone: string;
    phoneHref: string;
    email: string;
    whatsappUrl: string;
    address: {
      line1: string;
      city: string;
      country: string;
      full: string;
    };
    mapEmbedUrl: string;
    parkingNote: string;
  };
  hours: {
    label: string;
    detail: string;
  };
  social: { icon: SocialIconName; href: string; label: string }[];
  nav: { label: string; href: string }[];
  hero: {
    image: string;
    imageAlt: string;
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    /** Local sunset time (24h) shown in countdown pill. */
    sunset: { hour: number; minute: number };
  };
  stats: { value: string; label: string }[];
  about: {
    eyebrow: string;
    titleLine1: string;
    titleLineItalic: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
    facts: { key: string; value: string }[];
  };
  menu: {
    eyebrow: string;
    title: string;
    intro: string;
    categories: { id: string; label: string; icon: MenuIconName }[];
    items: Record<
      string,
      { title: string; desc: string; price: string; img: string }[]
    >;
  };
  gallery: {
    eyebrow: string;
    title: string;
    items: { src: string; height: string; alt?: string }[];
  };
  events: {
    eyebrow: string;
    title: string;
    items: { date: string; title: string; desc: string; img: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: { name: string; role: string; rating: number; text: string }[];
  };
  reservation: {
    eyebrow: string;
    titleLine1: string;
    titleLineItalic: string;
    description: string;
    defaultGuests: number;
    defaultTime: string;
    successMessage: string;
  };
  contactSection: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  footer: {
    description: string;
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      successMessage: string;
    };
    columns: { title: string; links: { label: string; href: string }[] }[];
    tagline: string;
  };
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImage?: string;
  };
}

// ============================================================
//  ACTIVE CONFIG — edit anything below to rebrand the site
// ============================================================
export const siteConfig: SiteConfig = {
  brand: {
    name: "Azure",
    suffix: "Beach Club",
    tagline:
      "A luxury beachfront restaurant crafted for slow days and unforgettable nights.",
    established: "Est. Since 2011",
    logoUrl: null,
    colors: {
      ocean: "oklch(0.35 0.08 235)",
      turquoise: "oklch(0.72 0.13 190)",
      gold: "oklch(0.78 0.13 85)",
      sand: "oklch(0.96 0.02 85)",
    },
  },
  contact: {
    phone: "+30 210 000 0000",
    phoneHref: "tel:+302100000000",
    email: "hello@azurebeachclub.com",
    whatsappUrl: "https://wa.me/302100000000",
    address: {
      line1: "1 Azure Bay",
      city: "Mykonos 84600",
      country: "Greece",
      full: "1 Azure Bay, Mykonos 84600, Greece",
    },
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=25.32%2C37.44%2C25.36%2C37.46&layer=mapnik",
    parkingNote: "Complimentary valet from 18:00",
  },
  hours: {
    label: "Open daily · 10:00 – 02:00",
    detail: "Mon – Sun · 10:00 – 02:00",
  },
  social: [
    { icon: "instagram", href: "#", label: "Instagram" },
    { icon: "facebook", href: "#", label: "Facebook" },
    { icon: "tiktok", href: "#", label: "TikTok" },
  ],
  nav: [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Events", href: "#events" },
    { label: "About", href: "#about" },
    { label: "Reserve", href: "#reserve" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    image: heroImg,
    imageAlt: "Azure Beach Club at golden hour",
    eyebrow: "Est. Since 2011",
    titleLine1: "Where Luxury",
    titleLine2: "Meets the Sea",
    subtitle:
      "Unforgettable sunsets, signature cocktails, and Mediterranean cuisine served steps from the turquoise sea.",
    primaryCta: { label: "Reserve a Table", href: "#reserve" },
    secondaryCta: { label: "Explore Menu", href: "#menu" },
    sunset: { hour: 20, minute: 15 },
  },
  stats: [
    { value: "13", label: "Years by the sea" },
    { value: "48", label: "Signature cocktails" },
    { value: "2 Star", label: "Michelin recognition" },
    { value: "365", label: "Sunsets a year" },
  ],
  about: {
    eyebrow: "Our Story",
    titleLine1: "A Sanctuary Between",
    titleLineItalic: "Sand & Stars",
    paragraphs: [
      "For over a decade, Azure has been a refuge for those who chase the last light of day. Our chefs source directly from Aegean fishermen and local farms, our sommeliers curate cellars from small European estates, and our hosts remember your name.",
      "Whether it's a private dinner beneath the pergola or an all-night beach session, every hour at Azure is designed to feel effortlessly ours.",
    ],
    image: aboutImg,
    imageAlt: "Azure Beach Club dining terrace",
    facts: [
      { key: "Chef", value: "Elena Voss" },
      { key: "Cuisine", value: "Mediterranean" },
      { key: "Dress", value: "Elegant Casual" },
    ],
  },
  menu: {
    eyebrow: "La Carte",
    title: "A Taste of the Coast",
    intro:
      "Mediterranean plates, fire-kissed seafood and cocktails crafted the moment the sun begins to soften.",
    categories: [
      { id: "seafood", label: "Seafood", icon: "seafood" },
      { id: "dinner", label: "Dinner", icon: "dinner" },
      { id: "cocktails", label: "Cocktails", icon: "cocktails" },
      { id: "wine", label: "Wine", icon: "wine" },
      { id: "breakfast", label: "Breakfast", icon: "breakfast" },
      { id: "desserts", label: "Desserts", icon: "desserts" },
    ],
    items: {
      seafood: [
        { title: "Grilled Octopus", desc: "Aegean octopus, smoked paprika, lemon confit", price: "€38", img: menuSeafood },
        { title: "Oyster Selection", desc: "Six seasonal oysters, mignonette, citrus caviar", price: "€42", img: menuSeafood },
        { title: "Whole Sea Bass", desc: "Salt-crusted, wild herbs, extra virgin olive oil", price: "€64", img: menuSeafood },
      ],
      dinner: [
        { title: "Truffle Tagliolini", desc: "Fresh pasta, black truffle, aged parmesan", price: "€44", img: menuPasta },
        { title: "Wagyu Tenderloin", desc: "A5 Wagyu, charred leeks, sea salt bearnaise", price: "€92", img: menuPasta },
        { title: "Wild Mushroom Risotto", desc: "Carnaroli, porcini, aged pecorino", price: "€36", img: menuPasta },
      ],
      cocktails: [
        { title: "Azure Sunset", desc: "Mezcal, passionfruit, hibiscus, smoked salt", price: "€22", img: menuCocktail },
        { title: "Golden Hour", desc: "Champagne, saffron, elderflower, gold leaf", price: "€26", img: menuCocktail },
        { title: "Tropical Breeze", desc: "White rum, coconut, lime, pandan", price: "€20", img: menuCocktail },
      ],
      wine: [
        { title: "Assyrtiko Reserve", desc: "Santorini, volcanic minerality, 2021", price: "€120", img: menuCocktail },
        { title: "Provence Rosé", desc: "Whispers of peach and sea breeze, 2023", price: "€95", img: menuCocktail },
        { title: "Barolo Riserva", desc: "Piedmont, dark cherry, leather, 2018", price: "€180", img: menuCocktail },
      ],
      breakfast: [
        { title: "Beach Benedict", desc: "Poached eggs, smoked salmon, avocado, sourdough", price: "€24", img: menuDessert },
        { title: "Acai & Berries", desc: "Superfood bowl, coconut, honeycomb", price: "€18", img: menuDessert },
        { title: "French Toast Brioche", desc: "Vanilla cream, mascarpone, seasonal fruit", price: "€22", img: menuDessert },
      ],
      desserts: [
        { title: "Millefoglie", desc: "Layered pastry, wild berries, gold leaf", price: "€18", img: menuDessert },
        { title: "Chocolate Sphere", desc: "70% Valrhona, salted caramel, hazelnut", price: "€20", img: menuDessert },
        { title: "Yuzu Cheesecake", desc: "Citrus curd, meringue, basil sorbet", price: "€19", img: menuDessert },
      ],
    },
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Moments by the Water",
    items: [
      { src: g1, height: "h-[420px]" },
      { src: g2, height: "h-[320px]" },
      { src: g3, height: "h-[360px]" },
      { src: g4, height: "h-[460px]" },
      { src: g5, height: "h-[340px]" },
      { src: g6, height: "h-[400px]" },
    ],
  },
  events: {
    eyebrow: "What's On",
    title: "Upcoming Evenings",
    items: [
      { date: "SAT · JUL 27", title: "Sunset Sessions with DJ Mira", desc: "A cinematic 6-hour set at the water's edge as the sky turns gold.", img: eventDj },
      { date: "FRI · AUG 09", title: "Golden Hour Champagne Ritual", desc: "Vintage champagne, oysters, and a hosted tasting on the deck.", img: eventSunset },
      { date: "SUN · AUG 18", title: "Estate Wine Tasting", desc: "Six terroirs paired with our chef's seasonal small plates.", img: eventWine },
    ],
  },
  testimonials: {
    eyebrow: "Kind Words",
    title: "Guest Impressions",
    items: [
      { name: "Sofia Marchetti", role: "Travel Editor, Vogue", rating: 5, text: "Azure isn't a restaurant — it's a slow, radiant afternoon that turns into the most beautiful night of your trip." },
      { name: "James Whitmore", role: "Guest since 2019", rating: 5, text: "The service is telepathic and the seafood is the best I've had this side of the Mediterranean." },
      { name: "Anaïs Laurent", role: "Sommelier", rating: 5, text: "A wine list with real soul and a sunset that makes every glass unforgettable." },
    ],
  },
  reservation: {
    eyebrow: "Reservations",
    titleLine1: "Reserve Your",
    titleLineItalic: "Sunset",
    description:
      "Tables are limited. We recommend booking two weeks in advance for weekend seatings and sunset hours.",
    defaultGuests: 2,
    defaultTime: "20:00",
    successMessage: "Thank you — we'll confirm your reservation shortly.",
  },
  contactSection: {
    eyebrow: "Find Us",
    title: "On the Shoreline",
    intro:
      "A short drive from the harbor, tucked between the cliffs and the open sea.",
  },
  footer: {
    description:
      "A luxury beachfront restaurant crafted for slow days and unforgettable nights.",
    newsletter: {
      title: "Newsletter",
      description: "Sunset invitations, new menus and private events.",
      placeholder: "you@sea.com",
      successMessage: "Subscribed. À bientôt.",
    },
    columns: [
      {
        title: "Explore",
        links: [
          { label: "Menu", href: "#menu" },
          { label: "Events", href: "#events" },
          { label: "Reservations", href: "#reserve" },
          { label: "Gallery", href: "#gallery" },
        ],
      },
    ],
    tagline: "Crafted with love by the sea.",
  },
  seo: {
    title: "Azure Beach Club — Where Luxury Meets the Sea",
    description:
      "Sunset cocktails, Mediterranean seafood and beachfront reservations at Azure Beach Club — a luxury beach destination on the sea.",
    ogTitle: "Azure Beach Club — Where Luxury Meets the Sea",
    ogDescription:
      "Signature cocktails, Mediterranean cuisine and unforgettable sunsets.",
  },
};
