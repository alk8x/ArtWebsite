import { NavLink } from "react-router-dom";

export default function ShopPreview() {
  return (
    <section className="shop-preview">
      <div className="shop-preview-content">
        <NavLink to="/shop" className="shop-button">
          ONLINE STORE
        </NavLink>

        <p className="shop-description">
          Check out my latest prints for purchase on my shop!
        </p>
      </div>
    </section>
  );
}

  