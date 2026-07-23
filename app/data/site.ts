export type Product = {
  name: string;
  shortName: string;
  image: string;
  summary: string;
  options: string[];
  category: string;
};

export type Article = {
  date: string;
  title: string;
  summary: string;
  image: string;
  tag: string;
};

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/aboutus.html' },
  { label: 'Products', to: '/products.html' },
  { label: 'Support', to: '/Support.html' },
  { label: 'News', to: '/news.html' },
];

export const products: Product[] = [
  {
    name: 'Custom coffee & tea packaging',
    shortName: 'Coffee & tea bags',
    image: '/media/coffee.jpg',
    summary: 'Flat bottom, side gusset and stand-up packaging with valve, zipper and tin-tie options.',
    options: ['Degassing valve', 'Resealable zipper', 'Flat bottom', 'Custom print'],
    category: 'Food packaging',
  },
  {
    name: 'Pet food & treat packaging',
    shortName: 'Pet food bags',
    image: '/media/pet.jpg',
    summary: 'Durable flexible formats for pet food, treats and feed in a broad range of sizes.',
    options: ['High barrier', 'Resealable', 'Large format', 'Custom print'],
    category: 'Food packaging',
  },
  {
    name: 'Bakery & confectionery bags',
    shortName: 'Bakery bags',
    image: '/media/bakery.jpg',
    summary: 'Windowed and printed packaging for bread, toast, cookies, candy and baked goods.',
    options: ['Clear window', 'Tin tie', 'Food grade', 'Custom print'],
    category: 'Food packaging',
  },
  {
    name: 'Special shaped pouches',
    shortName: 'Shaped bags',
    image: '/media/shaped.jpg',
    summary: 'Distinctive die-cut formats for seasonal products, snacks and branded promotions.',
    options: ['Die cut', 'Zipper', 'Clear window', 'Custom shape'],
    category: 'Bag type',
  },
  {
    name: 'Printed packaging roll films',
    shortName: 'Roll films',
    image: '/media/film.jpg',
    summary: 'Printed laminating roll film for automated food, snack and confectionery packaging.',
    options: ['Gravure print', 'Lamination', 'High barrier', 'Multiple widths'],
    category: 'Packaging film',
  },
  {
    name: 'Spout pouches for liquids',
    shortName: 'Spout pouches',
    image: '/media/spout.jpg',
    summary: 'Flexible pouches for beverages, sauces, oils and other pourable products.',
    options: ['Spout fitment', 'Stand-up', 'Multiple volumes', 'Custom print'],
    category: 'Bag type',
  },
];

export const articles: Article[] = [
  {
    date: '2025-12-29',
    title: 'Explanation of Color Mixing in Printed Patterns',
    summary: 'Why minor color mixing can appear where colors overlap, contrast is strong or printed details are especially small.',
    image: '/media/printing.png',
    tag: 'Printing',
  },
  {
    date: '2025-11-22',
    title: 'Experience Luxury in Every Touch with Soft Touch Packaging',
    summary: 'How a smooth, velvety finish changes the tactile experience and signals premium product quality.',
    image: '/media/coffee.jpg',
    tag: 'Finishing',
  },
  {
    date: '2025-11-17',
    title: 'Make Your Packaging Stand Out with Embossing',
    summary: 'Using raised patterns and logos to introduce texture, depth and a stronger presence on the shelf.',
    image: '/media/shaped.jpg',
    tag: 'Finishing',
  },
  {
    date: '2025-10-18',
    title: 'Elevate Your Brand with Sand-textured Varnish Packaging',
    summary: 'A tactile coating that adds a fine sand-like texture and helps premium packaging feel distinctive.',
    image: '/media/bakery.jpg',
    tag: 'Materials',
  },
  {
    date: '2025-10-11',
    title: 'Keep Freshness at Your Fingertips with Tin Tie Packaging',
    summary: 'A reusable closing format for coffee, tea, baked goods and snacks that makes opening and resealing simple.',
    image: '/media/sample-room.png',
    tag: 'Formats',
  },
];

export const facts = [
  { value: '1993', label: 'Established in Guangdong' },
  { value: '6,000 m²', label: 'Industrial park' },
  { value: '120', label: 'People in the team' },
  { value: '50+', label: 'Sets of equipment' },
];
