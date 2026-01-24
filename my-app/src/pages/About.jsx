import "../styles/about.css";
import aboutPhoto from "../assets/about_photo.png";

export default function About() {
  return (
    <section className="about">
      <div className="about-inner">
        <div className="about-image">
          <img src={aboutPhoto} alt="Portrait of Allison Fish" />
        </div>

        <div className="about-text">
          <h1>Hey, I’m Allison</h1>

          <p>
            I am an animator, artist, and storyteller based in Massachusetts. I
            focus on bringing out emotions and character in my pieces, with a love
            of drawing people. The goal is to create original stories preferably
            in animation or some similar form.
          </p>

          <p>
            While I have been creating art all my life, I did not study it
            professionally. My background is actually in engineering with a focus
            on product development. Though some view this as a completely
            different field, I find new ways every day how art and engineering
            blend beautifully together.
          </p>

          <p>
            I’m always striving to learn and create more in any free time I have.
            If you would like to collab or commission me, please don’t be afraid
            to reach out!
          </p>

          <p className="about-email">
            email: allison.fish.makes.art@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}

  