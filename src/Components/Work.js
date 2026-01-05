const projects = [
    {
      title: "Project 1",
      place: "Texas, USA",
      desc: "1–2 lines about what it does, tech used, impact.",
      github: "https://github.com/BhargavAnnavaram",
      live: "https://your-live-link.com",
    },
  ];
  
  export default function Work() {
    return (
      <div className="section">
        <h2 className="section-title">Latest Work</h2>
        <p className="muted">
          I build web apps with Java, Spring Boot, React, and AI features.
        </p>
  
        <div className="cards">
          {projects.map((p) => (
            <div className="card" key={p.title}>
              <h3>{p.title}</h3>
              <div className="small">{p.place}</div>
              <p className="muted">{p.desc}</p>
  
              <div className="btn-row">
                <a className="btn-outline" href={p.github} target="_blank" rel="noreferrer">
                  GitHub Repository
                </a>
                <a className="btn-primary" href={p.live} target="_blank" rel="noreferrer">
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  