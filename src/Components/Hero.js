import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-kicker">It's me</div>
        <h1 className="hero-title">Bhargav Reddy A</h1>
        <div className="hero-subtitle">Java Full-Stack Developer & AI Engineer</div>

        <button
          className="btn-primary"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact Me
        </button>
      </div>

      <div className="hero-right">
        <img className="hero-photo" src={profile} alt="Bhargav" />
      </div>
    </div>
  );
}
