import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { StatsBand } from "@/components/sections/StatsBand";
import { Services } from "@/components/sections/Services";
import { ContentCards } from "@/components/sections/ContentCards";
import { Partners } from "@/components/sections/Partners";
import { Sustainability } from "@/components/sections/Sustainability";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <StatsBand />
      <Services />
      <ContentCards />
      <Partners />
      <Sustainability />
    </>
  );
}
