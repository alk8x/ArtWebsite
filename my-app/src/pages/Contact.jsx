import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-inner">
        {/* Email Section */}
        <h1 className="contact-title">
          Commissions, interest in buying prints, freelancing — email me:
        </h1>

        <p className="contact-text">
          <a href="mailto:allison.fish.makes.art@gmail.com?subject=Inquiry from your website">
            allison.fish.makes.art@gmail.com
          </a>
        </p>

        {/* Socials Section */}
        <h1 className="contact-title">Socials:</h1>

        <div className="contact-socials">
          <p className="contact-text">
            <a
              href="https://www.instagram.com/fish.makes.art"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram: @fish.makes.art
            </a>
          </p>

          <p className="contact-text">
            <a
              href="https://www.youtube.com/@FishMakesArt"
              target="_blank"
              rel="noopener noreferrer"
            >
              youtube: FishMakesArt
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

  