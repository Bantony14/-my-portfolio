import {
  ShoppingBag,
  UserRound,
  Package,
  CreditCard,
  Server,
  Database,
} from "lucide-react";

import fashionKartImage1 from "../ProjectImage/Fashion-Kart/Screenshot (19).png";
import fashionKartImage2 from "../ProjectImage/Fashion-Kart/Screenshot (20).png";
import fashionKartImage3 from "../ProjectImage/Fashion-Kart/Screenshot (21).png";
import fashionKartImage4 from "../ProjectImage/Fashion-Kart/Screenshot (22).png";
import fashionKartImage5 from "../ProjectImage/Fashion-Kart/Screenshot (23).png";
import fashionKartImage6 from "../ProjectImage/Fashion-Kart/Screenshot (24).png";
import fashionKartImage7 from "../ProjectImage/Fashion-Kart/Screenshot (25).png";
import fashionKartImage8 from "../ProjectImage/Fashion-Kart/Screenshot (26).png";

export const projectInfo = {
  title: "FashionKart",

  subtitle: "E-Commerce Platform",

  description:
    "FashionKart is an e-commerce application I built while learning React and Redux. The project helped me practice component-based development, state management, routing, product browsing, and building an e-commerce-style user experience.",

  users: ["Customers", "Admin"],

  features: [
    "Product browsing and listing",
    "Product details",
    "Shopping cart",
    "Redux-based state management",
    "User authentication",
    "Order management",
  ],

  frontend: ["React", "React Router", "Redux Toolkit", "Tailwind CSS"],

  backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],

  integrations: [],

  architecture: [
    {
      icon: ShoppingBag,
      title: "Product System",
      description:
        "Users can browse products, view product details and explore the available fashion items.",
    },
    {
      icon: UserRound,
      title: "Authentication",
      description:
        "User authentication allows customers to register, log in and access protected functionality.",
    },
    {
      icon: Package,
      title: "Cart & Orders",
      description:
        "Users can manage products in their cart and interact with the order flow.",
    },
    {
      icon: Server,
      title: "Backend API",
      description:
        "Express.js REST APIs handle authentication, products, users and e-commerce operations.",
    },
    {
      icon: Database,
      title: "Database",
      description:
        "MongoDB with Mongoose is used to store users, products and application data.",
    },
  ],

  links: {
    live: "https://fashion-kart-by-bantony.vercel.app/",
    github: "https://github.com/Bantony14/fashion-kart",
  },
};

export const screenshots = [
  {
    label: "Home Page",
    src: fashionKartImage1,
    category: "Frontend",
  },
  {
    label: "Product Listing",
    src: fashionKartImage2,
    category: "Frontend",
  },
  {
    label: "Product Details",
    src: fashionKartImage3,
    category: "Frontend",
  },
  {
    label: "Shopping Cart",
    src: fashionKartImage4,
    category: "Cart",
  },
  {
    label: "User Account",
    src: fashionKartImage5,
    category: "User",
  },
  {
    label: "Order Section",
    src: fashionKartImage6,
    category: "Orders",
  },
  {
    label: "Authentication",
    src: fashionKartImage7,
    category: "User",
  },
  {
    label: "E-Commerce Interface",
    src: fashionKartImage8,
    category: "Frontend",
  },
];

export const INITIAL_COUNT = 6;

export const CATEGORIES = ["All", "Frontend", "Cart", "User", "Orders"];

export const catColors = {
  Frontend: {
    text: "text-[#4f7df3]",
    bg: "bg-[#4f7df3]/10",
    border: "border-[#4f7df3]/20",
  },

  Cart: {
    text: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },

  User: {
    text: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
  },

  Orders: {
    text: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
};
