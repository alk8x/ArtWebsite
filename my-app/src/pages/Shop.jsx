import { useNavigate } from "react-router-dom";
import { shopItems } from "../data/shopItems";
import fanFavorite from "../assets/star_fan_fav.png";
import "../styles/shop.css";

export default function Shop() {
  const navigate = useNavigate();

  return (
    <section className="shop-page">
      <header className="shop-header">
        <h1>Fish Makes Art Shop</h1>
        <p>
          Art prints of my work in various sizes.
          If interested in prints or original artworks for purchase, please
          email me here:<br />allison.fish.makes.art@gmail.com.<br />
          Prints can be shipped or hand delivered (if you live locally).
        </p>
      </header>

      <div className="shop-grid">
        {shopItems.map((item) => (
          <div
            key={item.id}
            className="art-card"
            onClick={() => navigate(`/shop/${item.id}`)}
          >
            <div className="art-image">
              {item.fanFavorite && (
                <img src={fanFavorite} alt="Fan favorite" className="fan-favorite-badge" />
              )}
              <img src={item.images[0]} alt={item.title} className="art-img" loading="lazy" />
            </div>
            <h3>{item.title}</h3>
            <span className="dimension">
              Print: {item.printSize}
              {item.originalSize ? ` Original: ${item.originalSize}` : ""}
              <br />
            </span>
            <span className="price">
              Print: {item.printPrice}
              {item.originalPrice ? ` Original: ${item.originalPrice}` : ""}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

  