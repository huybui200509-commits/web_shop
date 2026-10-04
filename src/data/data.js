// ===== DATA.JS - All Product Data =====

export const categories = [
  { id: 'keyboard', name: 'Bàn phím cơ', nameEn: 'Mechanical Keyboard', icon: '⌨️', slug: 'ban-phim-co', count: 8 },
  { id: 'keycap', name: 'Keycap', nameEn: 'Keycaps', icon: '🎨', slug: 'keycap', count: 5 },
  { id: 'switch', name: 'Switch', nameEn: 'Switches', icon: '🔧', slug: 'switch', count: 5 },
  { id: 'mouse', name: 'Chuột & Lót chuột', nameEn: 'Mouse & Mousepad', icon: '🖱️', slug: 'chuot', count: 6 },
  { id: 'ram', name: 'RAM', nameEn: 'RAM', icon: '💾', slug: 'ram', count: 5 },
  { id: 'ssd', name: 'SSD / HDD', nameEn: 'SSD / HDD', icon: '💽', slug: 'ssd', count: 5 },
  { id: 'vga', name: 'VGA', nameEn: 'Graphics Card', icon: '🎮', slug: 'vga', count: 5 },
  { id: 'cpu', name: 'CPU', nameEn: 'Processor', icon: '🧠', slug: 'cpu', count: 5 },
  { id: 'mainboard', name: 'Mainboard', nameEn: 'Motherboard', icon: '🔌', slug: 'mainboard', count: 5 },
  { id: 'psu', name: 'Nguồn (PSU)', nameEn: 'Power Supply', icon: '⚡', slug: 'nguon', count: 4 },
  { id: 'case', name: 'Case', nameEn: 'PC Case', icon: '🖥️', slug: 'case', count: 4 },
  { id: 'cooling', name: 'Tản nhiệt', nameEn: 'Cooling', icon: '❄️', slug: 'tan-nhiet', count: 4 },
  { id: 'monitor', name: 'Màn hình', nameEn: 'Monitor', icon: '🖥️', slug: 'man-hinh', count: 4 },
  { id: 'headset', name: 'Tai nghe', nameEn: 'Headset', icon: '🎧', slug: 'tai-nghe', count: 4 },
  { id: 'laptop', name: 'Laptop', nameEn: 'Laptop', icon: '💻', slug: 'laptop', count: 4 },
  { id: 'accessory', name: 'Phụ kiện', nameEn: 'Accessories', icon: '🔗', slug: 'phu-kien', count: 3 },
];

export const brands = [
  'Razer', 'Corsair', 'Logitech', 'Keychron', 'Akko', 'Ducky', 'Leopold', 
  'Cherry', 'Gateron', 'Samsung', 'Kingston', 'G.Skill', 'ASUS', 'MSI',
  'Gigabyte', 'Intel', 'AMD', 'NVIDIA', 'Noctua', 'NZXT', 'Lian Li',
  'Seasonic', 'LG', 'Dell', 'BenQ', 'SteelSeries', 'HyperX', 'WD',
  'Crucial', 'SK Hynix', 'Pulsar', 'Lamzu', 'Varmilo', 'NuPhy',
  'GMK', 'Thermalright', 'DeepCool', 'be quiet!', 'Fractal Design'
];

export const products = [
  // ===== BÀN PHÍM CƠ =====
  {
    id: 1, name: 'Keychron Q1 Max', brand: 'Keychron', category: 'keyboard',
    price: 4890000, salePrice: 4290000,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&h=800&fit=crop'],
    rating: 4.8, reviewCount: 156, sold: 342, stock: 25,
    badge: 'hot', variants: ['Gateron Jupiter Red', 'Gateron Jupiter Brown', 'Gateron Jupiter Banana'],
    description: 'Bàn phím cơ không dây 75% layout với QMK/VIA, Gasket Mount, hot-swappable, pin 4000mAh, kết nối 3 chế độ.',
    specs: { 'Layout': '75% (84 phím)', 'Switch': 'Gateron Jupiter', 'Kết nối': 'Bluetooth 5.1 / 2.4GHz / USB-C', 'Pin': '4000mAh', 'Keycap': 'Double-shot PBT', 'Mount': 'Gasket', 'Hot-swap': 'Có', 'Backlight': 'RGB South-facing' }
  },
  {
    id: 2, name: 'Razer Huntsman V3 Pro', brand: 'Razer', category: 'keyboard',
    price: 5490000, salePrice: 4990000,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=800&fit=crop'],
    rating: 4.7, reviewCount: 89, sold: 178, stock: 15,
    badge: 'new', variants: ['Full-size', 'TKL'],
    description: 'Bàn phím cơ gaming Razer Analog Optical Switch, adjustable actuation, magnetic switch.',
    specs: { 'Layout': 'Full-size / TKL', 'Switch': 'Razer Analog Optical', 'Kết nối': 'USB-C', 'Keycap': 'Doubleshot PBT', 'Backlight': 'Razer Chroma RGB', 'Polling Rate': '8000Hz', 'N-Key Rollover': 'Có', 'Wrist Rest': 'Magnetic' }
  },
  {
    id: 3, name: 'Corsair K100 RGB', brand: 'Corsair', category: 'keyboard',
    price: 5990000, salePrice: 5290000,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800&h=800&fit=crop'],
    rating: 4.6, reviewCount: 234, sold: 567, stock: 8,
    badge: 'sale', variants: ['Cherry MX Speed', 'OPX Switch'],
    description: 'Bàn phím cơ gaming cao cấp nhất của Corsair, iCUE control wheel, AXON 44-zone RGB.',
    specs: { 'Layout': 'Full-size', 'Switch': 'Cherry MX Speed / OPX', 'Kết nối': 'USB-C (dây bện)', 'Keycap': 'PBT Double-shot', 'Backlight': 'AXON 44-zone RGB', 'Macro': 'iCUE Dial', 'Polling Rate': '4000Hz', 'Memory': '8MB onboard' }
  },
  {
    id: 4, name: 'Akko 5075B Plus', brand: 'Akko', category: 'keyboard',
    price: 1990000, salePrice: 1690000,
    image: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=800&h=800&fit=crop'],
    rating: 4.5, reviewCount: 312, sold: 890, stock: 45,
    badge: 'hot', variants: ['Cream Yellow', 'Crystal Silver', 'V3 Cream Blue'],
    description: 'Bàn phím cơ không dây giá rẻ, Gasket mount, hot-swap, triple mode, RGB.',
    specs: { 'Layout': '75% (82 phím)', 'Switch': 'Akko CS', 'Kết nối': 'Bluetooth 5.0 / 2.4GHz / USB-C', 'Pin': '3000mAh', 'Keycap': 'PBT Double-shot', 'Mount': 'Gasket', 'Hot-swap': 'Có (5-pin)', 'Foam': 'Switch pad + Case foam' }
  },
  {
    id: 5, name: 'Ducky One 3 SF', brand: 'Ducky', category: 'keyboard',
    price: 3290000, salePrice: null,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=800&fit=crop'],
    rating: 4.7, reviewCount: 98, sold: 234, stock: 12,
    badge: null, variants: ['Cherry MX Red', 'Cherry MX Brown', 'Cherry MX Blue'],
    description: 'Bàn phím cơ 65% hot-swap, QUACK Mechanics, PBT keycaps.',
    specs: { 'Layout': '65% (67 phím)', 'Switch': 'Cherry MX', 'Kết nối': 'USB-C', 'Keycap': 'PBT Double-shot', 'Mount': 'QUACK Mechanics', 'Hot-swap': 'Có', 'Backlight': 'RGB', 'Case': 'ABS dual-tone' }
  },
  {
    id: 6, name: 'Leopold FC660M', brand: 'Leopold', category: 'keyboard',
    price: 3490000, salePrice: 3190000,
    image: 'https://images.unsplash.com/photo-1613141411244-0e4ac259d217?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1613141411244-0e4ac259d217?w=800&h=800&fit=crop'],
    rating: 4.9, reviewCount: 67, sold: 156, stock: 6,
    badge: null, variants: ['Cherry MX Silent Red', 'Cherry MX Brown'],
    description: 'Bàn phím cơ 65% cao cấp, build quality hàng đầu, PBT dye-sub keycaps.',
    specs: { 'Layout': '65% (66 phím)', 'Switch': 'Cherry MX', 'Kết nối': 'USB-C', 'Keycap': 'PBT Dye-sub', 'Sound Dampening': 'Có', 'Cable': 'Tháo rời', 'Made in': 'Korea' }
  },
  {
    id: 7, name: 'Logitech G Pro X 60', brand: 'Logitech', category: 'keyboard',
    price: 3990000, salePrice: 3590000,
    image: 'https://images.unsplash.com/photo-1618499890638-3a0dd4b278cd?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1618499890638-3a0dd4b278cd?w=800&h=800&fit=crop'],
    rating: 4.6, reviewCount: 145, sold: 289, stock: 18,
    badge: 'new', variants: ['Black', 'White', 'Pink'],
    description: 'Bàn phím cơ gaming 60% không dây, KEYCONTROL, LIGHTSPEED.',
    specs: { 'Layout': '60%', 'Switch': 'GX Optical', 'Kết nối': 'LIGHTSPEED / Bluetooth / USB-C', 'Pin': '65 giờ', 'Keycap': 'PBT', 'Software': 'G HUB', 'KEYCONTROL': 'Có' }
  },
  {
    id: 8, name: 'NuPhy Air75 V2', brand: 'NuPhy', category: 'keyboard',
    price: 2590000, salePrice: 2290000,
    image: 'https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=800&h=800&fit=crop'],
    rating: 4.5, reviewCount: 201, sold: 456, stock: 30,
    badge: 'sale', variants: ['Moss', 'Lunar Gray', 'Basalt Black'],
    description: 'Bàn phím cơ low-profile không dây, thiết kế mỏng đẹp, phù hợp Mac.',
    specs: { 'Layout': '75%', 'Switch': 'NuPhy Low-profile', 'Kết nối': 'Bluetooth / 2.4GHz / USB-C', 'Pin': '2500mAh', 'Keycap': 'PBT', 'Tương thích': 'Mac / Windows / iOS / Android' }
  },

  // ===== KEYCAP =====
  {
    id: 9, name: 'GMK Olivia++ Light', brand: 'GMK', category: 'keycap',
    price: 3990000, salePrice: 3590000,
    image: 'https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=800&h=800&fit=crop'],
    rating: 4.9, reviewCount: 45, sold: 123, stock: 5,
    badge: 'hot', variants: ['Base Kit', 'Extension Kit'],
    description: 'Bộ keycap GMK double-shot ABS Cherry profile, colorway hồng pastel huyền thoại.',
    specs: { 'Material': 'ABS Double-shot', 'Profile': 'Cherry', 'Stem': 'MX Compatible', 'Keys': '170+ phím', 'Made in': 'Germany' }
  },
  {
    id: 10, name: 'Akko Macaw Keycap Set', brand: 'Akko', category: 'keycap',
    price: 890000, salePrice: 690000,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&h=800&fit=crop'],
    rating: 4.4, reviewCount: 178, sold: 567, stock: 80,
    badge: 'sale', variants: ['ASA Profile', 'Cherry Profile'],
    description: 'Bộ keycap PBT double-shot, phối màu vẹt Macaw rực rỡ.',
    specs: { 'Material': 'PBT Double-shot', 'Profile': 'ASA / Cherry', 'Keys': '158 phím', 'Compatibility': 'MX stem, nhiều layout' }
  },
  {
    id: 11, name: 'ePBT Dreamscape', brand: 'ePBT', category: 'keycap',
    price: 2490000, salePrice: null,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&h=800&fit=crop'],
    rating: 4.6, reviewCount: 34, sold: 89, stock: 12,
    badge: null, variants: ['Base', 'Novelties'],
    description: 'Keycap PBT dye-sub Cherry profile, thiết kế mơ mộng gradient tím hồng.',
    specs: { 'Material': 'PBT Dye-sub', 'Profile': 'Cherry', 'Keys': '140+ phím' }
  },
  {
    id: 12, name: 'Akko Psittacus Keycap', brand: 'Akko', category: 'keycap',
    price: 790000, salePrice: 590000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=800&fit=crop'],
    rating: 4.3, reviewCount: 256, sold: 890, stock: 100,
    badge: 'sale', variants: [],
    description: 'Bộ keycap giá rẻ PBT double-shot, phối màu xanh tím độc đáo.',
    specs: { 'Material': 'PBT Double-shot', 'Profile': 'Cherry', 'Keys': '158 phím' }
  },
  {
    id: 13, name: 'PBTfans Spark', brand: 'PBTfans', category: 'keycap',
    price: 1990000, salePrice: 1790000,
    image: 'https://images.unsplash.com/photo-1613141411244-0e4ac259d217?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1613141411244-0e4ac259d217?w=800&h=800&fit=crop'],
    rating: 4.7, reviewCount: 56, sold: 145, stock: 15,
    badge: 'new', variants: [],
    description: 'PBT double-shot Cherry profile từ KBDfans, colorway xám trắng tinh tế.',
    specs: { 'Material': 'PBT Double-shot', 'Profile': 'Cherry', 'Keys': '170+ phím' }
  },

  // ===== SWITCH =====
  {
    id: 14, name: 'Gateron Oil King (10 pcs)', brand: 'Gateron', category: 'switch',
    price: 120000, salePrice: 99000,
    image: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=800&h=800&fit=crop'],
    rating: 4.8, reviewCount: 345, sold: 2345, stock: 200,
    badge: 'hot', variants: [],
    description: 'Linear switch cao cấp, pre-lubed, full nylon housing, smooth bơ.',
    specs: { 'Type': 'Linear', 'Actuation Force': '55g', 'Bottom Out': '65g', 'Travel': '4.0mm', 'Pre-lubed': 'Có', 'Housing': 'Full Nylon', 'Stem': 'POM' }
  },
  {
    id: 15, name: 'Cherry MX2A Brown (10 pcs)', brand: 'Cherry', category: 'switch',
    price: 150000, salePrice: null,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=800&fit=crop'],
    rating: 4.5, reviewCount: 123, sold: 890, stock: 150,
    badge: null, variants: [],
    description: 'Switch MX2A thế hệ mới từ Cherry, cải thiện smooth và âm thanh.',
    specs: { 'Type': 'Tactile', 'Actuation Force': '55g', 'Travel': '4.0mm', 'Lifespan': '100 triệu lần', 'Made in': 'Germany' }
  },
  {
    id: 16, name: 'HMX Xinhai (10 pcs)', brand: 'HMX', category: 'switch',
    price: 89000, salePrice: 69000,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800&h=800&fit=crop'],
    rating: 4.7, reviewCount: 456, sold: 3456, stock: 300,
    badge: 'sale', variants: [],
    description: 'Linear switch giá rẻ nhưng mượt cực kỳ, đang trending trong cộng đồng.',
    specs: { 'Type': 'Linear', 'Actuation Force': '42g', 'Bottom Out': '52g', 'Travel': '3.8mm', 'Housing': 'Full POK', 'Stem': 'Long POM' }
  },
  {
    id: 17, name: 'Akko V3 Cream Yellow (45 pcs)', brand: 'Akko', category: 'switch',
    price: 350000, salePrice: 290000,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&h=800&fit=crop'],
    rating: 4.4, reviewCount: 234, sold: 1567, stock: 120,
    badge: 'hot', variants: [],
    description: 'Linear switch phổ biến nhất của Akko, 5-pin hot-swap, pre-lubed.',
    specs: { 'Type': 'Linear', 'Actuation Force': '50g', 'Travel': '4.0mm', 'Pre-lubed': 'Có', 'Dustproof': 'Có' }
  },
  {
    id: 18, name: 'Zeal Zealios V2 67g (10 pcs)', brand: 'Zeal PC', category: 'switch',
    price: 280000, salePrice: null,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&h=800&fit=crop'],
    rating: 4.9, reviewCount: 78, sold: 345, stock: 25,
    badge: null, variants: ['62g', '65g', '67g', '78g'],
    description: 'Tactile switch cao cấp nhất, bump rõ ràng, smooth, enthusiast-grade.',
    specs: { 'Type': 'Tactile', 'Actuation Force': '67g', 'Travel': '4.0mm', 'Housing': 'Transparent', 'Stem': 'Purple POM', 'Made in': 'China (designed in Canada)' }
  },

  // ===== CHUỘT =====
  {
    id: 19, name: 'Razer Viper V3 Pro', brand: 'Razer', category: 'mouse',
    price: 3990000, salePrice: 3590000,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&h=800&fit=crop'],
    rating: 4.8, reviewCount: 89, sold: 234, stock: 12,
    badge: 'new', variants: ['Black', 'White'],
    description: 'Chuột gaming không dây siêu nhẹ 54g, cảm biến Focus Pro 36K, 8000Hz wireless.',
    specs: { 'Sensor': 'Focus Pro 36K', 'DPI': '36,000', 'Polling Rate': '8000Hz (wireless)', 'Weight': '54g', 'Battery': '95 giờ', 'Switch': 'Razer Gen-3 Optical', 'Feet': 'PTFE', 'Cable': 'Speedflex USB-C' }
  },
  {
    id: 20, name: 'Logitech G Pro X Superlight 2', brand: 'Logitech', category: 'mouse',
    price: 3490000, salePrice: 2990000,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&h=800&fit=crop'],
    rating: 4.9, reviewCount: 345, sold: 890, stock: 20,
    badge: 'hot', variants: ['Black', 'White', 'Pink'],
    description: 'Chuột gaming esports huyền thoại, HERO 2 sensor, LIGHTSPEED, 60g.',
    specs: { 'Sensor': 'HERO 2', 'DPI': '44,000', 'Polling Rate': '2000Hz', 'Weight': '60g', 'Battery': '95 giờ', 'Switch': 'Lightforce Hybrid', 'Feet': 'PTFE', 'Cable': 'LIGHTSPEED USB-C' }
  },
  {
    id: 21, name: 'Pulsar X2V2 Mini', brand: 'Pulsar', category: 'mouse',
    price: 1990000, salePrice: 1690000,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&h=800&fit=crop'],
    rating: 4.7, reviewCount: 123, sold: 456, stock: 30,
    badge: 'sale', variants: ['Black', 'White', 'Red'],
    description: 'Chuột gaming không dây siêu nhẹ 52g, dành cho tay nhỏ, 4K polling rate.',
    specs: { 'Sensor': 'PAW3395', 'DPI': '26,000', 'Polling Rate': '4000Hz', 'Weight': '52g', 'Battery': '70 giờ', 'Size': 'Mini (claw/fingertip)' }
  },
  {
    id: 22, name: 'Lamzu Atlantis', brand: 'Lamzu', category: 'mouse',
    price: 2290000, salePrice: null,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&h=800&fit=crop'],
    rating: 4.6, reviewCount: 67, sold: 189, stock: 15,
    badge: null, variants: ['White', 'Pink', 'Blue'],
    description: 'Chuột gaming không dây 55g, thiết kế đẹp, cảm biến PAW3395.',
    specs: { 'Sensor': 'PAW3395', 'DPI': '26,000', 'Weight': '55g', 'Battery': '70 giờ', 'Switch': 'Huano Blue Shell', 'Shape': 'Symmetrical' }
  },
  {
    id: 23, name: 'Lót chuột Artisan Zero Soft XL', brand: 'Artisan', category: 'mouse',
    price: 1490000, salePrice: null,
    image: 'https://images.unsplash.com/photo-1618499890638-3a0dd4b278cd?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1618499890638-3a0dd4b278cd?w=800&h=800&fit=crop'],
    rating: 4.9, reviewCount: 234, sold: 567, stock: 8,
    badge: 'hot', variants: ['Soft', 'Mid', 'Hard'],
    description: 'Lót chuột gaming huyền thoại Nhật Bản, bề mặt control vải dệt đặc biệt.',
    specs: { 'Size': '490 x 420 x 4mm', 'Surface': 'Vải dệt Nhật', 'Base': 'Foam rubber', 'Made in': 'Japan', 'Type': 'Control' }
  },
  {
    id: 24, name: 'SteelSeries Aerox 5 Wireless', brand: 'SteelSeries', category: 'mouse',
    price: 2490000, salePrice: 1990000,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&h=800&fit=crop'],
    rating: 4.4, reviewCount: 98, sold: 234, stock: 22,
    badge: 'sale', variants: [],
    description: 'Chuột gaming không dây nhẹ 74g, 9 nút, thiết kế lỗ thoáng khí.',
    specs: { 'Sensor': 'TrueMove Air', 'DPI': '18,000', 'Weight': '74g', 'Battery': '180 giờ', 'Buttons': '9', 'Kết nối': 'Quantum 2.0 / Bluetooth / USB-C' }
  },

  // ===== RAM =====
  {
    id: 25, name: 'G.Skill Trident Z5 RGB DDR5 32GB', brand: 'G.Skill', category: 'ram',
    price: 3490000, salePrice: 2990000,
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&h=800&fit=crop'],
    rating: 4.8, reviewCount: 156, sold: 456, stock: 35,
    badge: 'hot', variants: ['6000MHz CL30', '6400MHz CL32'],
    description: 'RAM DDR5 32GB (2x16GB) RGB, XMP 3.0, tản nhiệt nhôm cao cấp.',
    specs: { 'Capacity': '32GB (2x16GB)', 'Type': 'DDR5', 'Speed': '6000MHz / 6400MHz', 'CAS Latency': 'CL30 / CL32', 'Voltage': '1.35V', 'XMP': '3.0', 'RGB': 'Có' }
  },
  {
    id: 26, name: 'Corsair Dominator Platinum DDR5 32GB', brand: 'Corsair', category: 'ram',
    price: 4290000, salePrice: 3790000,
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&h=800&fit=crop'],
    rating: 4.7, reviewCount: 89, sold: 234, stock: 15,
    badge: null, variants: ['6000MHz', '6200MHz'],
    description: 'RAM DDR5 32GB cao cấp nhất, Capellix LED, tản nhiệt DHX.',
    specs: { 'Capacity': '32GB (2x16GB)', 'Type': 'DDR5', 'Speed': '6000MHz', 'CAS Latency': 'CL30', 'Voltage': '1.35V', 'RGB': 'CORSAIR DHX / Capellix' }
  },
  {
    id: 27, name: 'Kingston Fury Beast DDR5 16GB', brand: 'Kingston', category: 'ram',
    price: 1290000, salePrice: 990000,
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&h=800&fit=crop'],
    rating: 4.5, reviewCount: 234, sold: 890, stock: 60,
    badge: 'sale', variants: ['5200MHz', '5600MHz'],
    description: 'RAM DDR5 16GB (1x16GB) giá tốt, ổn định, tản nhiệt nhôm.',
    specs: { 'Capacity': '16GB', 'Type': 'DDR5', 'Speed': '5200MHz / 5600MHz', 'Voltage': '1.25V', 'XMP': '3.0', 'Plug N Play': 'Có' }
  },
  {
    id: 28, name: 'Crucial DDR5 32GB Kit', brand: 'Crucial', category: 'ram',
    price: 2490000, salePrice: 2190000,
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&h=800&fit=crop'],
    rating: 4.6, reviewCount: 178, sold: 567, stock: 40,
    badge: null, variants: ['4800MHz', '5600MHz'],
    description: 'RAM DDR5 32GB (2x16GB) chip Micron chính hãng, ổn định, giá tốt.',
    specs: { 'Capacity': '32GB (2x16GB)', 'Type': 'DDR5', 'Speed': '4800MHz / 5600MHz', 'CAS Latency': 'CL40', 'Warranty': 'Lifetime' }
  },
  {
    id: 29, name: 'TeamGroup T-Force Delta RGB DDR5 32GB', brand: 'TeamGroup', category: 'ram',
    price: 2690000, salePrice: 2290000,
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&h=800&fit=crop'],
    rating: 4.4, reviewCount: 98, sold: 345, stock: 25,
    badge: 'sale', variants: ['Black', 'White'],
    description: 'RAM DDR5 32GB RGB giá cạnh tranh, thiết kế delta mirror đẹp mắt.',
    specs: { 'Capacity': '32GB (2x16GB)', 'Type': 'DDR5', 'Speed': '6000MHz', 'CAS Latency': 'CL30', 'RGB': 'Delta Mirror RGB' }
  },

  // ===== SSD =====
  {
    id: 30, name: 'Samsung 990 Pro 2TB', brand: 'Samsung', category: 'ssd',
    price: 4990000, salePrice: 4290000,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=800&fit=crop'],
    rating: 4.9, reviewCount: 234, sold: 678, stock: 20,
    badge: 'hot', variants: ['1TB', '2TB', '4TB'],
    description: 'SSD NVMe PCIe 4.0 hàng đầu, đọc 7450MB/s, ghi 6900MB/s.',
    specs: { 'Capacity': '2TB', 'Interface': 'PCIe 4.0 x4 NVMe', 'Read': '7,450 MB/s', 'Write': '6,900 MB/s', 'NAND': 'V-NAND TLC', 'TBW': '1,200TB', 'Warranty': '5 năm' }
  },
  {
    id: 31, name: 'WD Black SN850X 1TB', brand: 'WD', category: 'ssd',
    price: 2690000, salePrice: 2290000,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=800&fit=crop'],
    rating: 4.8, reviewCount: 167, sold: 456, stock: 30,
    badge: 'sale', variants: ['500GB', '1TB', '2TB'],
    description: 'SSD NVMe gaming, đọc 7300MB/s, Game Mode 2.0.',
    specs: { 'Capacity': '1TB', 'Interface': 'PCIe 4.0 x4', 'Read': '7,300 MB/s', 'Write': '6,300 MB/s', 'Game Mode': '2.0', 'TBW': '600TB' }
  },
  {
    id: 32, name: 'SK Hynix Platinum P41 1TB', brand: 'SK Hynix', category: 'ssd',
    price: 2290000, salePrice: 1890000,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=800&fit=crop'],
    rating: 4.8, reviewCount: 134, sold: 345, stock: 25,
    badge: null, variants: ['500GB', '1TB', '2TB'],
    description: 'SSD NVMe tốt nhất về hiệu năng/giá, đọc 7000MB/s, 176-layer NAND.',
    specs: { 'Capacity': '1TB', 'Interface': 'PCIe 4.0 x4', 'Read': '7,000 MB/s', 'Write': '6,500 MB/s', 'NAND': '176-layer TLC', 'TBW': '750TB' }
  },
  {
    id: 33, name: 'Kingston KC3000 2TB', brand: 'Kingston', category: 'ssd',
    price: 3790000, salePrice: 3290000,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=800&fit=crop'],
    rating: 4.6, reviewCount: 89, sold: 234, stock: 18,
    badge: null, variants: ['512GB', '1TB', '2TB', '4TB'],
    description: 'SSD NVMe PCIe 4.0, đọc 7000MB/s, tản nhiệt graphene.',
    specs: { 'Capacity': '2TB', 'Interface': 'PCIe 4.0 x4', 'Read': '7,000 MB/s', 'Write': '7,000 MB/s', 'NAND': 'TLC', 'Heatsink': 'Graphene aluminum' }
  },
  {
    id: 34, name: 'Lexar NM790 1TB', brand: 'Lexar', category: 'ssd',
    price: 1690000, salePrice: 1290000,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=800&fit=crop'],
    rating: 4.5, reviewCount: 201, sold: 789, stock: 50,
    badge: 'sale', variants: ['512GB', '1TB', '2TB'],
    description: 'SSD NVMe giá rẻ hiệu năng cao, đọc 7400MB/s.',
    specs: { 'Capacity': '1TB', 'Interface': 'PCIe 4.0 x4', 'Read': '7,400 MB/s', 'Write': '6,500 MB/s', 'TBW': '800TB' }
  },

  // ===== VGA =====
  {
    id: 35, name: 'ASUS ROG STRIX RTX 4070 Ti Super OC', brand: 'ASUS', category: 'vga',
    price: 22990000, salePrice: 20990000,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&h=800&fit=crop'],
    rating: 4.8, reviewCount: 67, sold: 123, stock: 5,
    badge: 'hot', variants: [],
    description: 'Card đồ họa RTX 4070 Ti SUPER OC, 16GB GDDR6X, tản nhiệt 3 fan.',
    specs: { 'GPU': 'RTX 4070 Ti SUPER', 'VRAM': '16GB GDDR6X', 'Boost Clock': '2670 MHz', 'CUDA Cores': '8448', 'TDP': '285W', 'Output': '2x HDMI 2.1, 3x DP 1.4a', 'Power': '16-pin' }
  },
  {
    id: 36, name: 'MSI RTX 4060 Ti Gaming X 8GB', brand: 'MSI', category: 'vga',
    price: 11990000, salePrice: 10490000,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&h=800&fit=crop'],
    rating: 4.6, reviewCount: 145, sold: 345, stock: 12,
    badge: 'sale', variants: [],
    description: 'Card đồ họa RTX 4060 Ti, 8GB GDDR6, TWIN FROZR 9, DLSS 3.',
    specs: { 'GPU': 'RTX 4060 Ti', 'VRAM': '8GB GDDR6', 'Boost Clock': '2640 MHz', 'CUDA Cores': '4352', 'TDP': '160W', 'Output': '1x HDMI 2.1, 3x DP 1.4a' }
  },
  {
    id: 37, name: 'Gigabyte RTX 4060 Eagle OC 8GB', brand: 'Gigabyte', category: 'vga',
    price: 8490000, salePrice: 7490000,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&h=800&fit=crop'],
    rating: 4.5, reviewCount: 198, sold: 567, stock: 20,
    badge: 'sale', variants: [],
    description: 'Card đồ họa RTX 4060 giá tốt, 8GB GDDR6, WINDFORCE 2X.',
    specs: { 'GPU': 'RTX 4060', 'VRAM': '8GB GDDR6', 'Boost Clock': '2475 MHz', 'CUDA Cores': '3072', 'TDP': '115W' }
  },
  {
    id: 38, name: 'ASUS Dual RX 7600 OC 8GB', brand: 'ASUS', category: 'vga',
    price: 7290000, salePrice: 6490000,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&h=800&fit=crop'],
    rating: 4.4, reviewCount: 112, sold: 289, stock: 15,
    badge: null, variants: [],
    description: 'Card đồ họa AMD RX 7600 8GB, hiệu năng tốt cho 1080p gaming.',
    specs: { 'GPU': 'RX 7600', 'VRAM': '8GB GDDR6', 'Boost Clock': '2655 MHz', 'Stream Processors': '2048', 'TDP': '165W' }
  },
  {
    id: 39, name: 'MSI RTX 4080 Super Gaming X Trio 16GB', brand: 'MSI', category: 'vga',
    price: 32990000, salePrice: 29990000,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&h=800&fit=crop'],
    rating: 4.9, reviewCount: 34, sold: 67, stock: 3,
    badge: 'hot', variants: [],
    description: 'Card đồ họa RTX 4080 SUPER cao cấp, 16GB GDDR6X, TRI FROZR 3S.',
    specs: { 'GPU': 'RTX 4080 SUPER', 'VRAM': '16GB GDDR6X', 'Boost Clock': '2610 MHz', 'CUDA Cores': '10240', 'TDP': '320W' }
  },

  // ===== CPU =====
  {
    id: 40, name: 'Intel Core i7-14700K', brand: 'Intel', category: 'cpu',
    price: 10990000, salePrice: 9490000,
    image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=800&h=800&fit=crop'],
    rating: 4.7, reviewCount: 189, sold: 456, stock: 15,
    badge: 'hot', variants: [],
    description: 'CPU gaming đỉnh cao, 20 nhân 28 luồng, boost 5.6GHz, không khóa.',
    specs: { 'Cores/Threads': '20C/28T (8P + 12E)', 'Base Clock': '3.4 GHz', 'Boost Clock': '5.6 GHz', 'TDP': '125W', 'Socket': 'LGA1700', 'Cache': '33MB L3', 'iGPU': 'UHD 770' }
  },
  {
    id: 41, name: 'AMD Ryzen 7 7800X3D', brand: 'AMD', category: 'cpu',
    price: 10490000, salePrice: 8990000,
    image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=800&h=800&fit=crop'],
    rating: 4.9, reviewCount: 267, sold: 789, stock: 10,
    badge: 'hot', variants: [],
    description: 'CPU gaming tốt nhất, 3D V-Cache 96MB, 8 nhân 16 luồng.',
    specs: { 'Cores/Threads': '8C/16T', 'Base Clock': '4.2 GHz', 'Boost Clock': '5.0 GHz', 'TDP': '120W', 'Socket': 'AM5', 'Cache': '96MB L3 (3D V-Cache)', 'iGPU': 'Radeon Graphics' }
  },
  {
    id: 42, name: 'Intel Core i5-14400F', brand: 'Intel', category: 'cpu',
    price: 4990000, salePrice: 4290000,
    image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=800&h=800&fit=crop'],
    rating: 4.6, reviewCount: 312, sold: 1234, stock: 40,
    badge: 'sale', variants: [],
    description: 'CPU giá rẻ hiệu năng cao, 10 nhân 16 luồng, không iGPU.',
    specs: { 'Cores/Threads': '10C/16T (6P + 4E)', 'Base Clock': '2.5 GHz', 'Boost Clock': '4.7 GHz', 'TDP': '65W', 'Socket': 'LGA1700', 'Cache': '20MB L3' }
  },
  {
    id: 43, name: 'AMD Ryzen 5 7600', brand: 'AMD', category: 'cpu',
    price: 4690000, salePrice: 3990000,
    image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=800&h=800&fit=crop'],
    rating: 4.5, reviewCount: 198, sold: 678, stock: 30,
    badge: null, variants: [],
    description: 'CPU Zen 4 giá tốt, 6 nhân 12 luồng, kèm tản Wraith Stealth.',
    specs: { 'Cores/Threads': '6C/12T', 'Base Clock': '3.8 GHz', 'Boost Clock': '5.1 GHz', 'TDP': '65W', 'Socket': 'AM5', 'Cache': '32MB L3', 'Cooler': 'Wraith Stealth' }
  },
  {
    id: 44, name: 'AMD Ryzen 9 7950X', brand: 'AMD', category: 'cpu',
    price: 14990000, salePrice: 12990000,
    image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=800&h=800&fit=crop'],
    rating: 4.8, reviewCount: 89, sold: 123, stock: 5,
    badge: null, variants: [],
    description: 'CPU cao cấp nhất AM5, 16 nhân 32 luồng, boost 5.7GHz.',
    specs: { 'Cores/Threads': '16C/32T', 'Base Clock': '4.5 GHz', 'Boost Clock': '5.7 GHz', 'TDP': '170W', 'Socket': 'AM5', 'Cache': '64MB L3' }
  },

  // ===== MAINBOARD =====
  {
    id: 45, name: 'ASUS ROG STRIX B650E-F Gaming WiFi', brand: 'ASUS', category: 'mainboard',
    price: 7490000, salePrice: 6490000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop'],
    rating: 4.7, reviewCount: 123, sold: 234, stock: 10,
    badge: 'hot', variants: [],
    description: 'Mainboard AM5 ATX, PCIe 5.0, DDR5, WiFi 6E, USB4.',
    specs: { 'Socket': 'AM5', 'Chipset': 'B650E', 'Form Factor': 'ATX', 'RAM': 'DDR5, 4 slots, max 192GB', 'PCIe': '5.0 x16', 'M.2': '3x M.2 (1x PCIe 5.0)', 'WiFi': '6E', 'Audio': 'ROG SupremeFX 7.1' }
  },
  {
    id: 46, name: 'MSI MAG B760M Mortar WiFi II', brand: 'MSI', category: 'mainboard',
    price: 4490000, salePrice: 3790000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop'],
    rating: 4.6, reviewCount: 178, sold: 456, stock: 20,
    badge: 'sale', variants: [],
    description: 'Mainboard Intel LGA1700 mATX, DDR5, WiFi 6E, 2.5G LAN.',
    specs: { 'Socket': 'LGA1700', 'Chipset': 'B760', 'Form Factor': 'Micro-ATX', 'RAM': 'DDR5, 2 slots, max 96GB', 'M.2': '2x M.2', 'WiFi': '6E', 'LAN': '2.5GbE' }
  },
  {
    id: 47, name: 'Gigabyte B650 AORUS Elite AX V2', brand: 'Gigabyte', category: 'mainboard',
    price: 5290000, salePrice: 4590000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop'],
    rating: 4.5, reviewCount: 98, sold: 234, stock: 15,
    badge: null, variants: [],
    description: 'Mainboard AM5 ATX, DDR5, WiFi 6E, EZ-Latch thiết kế tiện lợi.',
    specs: { 'Socket': 'AM5', 'Chipset': 'B650', 'Form Factor': 'ATX', 'RAM': 'DDR5, 4 slots', 'M.2': '2x M.2 (EZ-Latch)', 'WiFi': '6E' }
  },
  {
    id: 48, name: 'ASRock B760M Pro RS', brand: 'ASRock', category: 'mainboard',
    price: 2990000, salePrice: 2590000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop'],
    rating: 4.3, reviewCount: 145, sold: 567, stock: 35,
    badge: 'sale', variants: [],
    description: 'Mainboard Intel LGA1700 mATX giá rẻ, DDR5, 2x M.2.',
    specs: { 'Socket': 'LGA1700', 'Chipset': 'B760M', 'Form Factor': 'Micro-ATX', 'RAM': 'DDR5, 2 slots', 'M.2': '2x M.2' }
  },
  {
    id: 49, name: 'ASUS ROG STRIX Z790-E Gaming WiFi II', brand: 'ASUS', category: 'mainboard',
    price: 11990000, salePrice: 10490000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop'],
    rating: 4.8, reviewCount: 56, sold: 89, stock: 5,
    badge: 'hot', variants: [],
    description: 'Mainboard Z790 cao cấp, PCIe 5.0, Thunderbolt 4, WiFi 7.',
    specs: { 'Socket': 'LGA1700', 'Chipset': 'Z790', 'Form Factor': 'ATX', 'RAM': 'DDR5, 4 slots, max 192GB', 'PCIe': '5.0 x16', 'WiFi': '7', 'Thunderbolt': '4' }
  },

  // ===== PSU =====
  {
    id: 50, name: 'Corsair RM850x 2024', brand: 'Corsair', category: 'psu',
    price: 3290000, salePrice: 2890000,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&h=800&fit=crop'],
    rating: 4.8, reviewCount: 234, sold: 567, stock: 20,
    badge: 'hot', variants: ['750W', '850W', '1000W'],
    description: 'Nguồn 80 Plus Gold, Full Modular, quạt 140mm, siêu êm.',
    specs: { 'Wattage': '850W', 'Efficiency': '80 Plus Gold', 'Modular': 'Full Modular', 'Fan': '140mm FDB', 'ATX': '3.0', '12VHPWR': 'Có', 'Warranty': '10 năm' }
  },
  {
    id: 51, name: 'Seasonic Focus GX-750', brand: 'Seasonic', category: 'psu',
    price: 2690000, salePrice: 2290000,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&h=800&fit=crop'],
    rating: 4.7, reviewCount: 189, sold: 456, stock: 25,
    badge: null, variants: ['650W', '750W', '850W'],
    description: 'Nguồn 80 Plus Gold, Full Modular, thiết kế compact.',
    specs: { 'Wattage': '750W', 'Efficiency': '80 Plus Gold', 'Modular': 'Full Modular', 'Fan': '120mm FDB', 'Warranty': '10 năm' }
  },
  {
    id: 52, name: 'be quiet! Straight Power 12 850W', brand: 'be quiet!', category: 'psu',
    price: 3990000, salePrice: 3490000,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&h=800&fit=crop'],
    rating: 4.9, reviewCount: 67, sold: 123, stock: 8,
    badge: null, variants: ['750W', '850W', '1000W'],
    description: 'Nguồn 80 Plus Platinum, Full Modular, siêu êm, ATX 3.0.',
    specs: { 'Wattage': '850W', 'Efficiency': '80 Plus Platinum', 'Modular': 'Full Modular', 'ATX': '3.0', '12VHPWR': 'Có', 'Noise': 'Silent Wings 135mm' }
  },
  {
    id: 53, name: 'Cooler Master MWE Gold V2 650W', brand: 'Cooler Master', category: 'psu',
    price: 1690000, salePrice: 1390000,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&h=800&fit=crop'],
    rating: 4.4, reviewCount: 234, sold: 789, stock: 40,
    badge: 'sale', variants: ['550W', '650W', '750W'],
    description: 'Nguồn 80 Plus Gold giá rẻ, Full Modular, ổn định.',
    specs: { 'Wattage': '650W', 'Efficiency': '80 Plus Gold', 'Modular': 'Full Modular', 'Fan': '120mm HDB', 'Warranty': '5 năm' }
  },

  // ===== CASE =====
  {
    id: 54, name: 'Lian Li O11 Dynamic EVO', brand: 'Lian Li', category: 'case',
    price: 3990000, salePrice: 3490000,
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&h=800&fit=crop'],
    rating: 4.9, reviewCount: 189, sold: 345, stock: 10,
    badge: 'hot', variants: ['Black', 'White', 'Gray'],
    description: 'Case Mid-Tower huyền thoại, kính cường lực, hỗ trợ tản nước.',
    specs: { 'Form Factor': 'Mid-Tower', 'Mainboard': 'E-ATX / ATX / Micro-ATX', 'GPU': 'Max 422mm', 'Cooler': 'Max 167mm', 'Radiator': 'Top/Bottom/Side 360mm', 'Drive': '3x 3.5" + 6x 2.5"', 'Material': 'Aluminum + Glass' }
  },
  {
    id: 55, name: 'NZXT H7 Flow', brand: 'NZXT', category: 'case',
    price: 2990000, salePrice: 2590000,
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&h=800&fit=crop'],
    rating: 4.7, reviewCount: 145, sold: 289, stock: 15,
    badge: null, variants: ['Black', 'White'],
    description: 'Case Mid-Tower airflow tối ưu, thiết kế đẹp, dễ build.',
    specs: { 'Form Factor': 'Mid-Tower', 'Mainboard': 'ATX / Micro-ATX / Mini-ITX', 'GPU': 'Max 400mm', 'Fans': '2x 120mm included', 'Radiator': 'Front/Top 360mm' }
  },
  {
    id: 56, name: 'Fractal Design North', brand: 'Fractal Design', category: 'case',
    price: 3290000, salePrice: null,
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&h=800&fit=crop'],
    rating: 4.8, reviewCount: 98, sold: 178, stock: 8,
    badge: 'new', variants: ['Charcoal', 'Chalk White'],
    description: 'Case Mid-Tower thiết kế gỗ sang trọng, airflow tốt.',
    specs: { 'Form Factor': 'Mid-Tower', 'Material': 'Steel + Wood panel', 'Mainboard': 'ATX', 'GPU': 'Max 355mm' }
  },
  {
    id: 57, name: 'Corsair 4000D Airflow', brand: 'Corsair', category: 'case',
    price: 2290000, salePrice: 1890000,
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&h=800&fit=crop'],
    rating: 4.6, reviewCount: 312, sold: 890, stock: 30,
    badge: 'sale', variants: ['Black', 'White'],
    description: 'Case Mid-Tower airflow phổ biến nhất, giá tốt, dễ build.',
    specs: { 'Form Factor': 'Mid-Tower', 'Fans': '2x 120mm AF120', 'GPU': 'Max 360mm', 'Radiator': 'Front 360mm, Top 280mm' }
  },

  // ===== COOLING =====
  {
    id: 58, name: 'Noctua NH-D15', brand: 'Noctua', category: 'cooling',
    price: 2490000, salePrice: null,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&h=800&fit=crop'],
    rating: 4.9, reviewCount: 345, sold: 789, stock: 15,
    badge: 'hot', variants: ['Standard', 'Chromax.Black'],
    description: 'Tản nhiệt khí tốt nhất thế giới, dual tower, 2 quạt NF-A15.',
    specs: { 'Type': 'Air Cooler (Dual Tower)', 'Fan': '2x NF-A15 140mm', 'TDP': '250W+', 'Height': '165mm', 'Noise': '24.6 dBA', 'Socket': 'Intel LGA1700 / AMD AM5' }
  },
  {
    id: 59, name: 'NZXT Kraken 360 RGB', brand: 'NZXT', category: 'cooling',
    price: 5990000, salePrice: 5290000,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&h=800&fit=crop'],
    rating: 4.7, reviewCount: 89, sold: 178, stock: 8,
    badge: null, variants: ['Black', 'White'],
    description: 'AIO 360mm, LCD display 2.36", quạt F120 RGB Core.',
    specs: { 'Type': 'AIO Liquid Cooler', 'Radiator': '360mm', 'Fan': '3x F120 RGB Core', 'Pump': '7th Gen Asetek', 'LCD': '2.36" (240x240)', 'Socket': 'Intel / AMD' }
  },
  {
    id: 60, name: 'Thermalright Peerless Assassin 120 SE', brand: 'Thermalright', category: 'cooling',
    price: 690000, salePrice: 550000,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&h=800&fit=crop'],
    rating: 4.7, reviewCount: 456, sold: 2345, stock: 60,
    badge: 'sale', variants: [],
    description: 'Tản khí giá rẻ hiệu năng ngang Noctua, dual tower, 6 ống đồng.',
    specs: { 'Type': 'Air Cooler (Dual Tower)', 'Fan': '2x TL-C12C 120mm', 'TDP': '260W', 'Height': '155mm', 'Heatpipes': '6 ống đồng' }
  },
  {
    id: 61, name: 'Arctic Liquid Freezer III 360', brand: 'Arctic', category: 'cooling',
    price: 2990000, salePrice: 2590000,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&h=800&fit=crop'],
    rating: 4.8, reviewCount: 167, sold: 345, stock: 12,
    badge: 'new', variants: ['Black', 'White'],
    description: 'AIO 360mm giá tốt nhất, quạt P12, VRM fan, hiệu năng đỉnh.',
    specs: { 'Type': 'AIO Liquid Cooler', 'Radiator': '360mm', 'Fan': '3x P12 PWM', 'VRM Fan': 'Có', 'Warranty': '6 năm' }
  },

  // ===== MONITOR =====
  {
    id: 62, name: 'LG 27GP850-B 27" 2K 165Hz', brand: 'LG', category: 'monitor',
    price: 8990000, salePrice: 7490000,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&h=800&fit=crop'],
    rating: 4.7, reviewCount: 189, sold: 456, stock: 12,
    badge: 'hot', variants: [],
    description: 'Màn hình gaming IPS 27" 2K 165Hz, 1ms, HDR400, Nano IPS.',
    specs: { 'Size': '27"', 'Resolution': '2560x1440 (QHD)', 'Panel': 'Nano IPS', 'Refresh Rate': '165Hz (OC 180Hz)', 'Response': '1ms GtG', 'HDR': 'HDR400', 'Color': '98% DCI-P3', 'Sync': 'G-Sync Compatible / FreeSync Premium' }
  },
  {
    id: 63, name: 'Samsung Odyssey G7 32" 2K 240Hz', brand: 'Samsung', category: 'monitor',
    price: 12990000, salePrice: 10990000,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&h=800&fit=crop'],
    rating: 4.6, reviewCount: 123, sold: 234, stock: 8,
    badge: 'sale', variants: [],
    description: 'Màn hình gaming VA cong 32" 2K 240Hz, 1ms, HDR600.',
    specs: { 'Size': '32"', 'Resolution': '2560x1440', 'Panel': 'VA (1000R curve)', 'Refresh Rate': '240Hz', 'Response': '1ms GtG', 'HDR': 'HDR600' }
  },
  {
    id: 64, name: 'ASUS VG249Q1A 24" Full HD 165Hz', brand: 'ASUS', category: 'monitor',
    price: 3990000, salePrice: 3290000,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&h=800&fit=crop'],
    rating: 4.5, reviewCount: 345, sold: 890, stock: 25,
    badge: 'sale', variants: [],
    description: 'Màn hình gaming IPS 24" Full HD 165Hz, 1ms, Extreme Low Motion Blur.',
    specs: { 'Size': '24"', 'Resolution': '1920x1080', 'Panel': 'IPS', 'Refresh Rate': '165Hz', 'Response': '1ms MPRT', 'Sync': 'FreeSync Premium' }
  },
  {
    id: 65, name: 'Dell S2722DGM 27" 2K 165Hz', brand: 'Dell', category: 'monitor',
    price: 6990000, salePrice: 5990000,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&h=800&fit=crop'],
    rating: 4.6, reviewCount: 167, sold: 345, stock: 15,
    badge: null, variants: [],
    description: 'Màn hình gaming VA cong 27" 2K 165Hz, 99% sRGB.',
    specs: { 'Size': '27"', 'Resolution': '2560x1440', 'Panel': 'VA (1500R curve)', 'Refresh Rate': '165Hz', 'Response': '2ms GtG' }
  },

  // ===== TAI NGHE =====
  {
    id: 66, name: 'SteelSeries Arctis Nova Pro Wireless', brand: 'SteelSeries', category: 'headset',
    price: 8990000, salePrice: 7990000,
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1599669454699-248893623440?w=800&h=800&fit=crop'],
    rating: 4.8, reviewCount: 89, sold: 156, stock: 6,
    badge: 'hot', variants: [],
    description: 'Tai nghe gaming không dây cao cấp, ANC, DAC tích hợp, pin swap.',
    specs: { 'Driver': '40mm Neodymium', 'Frequency': '10-40,000Hz', 'ANC': 'Có (4 mic)', 'Battery': '22h (dual battery)', 'Wireless': '2.4GHz + Bluetooth', 'DAC': 'Tích hợp' }
  },
  {
    id: 67, name: 'Razer BlackShark V2 Pro', brand: 'Razer', category: 'headset',
    price: 4490000, salePrice: 3790000,
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1599669454699-248893623440?w=800&h=800&fit=crop'],
    rating: 4.6, reviewCount: 234, sold: 456, stock: 18,
    badge: 'sale', variants: ['Black', 'White'],
    description: 'Tai nghe gaming esports, TriForce 50mm, HyperSpeed Wireless.',
    specs: { 'Driver': '50mm TriForce Titanium', 'Frequency': '12-28,000Hz', 'Wireless': 'HyperSpeed 2.4GHz', 'Battery': '70h', 'Weight': '320g', 'Mic': 'Detachable HyperClear Super Wideband' }
  },
  {
    id: 68, name: 'HyperX Cloud III Wireless', brand: 'HyperX', category: 'headset',
    price: 3290000, salePrice: 2790000,
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1599669454699-248893623440?w=800&h=800&fit=crop'],
    rating: 4.5, reviewCount: 178, sold: 345, stock: 22,
    badge: null, variants: ['Black', 'Red'],
    description: 'Tai nghe gaming không dây, DTS:X Spatial Audio, pin 120 giờ.',
    specs: { 'Driver': '53mm', 'Battery': '120h', 'Wireless': '2.4GHz', 'Audio': 'DTS:X Spatial', 'Mic': 'Detachable, noise-cancelling' }
  },
  {
    id: 69, name: 'Logitech G Pro X 2 Lightspeed', brand: 'Logitech', category: 'headset',
    price: 5990000, salePrice: 5290000,
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1599669454699-248893623440?w=800&h=800&fit=crop'],
    rating: 4.7, reviewCount: 67, sold: 123, stock: 10,
    badge: 'new', variants: ['Black', 'White'],
    description: 'Tai nghe gaming pro, Graphene driver 50mm, LIGHTSPEED + Bluetooth.',
    specs: { 'Driver': '50mm Graphene', 'Wireless': 'LIGHTSPEED + Bluetooth', 'Battery': '50h', 'DTS': 'Headphone:X 2.0', 'Weight': '309g' }
  },

  // ===== LAPTOP =====
  {
    id: 70, name: 'ASUS ROG Strix G16 2024', brand: 'ASUS', category: 'laptop',
    price: 35990000, salePrice: 31990000,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&h=800&fit=crop'],
    rating: 4.7, reviewCount: 89, sold: 123, stock: 5,
    badge: 'hot', variants: [],
    description: 'Laptop gaming 16", i7-14700HX, RTX 4060, 16GB RAM, 512GB SSD.',
    specs: { 'CPU': 'Intel Core i7-14700HX', 'GPU': 'RTX 4060 8GB', 'RAM': '16GB DDR5 5600MHz', 'Storage': '512GB NVMe PCIe 4.0', 'Display': '16" QHD+ 240Hz, 100% DCI-P3', 'Battery': '90Wh', 'OS': 'Windows 11', 'Weight': '2.5kg' }
  },
  {
    id: 71, name: 'Lenovo Legion Pro 5 16IRX9', brand: 'Lenovo', category: 'laptop',
    price: 42990000, salePrice: 38990000,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&h=800&fit=crop'],
    rating: 4.8, reviewCount: 56, sold: 89, stock: 3,
    badge: 'new', variants: [],
    description: 'Laptop gaming 16", i9-14900HX, RTX 4070, 32GB RAM, 1TB SSD.',
    specs: { 'CPU': 'Intel Core i9-14900HX', 'GPU': 'RTX 4070 8GB (140W)', 'RAM': '32GB DDR5 5600MHz', 'Storage': '1TB NVMe PCIe 4.0', 'Display': '16" WQXGA 240Hz, 100% sRGB', 'Battery': '99.99Wh', 'Weight': '2.58kg' }
  },
  {
    id: 72, name: 'Acer Nitro V 15 ANV15-41', brand: 'Acer', category: 'laptop',
    price: 19990000, salePrice: 16990000,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&h=800&fit=crop'],
    rating: 4.3, reviewCount: 234, sold: 567, stock: 20,
    badge: 'sale', variants: [],
    description: 'Laptop gaming giá rẻ, Ryzen 5 7535HS, RTX 4050, 144Hz.',
    specs: { 'CPU': 'AMD Ryzen 5 7535HS', 'GPU': 'RTX 4050 6GB', 'RAM': '16GB DDR5', 'Storage': '512GB NVMe', 'Display': '15.6" FHD 144Hz', 'Battery': '57Wh', 'Weight': '2.1kg' }
  },
  {
    id: 73, name: 'MSI Katana 15 B13VGK', brand: 'MSI', category: 'laptop',
    price: 27990000, salePrice: 24990000,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&h=800&fit=crop'],
    rating: 4.5, reviewCount: 145, sold: 234, stock: 10,
    badge: null, variants: [],
    description: 'Laptop gaming 15.6", i7-13620H, RTX 4070, 16GB DDR5.',
    specs: { 'CPU': 'Intel Core i7-13620H', 'GPU': 'RTX 4070 8GB', 'RAM': '16GB DDR5', 'Storage': '512GB NVMe', 'Display': '15.6" FHD 144Hz', 'Weight': '2.25kg' }
  },

  // ===== PHỤ KIỆN =====
  {
    id: 74, name: 'Keychron Coiled Cable', brand: 'Keychron', category: 'accessory',
    price: 590000, salePrice: 490000,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&h=800&fit=crop'],
    rating: 4.5, reviewCount: 89, sold: 345, stock: 40,
    badge: null, variants: ['Black', 'White', 'Pink', 'Blue'],
    description: 'Cáp bàn phím xoắn USB-C, aviation connector, dài 1.5m.',
    specs: { 'Connector': 'USB-C to USB-A', 'Length': '1.5m (coiled 30cm)', 'Material': 'Nylon braided', 'Connector': 'GX12 Aviation' }
  },
  {
    id: 75, name: 'Glorious Wrist Rest TKL', brand: 'Glorious', category: 'accessory',
    price: 490000, salePrice: 390000,
    image: 'https://images.unsplash.com/photo-1618499890638-3a0dd4b278cd?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1618499890638-3a0dd4b278cd?w=800&h=800&fit=crop'],
    rating: 4.6, reviewCount: 67, sold: 234, stock: 30,
    badge: 'sale', variants: ['Full-size', 'TKL', 'Compact'],
    description: 'Kê tay bàn phím memory foam, bề mặt vải mềm mại.',
    specs: { 'Material': 'Memory Foam + Fabric', 'Size': 'TKL (360 x 100 x 25mm)', 'Base': 'Anti-slip rubber' }
  },
  {
    id: 76, name: 'Bộ vệ sinh bàn phím 5 trong 1', brand: 'Generic', category: 'accessory',
    price: 190000, salePrice: 149000,
    image: 'https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=800&h=800&fit=crop'],
    rating: 4.2, reviewCount: 456, sold: 2345, stock: 100,
    badge: 'sale', variants: [],
    description: 'Bộ dụng cụ vệ sinh bàn phím: cọ, nhíp, keycap puller, brush, vải.',
    specs: { 'Includes': 'Keycap puller, Switch puller, Brush, Cloth, Blower' }
  }
];

export const blogs = [
  {
    id: 1, slug: 'top-5-ban-phim-co-2024',
    title: 'Top 5 Bàn Phím Cơ Đáng Mua Nhất 2024',
    titleEn: 'Top 5 Mechanical Keyboards Worth Buying in 2024',
    category: 'Review', date: '2024-03-15',
    excerpt: 'Tổng hợp 5 bàn phím cơ tốt nhất hiện nay cho gaming, văn phòng và custom keyboard.',
    excerptEn: 'Top 5 best mechanical keyboards for gaming, office work, and custom builds.',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&h=400&fit=crop',
    author: 'Huy Hoàng', readTime: '8 phút',
    content: '<h2>1. Keychron Q1 Max</h2><p>Bàn phím cơ không dây 75% layout với QMK/VIA, Gasket Mount, hot-swappable. Đây là lựa chọn hoàn hảo cho cả gaming lẫn productivity.</p><h2>2. Razer Huntsman V3 Pro</h2><p>Với công nghệ Analog Optical Switch, Razer Huntsman V3 Pro mang đến trải nghiệm gaming độc đáo với adjustable actuation point.</p><h2>3. Akko 5075B Plus</h2><p>Lựa chọn giá rẻ tốt nhất với Gasket mount, hot-swap, và triple mode connectivity.</p><h2>4. Ducky One 3 SF</h2><p>Build quality xuất sắc với QUACK Mechanics mang đến âm thanh typing tuyệt vời.</p><h2>5. Leopold FC660M</h2><p>Dành cho những ai coi trọng build quality và typing experience hơn tất cả.</p>'
  },
  {
    id: 2, slug: 'huong-dan-build-pc-gaming-20-trieu',
    title: 'Hướng Dẫn Build PC Gaming 20 Triệu Đồng',
    titleEn: 'How to Build a Gaming PC Under 20 Million VND',
    category: 'Hướng dẫn', date: '2024-03-10',
    excerpt: 'Cấu hình PC gaming 20 triệu chơi được mọi game ở 1080p High-Ultra settings.',
    excerptEn: 'Build a 20M VND gaming PC that runs every game at 1080p High-Ultra.',
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&h=400&fit=crop',
    author: 'Huy Hoàng', readTime: '12 phút',
    content: '<h2>Cấu hình đề xuất</h2><p>Với ngân sách 20 triệu, bạn hoàn toàn có thể build một bộ PC gaming chơi tốt mọi game hiện nay.</p><h2>CPU: Intel Core i5-14400F</h2><p>10 nhân 16 luồng, hiệu năng gaming xuất sắc trong tầm giá.</p><h2>GPU: RTX 4060</h2><p>Card đồ họa lý tưởng cho gaming 1080p, hỗ trợ DLSS 3.</p>'
  },
  {
    id: 3, slug: 'switch-nao-phu-hop-voi-ban',
    title: 'Switch Nào Phù Hợp Với Bạn? Linear vs Tactile vs Clicky',
    titleEn: 'Which Switch Is Right For You? Linear vs Tactile vs Clicky',
    category: 'Kiến thức', date: '2024-03-05',
    excerpt: 'Hướng dẫn chọn switch bàn phím cơ phù hợp với nhu cầu sử dụng của bạn.',
    excerptEn: 'Guide to choosing the right mechanical keyboard switch for your needs.',
    image: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=800&h=400&fit=crop',
    author: 'Huy Hoàng', readTime: '10 phút',
    content: '<h2>Linear Switch</h2><p>Smooth từ đầu đến cuối, không có bump. Phù hợp gaming và gõ nhanh. Ví dụ: Gateron Oil King, Cherry MX Red.</p><h2>Tactile Switch</h2><p>Có bump nhẹ ở điểm actuation, feedback typing tốt. Ví dụ: Cherry MX Brown, Zealios V2.</p><h2>Clicky Switch</h2><p>Có bump + tiếng click. Feedback tốt nhất nhưng ồn. Ví dụ: Cherry MX Blue, Kailh Box White.</p>'
  },
  {
    id: 4, slug: 'ddr5-vs-ddr4-co-nen-nang-cap',
    title: 'DDR5 vs DDR4: Có Nên Nâng Cấp RAM Không?',
    titleEn: 'DDR5 vs DDR4: Should You Upgrade Your RAM?',
    category: 'So sánh', date: '2024-02-28',
    excerpt: 'So sánh chi tiết hiệu năng DDR5 vs DDR4 để giúp bạn quyết định có nên upgrade.',
    excerptEn: 'Detailed DDR5 vs DDR4 performance comparison to help you decide.',
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&h=400&fit=crop',
    author: 'Huy Hoàng', readTime: '7 phút',
    content: '<h2>Băng thông</h2><p>DDR5 có băng thông cao hơn đáng kể so với DDR4, bắt đầu từ 4800MHz.</p><h2>Giá thành</h2><p>DDR5 vẫn đắt hơn DDR4 khoảng 20-30%, nhưng khoảng cách đang thu hẹp.</p>'
  },
  {
    id: 5, slug: 'review-razer-viper-v3-pro',
    title: 'Review Razer Viper V3 Pro: Chuột Gaming Tốt Nhất 2024?',
    titleEn: 'Razer Viper V3 Pro Review: Best Gaming Mouse 2024?',
    category: 'Review', date: '2024-02-20',
    excerpt: 'Đánh giá chi tiết Razer Viper V3 Pro - chuột gaming 54g, 8000Hz polling rate.',
    excerptEn: 'Detailed review of the Razer Viper V3 Pro - 54g gaming mouse with 8000Hz polling.',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&h=400&fit=crop',
    author: 'Huy Hoàng', readTime: '15 phút',
    content: '<h2>Thiết kế</h2><p>Chỉ 54g, nhẹ nhất trong phân khúc chuột gaming không dây cao cấp.</p><h2>Sensor</h2><p>Focus Pro 36K, tracking cực kỳ chính xác trên mọi bề mặt.</p><h2>Polling Rate</h2><p>8000Hz wireless - nhanh gấp 4 lần chuẩn 2000Hz.</p>'
  }
];

export const banners = [
  {
    id: 1,
    title: 'Flash Sale Cuối Tuần',
    titleEn: 'Weekend Flash Sale',
    subtitle: 'Giảm đến 40% bàn phím cơ & chuột gaming',
    subtitleEn: 'Up to 40% off mechanical keyboards & gaming mice',
    cta: 'Mua ngay',
    ctaEn: 'Shop Now',
    link: '#/flash-sale',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=1400&h=600&fit=crop',
    gradient: 'linear-gradient(135deg, rgba(10,10,10,0.9), rgba(10,10,10,0.3))'
  },
  {
    id: 2,
    title: 'Xây Dựng PC Mơ Ước',
    titleEn: 'Build Your Dream PC',
    subtitle: 'Linh kiện chính hãng, giá tốt nhất thị trường',
    subtitleEn: 'Genuine components, best prices guaranteed',
    cta: 'PC Builder',
    ctaEn: 'PC Builder',
    link: '#/pc-builder',
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=1400&h=600&fit=crop',
    gradient: 'linear-gradient(135deg, rgba(10,10,10,0.85), rgba(10,10,10,0.2))'
  },
  {
    id: 3,
    title: 'Keycap & Switch',
    titleEn: 'Keycaps & Switches',
    subtitle: 'BST keycap và switch mới nhất từ GMK, Akko, Gateron',
    subtitleEn: 'Latest keycap & switch collections from GMK, Akko, Gateron',
    cta: 'Khám phá',
    ctaEn: 'Explore',
    link: '#/category/keycap',
    image: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=1400&h=600&fit=crop',
    gradient: 'linear-gradient(135deg, rgba(10,10,10,0.85), rgba(10,10,10,0.2))'
  }
];

// Helper function to get products by category
export function getProductsByCategory(categoryId) {
  return products.filter(p => p.category === categoryId);
}

// Helper to get product by ID
export function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

// Helper to search products
export function searchProducts(query) {
  const q = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return products.filter(p => {
    const name = p.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const brand = p.brand.toLowerCase();
    const cat = p.category.toLowerCase();
    return name.includes(q) || brand.includes(q) || cat.includes(q);
  });
}

// Helper to filter products
export function filterProducts(filters = {}) {
  let filtered = [...products];
  
  if (filters.category) {
    filtered = filtered.filter(p => p.category === filters.category);
  }
  if (filters.brand) {
    filtered = filtered.filter(p => p.brand === filters.brand);
  }
  if (filters.minPrice) {
    filtered = filtered.filter(p => (p.salePrice || p.price) >= filters.minPrice);
  }
  if (filters.maxPrice) {
    filtered = filtered.filter(p => (p.salePrice || p.price) <= filters.maxPrice);
  }
  if (filters.badge) {
    filtered = filtered.filter(p => p.badge === filters.badge);
  }
  if (filters.search) {
    filtered = searchProducts(filters.search).filter(p => filtered.includes(p));
  }
  
  // Sort
  if (filters.sort) {
    switch (filters.sort) {
      case 'price-asc':
        filtered.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case 'price-desc':
        filtered.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'best-selling':
        filtered.sort((a, b) => b.sold - a.sold);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }
  }
  
  return filtered;
}

// Get sale products
export function getSaleProducts(limit = 8) {
  return products.filter(p => p.salePrice).sort((a, b) => {
    const discA = ((a.price - a.salePrice) / a.price);
    const discB = ((b.price - b.salePrice) / b.price);
    return discB - discA;
  }).slice(0, limit);
}

// Get hot products
export function getHotProducts(limit = 8) {
  return products.filter(p => p.badge === 'hot' || p.sold > 300).slice(0, limit);
}

// Get new products
export function getNewProducts(limit = 8) {
  return [...products].sort((a, b) => b.id - a.id).slice(0, limit);
}

// Get best sellers
export function getBestSellers(limit = 8) {
  return [...products].sort((a, b) => b.sold - a.sold).slice(0, limit);
}

// Get related products
export function getRelatedProducts(product, limit = 4) {
  return products.filter(p => p.category === product.category && p.id !== product.id).slice(0, limit);
}

// Get category brands
export function getCategoryBrands(categoryId) {
  const categoryProducts = products.filter(p => p.category === categoryId);
  return [...new Set(categoryProducts.map(p => p.brand))];
}
