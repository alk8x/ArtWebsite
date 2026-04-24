import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { shopItems } from "../data/shopItems";
import fanFavorite from "../assets/star_fan_fav.png";
import "../styles/artworkDetail.css";

export default function ArtworkDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = shopItems.find((i) => i.id === id);
  const [selectedImg, setSelectedImg] = useState(0);

  if (!item) return <p style={{ padding: "4rem" }}>Artwork not found.</p>;

  const emailSubject = `Purchase Inquiry: ${item.title}`;
  const emailBody = `Hi Allison,\n\nI'm interested in purchasing a print of "${item.title}".\n\nPlease let me know the next steps!\n\nThank you`;
  const mailtoLink = `mailto:allison.fish.makes.art@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section className="detail-page">
      <button className="detail-back" onClick={() => navigate("/shop")}>
        ← Back to Shop
      </button>

      <div className="detail-layout">
        {/* Left: thumbnail strip */}
        <div className="detail-thumbs">
          {item.images.map((img, i) => (
            <button
              key={i}
              className={`detail-thumb-btn ${i === selectedImg ? "selected" : ""}`}
              onClick={() => setSelectedImg(i)}
            >
              <img src={img} alt={`${item.title} view ${i + 1}`} />
            </button>
          ))}
        </div>

        {/* Center: hero image */}
        <div className="detail-hero">
          {item.fanFavorite && (
            <img src={fanFavorite} alt="Fan favorite" className="detail-fan-badge" />
          )}
          <img src={item.images[selectedImg]} alt={item.title} className="detail-hero-img" />
        </div>

        {/* Right: info panel */}
        <div className="detail-info">
          <h1 className="detail-title">{item.title}</h1>
          <p className="detail-medium">{item.medium}</p>

          <div className="detail-pricing">
            {item.printPrice && (
              <p className="detail-price-row">
                <span>Print ({item.printSize})</span>
                {item.printPrice}
              </p>
            )}
            {item.originalPrice && (
              <p className="detail-price-row">
                <span>Original ({item.originalSize})</span>
                {item.originalPrice}
              </p>
            )}
          </div>

          <p className="detail-description">{item.description}</p>

          <a href={mailtoLink} className="detail-email-btn">
            Compose Email
          </a>
        </div>
      </div>
    </section>
  );
}