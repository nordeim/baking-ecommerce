import { Course, Testimonial, NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Courses", href: "#courses" },
  { label: "Workshops", href: "#workshops" },
  { label: "Recipes", href: "#recipes" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#journal" }
];

export const FEATURED_COURSES: Course[] = [
  {
    id: "sourdough-mastery",
    title: "Sourdough Mastery",
    description: "From starter to artisan loaf. Master the ancient alchemy of wild fermentation, gluten development, and crust formation.",
    price: 149,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1585476212741-96731b5d3074?w=800&q=80",
    category: "Bread",
    duration: "6 weeks",
    lessons: 24,
    level: "Intermediate",
    instructor: "Marie-Claude Fontaine",
    rating: 4.9,
    reviewCount: 128,
    tags: ["Fermentation", "Artisan", "French Tradition"]
  },
  {
    id: "patisserie-fundamentals",
    title: "Pâtisserie Fundamentals",
    description: "Classic French pastry techniques. Lamination, custards, and the precise chemistry of butter, flour, and sugar.",
    price: 189,
    image: "https://images.unsplash.com/photo-1555507036-ab1f40388085?w=800&q=80",
    category: "Pastry",
    duration: "8 weeks",
    lessons: 32,
    level: "Beginner",
    instructor: "Jean-Luc Rivière",
    rating: 4.8,
    reviewCount: 96,
    tags: ["Lamination", "Custards", "Classics"]
  },
  {
    id: "viennoiserie-intensive",
    title: "Viennoiserie Intensive",
    description: "Croissants, danishes, and breakfast pastries. The multi-day process of creating buttery, flaky layered doughs.",
    price: 219,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1555505019-8c3f1c4aba5f?w=800&q=80",
    category: "Viennoiserie",
    duration: "4 weeks",
    lessons: 16,
    level: "Advanced",
    instructor: "Sophie Dubois",
    rating: 5.0,
    reviewCount: 64,
    tags: ["Lamination", "Butter", "Technique"]
  },
  {
    id: "chocolate-confections",
    title: "Chocolate & Confections",
    description: "Tempering, ganaches, and hand-rolled truffles. Understanding cocoa percentages and crystallization structures.",
    price: 169,
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800&q=80",
    category: "Confections",
    duration: "5 weeks",
    lessons: 20,
    level: "Intermediate",
    instructor: "Antoine Moreau",
    rating: 4.9,
    reviewCount: 82,
    tags: ["Tempering", "Ganache", "Truffles"]
  },
  {
    id: "gluten-free-artisan",
    title: "Gluten-Free Artisan",
    description: "Alternative grains and binders. Creating structure and flavor without wheat, using psyllium, xanthan, and ancient grains.",
    price: 139,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    category: "Specialty",
    duration: "4 weeks",
    lessons: 16,
    level: "Intermediate",
    instructor: "Emma Chen",
    rating: 4.7,
    reviewCount: 54,
    tags: ["Alternative Grains", "Health", "Inclusion"]
  },
  {
    id: "decorative-breads",
    title: "Decorative Breads",
    description: "Scoring patterns, decorative crusts, and edible art. Transform your loaves into sculptural centerpieces.",
    price: 129,
    originalPrice: 159,
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=800&q=80",
    category: "Artisan",
    duration: "3 weeks",
    lessons: 12,
    level: "Beginner",
    instructor: "Maria Rossi",
    rating: 4.8,
    reviewCount: 43,
    tags: ["Scoring", "Art", "Instagram"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Home Baker",
    content: "The sourdough course transformed my relationship with bread. Marie-Claude's teachings on fermentation rhythms changed everything I thought I knew about time and patience.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5
  },
  {
    id: "2",
    name: "David Chen",
    role: "Pastry Chef",
    content: "After 10 years in professional kitchens, I finally understood the 'why' behind lamination. The viennoiserie intensive is worth every penny.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    role: "Cafe Owner",
    content: "We implemented techniques from the courses in our bakery. Customer retention increased 40%—our croissants now sell out by 9 AM.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5
  },
  {
    id: "4",
    name: "James Wilson",
    role: "Food Photographer",
    content: "Not just recipes, but deep understanding. The visual guides on crust development have elevated my photography work significantly.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5
  }
];

export const STATS = [
  { value: "15K+", label: "Students Worldwide" },
  { value: "94%", label: "Completion Rate" },
  { value: "4.9", label: "Average Rating" },
  { value: "50+", label: "Countries" }
];
