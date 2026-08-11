import {
  UserRound,
  ShieldCheck,
  CreditCard,
  Server,
  Database,
} from "lucide-react";

import rentFlowImage2 from "../ProjectImage/Rent-Flow/Screenshot (2).png";
import rentFlowImage3 from "../ProjectImage/Rent-Flow/Screenshot (3).png";
import rentFlowImage4 from "../ProjectImage/Rent-Flow/Screenshot (4).png";
import rentFlowImage5 from "../ProjectImage/Rent-Flow/Screenshot (5).png";
import rentFlowImage6 from "../ProjectImage/Rent-Flow/Screenshot (6).png";
import rentFlowImage7 from "../ProjectImage/Rent-Flow/Screenshot (7).png";
import rentFlowImage8 from "../ProjectImage/Rent-Flow/Screenshot (8).png";
import rentFlowImage9 from "../ProjectImage/Rent-Flow/Screenshot (9).png";
import rentFlowImage10 from "../ProjectImage/Rent-Flow/Screenshot (10).png";
import rentFlowImage11 from "../ProjectImage/Rent-Flow/Screenshot (11).png";
import rentFlowImage12 from "../ProjectImage/Rent-Flow/Screenshot (12).png";
import rentFlowImage13 from "../ProjectImage/Rent-Flow/Screenshot (13).png";
import rentFlowImage14 from "../ProjectImage/Rent-Flow/Screenshot (14).png";
import rentFlowImage15 from "../ProjectImage/Rent-Flow/Screenshot (15).png";
import rentFlowImage16 from "../ProjectImage/Rent-Flow/Screenshot (16).png";
import rentFlowImage17 from "../ProjectImage/Rent-Flow/Screenshot (17).png";
import rentFlowImage18 from "../ProjectImage/Rent-Flow/Screenshot (18).png";

export const projectInfo = {
  title: "RentFlow",
  subtitle: "Rental Management Platform",
  description:
    "RentFlow is a full-stack rental management platform designed to simplify property management for owners and provide tenants with a dedicated portal for managing rent, payments, profiles, and receipts.",
  users: ["Property Owners", "Tenants"],
  features: [
    "JWT-based authentication",
    "Separate Admin and Tenant portals",
    "Tenant management and room allocation",
    "Rent and payment tracking",
    "Razorpay payment integration",
    "Payment verification and transaction history",
    "Digital receipts and invoice generation",
    "Forgot password with OTP verification",
    "Profile and document management",
    "Search, filtering and pagination",
    "Cloudinary image/document storage",
    "Admin dashboard with payment insights",
  ],
  frontend: ["React", "React Router", "Redux Toolkit", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt"],
  integrations: ["Razorpay", "Cloudinary", "Brevo"],
  architecture: [
    {
      icon: UserRound,
      title: "Tenant Portal",
      description:
        "Tenants can view their rental information, payment history, profile and receipts.",
    },
    {
      icon: ShieldCheck,
      title: "Admin Portal",
      description:
        "Owners can manage tenants, rooms, rent, payments and rental records from a centralized dashboard.",
    },
    {
      icon: CreditCard,
      title: "Payment System",
      description:
        "Razorpay handles online payments while the backend verifies transactions and updates payment status.",
    },
    {
      icon: Server,
      title: "Backend API",
      description:
        "Express.js REST APIs handle authentication, rental operations, payments and protected resources.",
    },
    {
      icon: Database,
      title: "Database",
      description:
        "MongoDB with Mongoose stores users, rental information, rooms, payments and related records.",
    },
  ],
  links: {
    live: "https://rent-flow-by-bantony.vercel.app/",
    github: "https://github.com/Bantony14/rent-flow",
  },
};

export const screenshots = [
  { label: "Home Page", src: rentFlowImage2, category: "Frontend" },
  { label: "Room Listing", src: rentFlowImage3, category: "Frontend" },
  { label: "Tenant Dashboard", src: rentFlowImage4, category: "Tenant" },
  { label: "Payment History", src: rentFlowImage5, category: "Tenant" },
  { label: "Tenant Profile", src: rentFlowImage6, category: "Tenant" },
  { label: "Admin Dashboard", src: rentFlowImage7, category: "Admin" },
  { label: "Search Tenant", src: rentFlowImage8, category: "Admin" },
  { label: "Admin Actions", src: rentFlowImage9, category: "Admin" },
  { label: "Add Tenant", src: rentFlowImage10, category: "Admin" },
  { label: "View All Tenants", src: rentFlowImage11, category: "Admin" },
  { label: "All Rooms", src: rentFlowImage12, category: "Admin" },
  { label: "Payment Page", src: rentFlowImage13, category: "Payment" },
  { label: "Payment Details", src: rentFlowImage14, category: "Payment" },
  { label: "Payment Loading", src: rentFlowImage15, category: "Payment" },
  { label: "Payment Success", src: rentFlowImage16, category: "Payment" },
  { label: "Receipt View", src: rentFlowImage17, category: "Payment" },
  { label: "Receipt Overview", src: rentFlowImage18, category: "Payment" },
];

export const INITIAL_COUNT = 6;
export const CATEGORIES = ["All", "Frontend", "Tenant", "Admin", "Payment"];

export const catColors = {
  Frontend: {
    text: "text-[#4f7df3]",
    bg: "bg-[#4f7df3]/10",
    border: "border-[#4f7df3]/20",
  },
  Tenant: {
    text: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  Admin: {
    text: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
  },
  Payment: {
    text: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
};
