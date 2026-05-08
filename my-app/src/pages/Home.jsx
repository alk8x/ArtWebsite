import Hero from "../components/Hero";
import LatestVideo from "../components/LatestVideo";
import ShopPreview from "../components/ShopPreview";
import HeroContact from "../components/HeroContact";
import "../styles/home.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Allison Fish";
  }, []);
  return (
    <>
      <Hero />
      <LatestVideo />
      <ShopPreview />
      <HeroContact />
    </>
  );
}
