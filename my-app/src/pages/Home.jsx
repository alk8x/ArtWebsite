import Hero from "../components/Hero";
import LatestVideo from "../components/LatestVideo";
import ShopPreview from "../components/ShopPreview";
// import ContactSection from "../components/ContactSection";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestVideo />
      <ShopPreview />
      {/* <ContactSection /> */}
    </>
  );
}
