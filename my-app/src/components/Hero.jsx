import reelVideo from "../assets/HomePageReel.mp4";
import greenBox from "../assets/home_green_box.png";

export default function Hero() {
  return (
    <section className="hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source src={reelVideo} type="video/mp4" />
      </video>

      <img src={greenBox} alt="" className="hero-overlay" />

      <div className="hero-text-content">
        <h1>Engineer by day,<br />
        Creator by night</h1>
      </div>
    </section>
  );
}

  