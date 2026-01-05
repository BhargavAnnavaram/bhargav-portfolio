export default function Contact() {
    return (
      <div className="section">
        <h2 className="section-title">Contact Me</h2>
        <p className="muted">
          Want to collaborate or discuss a role? Reach out — I’ll respond quickly.
        </p>
  
        <div className="btn-row">
          <a className="btn-primary" href="mailto:YOUR_EMAIL@gmail.com">
            Email Me
          </a>
          <a
            className="btn-outline"
            href="https://www.linkedin.com/in/YOUR_LINKEDIN/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    );
  }
  