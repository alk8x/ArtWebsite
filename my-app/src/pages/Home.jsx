import Hero from "../components/Hero";
import LatestVideo from "../components/LatestVideo";
import ShopPreview from "../components/ShopPreview";
import HeroContact from "../components/HeroContact";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestVideo />
      <ShopPreview />
      <HeroContact />
    </>
  );
}
