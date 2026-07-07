export const products = [
  {
    id: "orbit-pro-headphones",
    name: "Orbit Pro ANC",
    brand: "Auralux",
    category: "Tecnologia",
    price: 149,
    compareAt: 199,
    rating: 4.9,
    reviews: 824,
    stock: 18,
    badge: "Top ventas",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    description:
      "Audifonos con cancelacion activa, bateria de 42 horas y estuche compacto.",
    specs: ["42 h", "ANC", "Bluetooth 5.3"],
  },
  {
    id: "nomad-travel-pack",
    name: "Nomad Pack 28L",
    brand: "Northline",
    category: "Outdoor",
    price: 96,
    compareAt: 128,
    rating: 4.8,
    reviews: 391,
    stock: 24,
    badge: "Nuevo",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    description:
      "Mochila impermeable con compartimento tech y organizacion para viajes cortos.",
    specs: ["28 L", "Impermeable", "Laptop 16"],
  },
  {
    id: "linen-everyday-shirt",
    name: "Linen Everyday",
    brand: "Studio 41",
    category: "Moda",
    price: 54,
    compareAt: 72,
    rating: 4.7,
    reviews: 216,
    stock: 30,
    badge: "Verano",
    image:
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=900&q=80",
    description:
      "Camisa de lino respirable con corte relajado y botones de nacar reciclado.",
    specs: ["Lino", "Regular fit", "XS-XL"],
  },
  {
    id: "arc-smartwatch",
    name: "Arc Watch S",
    brand: "Pulseware",
    category: "Tecnologia",
    price: 229,
    compareAt: 279,
    rating: 4.9,
    reviews: 642,
    stock: 12,
    badge: "Premium",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30e?auto=format&fit=crop&w=900&q=80",
    description:
      "Reloj inteligente con metricas deportivas, pagos NFC y pantalla AMOLED.",
    specs: ["AMOLED", "NFC", "5 ATM"],
  },
  {
    id: "ceramic-brew-kit",
    name: "Ceramic Brew Kit",
    brand: "Casa Nube",
    category: "Hogar",
    price: 78,
    compareAt: 98,
    rating: 4.6,
    reviews: 174,
    stock: 16,
    badge: "Artesanal",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
    description:
      "Set de cafe filtrado con dripper ceramico, jarra termica y filtros incluidos.",
    specs: ["Ceramica", "600 ml", "Incluye filtros"],
  },
  {
    id: "glow-serum-set",
    name: "Glow Serum Set",
    brand: "Marea Lab",
    category: "Belleza",
    price: 63,
    compareAt: 84,
    rating: 4.8,
    reviews: 508,
    stock: 22,
    badge: "Clean",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
    description:
      "Rutina de serum hidratante, vitamina C y crema ligera para uso diario.",
    specs: ["Vegano", "Dia/noche", "3 piezas"],
  },
  {
    id: "terra-runner-sneaker",
    name: "Terra Runner",
    brand: "Volt",
    category: "Moda",
    price: 118,
    compareAt: 148,
    rating: 4.7,
    reviews: 733,
    stock: 20,
    badge: "Edicion limitada",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    description:
      "Sneaker ligero con suela de alto retorno y upper tejido transpirable.",
    specs: ["Unisex", "Tallas 36-45", "Ultra light"],
  },
  {
    id: "luma-desk-lamp",
    name: "Luma Desk Lamp",
    brand: "Aster",
    category: "Hogar",
    price: 89,
    compareAt: 119,
    rating: 4.6,
    reviews: 297,
    stock: 14,
    badge: "Eco",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
    description:
      "Lampara LED regulable con base inalambrica y temperatura de luz ajustable.",
    specs: ["LED", "Qi", "3 tonos"],
  },
];

export const categories = ["Todos", ...new Set(products.map((product) => product.category))];
