import { useState } from "react";
import "../styles/portfolio.css";

// --- Replace these imports with your actual asset imports ---
// import oilPastel1 from "../assets/oil_pastel_1.png";
// etc.

const sections = [
  {
    id: "traditional",
    label: "Traditional",
    categories: [
      {
        id: "oil-pastel",
        name: "Oil Pastel",
        items: [
          { type: "image", src: "https://placehold.co/800x600/d0ccc8/888?text=Oil+Pastel+1", thumb: "https://placehold.co/200x200/d0ccc8/888?text=1" },
          { type: "image", src: "https://placehold.co/800x600/c8ccd0/888?text=Oil+Pastel+2", thumb: "https://placehold.co/200x200/c8ccd0/888?text=2" },
          { type: "image", src: "https://placehold.co/800x600/ccd0c8/888?text=Oil+Pastel+3", thumb: "https://placehold.co/200x200/ccd0c8/888?text=3" },
          { type: "image", src: "https://placehold.co/800x600/d0c8cc/888?text=Oil+Pastel+4", thumb: "https://placehold.co/200x200/d0c8cc/888?text=4" },
        ],
      },
      {
        id: "oil-paint",
        name: "Oil Paint",
        items: [
          { type: "image", src: "https://placehold.co/800x600/c8d0cc/888?text=Oil+Paint+1", thumb: "https://placehold.co/200x200/c8d0cc/888?text=1" },
          { type: "image", src: "https://placehold.co/800x600/ccc8d0/888?text=Oil+Paint+2", thumb: "https://placehold.co/200x200/ccc8d0/888?text=2" },
          { type: "image", src: "https://placehold.co/800x600/d0ccc8/888?text=Oil+Paint+3", thumb: "https://placehold.co/200x200/d0ccc8/888?text=3" },
          { type: "image", src: "https://placehold.co/800x600/c8ccc0/888?text=Oil+Paint+4", thumb: "https://placehold.co/200x200/c8ccc0/888?text=4" },
        ],
      },
    ],
  },
  {
    id: "digital",
    label: "Digital",
    categories: [
      {
        id: "procreate",
        name: "Procreate",
        items: [
          { type: "image", src: "https://placehold.co/800x600/d0ccc8/888?text=Procreate+1", thumb: "https://placehold.co/200x200/d0ccc8/888?text=1" },
          { type: "image", src: "https://placehold.co/800x600/c8d0c8/888?text=Procreate+2", thumb: "https://placehold.co/200x200/c8d0c8/888?text=2" },
          { type: "image", src: "https://placehold.co/800x600/d0c8c8/888?text=Procreate+3", thumb: "https://placehold.co/200x200/d0c8c8/888?text=3" },
          { type: "image", src: "https://placehold.co/800x600/c8c8d0/888?text=Procreate+4", thumb: "https://placehold.co/200x200/c8c8d0/888?text=4" },
        ],
      },
    ],
  },
  {
    id: "animation",
    label: "Animation",
    categories: [
      {
        id: "shorts",
        name: "Shorts",
        items: [
          // { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: "https://placehold.co/200x200/d0ccc8/888?text=▶+1" },
          { type: "image", src: "https://placehold.co/800x600/c8d0cc/888?text=Short+2", thumb: "https://placehold.co/200x200/c8d0cc/888?text=2" },
          { type: "image", src: "https://placehold.co/800x600/ccd0c8/888?text=Short+3", thumb: "https://placehold.co/200x200/ccd0c8/888?text=3" },
          { type: "image", src: "https://placehold.co/800x600/d0c8d0/888?text=Short+4", thumb: "https://placehold.co/200x200/d0c8d0/888?text=4" },
        ],
      },
    ],
  },
];

function CategoryBlock({ category }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selected = category.items[selectedIdx];

  return (
    <div className="portfolio-category">
      {/* Vertical label */}
      <div className="category-label">
        {category.name.split("").map((char, i) => (
          <span key={i}>{char === " " ? "\u00A0" : char}</span>
        ))}
      </div>

      {/* Hero media */}
      <div className="category-hero">
        {selected.type === "video" ? (
          <video
            key={selected.src}
            autoPlay
            loop
            muted
            playsInline
            className="hero-media-item"
          >
            <source src={selected.src} type="video/mp4" />
          </video>
        ) : (
          <img src={selected.src} alt={category.name} className="hero-media-item" />
        )}
      </div>

      {/* Thumbnail strip */}
      <div className="category-thumbs">
        {category.items.map((item, i) => (
          <button
            key={i}
            className={`thumb-btn ${i === selectedIdx ? "selected" : ""}`}
            onClick={() => setSelectedIdx(i)}
          >
            <img src={item.thumb} alt={`${category.name} ${i + 1}`} />
            {item.type === "video" && <span className="play-icon">▶</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section className="portfolio-page">
      <header className="portfolio-header">
        <h1>Portfolio</h1>
        <p>
          Recent work in multiple forms of media
        </p>
      </header>

      {sections.map((section) => (
        <div key={section.id} className="portfolio-section">
          <h2 className="section-label">{section.label}</h2>
          <div className="section-categories">
            {section.categories.map((cat) => (
              <CategoryBlock key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
  