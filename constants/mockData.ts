
export const mockCategories = [
  { _id: "1", title: "Mobiles", slug: { current: "mobiles" }, image: { asset: { url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80" } }, productCount: 15 },
  { _id: "2", title: "Appliances", slug: { current: "appliances" }, image: { asset: { url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80" } }, productCount: 13 },
  { _id: "3", title: "Smartphones", slug: { current: "smartphones" }, image: { asset: { url: "https://images.unsplash.com/photo-1612442058361-178007e5e498?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D" } }, productCount: 18 },
  { _id: "4", title: "Gadgets", slug: { current: "gadgets" }, image: { asset: { url: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&q=80" } }, productCount: 22 },
  { _id: "5", title: "Accessories", slug: { current: "accessories" }, image: { asset: { url: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=500&q=80" } }, productCount: 25 },
  { _id: "6", title: "Laptops", slug: { current: "laptops" }, image: { asset: { url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80" } }, productCount: 20 },
  { _id: "7", title: "Gaming", slug: { current: "gaming" }, image: { asset: { url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&q=80" } }, productCount: 17 },
  { _id: "8", title: "Cameras", slug: { current: "cameras" }, image: { asset: { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80" } }, productCount: 16 },
  { _id: "9", title: "Headphones", slug: { current: "headphones" }, image: { asset: { url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" } }, productCount: 24 }
];

export const mockProducts = [
  {
    _id: "p1",
    name: "IPhone 15 Pro",
    slug: { current: "iphone-15-pro" },
    images: [{ asset: { url: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&q=80" }, _type: "image", _key: "k1" }],
    price: 999,
    discount: 10,
    stock: 50,
    status: "sale",
    variant: "gadget",
    categories: ["Mobiles", "Smartphones"],
    description: "The latest iPhone with Pro features."
  },
  {
    _id: "p2",
    name: "Samsung Galaxy S24",
    slug: { current: "samsung-galaxy-s24" },
    images: [{ asset: { url: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&q=80" }, _type: "image", _key: "k2" }],
    price: 899,
    discount: 5,
    stock: 30,
    status: "new",
    variant: "gadget",
    categories: ["Mobiles", "Smartphones"],
    description: "Powerful Android flagship."
  },
  {
    _id: "p3",
    name: "MacBook Air M3",
    slug: { current: "macbook-air-m3" },
    images: [{ asset: { url: "https://images.unsplash.com/photo-1710905018864-d585574d79f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFjQm9vayUyMEFpciUyME0zfGVufDB8fDB8fHww" }, _type: "image", _key: "k3" }],
    price: 1199,
    discount: 0,
    stock: 20,
    status: "hot",
    variant: "gadget",
    categories: ["Gadgets", "Laptops"],
    description: "Supercharged by M3 chip."
  },
  {
    _id: "p4",
    name: "Smart Watch Series 9",
    slug: { current: "smart-watch-9" },
    images: [{ asset: { url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" }, _type: "image", _key: "k4" }],
    price: 399,
    discount: 15,
    stock: 100,
    status: "sale",
    variant: "gadget",
    categories: ["Accessories"],
    description: "Advanced health tracking."
  },
  {
    _id: "p5",
    name: "Noise Cancelling Headphones",
    slug: { current: "noise-cancelling-headphones" },
    images: [{ asset: { url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" }, _type: "image", _key: "k5" }],
    price: 299,
    discount: 20,
    stock: 0,
    status: "hot",
    variant: "gadget",
    categories: ["Accessories", "Headphones"],
    description: "Pure sound, no noise."
  },
  {
      _id: "p6",
      name: "Air Purifier Pro",
      slug: { current: "air-purifier-pro" },
      images: [{ asset: { url: "https://images.unsplash.com/photo-1661767013569-da7dce8ea409?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QWlyJTIwUHVyaWZpZXJ8ZW58MHx8MHx8fDA%3D" }, _type: "image", _key: "k6" }],
      price: 249,
      discount: 0,
      stock: 15,
      status: "new",
      variant: "appliances",
      categories: ["Appliances"],
      description: "Clean air for your home."
  },
  {
      _id: "p7",
      name: "Smart Refrigerator",
      slug: { current: "smart-refrigerator" },
      images: [{ asset: { url: "https://images.unsplash.com/photo-1721613877687-c9099b698faa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U21hcnQlMjBSZWZyaWdlcmF0b3J8ZW58MHx8MHx8fDA%3D" }, _type: "image", _key: "k7" }],
      price: 1599,
      discount: 10,
      stock: 5,
      status: "hot",
      variant: "refrigerators",
      categories: ["Appliances"],
      description: "Keep your food fresh and smart."
  },
  {
    _id: "p8",
    name: "Sony Alpha a7 IV",
    slug: { current: "sony-alpha-a7-iv" },
    images: [{ asset: { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80" }, _type: "image", _key: "k8" }],
    price: 2499,
    discount: 0,
    stock: 12,
    status: "hot",
    variant: "camera",
    categories: ["Cameras", "Gadgets"],
    description: "Professional mirrorless camera."
  },
  {
    _id: "p9",
    name: "Dell XPS 13",
    slug: { current: "dell-xps-13" },
    images: [{ asset: { url: "https://images.unsplash.com/photo-1567521463850-4939134bcd4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVsbCUyMFhQU3xlbnwwfHwwfHx8MA%3D%3D" }, _type: "image", _key: "k9" }],
    price: 1399,
    discount: 10,
    stock: 25,
    status: "sale",
    variant: "laptop",
    categories: ["Laptops", "Gadgets"],
    description: "Thin and light ultrabook."
  },
  {
    _id: "p10",
    name: "PlayStation 5",
    slug: { current: "playstation-5" },
    images: [{ asset: { url: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&q=80" }, _type: "image", _key: "k10" }],
    price: 499,
    discount: 0,
    stock: 5,
    status: "hot",
    variant: "console",
    categories: ["Gaming", "Gadgets"],
    description: "Next-gen gaming console."
  },
  {
    _id: "p11",
    name: "Nintendo Switch OLED",
    slug: { current: "nintendo-switch-oled" },
    images: [{ asset: { url: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?w=500&q=80" }, _type: "image", _key: "k11" }],
    price: 349,
    discount: 0,
    stock: 40,
    status: "new",
    variant: "console",
    categories: ["Gaming"],
    description: "Vibrant screen for portable play."
  },
  {
    _id: "p12",
    name: "Sony WH-1000XM5",
    slug: { current: "sony-wh-1000xm5" },
    images: [{ asset: { url: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80" }, _type: "image", _key: "k12" }],
    price: 399,
    discount: 5,
    stock: 15,
    status: "sale",
    variant: "headphone",
    categories: ["Accessories", "Headphones"],
    description: "Industry leading noise cancellation."
  },
  {
    _id: "p13",
    name: "Dyson V15 Detect",
    slug: { current: "dyson-v15" },
    images: [{ asset: { url: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&q=80" }, _type: "image", _key: "k13" }],
    price: 749,
    discount: 0,
    stock: 8,
    status: "hot",
    variant: "home",
    categories: ["Appliances"],
    description: "Powerful intelligent cordless vacuum."
  },
  {
    _id: "p14",
    name: "Logitech MX Master 3S",
    slug: { current: "logitech-mx-master-3s" },
    images: [{ asset: { url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80" }, _type: "image", _key: "k14" }],
    price: 99,
    discount: 10,
    stock: 50,
    status: "sale",
    variant: "mouse",
    categories: ["Accessories", "Gadgets"],
    description: "Advanced ergonomic mouse."
  },
  {
    _id: "p15",
    name: "LG C3 OLED TV",
    slug: { current: "lg-c3-oled" },
    images: [{ asset: { url: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80" }, _type: "image", _key: "k15" }],
    price: 1599,
    discount: 15,
    stock: 10,
    status: "sale",
    variant: "tv",
    categories: ["Appliances", "Gadgets"],
    description: "Exceptional picture quality."
  },
  {
    _id: "p16",
    name: "Keychron Q1 Pro",
    slug: { current: "keychron-q1-pro" },
    images: [{ asset: { url: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80" }, _type: "image", _key: "k16" }],
    price: 199,
    discount: 0,
    stock: 20,
    status: "new",
    variant: "keyboard",
    categories: ["Accessories", "Gadgets"],
    description: "Custom mechanical keyboard."
  },
  {
    _id: "p17",
    name: "Apple AirPods Pro 2",
    slug: { current: "apple-airpods-pro-2" },
    images: [{ asset: { url: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBwbGUlMjBBaXJQb2RzJTIwUHJvfGVufDB8fDB8fHww" }, _type: "image", _key: "k17" }],
    price: 249,
    discount: 5,
    stock: 60,
    status: "hot",
    variant: "earbuds",
    categories: ["Accessories", "Headphones"],
    description: "Rich audio and ANC."
  },
  {
    _id: "p18",
    name: "Breville Barista Express",
    slug: { current: "breville-barista-express" },
    images: [{ asset: { url: "https://images.unsplash.com/photo-1672317752939-e737f286561d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJyZXZpbGxlfGVufDB8fDB8fHww" }, _type: "image", _key: "k18" }],
    price: 699,
    discount: 0,
    stock: 7,
    status: "new",
    variant: "appliance",
    categories: ["Appliances"],
    description: "Create third wave specialty coffee at home."
  },
  {
    _id: "p19",
    name: "Samsung Galaxy Tab S9",
    slug: { current: "samsung-galaxy-tab-s9" },
    images: [{ asset: { url: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80" }, _type: "image", _key: "k19" }],
    price: 799,
    discount: 10,
    stock: 15,
    status: "sale",
    variant: "tablet",
    categories: ["Gadgets", "Smartphones"],
    description: "Premium Android tablet."
  },
  {
    _id: "p20",
    name: "GoPro HERO12 Black",
    slug: { current: "gopro-hero12" },
    images: [{ asset: { url: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=500&q=80" }, _type: "image", _key: "k20" }],
    price: 399,
    discount: 0,
    stock: 25,
    status: "new",
    variant: "camera",
    categories: ["Cameras", "Gadgets"],
    description: "Incredible video stabilization."
  },
  // Mobiles (10)
  { _id: "p21", name: "Google Pixel 8", slug: { current: "google-pixel-8" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1727132528094-117c9dceb047?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29vZ2xlJTIwcGl4ZWx8ZW58MHx8MHx8fDA%3D" } }], price: 699, discount: 0, stock: 40, status: "new", variant: "gadget", categories: ["Mobiles"], description: "The best of Google." },
  { _id: "p22", name: "OnePlus 12", slug: { current: "oneplus-12" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1772683828844-15dca7c553b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE9uZVBsdXMlMjAxMnxlbnwwfHwwfHx8MA%3D%3D" } }], price: 799, discount: 5, stock: 25, status: "hot", variant: "gadget", categories: ["Mobiles"], description: "Smooth and fast." },
  { _id: "p23", name: "Xiaomi 14 Pro", slug: { current: "xiaomi-14-pro" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1655804469836-d10a5d1ff981?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fFhpYW9taSUyMDE0fGVufDB8fDB8fHww" } }], price: 899, discount: 10, stock: 30, status: "sale", variant: "gadget", categories: ["Mobiles"], description: "Flagship performance." },
  { _id: "p24", name: "Sony Xperia 1 V", slug: { current: "sony-xperia-1-v" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1695435478239-0828b8bfc8c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFNvbnklMjBYcGVyaWF8ZW58MHx8MHx8fDA%3D" } }], price: 1199, discount: 0, stock: 15, status: "hot", variant: "gadget", categories: ["Mobiles"], description: "For creators." },
  { _id: "p25", name: "Asus Zenfone 10", slug: { current: "asus-zenfone-10" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1732020883986-a251177053c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEFzdXMlMjBaZW5mb25lfGVufDB8fDB8fHww" } }], price: 699, discount: 15, stock: 20, status: "sale", variant: "gadget", categories: ["Mobiles"], description: "Compact power." },
  { _id: "p26", name: "Nothing Phone (2)", slug: { current: "nothing-phone-2" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1661962399580-80301d32d791?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Tm90aGluZyUyMFBob25lfGVufDB8fDB8fHww" } }], price: 599, discount: 0, stock: 45, status: "new", variant: "gadget", categories: ["Mobiles"], description: "Unique design." },
  { _id: "p27", name: "Motorola Edge 40", slug: { current: "motorola-edge-40" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1730226930392-ee82f499c867?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1vdG9yb2xhJTIwRWRnZSUyMDQwfGVufDB8fDB8fHww" } }], price: 499, discount: 10, stock: 50, status: "sale", variant: "gadget", categories: ["Mobiles"], description: "Sleek and fast." },
  { _id: "p28", name: "Nokia G42", slug: { current: "nokia-g42" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1568706407142-cafe0c91e5a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Tm9raWElMjBHNDJ8ZW58MHx8MHx8fDA%3D" } }], price: 299, discount: 5, stock: 60, status: "new", variant: "gadget", categories: ["Mobiles"], description: "Durable and repairable." },
  { _id: "p29", name: "Oppo Find X7", slug: { current: "oppo-find-x7" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1667284152849-850edc1b341e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T3BwbyUyMEZpbmQlMjBYN3xlbnwwfHwwfHx8MA%3D%3D" } }], price: 849, discount: 0, stock: 20, status: "hot", variant: "gadget", categories: ["Mobiles"], description: "Premium camera phone." },
  { _id: "p30", name: "Vivo X100 Pro", slug: { current: "vivo-x100-pro" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1755318535396-cdb062dc60bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Vml2byUyMFgxMDAlMjBQcm98ZW58MHx8MHx8fDA%3D" } }], price: 949, discount: 10, stock: 15, status: "sale", variant: "gadget", categories: ["Mobiles"], description: "Excellence in photography." },

  // Appliances (10)
  { _id: "p31", name: "Convection Microwave", slug: { current: "convection-microwave" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29udmVjdGlvbiUyME1pY3Jvd2F2ZXxlbnwwfHwwfHx8MA%3D%3D" } }], price: 299, discount: 10, stock: 20, status: "new", variant: "appliances", categories: ["Appliances"], description: "Versatile cooking." },
  { _id: "p32", name: "Coffee Maker Deluxe", slug: { current: "coffee-maker-deluxe" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1608354580875-30bd4168b351?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29mZmVlJTIwTWFrZXJ8ZW58MHx8MHx8fDA%3D" } }], price: 149, discount: 5, stock: 35, status: "hot", variant: "appliances", categories: ["Appliances"], description: "Fresh coffee every morning." },
  { _id: "p33", name: "Robotic Vacuum", slug: { current: "robotic-vacuum" }, images: [{ asset: { url: "https://plus.unsplash.com/premium_photo-1729006559482-d289e4385b1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Um9ib3RpYyUyMFZhY3V1bXxlbnwwfHwwfHx8MA%3D%3D" } }], price: 449, discount: 20, stock: 15, status: "sale", variant: "appliances", categories: ["Appliances"], description: "Smart cleaning." },
  { _id: "p34", name: "Air Fryer XL", slug: { current: "air-fryer-xl" }, images: [{ asset: { url: "https://plus.unsplash.com/premium_photo-1672192166833-c8ae84e5e127?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWlyJTIwRnJ5ZXJ8ZW58MHx8MHx8fDA%3D" } }], price: 129, discount: 0, stock: 50, status: "new", variant: "appliances", categories: ["Appliances"], description: "Healthy frying." },
  { _id: "p35", name: "Stand Mixer", slug: { current: "stand-mixer" }, images: [{ asset: { url: "https://plus.unsplash.com/premium_photo-1718186096324-474ac487bcc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3RhbmQlMjBNaXhlcnxlbnwwfHwwfHx8MA%3D%3D" } }], price: 349, discount: 15, stock: 10, status: "hot", variant: "appliances", categories: ["Appliances"], description: "For the baking lovers." },
  { _id: "p36", name: "Dishwasher Pro", slug: { current: "dishwasher-pro" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1608193851971-96c2a1f2896c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGlzaHdhc2hlcnxlbnwwfHwwfHx8MA%3D%3D" } }], price: 699, discount: 10, stock: 12, status: "sale", variant: "appliances", categories: ["Appliances"], description: "Effortless cleaning." },
  { _id: "p37", name: "Toaster 4-Slice", slug: { current: "toaster-4-slice" }, images: [{ asset: { url: "https://plus.unsplash.com/premium_photo-1719452894874-3da9fa3b882c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VG9hc3RlcnxlbnwwfHwwfHx8MA%3D%3D" } }], price: 59, discount: 0, stock: 40, status: "new", variant: "appliances", categories: ["Appliances"], description: "Perfect toast." },
  { _id: "p38", name: "Blender Master", slug: { current: "blender-master" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&q=80" } }], price: 89, discount: 5, stock: 30, status: "hot", variant: "appliances", categories: ["Appliances"], description: "Smoothies in seconds." },
  { _id: "p39", name: "Induction Cooktop", slug: { current: "induction-cooktop" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1629234356883-c37e616a2d43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29va3RvcHxlbnwwfHwwfHx8MA%3D%3D" } }], price: 199, discount: 10, stock: 25, status: "sale", variant: "appliances", categories: ["Appliances"], description: "Fast heating." },
  { _id: "p40", name: "Electric Kettle", slug: { current: "electric-kettle" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1738520420652-0c47cea3922b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWxlY3RyaWMlMjBLZXR0bGV8ZW58MHx8MHx8fDA%3D" } }], price: 49, discount: 0, stock: 60, status: "new", variant: "appliances", categories: ["Appliances"], description: "Quick boil." },

  // Smartphones (10)
  { _id: "p41", name: "IPhone 15 Plus", slug: { current: "iphone-15-plus" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80" } }], price: 899, discount: 5, stock: 30, status: "new", variant: "gadget", categories: ["Smartphones"], description: "Bigger screen." },
  { _id: "p42", name: "Samsung S24 Ultra", slug: { current: "samsung-s24-ultra" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1705585174953-9b2aa8afc174?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2Ftc3VuZyUyMFMyNCUyMFVsdHJhfGVufDB8fDB8fHww" } }], price: 1299, discount: 10, stock: 15, status: "hot", variant: "gadget", categories: ["Smartphones"], description: "Ultimate performance." },
  { _id: "p43", name: "Google Pixel 8 Pro", slug: { current: "google-pixel-8-pro" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1697355360151-2866de32ad4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R29vZ2xlJTIwUGl4ZWwlMjA4JTIwUHJvfGVufDB8fDB8fHww" } }], price: 999, discount: 0, stock: 20, status: "new", variant: "gadget", categories: ["Smartphones"], description: "Pro camera system." },
  { _id: "p44", name: "OnePlus 12R", slug: { current: "oneplus-12r" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1773414422124-f7b80de27c5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8T25lUGx1cyUyMDEyUnxlbnwwfHwwfHx8MA%3D%3D" } }], price: 499, discount: 5, stock: 40, status: "sale", variant: "gadget", categories: ["Smartphones"], description: "Flagship killer." },
  { _id: "p45", name: "Motorola Razr+", slug: { current: "motorola-razr-plus" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1688281366628-4f63eae64395?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW90b3JvbGElMjBSYXpyJTJCfGVufDB8fDB8fHww" } }], price: 999, discount: 15, stock: 10, status: "hot", variant: "gadget", categories: ["Smartphones"], description: "Foldable style." },
  { _id: "p46", name: "Asus ROG Phone 8", slug: { current: "asus-rog-phone-8" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?w=500&q=80" } }], price: 1099, discount: 0, stock: 12, status: "new", variant: "gadget", categories: ["Smartphones"], description: "Gaming beast." },
  { _id: "p47", name: "Xiaomi 14", slug: { current: "xiaomi-14" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1664115170143-92dde9c5b54c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8WGlhb21pJTIwMTR8ZW58MHx8MHx8fDA%3D" } }], price: 799, discount: 10, stock: 25, status: "sale", variant: "gadget", categories: ["Smartphones"], description: "Leica powered camera." },
  { _id: "p48", name: "ZTE Nubia Z60 Ultra", slug: { current: "zte-nubia-z60-ultra" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1644319030857-e93c4fc5016d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8WlRFfGVufDB8fDB8fHww" } }], price: 779, discount: 0, stock: 18, status: "hot", variant: "gadget", categories: ["Smartphones"], description: "Full screen luxury." },
  { _id: "p49", name: "Oppo Reno 11", slug: { current: "oppo-reno-11" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1662371697742-b5b612c62629?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8T3BwbyUyMFJlbm98ZW58MHx8MHx8fDA%3D" } }], price: 449, discount: 10, stock: 35, status: "sale", variant: "gadget", categories: ["Smartphones"], description: "Portrait expert." },
  { _id: "p50", name: "Realme GT 5", slug: { current: "realme-gt-5" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1695499405433-63b7d42e7326?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVhbG1lfGVufDB8fDB8fHww" } }], price: 549, discount: 5, stock: 20, status: "new", variant: "gadget", categories: ["Smartphones"], description: "Speed fast." },

  // Gadgets (10)
  { _id: "p51", name: "Apple Watch Ultra", slug: { current: "apple-watch-ultra" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1713056878930-c5604da9acfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBwbGUlMjBXYXRjaCUyMFVsdHJhfGVufDB8fDB8fHww" } }], price: 799, discount: 0, stock: 15, status: "hot", variant: "gadget", categories: ["Gadgets"], description: "Rugged and capable." },
  { _id: "p52", name: "DJI Mini 4 Pro", slug: { current: "dji-mini-4-pro" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1738830257599-bd2c11131efd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fERKSSUyME1pbmklMjA0fGVufDB8fDB8fHww" } }], price: 759, discount: 5, stock: 10, status: "new", variant: "gadget", categories: ["Gadgets"], description: "Fly more combo." },
  { _id: "p53", name: "Kindle Paperwhite", slug: { current: "kindle-paperwhite" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1622122892817-45b38188db7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2luZGxlJTIwUGFwZXJ3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D" } }], price: 149, discount: 10, stock: 50, status: "sale", variant: "gadget", categories: ["Gadgets"], description: "Read anywhere." },
  { _id: "p54", name: "Steam Deck OLED", slug: { current: "steam-deck-oled" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1718966324507-beada7cc04e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3RlYW0lMjBEZWNrJTIwT0xFRHxlbnwwfHwwfHx8MA%3D%3D" } }], price: 549, discount: 0, stock: 20, status: "hot", variant: "gadget", categories: ["Gadgets"], description: "Gaming on the go." },
  { _id: "p55", name: "Apple Vision Pro", slug: { current: "apple-vision-pro" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1706990769341-d450bb0c52b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXBwbGUlMjBWaXNpb24lMjBQcm98ZW58MHx8MHx8fDA%3D" } }], price: 3499, discount: 0, stock: 5, status: "new", variant: "gadget", categories: ["Gadgets"], description: "Spatial computing." },
  { _id: "p56", name: "Insta360 X3", slug: { current: "insta360-x3" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&q=80" } }], price: 449, discount: 10, stock: 25, status: "sale", variant: "gadget", categories: ["Gadgets"], description: "360 action camera." },
  { _id: "p57", name: "Rocketbook Smart", slug: { current: "rocketbook-smart" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=500&q=80" } }], price: 34, discount: 5, stock: 100, status: "hot", variant: "gadget", categories: ["Gadgets"], description: "Reusable notebook." },
  { _id: "p58", name: "Oura Ring Gen3", slug: { current: "oura-ring-gen3" }, images: [{ asset: { url: "https://plus.unsplash.com/premium_photo-1678730056405-0cf5eaaad097?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8T3VyYSUyMFJpbmd8ZW58MHx8MHx8fDA%3D" } }], price: 299, discount: 0, stock: 30, status: "new", variant: "gadget", categories: ["Gadgets"], description: "Unobtrusive health tracking." },
  { _id: "p59", name: "Meta Quest 3", slug: { current: "meta-quest-3" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1698050683094-b7e0e57ea903?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWV0YSUyMFF1ZXN0fGVufDB8fDB8fHww" } }], price: 499, discount: 0, stock: 40, status: "new", variant: "gadget", categories: ["Gadgets"], description: "Mixed reality." },
  { _id: "p60", name: "Philips Hue Hub", slug: { current: "philips-hue-hub" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&q=80" } }], price: 59, discount: 10, stock: 60, status: "sale", variant: "gadget", categories: ["Gadgets"], description: "Smart lighting center." },

  // Accessories (10)
  { _id: "p61", name: "Leather Phone Case", slug: { current: "leather-phone-case" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&q=80" } }], price: 49, discount: 10, stock: 100, status: "sale", variant: "gadget", categories: ["Accessories"], description: "Premium protection." },
  { _id: "p62", name: "GaN Charger 100W", slug: { current: "gan-charger-100w" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&q=80" } }], price: 69, discount: 0, stock: 50, status: "new", variant: "gadget", categories: ["Accessories"], description: "Fast charging." },
  { _id: "p63", name: "MagSafe Battery Pack", slug: { current: "magsafe-battery-pack" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&q=80" } }], price: 99, discount: 5, stock: 30, status: "hot", variant: "gadget", categories: ["Accessories"], description: "Wireless power." },
  { _id: "p64", name: "Bluetooth Tracker", slug: { current: "bluetooth-tracker" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" } }], price: 29, discount: 0, stock: 200, status: "new", variant: "gadget", categories: ["Accessories"], description: "Find your things." },
  { _id: "p65", name: "USB-C Hub 8-in-1", slug: { current: "usb-c-hub-8-in-1" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&q=80" } }], price: 79, discount: 15, stock: 45, status: "sale", variant: "gadget", categories: ["Accessories"], description: "Expand connectivity." },
  { _id: "p66", name: "Laptop Sleeve", slug: { current: "laptop-sleeve" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80" } }], price: 39, discount: 0, stock: 80, status: "new", variant: "gadget", categories: ["Accessories"], description: "Stylish protection." },
  { _id: "p67", name: "Wireless Earbuds Case", slug: { current: "wireless-earbuds-case" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1628202926206-c63a34b1618f?w=500&q=80" } }], price: 25, discount: 10, stock: 120, status: "sale", variant: "gadget", categories: ["Accessories"], description: "Carry in style." },
  { _id: "p68", name: "Ergonomic Keyboard", slug: { current: "ergonomic-keyboard" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80" } }], price: 129, discount: 0, stock: 25, status: "hot", variant: "gadget", categories: ["Accessories"], description: "Comfort typing." },
  { _id: "p69", name: "Monitor Stand", slug: { current: "monitor-stand" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80" } }], price: 59, discount: 5, stock: 40, status: "new", variant: "gadget", categories: ["Accessories"], description: "Organize your desk." },
  { _id: "p70", name: "Cooling Pad", slug: { current: "cooling-pad" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80" } }], price: 35, discount: 0, stock: 60, status: "sale", variant: "gadget", categories: ["Accessories"], description: "Keep it cool." },

  // Laptops (10)
  { _id: "p71", name: "MacBook Pro 14", slug: { current: "macbook-pro-14" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1677477163143-04b858f19a7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1hY0Jvb2slMjBQcm8lMjAxNHxlbnwwfHwwfHx8MA%3D%3D" } }], price: 1999, discount: 0, stock: 15, status: "hot", variant: "laptop", categories: ["Laptops"], description: "Pro workflow." },
  { _id: "p72", name: "Surface Laptop 5", slug: { current: "surface-laptop-5" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1724960996795-11a4e709ae84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3VyZmFjZSUyMExhcHRvcHxlbnwwfHwwfHx8MA%3D%3D" } }], price: 999, discount: 10, stock: 20, status: "new", variant: "laptop", categories: ["Laptops"], description: "Sleek and powerful." },
  { _id: "p73", name: "ASUS Zenbook 14", slug: { current: "asus-zenbook-14" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1693206816374-c04522205b21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEFTVVMlMjBaZW5ib29rJTIwMTR8ZW58MHx8MHx8fDA%3D" } }], price: 899, discount: 5, stock: 25, status: "sale", variant: "laptop", categories: ["Laptops"], description: "Ultrathin design." },
  { _id: "p74", name: "Lenovo ThinkPad X1", slug: { current: "lenovo-thinkpad-x1" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1763162410742-1d0097cea556?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGVub3ZvJTIwVGhpbmtQYWR8ZW58MHx8MHx8fDA%3D" } }], price: 1499, discount: 0, stock: 12, status: "hot", variant: "laptop", categories: ["Laptops"], description: "Business standard." },
  { _id: "p75", name: "HP Spectre x360", slug: { current: "hp-spectre-x360" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1619532550465-ad4dc9bd680a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SFAlMjBTcGVjdHJlfGVufDB8fDB8fHww" } }], price: 1299, discount: 10, stock: 18, status: "new", variant: "laptop", categories: ["Laptops"], description: "Versatile 2-in-1." },
  { _id: "p76", name: "Razer Blade 15", slug: { current: "razer-blade-15" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1767716843182-c2ab215555a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmF6ZXIlMjBCbGFkZXxlbnwwfHwwfHx8MA%3D%3D" } }], price: 2399, discount: 0, stock: 8, status: "hot", variant: "laptop", categories: ["Laptops"], description: "Ultimate gaming laptop." },
  { _id: "p77", name: "Acer Swift Edge", slug: { current: "acer-swift-edge" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1525972183131-2f5c48254ec4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWNlciUyMFN3aWZ0JTIwRWRnZXxlbnwwfHwwfHx8MA%3D%3D" } }], price: 1099, discount: 5, stock: 22, status: "sale", variant: "laptop", categories: ["Laptops"], description: "Lightweight OLED." },
  { _id: "p78", name: "Samsung Galaxy Book3", slug: { current: "samsung-galaxy-book3" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1661595676830-2a0a1ccab283?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2Ftc3VuZyUyMEdhbGF4eSUyMGJvb2t8ZW58MHx8MHx8fDA%3D" } }], price: 1199, discount: 0, stock: 14, status: "new", variant: "laptop", categories: ["Laptops"], description: "Connected ecosystem." },
  { _id: "p79", name: "Dell Inspiron 16", slug: { current: "dell-inspiron-16" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVsbCUyMEluc3Bpcm9uJTIwMTZ8ZW58MHx8MHx8fDA%3D" } }], price: 799, discount: 10, stock: 30, status: "sale", variant: "laptop", categories: ["Laptops"], description: "Everyday performance." },
  { _id: "p80", name: "Framework Laptop", slug: { current: "framework-laptop" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1706700392626-5279fb90ae73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RnJhbWV3b3JrJTIwTGFwdG9wfGVufDB8fDB8fHww" } }], price: 949, discount: 0, stock: 10, status: "hot", variant: "laptop", categories: ["Laptops"], description: "Fully repairable." },

  // Gaming (10)
  { _id: "p81", name: "Xbox Series X", slug: { current: "xbox-series-x" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=500&q=80" } }], price: 499, discount: 0, stock: 15, status: "hot", variant: "console", categories: ["Gaming"], description: "Power your dreams." },
  { _id: "p82", name: "Logitech G Pro X", slug: { current: "logitech-g-pro-x" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80" } }], price: 129, discount: 10, stock: 40, status: "sale", variant: "mouse", categories: ["Gaming"], description: "Wireless gaming mouse." },
  { _id: "p83", name: "Razer BlackWidow V4", slug: { current: "razer-blackwidow-v4" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80" } }], price: 169, discount: 5, stock: 25, status: "new", variant: "keyboard", categories: ["Gaming"], description: "Mechanical gaming keyboard." },
  { _id: "p84", name: "SteelSeries Arctis Nova", slug: { current: "steelseries-arctis-nova" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80" } }], price: 199, discount: 0, stock: 30, status: "hot", variant: "headphone", categories: ["Gaming"], description: "High-fidelity audio." },
  { _id: "p85", name: "Secretlab Titan EVO", slug: { current: "secretlab-titan-evo" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1598550476439-6847785fce6e?w=500&q=80" } }], price: 549, discount: 0, stock: 10, status: "new", variant: "furniture", categories: ["Gaming"], description: "Ultimate comfort." },
  { _id: "p86", name: "Elgato Stream Deck", slug: { current: "elgato-stream-deck" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&q=80" } }], price: 149, discount: 5, stock: 50, status: "sale", variant: "gadget", categories: ["Gaming"], description: "For the streamers." },
  { _id: "p87", name: "Samsung Odyssey G9", slug: { current: "samsung-odyssey-g9" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80" } }], price: 1299, discount: 15, stock: 8, status: "hot", variant: "monitor", categories: ["Gaming"], description: "Ultra-wide gaming monitor." },
  { _id: "p88", name: "Corsair Vengeance PC", slug: { current: "corsair-vengeance-pc" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80" } }], price: 2499, discount: 0, stock: 5, status: "new", variant: "pc", categories: ["Gaming"], description: "Pre-built beast." },
  { _id: "p89", name: "HyperX QuadCast S", slug: { current: "hyperx-quadcast-s" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&q=80" } }], price: 159, discount: 10, stock: 35, status: "sale", variant: "gadget", categories: ["Gaming"], description: "USB gaming microphone." },
  { _id: "p90", name: "Razer Kishi V2", slug: { current: "razer-kishi-v2" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?w=500&q=80" } }], price: 99, discount: 0, stock: 45, status: "new", variant: "gadget", categories: ["Gaming"], description: "Mobile gaming controller." },

  // Cameras (10)
  { _id: "p91", name: "Canon EOS R5", slug: { current: "canon-eos-r5" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80" } }], price: 3899, discount: 0, stock: 5, status: "hot", variant: "camera", categories: ["Cameras"], description: "8K video and 45MP." },
  { _id: "p92", name: "Fujifilm X-T5", slug: { current: "fujifilm-x-t5" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80" } }], price: 1699, discount: 5, stock: 12, status: "new", variant: "camera", categories: ["Cameras"], description: "Classic design, modern tech." },
  { _id: "p93", name: "Nikon Z9", slug: { current: "nikon-z9" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80" } }], price: 5499, discount: 0, stock: 3, status: "hot", variant: "camera", categories: ["Cameras"], description: "Unstoppable speed." },
  { _id: "p94", name: "Sony ZV-E10", slug: { current: "sony-zv-e10" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80" } }], price: 799, discount: 10, stock: 25, status: "sale", variant: "camera", categories: ["Cameras"], description: "Made for vlogging." },
  { _id: "p95", name: "Panasonic GH6", slug: { current: "panasonic-gh6" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80" } }], price: 2199, discount: 0, stock: 8, status: "new", variant: "camera", categories: ["Cameras"], description: "Video-centric mirrorless." },
  { _id: "p96", name: "Leica Q3", slug: { current: "leica-q3" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80" } }], price: 5995, discount: 0, stock: 2, status: "hot", variant: "camera", categories: ["Cameras"], description: "Luxury optics." },
  { _id: "p97", name: "DJI Osmo Pocket 3", slug: { current: "dji-osmo-pocket-3" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1700199910463-87ba00e28eb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8REpJJTIwT3Ntb3xlbnwwfHwwfHx8MA%3D%3D" } }], price: 519, discount: 5, stock: 30, status: "new", variant: "camera", categories: ["Cameras"], description: "Pocket-sized stabilization." },
  { _id: "p98", name: "Olympus OM-1", slug: { current: "olympus-om-1" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80" } }], price: 2199, discount: 0, stock: 15, status: "sale", variant: "camera", categories: ["Cameras"], description: "Computational excellence." },
  { _id: "p99", name: "Ricoh GR IIIx", slug: { current: "ricoh-gr-iiix" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80" } }], price: 1049, discount: 0, stock: 10, status: "hot", variant: "camera", categories: ["Cameras"], description: "Street photographer's favorite." },
  { _id: "p100", name: "Instax Mini 12", slug: { current: "instax-mini-12" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80" } }], price: 79, discount: 10, stock: 100, status: "sale", variant: "camera", categories: ["Cameras"], description: "Instant fun." },

  // Headphones (10)
  { _id: "p101", name: "Bose QuietComfort Ultra", slug: { current: "bose-quietcomfort-ultra" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1606741965429-8d76ff50bb2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBhaXJwb2RzJTIwcHJvfGVufDB8fDB8fHww" } }], price: 429, discount: 0, stock: 20, status: "hot", variant: "headphone", categories: ["Headphones"], description: "World-class noise cancellation." },
  { _id: "p102", name: "Sennheiser Momentum 4", slug: { current: "sennheiser-momentum-4" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1656457537718-7a1e3e3fee8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VubmhlaXNlciUyME1vbWVudHVtfGVufDB8fDB8fHww" } }], price: 349, discount: 10, stock: 35, status: "sale", variant: "headphone", categories: ["Headphones"], description: "Premium sound." },
  { _id: "p103", name: "Beats Studio Pro", slug: { current: "beats-studio-pro" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1558477937-3e9e70fad118?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVhdHMlMjBTdHVkaW98ZW58MHx8MHx8fDA%3D" } }], price: 349, discount: 15, stock: 40, status: "sale", variant: "headphone", categories: ["Headphones"], description: "Deep bass, rich audio." },
  { _id: "p104", name: "Audio-Technica M50xBT2", slug: { current: "audio-technica-m50xbt2" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1519320409123-1095746fd09a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXVkaW8tVGVjaG5pY2F8ZW58MHx8MHx8fDA%3D" } }], price: 199, discount: 0, stock: 60, status: "new", variant: "headphone", categories: ["Headphones"], description: "Studio quality Bluetooth." },
  { _id: "p105", name: "Master & Dynamic MW75", slug: { current: "master-dynamic-mw75" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1568593677708-c5a67a846e18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RHluYW1pYyUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D" } }], price: 599, discount: 0, stock: 12, status: "hot", variant: "headphone", categories: ["Headphones"], description: "Luxury audio expert." },
  { _id: "p106", name: "JBL Live 660NC", slug: { current: "jbl-live-660nc" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1666460811258-c7ceac639561?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SkJMJTIwTGl2ZXxlbnwwfHwwfHx8MA%3D%3D" } }], price: 199, discount: 20, stock: 70, status: "sale", variant: "headphone", categories: ["Headphones"], description: "Pure bass ANC." },
  { _id: "p107", name: "Marshall Major IV", slug: { current: "marshall-major-iv" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1602833703431-5728350403dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWFyc2hhbGwlMjBNYWpvcnxlbnwwfHwwfHx8MA%3D%3D0" } }], price: 149, discount: 0, stock: 45, status: "new", variant: "headphone", categories: ["Headphones"], description: "Iconic sound." },
  { _id: "p108", name: "Shure AONIC 50", slug: { current: "shure-aonic-50" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1708024529037-a7c7c96bc145?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2h1cmV8ZW58MHx8MHx8fDA%3D" } }], price: 299, discount: 10, stock: 25, status: "sale", variant: "headphone", categories: ["Headphones"], description: "Studio-grade wireless." },
  { _id: "p109", name: "Anker Soundcore Q45", slug: { current: "anker-soundcore-q45" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1754142654807-1dfcdc3f7f22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5rZXIlMjBTb3VuZGNvcmV8ZW58MHx8MHx8fDA%3D" } }], price: 149, discount: 5, stock: 80, status: "new", variant: "headphone", categories: ["Headphones"], description: "Best budget ANC." },
  { _id: "p110", name: "Surface Headphones 2", slug: { current: "surface-headphones-2" }, images: [{ asset: { url: "https://images.unsplash.com/photo-1765279302883-68bc58059bf4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3VyZmFjZSUyMEhlYWRwaG9uZXMlMjAyfGVufDB8fDB8fHww" } }], price: 249, discount: 0, stock: 30, status: "hot", variant: "headphone", categories: ["Headphones"], description: "Control by dial." },
];

export const mockBrands = [
  { _id: "b1", title: "Apple", slug: { current: "apple" }, image: { asset: { url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" } } },
  { _id: "b2", title: "Samsung", slug: { current: "samsung" }, image: { asset: { url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" } } },
  { _id: "b3", title: "Sony", slug: { current: "sony" }, image: { asset: { url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" } } },
];

export const mockBlogs = [
  {
    _id: "bl1",
    title: "The Future of Tech in 2025",
    slug: { current: "future-of-tech" },
    mainImage: { asset: { url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80" } },
    publishedAt: new Date().toISOString(),
    blogcategories: [{ title: "Tech" }],
    description: "Exploring what's next in 2025 and beyond."
  },
  {
    _id: "bl2",
    title: "Top 10 Smart Appliances for Your Home",
    slug: { current: "top-10-smart-appliances" },
    mainImage: { asset: { url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&q=80" } },
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
    blogcategories: [{ title: "Appliances" }],
    description: "Make your house smarter with these essential devices."
  },
  {
    _id: "bl3",
    title: "How to Choose the Right Laptop",
    slug: { current: "choose-right-laptop" },
    mainImage: { asset: { url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80" } },
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
    blogcategories: [{ title: "Laptops" }],
    description: "A comprehensive guide to buying your next computer."
  },
  {
    _id: "bl4",
    title: "Best Gaming Setups of 2025",
    slug: { current: "best-gaming-setups" },
    mainImage: { asset: { url: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&q=80" } },
    publishedAt: new Date(Date.now() - 259200000).toISOString(),
    blogcategories: [{ title: "Gaming" }],
    description: "Level up your gaming room with these amazing setups."
  },
  {
    _id: "bl5",
    title: "iPhone vs Android: Which is Right for You?",
    slug: { current: "iphone-vs-android" },
    mainImage: { asset: { url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" } },
    publishedAt: new Date(Date.now() - 345600000).toISOString(),
    blogcategories: [{ title: "Mobiles" }],
    description: "An honest, detailed comparison of the two biggest ecosystems."
  },
  {
    _id: "bl6",
    title: "The Best Noise-Cancelling Headphones",
    slug: { current: "best-noise-cancelling-headphones" },
    mainImage: { asset: { url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80" } },
    publishedAt: new Date(Date.now() - 432000000).toISOString(),
    blogcategories: [{ title: "Audio" }],
    description: "Our picks for the best over-ear, on-ear, and in-ear ANC headphones."
  },
  {
    _id: "bl7",
    title: "Camera Buying Guide for Beginners",
    slug: { current: "camera-buying-guide" },
    mainImage: { asset: { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80" } },
    publishedAt: new Date(Date.now() - 518400000).toISOString(),
    blogcategories: [{ title: "Cameras" }],
    description: "Everything you need to know before buying your first camera."
  },
  {
    _id: "bl8",
    title: "Smart Home Devices Worth Buying",
    slug: { current: "smart-home-devices" },
    mainImage: { asset: { url: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&q=80" } },
    publishedAt: new Date(Date.now() - 604800000).toISOString(),
    blogcategories: [{ title: "Gadgets" }],
    description: "Turn your house into a smart home with these gadgets."
  },
  {
    _id: "bl9",
    title: "How to Keep Your Phone Battery Healthy",
    slug: { current: "phone-battery-health" },
    mainImage: { asset: { url: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" } },
    publishedAt: new Date(Date.now() - 691200000).toISOString(),
    blogcategories: [{ title: "Tips" }],
    description: "Simple habits to prolong your smartphone battery life."
  },
  {
    _id: "bl10",
    title: "Top Accessories to Pair with Your MacBook",
    slug: { current: "macbook-accessories" },
    mainImage: { asset: { url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80" } },
    publishedAt: new Date(Date.now() - 777600000).toISOString(),
    blogcategories: [{ title: "Laptops" }],
    description: "Boost your productivity with these top MacBook accessories."
  },
  {
    _id: "bl11",
    title: "Understanding 5G: What It Means for You",
    slug: { current: "understanding-5g" },
    mainImage: { asset: { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80" } },
    publishedAt: new Date(Date.now() - 864000000).toISOString(),
    blogcategories: [{ title: "Tech" }],
    description: "A simple explainer on 5G technology and how it changes everything."
  },
  {
    _id: "bl12",
    title: "Best Budget Smartphones Under $300",
    slug: { current: "best-budget-smartphones" },
    mainImage: { asset: { url: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=400&q=80" } },
    publishedAt: new Date(Date.now() - 950400000).toISOString(),
    blogcategories: [{ title: "Mobiles" }],
    description: "Great smartphones that won't break your bank."
  }
];

export const mockReviews = [
  { _id: "r1", name: "Alex Johnson", rating: 5, comment: "Amazing products and incredibly fast shipping! Highly recommend this store.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  { _id: "r2", name: "Sarah Williams", rating: 4, comment: "I bought a coffee maker from here, works perfectly. Packaging was top-notch.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
  { _id: "r3", name: "Michael Smith", rating: 5, comment: "Great customer support! They helped me pick the right laptop for my needs. Extremely satisfied.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
  { _id: "r4", name: "Jessica Brown", rating: 5, comment: "I absolutely love the new headphones I bought. The sound quality is insane for the price.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80" }
];

export const mockFAQs = [
  {
    question: "Do you offer free shipping?",
    answer: "Yes, we offer free standard shipping on all orders over $50 within the country. Express and overnight shipping options are also available at checkout for an additional fee."
  },
  {
    question: "What is your return policy?",
    answer: "We have a hassle-free 30-day return policy. If you're not satisfied with your purchase, simply return the item in its original, unopened condition for a full refund. Electronics must be unopened to qualify."
  },
  {
    question: "How long will it take to get my order?",
    answer: "Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days. You will receive an email confirmation with a tracking link as soon as your order is dispatched."
  },
  {
    question: "Are your products covered by a warranty?",
    answer: "Yes, all our electronic items and appliances come with a minimum 1-year manufacturer's warranty. You can also purchase an extended 2-year or 3-year warranty at checkout for added peace of mind."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, Amex), PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are secured with industry-standard SSL encryption."
  },
  {
    question: "Can I cancel or modify my order after placing it?",
    answer: "Yes, you can cancel or modify your order within 12 hours of placing it by contacting our support team. Once the order is shipped, we are unable to make changes, but you can use our returns process."
  },
  {
    question: "Is my personal and payment information secure?",
    answer: "Absolutely. We use 256-bit SSL encryption to protect all your personal and payment data. We never store your full card details, and we comply with PCI DSS standards for payment security."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 50 countries worldwide. International shipping times vary by destination (typically 7-14 business days). Please note that customs duties and taxes may apply and are the buyer's responsibility."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order is shipped, you will receive an email with a tracking number and a direct link to the courier's tracking page. You can also track your order from your account dashboard under 'My Orders'."
  },
  {
    question: "Do you offer any discounts or loyalty programs?",
    answer: "Yes! We offer a loyalty points program where you earn 1 point for every $1 spent. Points can be redeemed for discounts on future orders. We also run seasonal sales and send exclusive discount codes to our newsletter subscribers."
  },
  {
    question: "What should I do if I receive a damaged or wrong item?",
    answer: "We sincerely apologize for any inconvenience. Please contact our customer support within 48 hours of delivery with your order number and a photo of the item. We will arrange a free replacement or a full refund immediately."
  },
  {
    question: "How can I contact customer support?",
    answer: "Our customer support team is available Monday to Friday, 9am–6pm (EST). You can reach us via live chat on our website, by emailing support@shopcart.com, or by calling our toll-free number +1 (800) 123-4567."
  }
];

