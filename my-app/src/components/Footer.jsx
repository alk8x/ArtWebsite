import "../styles/footer.css";
import instagramLogo from "../assets/instagram.png";
import youtubeLogo from "../assets/youtube.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="social-links">
        <a
          href="https://www.instagram.com/fish.makes.art"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img src={instagramLogo} alt="Instagram logo" />
        </a>

        <a
          href="https://www.youtube.com/@FishMakesArt"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <img src={youtubeLogo} alt="YouTube logo" />
        </a>
      </div>

      <p>built & designed by me</p>
      <p>allison.fish.makes.art@gmail.com</p>
    </footer>
  );
}

  