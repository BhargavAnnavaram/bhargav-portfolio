export default function Navbar() {
    const go = (id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <header className="nav">
        <div className="nav-brand">Bhargav</div>
        <nav className="nav-links">
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("about")}>About</button>
          <button onClick={() => go("work")}>Latest Work</button>
          <button onClick={() => go("contact")}>Contact Me</button>
        </nav>
      </header>
    );
  }
  