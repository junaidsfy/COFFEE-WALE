import { MenuItem, Testimonial, GalleryItem, Feature } from './types';

// Import our beautifully generated premium assets
// @ts-ignore
import coldCoffeeImg from './assets/images/cold_coffee_premium_1781980147128.jpg';
// @ts-ignore
import baristaBrewingImg from './assets/images/barista_brewing_1781980162814.jpg';
// @ts-ignore
import cafeInteriorImg from './assets/images/cafe_interior_luxury_1781980183337.jpg';
// @ts-ignore
import signatureDrinkImg from './assets/images/signature_drink_1781980201489.jpg';

export const IMAGES = {
  coldCoffee: coldCoffeeImg,
  baristaBrewing: baristaBrewingImg,
  cafeInterior: cafeInteriorImg,
  signatureDrink: signatureDrinkImg,
  // High-end fallback visuals from Unsplash to ensure masonry gallery is rich and 100% reliable
  preparationDetail: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800',
  customerJoy: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
};

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE CATEGORY
  {
    id: 'c1',
    name: 'Signature Cold Coffee',
    description: 'Our legendary creamy, slow-churned, ice-cold delight crafted with private blend espresso.',
    price: '₹149',
    category: 'coffee',
    tag: 'Best Seller',
    isHotSeller: true
  },
  {
    id: 'c2',
    name: 'Classic Hot Mocha',
    description: 'Rich dark espresso fused with premium Dutch cocoa, poured with velvety steam-frothed milk.',
    price: '₹119',
    category: 'coffee',
    tag: 'Rich & Warm'
  },
  {
    id: 'c3',
    name: 'Signature Iced Latte',
    description: 'Double shot of Arabica poured over crystal block ice, balanced with crisp fresh organic milk.',
    price: '₹129',
    category: 'coffee'
  },
  {
    id: 'c4',
    name: 'Double Espresso Pull',
    description: 'Intense, aromatic pull of 100% monsooned Malabar estate beans boasting thick, hazelnut crema.',
    price: '₹89',
    category: 'coffee',
    tag: 'Pure Strength'
  },

  // CAFÉ FAVORITES
  {
    id: 'f1',
    name: 'Trio Cheese Grilled Sandwich',
    description: 'Sautéed paneer, cheddar, and mozzarella loaded with bell peppers and house mint chutney.',
    price: '₹139',
    category: 'favorites',
    tag: 'Barista Recommendation',
    isHotSeller: true
  },
  {
    id: 'f2',
    name: 'Classic Crispy Crunch Burger',
    description: 'Zesty golden vegetable patty layered with caramelized onions, heirloom tomatoes, and secret sauce.',
    price: '₹149',
    category: 'favorites'
  },
  {
    id: 'f3',
    name: 'Creamy Alfredo Penne',
    description: 'Rich cheese and white butter sauce tossed with tender mushrooms, sweet broccoli, and parmesan.',
    price: '₹179',
    category: 'favorites',
    tag: 'All-Day Favorite'
  },
  {
    id: 'f4',
    name: 'Spicy Peri-Peri Crisp Fries',
    description: 'Sizzling hot french fries tossed in a high-voltage peri-peri spice blend, served with garlic dip.',
    price: '₹109',
    category: 'favorites'
  },

  // REFRESHERS
  {
    id: 'r1',
    name: 'Decadent Irish Fudge Shake',
    description: 'Super thick artisanal butterscotch and creamy fudge shake topped with roasted nut dust.',
    price: '₹159',
    category: 'refreshers',
    tag: 'Indulgent',
    isHotSeller: true
  },
  {
    id: 'r2',
    name: 'Elderflower Mint Mojito',
    description: 'Fresh field mint leaves muddled with juicy key lime, cold soda fizz, and elegant elderflower nectar.',
    price: '₹139',
    category: 'refreshers',
    tag: 'Ultra-Cooler'
  },
  {
    id: 'r3',
    name: 'Crimson Forest Honey Tea',
    description: 'Pure loose-leaf hibiscus tea brewed clean, sweetened with raw wild honey and cold lemon drizzle.',
    price: '₹119',
    category: 'refreshers'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'fe1',
    title: 'Freshly Brewed',
    description: 'Every single cup is pulled on-demand from 100% premium quality, fresh roasted Arabica beans.',
    iconName: 'Coffee'
  },
  {
    id: 'fe2',
    title: 'Premium Ingredients',
    description: 'We source organic milk, authentic chocolates, and draft sweet syrups in-house with zero compromises.',
    iconName: 'Sparkles'
  },
  {
    id: 'fe3',
    title: 'Cozy Ambience',
    description: 'Designed as a quiet geometric retreat with warm luxury gold lighting, comfortable seating, and premium Wi-Fi.',
    iconName: 'Compass'
  },
  {
    id: 'fe4',
    title: 'Fast Service',
    description: 'We understand you lead active lives. Our trained artisans pull and draft your orders with extreme precision.',
    iconName: 'Zap'
  },
  {
    id: 'fe5',
    title: 'Affordable Prices',
    description: 'Premium international café taste and design elements priced thoughtfully so you can visit us daily.',
    iconName: 'Tag'
  },
  {
    id: 'fe6',
    title: 'Friendly Staff',
    description: 'A cheerful, warm-hearted team that feels like neighborhood family from the moment you take your first step inside.',
    iconName: 'Smile'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Aarav Sharma',
    role: 'Ghaziabad College Student',
    text: 'COFFEE WALE has hands down the best cold coffee in Ghaziabad! It is so unbelievably rich and creamy. The pricing is also extremely pocket-friendly for students compared to big chains.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Priya Verma',
    role: 'Freelance UI/UX Designer',
    text: 'This place is a quiet luxury in Pratap Vihar. Symmetrical minimalist designs, deep warm lighting, and stellar lo-fi music. Perfect for getting code compiled or sketches designed.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Rohan Gupta',
    role: 'Pratap Vihar Resident',
    text: 'Extremely polite staff, incredibly fast delivery, and delicious snacks! The peri-peri fries paired with an iced signature latte is my absolute daily comfort routine. Highly recommended.',
    rating: 5
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Sleek Quiet Interior',
    category: 'Café Vibe',
    imgUrl: IMAGES.cafeInterior
  },
  {
    id: 'g2',
    title: 'Signature Chilled Brew',
    category: 'Product Spotlight',
    imgUrl: IMAGES.coldCoffee
  },
  {
    id: 'g3',
    title: 'Artisanal Barista Flow',
    category: 'Behind the Brew',
    imgUrl: IMAGES.baristaBrewing
  },
  {
    id: 'g4',
    title: 'Indulgent Dessert Shake',
    category: 'Delicacies',
    imgUrl: IMAGES.signatureDrink
  },
  {
    id: 'g5',
    title: 'Crafting Fresh Espresso',
    category: 'Behind the Brew',
    imgUrl: IMAGES.preparationDetail
  },
  {
    id: 'g6',
    title: 'Aesthetic Coffee Corner',
    category: 'Café Vibe',
    imgUrl: IMAGES.customerJoy
  }
];
