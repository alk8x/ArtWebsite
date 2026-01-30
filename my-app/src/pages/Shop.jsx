import "../styles/shop.css";
import art1 from "../assets/clementine.png";
import art2 from "../assets/OTGW.png";
import art3 from "../assets/luna_moth.png";
import art4 from "../assets/Joel_TLOU.png";
import art5 from "../assets/zuko.png";
import art6 from "../assets/viktor_arcane.png";
import art7 from "../assets/apple.png";
import fanFavorite from "../assets/star_fan_fav.png";


export default function Shop() {
  return (
    <section className="shop-page">
      {/* Page header */}
      <header className="shop-header">
        <h1>Fish Makes Art Shop</h1>
        <p>
          Art prints of my work in various sizes.
          If interested in prints or original artworks for purchase, please
          email me here:<br />  allison.fish.makes.art@gmail.com. <br />   
          Prints can be shipped or hand delivered (if you live locally).
        </p>
      </header>

      {/* Art grid */}
      <div className="shop-grid">
      <div className="art-card">
        <div className="art-image">
          <img src={fanFavorite} alt="Fan favorite" className="fan-favorite-badge" />
          <img src={art2} alt="Artwork title" className="art-img" loading="lazy"/>
        </div>
        <h3>Over the Garden Wall - Rubber Hose, Procreate</h3>
        <span className="dimension">Print: 5x7"<br /></span>
        <span className="price">Print: $10.00</span>
        </div>

        <div className="art-card">
          <div className="art-image">
            <img src={art5} alt="Artwork title" className="art-img" loading="lazy"/>
          </div>
          <h3>Zuko, Procreate</h3>
          <span className="dimension">Print: 8x10"<br /></span>
          <span className="price">Print: $20.00</span>
        </div>

        <div className="art-card">
          <div className="art-image">
            <img src={art6} alt="Artwork title" className="art-img" loading="lazy"/>
          </div>
          <h3>Viktor - Arcane, Procreate</h3>
          <span className="dimension">Print: 8x10"<br /></span>
          <span className="price">Print: $20.00</span>
        </div>

        <div className="art-card">
          <div className="art-image">
            <img src={fanFavorite} alt="Fan favorite" className="fan-favorite-badge" />
            <img src={art1} alt="Artwork title" className="art-img" loading="lazy"/>
          </div>
          <h3>Clementines, oil paint</h3>
          <span className="dimension">Print: 8x10" Original: 5x7"<br /></span>
          <span className="price">Print: $20.00 Original: $250</span>
        </div>

        <div className="art-card">
          <div className="art-image">
            <img src={fanFavorite} alt="Fan favorite" className="fan-favorite-badge" />
            <img src={art3} alt="Artwork title" className="art-img" loading="lazy"/>
          </div>
          <h3>Luna Moth, oil paint</h3>
          <span className="dimension">Print: 5x7" Original: 8x8"<br /></span>
          <span className="price">Print: $10.00 Original: SOLD</span>
        </div>

        <div className="art-card">
          <div className="art-image">
            <img src={art7} alt="Artwork title" className="art-img" loading="lazy"/>
          </div>
          <h3>Apple, oil paint</h3>
          <span className="dimension">Print: 8x10" Original: 5x7"<br /></span>
          <span className="price">Print: $20.00 Original: $200</span>
        </div>

        <div className="art-card">
          <div className="art-image">
            <img src={art4} alt="Artwork title" className="art-img" loading="lazy"/>
          </div>
          <h3>Joel - The Last of Us, Procreate</h3>
          <span className="dimension">Print: 8x10"<br /></span>
          <span className="price">Print: $20.00</span>
        </div>
      </div>
    </section>
  );
}

  