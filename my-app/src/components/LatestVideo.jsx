export default function LatestVideo() {
    return (
      <section className="latest-video">
        <h2>Check out my latest YouTube vid!</h2>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/qtlpWCxVank"
            title="Latest YouTube"
            allowFullScreen
          />
        </div>
      </section>
    );
  }
  