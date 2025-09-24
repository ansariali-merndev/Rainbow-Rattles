import { Banner } from "@/components/blocks/Banner";
import { Collection } from "@/components/ui/Collection";
import { HeroSection } from "@/components/ui/HeroSection";
import { NewsletterSection } from "@/components/ui/NewsletterSection";
import { Photoshop } from "@/components/ui/Photoshop";
import { TestimonialSection } from "@/components/ui/TestimonialSection";
import { Vector } from "@/components/ui/Vector";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Collection />
      <Banner />
      <TestimonialSection />
      <Photoshop />
      <Vector />
      <NewsletterSection />
    </main>
  );
}
