import Activities from "@/components/Activites";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full">
      <HeroSection />
      <Activities />
      <Booking />
      <Gallery />
      <Contact />
    </main>
  );
}
