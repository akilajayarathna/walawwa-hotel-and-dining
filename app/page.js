import Hero from "@/components/home/Hero";
import HeritageIntro from "@/components/home/HeritageIntro";
import FeaturedRooms from "@/components/home/FeaturedRooms";
import DiningHighlight from "@/components/home/DiningHighlight";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <HeritageIntro />
      <FeaturedRooms />
      <DiningHighlight />
      <ExperiencePreview />
      <Testimonials />
    </div>
  );
}
