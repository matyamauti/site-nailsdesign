import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { Process } from "@/components/sections/Process";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Faq } from "@/components/sections/Faq";
import { buildLocalBusinessSchema, jsonLdScriptProps } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(buildLocalBusinessSchema())}
      />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Process />
      <CtaBanner />
      <Faq />
    </>
  );
}
