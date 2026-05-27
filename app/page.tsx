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
  const { offers, faq, sections } = await getContent();
  const jsonLd = buildHomepageJsonLd(offers, faq);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <Nav nav={sections.nav} />
      <main>
        <Hero hero={sections.hero} />
        <Top3 offers={offers} />
        <FilterableOffers offers={offers} />
        <Education education={sections.education} />
        <Explainer explainer={sections.explainer} />
        <FAQ faq={faq} />
        <OtherDeals otherDeals={sections.otherDeals} />
        <Responsible responsible={sections.responsible} />
      </main>
      <Footer footer={sections.footer} />
    </>
  );
}
