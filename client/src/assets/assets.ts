import oils1_jpg from "./images/oils1.jpg";
import Honey from "./images/honey.jpeg";
import Masala from "./images/masala.jpeg";
import Grains from "./images/grains.jpg";
import Dryfruits from "./images/dryfruits.avif";
import Seeds from "./images/seeds.jpeg";
import White_Sesame_seed from "./images/whitesesameseeds.jpeg";
import Wheat_grain from "./images/wheatgrain.jpeg";
import Walnut_dryfruit from "./images/walnut.jpeg";
import Toor_seed from "./images/toorseeds.jpeg";
import Sunflower_seed from "./images/sunflowerseed.jpeg";
import Sunflower_oil from "./images/sunflower1.jpeg";
import Soya_seed from "./images/soyaseed.jpeg";
import Sesame_oil from "./images/sesame1.jpeg";
import Rice_grain from "./images/ricegrain.jpeg";
import Redchilli_masala from "./images/rechillimasala.jpeg";
import Raw_honey from "./images/raw.jpeg";
import Raisin_dryfruit from "./images/raisinsdryfruits.jpeg";
import Ragi_grain from "./images/ragi.jpeg";
import Popcorn_grain from "./images/pohagrains.jpeg";
import Poha_grain from "./images/pohagrains.jpeg";
import Pista_dryfruit from "./images/pistadryfruits.jpeg";
import Peanut_oil from "./images/peanut1.jpeg";
import Paneer_masala from "./images/paneermasala.jpeg";
import Nates_honey from "./images/nateshoney.jpeg";
import Mutton_masala from "./images/muttonmasala.jpeg";
import Musturd_seed from "./images/musturdseed.jpeg";
import Musturd_oil from "./images/musturd1.jpeg";
import Hazlenut_dryfruit from "./images/hazlenuts.jpeg";
import Groundnut_seed from "./images/groundnutseed.jpeg";
import Garam_masala from "./images/garammasala.jpeg";
import Foodcare_honey from "./images/foodcarehoney.jpeg";
import Dabur_honey from "./images/dabur.jpeg";
import Coriander_masala from "./images/coriandermasala.jpeg";
import Coconut_oil from "./images/coconut.jpg";
import Chicken_masala from "./images/chickenmasala.jpeg";
import Chaat_masala from "./images/chaatmasala.jpeg";
import Castor_oil from "./images/castor.jpeg";
import Cashew_dryfruit from "./images/cashewdryfruits.jpeg";
import Blackraisin_dryfruit from "./images/blackraisinsdryfruits.jpeg";
import Barley_grain from "./images/barley.jpeg";
import Bagrry_honey from "./images/bagrryhoney.jpeg";
import Badam_dryfruit from "./images/badamdryfruits.jpeg";
import Turmeric_masala from "./images/turmeric.jpeg";
import Bgmasala from "./images/Masala1.jpeg";
import Bggrains from "./images/Grains.jpeg";
import Bgdryfruit from "./images/Dryfruit.jpeg";
import Bgseeds from "./images/Seeds2.jpeg";
import Sunflower from "./images/sunflower.jpeg";
import Bghoney from "./images/Honey.png";
import { FaTruck } from "react-icons/fa";
import type { IconType } from "react-icons/lib";
import { IoLeaf } from "react-icons/io5";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";

export const assets = {
  oils1_jpg,
  Honey,
  Masala,
  Grains,
  Dryfruits,
  Seeds,
  White_Sesame_seed,
  Wheat_grain,
  Walnut_dryfruit,
  Toor_seed,
  Sunflower_seed,
  Sunflower_oil,
  Soya_seed,
  Sesame_oil,
  Rice_grain,
  Redchilli_masala,
  Raw_honey,
  Raisin_dryfruit,
  Ragi_grain,
  Popcorn_grain,
  Poha_grain,
  Pista_dryfruit,
  Peanut_oil,
  Paneer_masala,
  Nates_honey,
  Mutton_masala,
  Musturd_seed,
  Musturd_oil,
  Hazlenut_dryfruit,
  Groundnut_seed,
  Garam_masala,
  Foodcare_honey,
  Dabur_honey,
  Coriander_masala,
  Coconut_oil,
  Chicken_masala,
  Chaat_masala,
  Castor_oil,
  Cashew_dryfruit,
  Blackraisin_dryfruit,
  Barley_grain,
  Bagrry_honey,
  Badam_dryfruit,
  Turmeric_masala,
  Sunflower,
  Bgmasala,
  Bgdryfruit,
  Bghoney,
  Bggrains,
  Bgseeds,
};

export interface CategoryType {
  text: string;
  path: string;
  Image: string;
  bgColors: string;
}
export const categories: CategoryType[] = [
  {
    text: "Oils",
    path: "oil",
    Image: Sunflower,
    bgColors: "#ffdeb9",
  },
  {
    text: "Honeys",
    path: "honey",
    Image: Bghoney,
    bgColors: "#ffdeb9",
  },
  {
    text: "Masalas",
    path: "masala",
    Image: Bgmasala,
    bgColors: "#ffdeb9",
  },
  {
    text: "Masalas",
    path: "masala",
    Image: Bgmasala,
    bgColors: "#ffdeb9",
  },
  {
    text: "Grains",
    path: "grain",
    Image: Bggrains,
    bgColors: "#ffdeb9",
  },
  {
    text: "Dryfruits",
    path: "dryfruit",
    Image: Bgdryfruit,
    bgColors: "#ffdeb9",
  },

  {
    text: "Seeds",
    path: "seed",
    Image: Bgseeds,
    bgColors: "#ffdeb9",
  },
];

export interface dummyTypes {
  _id: string;
  name: string;
  category: string;
  price: number;
  offerPrice: number;
  image: string[];
  inStock: boolean;
  description: string[];
  quantity?: number;
  ratings: number;
}
export interface Address {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}
export interface OrderItems {
  _id: string;
  product: dummyTypes;
  quantity: number;
}
export interface OrderType {
  _id: string;
  userId: string;
  items: OrderItems[];
  amount: number;
  address: Address;
  status: string;
  paymentType: string;
  isPaid: boolean;
  createdAt: string;
  updatedAt: string;
  orderDate: string;
}
export const dummyProduct1: dummyTypes[] = [
  {
    _id: "o2",
    name: "Coconut Oil",
    category: "oil",
    price: 700,
    offerPrice: 660,
    image: [Coconut_oil],

    inStock: true,
    description: ["Retain nutrients", "Natural flavour and aroma", "Unrefined"],
    quantity: 0,
    ratings: 2,
  },
];
export const dummyAddress: Address[] = [
  {
    _id: "1",
    firstName: "John",
    lastName: "doe",
    phone: "9999999999",
    street: "Street 1",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
    country: "India",
  },
];
export const dummyOrders: OrderType[] = [
  {
    _id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        _id: "67e2589a8f87e63366786401",
        product: dummyProduct1[0],
        quantity: 2,
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    orderDate: "12-07-2026",
  },
];

export const dummyProduct: dummyTypes[] = [
  {
    _id: "o2",
    name: "Coconut Oil",
    category: "oil",
    price: 700,
    offerPrice: 660,
    image: [Coconut_oil, Coconut_oil, Coconut_oil, Coconut_oil],

    inStock: true,
    description: ["Retain nutrients", "Natural flavour and aroma", "Unrefined"],
    quantity: 0,
    ratings: 2,
  },
  {
    _id: "h2",
    name: "Raw Honey",
    category: "honey",
    price: 240,
    offerPrice: 220,
    image: [Raw_honey, Raw_honey, Raw_honey, Raw_honey],

    inStock: true,
    description: [
      "Medicime Properties",
      "Antioxidant properties",
      "Cough suppressant",
    ],
    quantity: 0,
    ratings: 2,
  },
  {
    _id: "d2",
    name: "Cashew Dryfruit",
    category: "dryfruit",
    price: 160,
    offerPrice: 140,
    image: [Cashew_dryfruit, Cashew_dryfruit, Cashew_dryfruit, Cashew_dryfruit],

    inStock: true,
    description: ["Nutritional value", "Cashew apple", "Botanical description"],
    quantity: 0,
    ratings: 3,
  },
  {
    _id: "m3",
    name: "Garam Masala",
    category: "masala",
    price: 32,
    offerPrice: 28,
    image: [Garam_masala, Garam_masala, Garam_masala, Garam_masala],

    inStock: true,
    description: ["Flavour profile", "Reginal and household variations"],
    quantity: 0,
    ratings: 5,
  },
  {
    _id: "g2",
    name: "Rice Grain",
    category: "grain",
    price: 60,
    offerPrice: 57,
    image: [Rice_grain, Rice_grain, Rice_grain, Rice_grain],

    inStock: true,
    description: ["Stample food", "Culinary uses"],
    quantity: 0,
    ratings: 4,
  },
  {
    _id: "o1",
    name: "Peanut Oil",
    category: "oil",
    price: 380,
    offerPrice: 350,
    image: [Peanut_oil, Peanut_oil, Peanut_oil, Peanut_oil],

    inStock: true,
    description: ["Rich nutrients", "Hearth-healty", "High smoke point"],
    quantity: 0,
    ratings: 3,
  },
  {
    _id: "d3",
    name: "Blackraisin Dryfruit",
    category: "dryfruit",
    price: 60,
    offerPrice: 53,
    image: [
      Blackraisin_dryfruit,
      Blackraisin_dryfruit,
      Blackraisin_dryfruit,
      Blackraisin_dryfruit,
    ],

    inStock: true,
    description: ["Vitamins and minerals", "Antioxidant", "Energy source"],
    quantity: 0,
    ratings: 1,
  },

  {
    _id: "m4",
    name: "Paneer Masala",
    category: "masala",
    price: 30,
    offerPrice: 25,
    image: [Paneer_masala, Paneer_masala, Paneer_masala, Paneer_masala],

    inStock: true,
    description: ["Flavour", "Texture", "Gravy"],
    quantity: 0,
    ratings: 3,
  },
  {
    _id: "m1",
    name: "Redchilli Masala",
    category: "masala",
    price: 30,
    offerPrice: 28,
    image: [
      Redchilli_masala,
      Redchilli_masala,
      Redchilli_masala,
      Redchilli_masala,
    ],

    inStock: true,
    description: ["Spicy", "Colour", "Flavour"],
    quantity: 0,
    ratings: 4,
  },
  {
    _id: "o4",
    name: "Sunflower Oil",
    category: "oil",
    price: 450,
    offerPrice: 400,
    image: [Sunflower_oil, Sunflower_oil, Sunflower_oil, Sunflower_oil],

    inStock: true,
    description: ["Rich in healty fats", "Hight in vitamin E", "Hearth healt"],
    quantity: 0,
    ratings: 4,
  },
  {
    _id: "m5",
    name: "Chicken Masala",
    category: "masala",
    price: 30,
    offerPrice: 28,
    image: [Chicken_masala, Chicken_masala, Chicken_masala, Chicken_masala],

    inStock: true,
    description: ["Gravy", "Tasty", "Aroma"],
    quantity: 0,
    ratings: 3,
  },
  {
    _id: "o5",
    name: "Musturd Oil",
    category: "oil",
    price: 500,
    offerPrice: 450,
    image: [Musturd_oil, Musturd_oil, Musturd_oil, Musturd_oil],

    inStock: true,
    description: ["Natural nutrients", "Antioxidant", "Essential fatty acids"],
    quantity: 0,
    ratings: 5,
  },
  {
    _id: "o6",
    name: "Castor Oil",
    category: "oil",
    price: 600,
    offerPrice: 580,
    image: [Castor_oil, Castor_oil, Castor_oil, Castor_oil],
    inStock: true,
    description: ["Odor and taste", "Cosmetic"],
    quantity: 0,
    ratings: 4,
  },
  {
    _id: "o3",
    name: "Sesame Oil",
    category: "oil",
    price: 600,
    offerPrice: 550,
    image: [Sesame_oil, Sesame_oil, Sesame_oil, Sesame_oil],

    inStock: true,
    description: ["Vitamin E", "Hearth health", "Antioxidant properties"],
    quantity: 0,
    ratings: 3,
  },
  {
    _id: "h1",
    name: "Dabur Honey",
    category: "honey",
    price: 200,
    offerPrice: 180,
    image: [Dabur_honey, Dabur_honey, Dabur_honey, Dabur_honey],

    inStock: true,
    description: [
      "Medicime Properties",
      "Antioxidant properties",
      "Cough suppressant",
    ],
    quantity: 0,
    ratings: 5,
  },

  {
    _id: "h3",
    name: "Nates Honey",
    category: "honey",
    price: 220,
    offerPrice: 200,
    image: [Nates_honey, Nates_honey, Nates_honey, Nates_honey],

    inStock: true,
    description: [
      "Medicine Properties",
      "Antioxidant properties",
      "Cough suppressant",
    ],
    quantity: 0,
    ratings: 4,
  },

  {
    _id: "h5",
    name: "Bagrry Honey",
    category: "honey",
    price: 230,
    offerPrice: 210,
    image: [Bagrry_honey, Bagrry_honey, Bagrry_honey, Bagrry_honey],

    inStock: true,
    description: [
      "Medicime Properties",
      "Antioxidant properties",
      "Cough suppressant",
    ],
    quantity: 0,
    ratings: 3,
  },

  {
    _id: "m2",
    name: "Turmeric Masala",
    category: "masala",
    price: 30,
    offerPrice: 28,
    image: [Turmeric_masala, Turmeric_masala, Turmeric_masala, Turmeric_masala],

    inStock: true,
    description: ["Flavour", "Medicinal"],
    quantity: 0,
    ratings: 4,
  },

  {
    _id: "m6",
    name: "Mutton Masala",
    category: "masala",
    price: 30,
    offerPrice: 27,
    image: [Mutton_masala, Mutton_masala, Mutton_masala, Mutton_masala],

    inStock: true,
    description: ["Gravy", "Spices", "Aroma", "Tasty"],
    quantity: 0,
    ratings: 3,
  },
  {
    _id: "m7",
    name: "Chaat Masala",
    category: "masala",
    price: 20,
    offerPrice: 18,
    image: [Chaat_masala, Chaat_masala, Chaat_masala, Chaat_masala],

    inStock: true,
    description: ["Flavour", "Aroma"],
    quantity: 0,
    ratings: 4,
  },
  {
    _id: "m8",
    name: "Coriander Masala",
    category: "masala",
    price: 25,
    offerPrice: 24,
    image: [
      Coriander_masala,
      Coriander_masala,
      Coriander_masala,
      Coriander_masala,
    ],

    inStock: true,
    description: ["Flavour", "Aroma", "Digestion"],
    quantity: 0,
    ratings: 4,
  },
  {
    _id: "g1",
    name: "Wheat Grain",
    category: "grain",
    price: 58,
    offerPrice: 52,
    image: [Wheat_grain, Wheat_grain, Wheat_grain, Wheat_grain],

    inStock: true,
    description: ["Carbohydrates", "Protein"],
    quantity: 0,
    ratings: 4,
  },

  {
    _id: "g3",
    name: "Poha Grain",
    category: "grain",
    price: 40,
    offerPrice: 37,
    image: [Poha_grain, Poha_grain, Poha_grain, Poha_grain],

    inStock: true,
    description: ["Carbohydrates", "Flavour"],
    quantity: 0,
    ratings: 3,
  },
  {
    _id: "g4",
    name: "Popcorn Grain",
    category: "grain",
    price: 55,
    offerPrice: 50,
    image: [Popcorn_grain, Popcorn_grain, Popcorn_grain, Popcorn_grain],

    inStock: true,
    description: ["High in Fiber", "Polyphenol antioxidant"],
    quantity: 0,
    ratings: 4,
  },
  {
    _id: "g5",
    name: "Barley Grain",
    category: "Grain",
    price: 80,
    offerPrice: 72,
    image: [Barley_grain, Barley_grain, Barley_grain, Barley_grain],

    inStock: true,
    description: ["Flavour", "Nutritional benifits"],
    quantity: 0,
    ratings: 4,
  },
  {
    _id: "d1",
    name: "Badam Dryfruit",
    category: "dryfruit",
    price: 120,
    offerPrice: 100,
    image: [Badam_dryfruit, Badam_dryfruit, Badam_dryfruit, Badam_dryfruit],

    inStock: true,
    description: [""],
    quantity: 0,
    ratings: 4,
  },

  {
    _id: "d4",
    name: "Hazlenut Dryfruit",
    category: "dryfruit",
    price: 70,
    offerPrice: 65,
    image: [
      Hazlenut_dryfruit,
      Hazlenut_dryfruit,
      Hazlenut_dryfruit,
      Hazlenut_dryfruit,
    ],

    inStock: true,
    description: ["Nutritional", "Antioxidant"],
    quantity: 0,
    ratings: 4,
  },
  {
    _id: "d5",
    name: "Pista Dryfruit",
    category: "dryfruit",
    price: 90,
    offerPrice: 78,
    image: [Pista_dryfruit, Pista_dryfruit, Pista_dryfruit, Pista_dryfruit],

    inStock: true,
    description: ["Rich in vitamins", "Minerals", "Fiber"],
    quantity: 0,
    ratings: 3,
  },
  {
    _id: "d6",
    name: "Raisin Dryfruit",
    category: "dryfruit",
    price: 30,
    offerPrice: 26,
    image: [Raisin_dryfruit, Raisin_dryfruit, Raisin_dryfruit, Raisin_dryfruit],

    inStock: true,
    description: ["Fat free", "Nutritional value", "Energy level"],
    quantity: 0,
    ratings: 4,
  },
  {
    _id: "d7",
    name: "Walnut Dryfruit",
    category: "dryfruit",
    price: 60,
    offerPrice: 53,
    image: [Walnut_dryfruit, Walnut_dryfruit, Walnut_dryfruit, Walnut_dryfruit],

    inStock: true,
    description: ["Taste", "Nutrition", "Antioxidant"],
    quantity: 0,
    ratings: 5,
  },
  {
    _id: "s1",
    name: "Groundnut Seed",
    category: "seed",
    price: 40,
    offerPrice: 38,
    image: [Groundnut_seed, Groundnut_seed, Groundnut_seed, Groundnut_seed],

    inStock: true,
    description: ["Nutritional value", "Taste", "Rich in protein"],
    quantity: 0,
    ratings: 5,
  },
  {
    _id: "s2",
    name: "Musturd Seed",
    category: "seed",
    price: 30,
    offerPrice: 25,
    image: [Musturd_seed, Musturd_seed, Musturd_seed, Musturd_seed],

    inStock: true,
    description: ["Spicy taste", "Oil extraction"],
    quantity: 0,
    ratings: 3,
  },
  {
    _id: "s3",
    name: "Soya Seed",
    category: "seed",
    price: 50,
    offerPrice: 48,
    image: [Soya_seed, Soya_seed, Soya_seed, Soya_seed],

    inStock: true,
    description: ["Nutritional content", "Pod", "Nitrogen fixation"],
    quantity: 0,
    ratings: 4,
  },
  {
    _id: "s4",
    name: "White Sesame Seed",
    category: "seed",
    price: 250,
    offerPrice: 240,
    image: [
      White_Sesame_seed,
      White_Sesame_seed,
      White_Sesame_seed,
      White_Sesame_seed,
    ],

    inStock: true,
    description: ["Fiber", "Protein", "Healty fats"],
    quantity: 0,
    ratings: 3,
  },
  {
    _id: "s5",
    name: "Toor Seed",
    category: "seed",
    price: 70,
    offerPrice: 65,
    image: [Toor_seed, Toor_seed, Toor_seed, Toor_seed],

    inStock: true,
    description: ["Botanical ", "Nutritional content"],
    quantity: 0,
    ratings: 4,
  },
  {
    _id: "s6",
    name: "Sunflower Seed",
    category: "seed",
    price: 70,
    offerPrice: 65,
    image: [Sunflower_seed, Sunflower_seed, Sunflower_seed, Sunflower_seed],

    inStock: true,
    description: ["Vitamins", "Antioxidant", "Macronutrients"],
    quantity: 0,
    ratings: 3,
  },
];
interface FeatureType {
  name: string;
  des: string;
  icon: IconType;
}
export const features: FeatureType[] = [
  {
    name: "Fastest Delivery",
    des: "Products delivered in under 30 minutes.",
    icon: FaTruck,
  },
  {
    name: "100% Natural Products",
    des: "No Added Preservaties. ",
    icon: IoLeaf,
  },
  {
    name: "Affordable Price",
    des: "Quality Products at low prices.",
    icon: TbCoinRupeeFilled,
  },
  {
    name: "Trusted by Thousands",
    des: "Loved by 10,000+",
    icon: FaHeart,
  },
];

export interface AllProuctsProps {
  products: dummyTypes[];
}
