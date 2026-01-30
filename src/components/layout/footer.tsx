import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-bone">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl font-medium text-bone">
                L&apos;Artisan
              </span>
            </Link>
            <p className="text-bone/60 max-w-xs">
              Master the art of baking through traditional techniques and modern precision. 
              Join thousands of home bakers and professionals worldwide.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="h-10 w-10 rounded-full bg-bone/10 flex items-center justify-center hover:bg-copper transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-bone/10 flex items-center justify-center hover:bg-copper transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-bone/10 flex items-center justify-center hover:bg-copper transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Courses Column */}
          <div>
            <h4 className="font-serif text-lg mb-6">Courses</h4>
            <ul className="space-y-3">
              {["Sourdough Mastery", "French Pastry", "Viennoiserie", "Chocolate Arts", "Gluten-Free"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-bone/60 hover:text-copper transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-serif text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Instructors", "Careers", "Press", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-bone/60 hover:text-copper transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-copper flex-shrink-0 mt-0.5" />
                <span className="text-bone/60">
                  123 Artisan Boulevard<br />
                  Paris 75011, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-copper flex-shrink-0" />
                <a href="mailto:hello@lartisan.com" className="text-bone/60 hover:text-copper transition-colors">
                  hello@lartisan.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-copper flex-shrink-0" />
                <a href="tel:+33123456789" className="text-bone/60 hover:text-copper transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-bone/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-bone/40">
            © 2025 L&apos;Artisan Baking Atelier. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-bone/40">
            <Link href="#" className="hover:text-bone transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-bone transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-bone transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
