import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Layout from "@/components/layout/Layout";
import Localization from "@/components/localization/localization";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <>
      <Header/>
      <Layout/>
      <Menu/>
      <Localization/>
      <Footer/>
    </>
  )
}
