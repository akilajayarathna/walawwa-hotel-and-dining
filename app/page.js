import Hero from "@/components/home/Hero";
import HeritageIntro from "@/components/home/HeritageIntro";
import FeaturedRooms from "@/components/home/FeaturedRooms";
import DiningHighlight from "@/components/home/DiningHighlight";

export default function Home() {
  return (
    <div>
      <Hero />
      <HeritageIntro />
      <FeaturedRooms />
      <DiningHighlight />
    </div>
  );
}
