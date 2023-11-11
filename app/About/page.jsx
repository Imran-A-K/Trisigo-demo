import Testimonials from "@/components/Testimonials";
import TrustedService from "@/components/TrustedService";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

function About() {
  return (
    <main className="w-full min-h-screen flex flex-col flex-grow">
      <section className="pb-8">
        <>
          <div className="relative bg-black w-full h-[400px] mb-8">
            <div className="absolute inset-0 bg-blue-300/30 z-10 sm:bg-gradient-to-r sm:from-blue-200/50 sm:to-white/25" />
            <div className="absolute inset-0">
              <Image
                src="/aboutBanner.webp"
                alt=""
                width={1000}
                height={1000}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="absolute top-0 z-20 flex flex-col items-center justify-center w-full h-full gap-2 text-white">
              <h1 className="font-bold text-7xl max-sm:text-3xl max-sm:items-center max-sm:text-white text-orange-500">
                About Us
              </h1>
            </div>
          </div>
        </>
        <WhyUs />
        <TrustedService />
        <Testimonials />
      </section>
    </main>
  );
}

export default About;
