/** Static mock listings for demo filtering & detail pages */
export const PROPERTIES = [
  {
    id: "ofis-nizami",
    category: "office",
    city: "baku",
    area: 250,
    price: 1200,
    deal: "rent",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "ofis-port",
    category: "office",
    city: "baku",
    area: 180,
    price: 950,
    deal: "rent",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "anbar-sumqayit",
    category: "warehouse",
    city: "sumgayit",
    area: 1200,
    price: 2800,
    deal: "rent",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "anbar-ganja",
    category: "warehouse",
    city: "ganja",
    area: 800,
    price: 1900,
    deal: "rent",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "torpaq-absheron",
    category: "land",
    city: "baku",
    area: 5000,
    price: 450000,
    deal: "sale",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "ticaret-28may",
    category: "retail",
    city: "baku",
    area: 95,
    price: 2200,
    deal: "rent",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1441984904996-e0b14ba4d4d0?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "ofis-ganja",
    category: "office",
    city: "ganja",
    area: 140,
    price: 600,
    deal: "rent",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "ticaret-sumqayit",
    category: "retail",
    city: "sumgayit",
    area: 120,
    price: 1100,
    deal: "rent",
    img: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

export const PRICE_RANGES = [
  { id: "any", min: 0, max: Infinity },
  { id: "0-1000", min: 0, max: 1000 },
  { id: "1000-2000", min: 1000, max: 2000 },
  { id: "2000-5000", min: 2000, max: 5000 },
  { id: "5000+", min: 5000, max: Infinity },
];

export function filterProperties(list, { city, category, price }) {
  const range = PRICE_RANGES.find((r) => r.id === price) || PRICE_RANGES[0];
  return list.filter((p) => {
    if (city && city !== "any" && p.city !== city) return false;
    if (category && category !== "any" && p.category !== category) return false;
    if (p.price < range.min || p.price > range.max) return false;
    return true;
  });
}

export const PARTNERS = [
  { name: "AzerGold", color: "#1a1d21" },
  { name: "SOCAR", color: "#c8102e" },
  { name: "Pasha Holding", color: "#0b3d5c" },
];
