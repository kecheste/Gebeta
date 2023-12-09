import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Shop from "@/components/Shop";

export default function Home() {
  return (
    <main className="m-0 relative">
      <NavBar />
      <HeroSection />
      <Shop />
      <Footer />
    </main>
  );
}
