import { Hero } from "@/components/sections/hero";
import { FeaturedCourses } from "@/components/sections/featured-courses";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedCourses />
      <About />
      <Testimonials />
      <CTA />
    </>
  );
}
