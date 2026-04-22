import { useState } from "react";
import "../styles/portfolio.css";
import clementine from "../assets/clementine.png";
import apple from "../assets/apple.png";
import me from "../assets/oilpastel_self.png";
import josh from "../assets/oilpastel_josh.png";
import nestor from "../assets/oilpastel_nestor.png";
import bb from "../assets/blueberries.png";
import arcane from "../assets/arcane.png";
import jss from "../assets/JSS.png";
import otgw from "../assets/OTGW.png";
import animation30 from "../assets/AnimationDay30-31.mp4";
import animation30_still from "../assets/animation30_stillshot.png";
import lunamoth from "../assets/luna_moth_og.png";

// --- Replace these imports with your actual asset imports ---
// import oilPastel1 from "../assets/oil_pastel_1.png";
// etc.

const sections = [
  {
    id: "digital",
    label: "Digital",
    categories: [
      {
        id: "procreate",
        name: "Procreate",
        items: [
          { type: "image", src: arcane, thumb: arcane },
          { type: "image", src: otgw, thumb: otgw },
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
          { type: "video", src: animation30, thumb: animation30_still },
        ],
      },
    ],
  },
    {
    id: "traditional",
    label: "Traditional",
    categories: [
      {
        id: "oil-pastel",
        name: "Oil Pastel",
        items: [
          { type: "image", src: me, thumb: me },
          { type: "image", src: josh, thumb: josh },
          { type: "image", src: nestor, thumb: nestor },
          { type: "image", src: bb, thumb: bb },
          { type: "image", src: jss, thumb: jss },
        ],
      },
      {
        id: "oil-paint",
        name: "Oil Paint",
        items: [
          { type: "image", src: clementine, thumb: clementine },
          { type: "image", src: apple, thumb: apple },
          { type: "image", src: lunamoth, thumb: lunamoth },
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
            loop
            playsInline
            controls
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
          Recent work in multiple forms of media.
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
  