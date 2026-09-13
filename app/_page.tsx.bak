"use client";

import dynamic from "next/dynamic";
import TransitionLoader from "../components/ui/TransitionLoader";

const Navbar = dynamic(() => import("../components/navigation/Navbar"), {
  ssr: false,
});
const HeroSection = dynamic(() => import("../components/hero/HeroSection"), {
  ssr: false,
});
const SeptBooks = dynamic(() => import("../components/books/SeptBooks"), {
  ssr: false,
});
const HowItWorks = dynamic(
  () => import("../components/how-it-works/HowItWorks"),
  { ssr: false }
);
const UnboxingSection = dynamic(
  () => import("../components/unboxing/UnboxingSection"),
  { ssr: false }
);
const GenresSection = dynamic(
  () => import("../components/genres/GenresSection"),
  { ssr: false }
);
const BenefitsSection = dynamic(
  () => import("../components/benefits/BenefitsSection"),
  { ssr: false }
);
const FAQSection = dynamic(() => import("../components/faq/FAQSection"), {
  ssr: false,
});
const GiftSection = dynamic(() => import("../components/gifting/GiftSection"), {
  ssr: false,
});
const PromoStrip = dynamic(() => import("../components/promo/PromoStrip"), {
  ssr: false,
});
const MembersChoice = dynamic(
  () => import("../components/winners/MembersChoice"),
  { ssr: false }
);
const ExclusiveSection = dynamic(
  () => import("../components/exclusive/ExclusiveSection"),
  { ssr: false }
);
const Footer = dynamic(() => import("../components/footer/Footer"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* BLUE TRANSITION LOADING ANIMATION */}
      <TransitionLoader />

      <div data-barba="container" className="page-wrapper">
        <Navbar />
        <main className="main">
          {/* HERO — Yellow #FFD24A */}
          <HeroSection />

          {/* OUR SEPT BOOKS — White */}
          <SeptBooks />

          {/* HOW IT WORKS — Soft Pink #FFDDFB */}
          <HowItWorks />

          {/* 3D UNBOXING SHOWCASE — Cyan #A4F6F8 */}
          <UnboxingSection />

          {/* GENRES — Magenta #FD48F2 */}
          <GenresSection />

          {/* BENEFITS / VALUES — Pale Yellow #FAED8F */}
          <BenefitsSection />

          {/* COMMON QUESTIONS — White/Pale Cyan */}
          <FAQSection />

          {/* GIFT — White */}
          <GiftSection />

          {/* PROMOTIONAL STRIP — Magenta ⇄ Cyan */}
          <PromoStrip />

          {/* MEMBERS' CHOICE WINNERS — Yellow #FFD24A */}
          <MembersChoice />

          {/* AARDVARK EXCLUSIVE — White */}
          <ExclusiveSection />
        </main>
        {/* FOOTER — Purple #3B308F */}
        <Footer />
      </div>
    </>
  );
}
