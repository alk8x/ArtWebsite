import { useState } from "react";
import "../styles/portfolio.css";
import clementine from "../assets/clementine.png";
import apple from "../assets/apple.png";
import me from "../assets/oilpastel_self.png";
import josh from "../assets/oilpastel_josh.png";
import nestor from "../assets/oilpastel_nestor.png";
import bb from "../assets/blueberries.png";
import arcane from "../assets/viktor_arcane.png";
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
          { type: "image", src: arcane, thumb: arcane, info: {
            title: "Arcane Fanart - Viktor",
            year: "2025",
            description: "Viktor from Arcane leaving his mortal body behind somewhere between Zaun and Piltover since he was a member of both. He ascends into his form of God, inspired by El Greco artwork."
          }},
          { type: "image", src: otgw, thumb: otgw, info:{
            title: "Over the Garden Wall Fanart",
            year: "2025",
            description: "Over the Garden Wall transformed into a RubberHose style."
          }},
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
          { type: "video", src: animation30, thumb: animation30_still, info: {
            title: "Headlock",
            year: "2026",
            medium: "Procreate, DaVinci Resolve",
            description: "My final animation from a 30 Prompt Animation Challenge. This last day was 'Whatever You Want'."
          }},
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
          { type: "image", src: me, thumb: me, info: {
            title: "Self Portrait",
            year: "2025",
            canvas: "Wood Panel",
            size: "9x12"
          }},
          { type: "image", src: josh, thumb: josh, info: {
            title: "Josh",
            year: "2025",
            canvas: "Canvas Panel",
            size: "6x8"
          }},
          { type: "image", src: nestor, thumb: nestor, info: {
            title: "Nestor",
            year: "2025",
            canvas: "Canvas Panel",
            size: "6x8"
          }},
          { type: "image", src: bb, thumb: bb, info: {
            title: "Blueberries",
            year: "2026",
            canvas: "Wood Canvas",
            size: "8x8"
          }},
          { type: "image", src: jss, thumb: jss, info: {
            title: "John Singer Sargent Master Copy",
            year: "2025",
            canvas: "Canvas Panel",
            size: "8x10"
          }},
        ],
      },
      {
        id: "oil-paint",
        name: "Oil Paint",
        items: [
          { type: "image", src: clementine, thumb: clementine, info: {
            title: "Clementines",
            year: "2024",
            canvas: "Canvas Panel",
            size: "5x7"
          }},
          { type: "image", src: apple, thumb: apple, info: {
            title: "Apple",
            year: "2024",
            canvas: "Canvas Panel",
            size: "5x7"
          } },
          { type: "image", src: lunamoth, thumb: lunamoth, info: {
            title: "Luna Moth",
            year: "2025",
            canvas: "Canvas",
            size: "8x8"
          } },
        ],
      },
    ],
  },
];

function ImageZoomModal({ src, alt, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-zoom-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <img src={src} alt={alt} className="modal-zoom-img" />
      </div>
    </div>
  );
}


function CategoryBlock({ category }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const selected = category.items[selectedIdx];

  return (
    <div className="portfolio-category">
      <div className="category-label">
        {category.name.split("").map((char, i) => (
          <span key={i}>{char === " " ? "\u00A0" : char}</span>
        ))}
      </div>

      {/* Hero media */}
      <div className="category-hero">
        {selected.type === "video" ? (
          <video key={selected.src} loop playsInline controls className="hero-media-item">
            <source src={selected.src} type="video/mp4" />
          </video>
        ) : (
          <img
            src={selected.src}
            alt={category.name}
            className="hero-media-item hero-media-zoomable"
            onClick={() => setZoomed(true)}
          />
        )}
      </div>

      {/* Thumbnails + info panel on the right */}
      <div className="category-sidebar">
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

        {/* Info panel below thumbnails */}
        {selected.info && (
          <div className="sidebar-info">
            {selected.info.title       && <h3 className="info-title">{selected.info.title}</h3>}
            {selected.info.year        && <p className="info-meta">{selected.info.year}</p>}
            {selected.info.medium      && <p className="info-meta">{selected.info.medium}</p>}
            {selected.info.canvas      && <p className="info-meta">{selected.info.canvas}</p>}
            {selected.info.size        && <p className="info-meta">{selected.info.size}</p>}
            {selected.info.description && <p className="info-description">{selected.info.description}</p>}
          </div>
        )}
      </div>

      {zoomed && (
        <ImageZoomModal
          src={selected.src}
          alt={selected.info?.title || category.name}
          onClose={() => setZoomed(false)}
        />
      )}
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
  