export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  duration: string;
  lessons: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  instructor: string;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export interface CartItem extends Course {
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}
