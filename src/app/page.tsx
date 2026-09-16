import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedVideo } from "@/components/FeaturedVideo";
import { MemeGallery } from "@/components/MemeGallery";
import { Lore } from "@/components/Lore";
import { MoreVideos } from "@/components/MoreVideos";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedVideo />
        <MemeGallery />
        <Lore />
        <MoreVideos />
      </main>
      <Footer />
    </>
  );
}
