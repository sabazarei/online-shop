import AmazingOfferSection from "@/components/main-page/AmazingOfferSection";
import BestSellingProductsSection from "@/components/main-page/BestSellingProductsSection";
import BigBannersSection from "@/components/main-page/BigBannersSection";
import BrandSliderSection from "@/components/main-page/BrandSliderSection";
import CategoryCounterSection from "@/components/main-page/CategoryCounterSection";
import { MediumBanner } from "@/components/main-page/MediumBannerSection";
import OurOfferSection from "@/components/main-page/OurOfferSection";
import SmallBannerSection from "@/components/main-page/SmallBannerSection";

export default function Home() {
  return (
    <div className="space-y-16 pt-6">
      <BigBannersSection />
      <AmazingOfferSection bgColor="red" />
      <BestSellingProductsSection />
      <MediumBanner />
      <AmazingOfferSection bgColor="blue" />
      <SmallBannerSection />
      <CategoryCounterSection />
      <BestSellingProductsSection />
      <OurOfferSection />
      <BrandSliderSection />
    </div>
  );
}
