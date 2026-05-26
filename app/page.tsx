import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Top3 from "@/components/Top3";
import FilterableOffers from "@/components/FilterableOffers";
import Education from "@/components/Education";
import Explainer from "@/components/Explainer";
import FAQ from "@/components/FAQ";
import OtherDeals from "@/components/OtherDeals";
import Responsible from "@/components/Responsible";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Top3 />
        <FilterableOffers />
        <Education />
        <Explainer />
        <FAQ />
        <OtherDeals />
        <Responsible />
      </main>
      <Footer />
    </>
  );
}
