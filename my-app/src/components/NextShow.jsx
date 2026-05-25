export default function NextShow() {
    // leave this as an empty array when you don't have shows and it'll automatically be TBD
  const shows = [
    {
      name: "Queer Art Market",
      date: "June 4th, 2026",
      time: "6:00 PM – 8:00 PM",
      location: "Boston Bouldering Project, Somerville, MA",
    },
    {
      name: "Queer Figure Drawing",
      date: "June 5th, 2026",
      time: "7:00 – 9:30 PM",
      location: "Boston Figurative Art Center, Somerville MA",
    },
    {
      name: "Member Gallery",
      date: "May-June 2026",
      time: "Open gallery, all day!",
      location: "Boston Figurative Art Center, Somerville MA",
    },
  ];

  return (
    <section className="next-show">
      <h2 className="next-show-title">Upcoming Shows</h2>

      {shows.length === 0 ? (
        <p className="next-show-tbd">TBD</p>
      ) : (
        <div className="next-show-grid">
          {shows.map((show, i) => (
            <div key={i} className="show-card">
              <h3 className="show-name">{show.name}</h3>
              <p className="show-date">{show.date}</p>
              <p className="show-time">{show.time}</p>
              <p className="show-location">📍 {show.location}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}