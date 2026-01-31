import shopPreviewImage from "../assets/home_shop_preview.png"

export default function ShopPreview() {
  return (
    <section className="shop-preview">
      <img
        src={shopPreviewImage}
        alt=""
        className="shop-preview-bg"
        loading="lazy"
        decoding="async"
      />

      <div className="shop-preview-content">
        <a href="/#/shop" className="shop-button">Online Store</a>
        <p className="shop-description">
        Check out my latest prints for purchase on my shop!        </p>
      </div>
    </section>
  );
}

  