import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem, Audit, Framework } from "@/components/Sections";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Audit />
        <Framework />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
