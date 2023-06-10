import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import BannerHero from "@/components/bannerHero/BannerHero";
import Localization from "@/components/localization/localization";
import Offers from "@/components/offers/Offers";

export default function Home() {
  return (
    <>
      <Header/>
      <BannerHero/>
      <Offers/>
      <Localization/>
      <Footer/>
    </>
  )
}
