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
import { getContent } from "@/lib/data";
import { buildHomepageJsonLd } from "@/lib/seo/jsonLd";

export default async function Page() {
  const { offers, faq } = await getContent();
  const jsonLd = buildHomepageJsonLd(offers, faq);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <Nav />
      <main>
        <Hero />
        <Top3 offers={offers} />
        <FilterableOffers offers={offers} />
        <Education />
        <Explainer />
        <FAQ faq={faq} />
        <OtherDeals />
        <Responsible />
      </main>
      <Footer />
    </>
  );
}
