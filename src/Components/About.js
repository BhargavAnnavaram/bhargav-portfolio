export default function About() {
    return (
      <div className="section">
        <h2 className="section-title">about myself</h2>
        <p className="muted">
          Hello! I’m Bhargav. I build scalable applications using Java, Spring Boot,
          React, and modern cloud tools. I enjoy solving real-world problems with
          clean architecture and performance-focused engineering.
        </p>
  
        <div className="btn-row">
          <button
            className="btn-primary"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </button>
  
          <a
            className="btn-outline"
            href="/Bhargav_Java_Fullstack_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    );
  }
  