import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { StatsBand } from "@/components/sections/StatsBand";
import { Services } from "@/components/sections/Services";
import { Sectors } from "@/components/sections/Sectors";
import { Production } from "@/components/sections/Production";
import { ContentCards } from "@/components/sections/ContentCards";
import { MediaCenter } from "@/components/sections/MediaCenter";
import { Partners } from "@/components/sections/Partners";
import { Sustainability } from "@/components/sections/Sustainability";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <StatsBand />
      <Services />
      <Sectors />
      <Production />
      <ContentCards />
      <MediaCenter />
      <Partners />
      <Sustainability />
    </>
  );
}
