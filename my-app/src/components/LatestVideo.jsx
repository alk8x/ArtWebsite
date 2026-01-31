import { useEffect, useState } from "react";

export default function LatestVideo() {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_YT_API_KEY;
    const CHANNEL_ID = process.env.REACT_APP_YT_CHANNEL_ID;

    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=1&type=video`
    )
      .then(res => res.json())
      .then(data => {
        const latestVideo = data.items?.[0]?.id?.videoId;
        if (latestVideo) {
          setVideoId(latestVideo);
        }
      })
      .catch(err => console.error("YouTube API error:", err));
  }, []);

  return (
    <section className="latest-video">
      <h2>CHECK OUT MY LATEST YOUTUBE VID!</h2>

      <div className="video-wrapper">
        {videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Latest YouTube Video"
            allowFullScreen
          />
        ) : (
          <p>Loading latest video…</p>
        )}
      </div>
    </section>
  );
}


  