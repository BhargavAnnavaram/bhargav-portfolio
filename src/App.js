import React from "react";
import "./App.css";
import profilePic from "./assets/profile.jpg";
import { motion } from "framer-motion";

function SectionWrapper({ id, children }) {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
}




function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Bhargav Reddy A</div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
  className="hero-content"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  

        <p className="hero-tag">Java | Full-Stack | AI | Software Developer</p>
        <h1>Hi, I’m Bhargav</h1>
        <h2>Java Full Stack Developer</h2>
        <p className="hero-text">
          I build scalable web applications and intelligent systems using
          Java, Spring Boot, React, and modern AI tools. I love solving real
          business problems with clean architecture and data-driven decisions.
        </p>
        <div className="hero-buttons">
        <a
  href="/Bhargav_Java_Fullstack_Resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="btn secondary"
>
  Download Resume
</a>

          <a
            href="https://www.linkedin.com/in/bhargav-kumar-reddy-annavaram-a53a03209/"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            View LinkedIn
          </a>
          <a
            href="https://github.com/BhargavAnnavaram"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            View GitHub
          </a>
        </div>
        </motion.div>
        <motion.div
  className="hero-photo"
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
>
  <img src={profilePic} alt="Bhargav" className="photo-img" />
</motion.div>

    </section>
  );
}

function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="section-title">About Me</h2>
      <p className="section-text">
        I am a Full Stack Developer with 4+ years of experience building secure,
        scalable, and high-performance applications using Java, Spring Boot,
        Angular, React, and microservices. I have worked on global payments,
        retail, and e-commerce platforms, focusing on reliability and
        performance at scale.
      </p>
      <p className="section-text">
        My expertise spans backend engineering, cloud-native development on AWS,
        event-driven architectures with Kafka, and modular frontends with modern
        JavaScript frameworks. I enjoy solving real-world problems with clean
        architecture, data-driven decisions, and strong DevOps practices around
        CI/CD, observability, and automation.
      </p>
    </SectionWrapper>
  );
}


function Skills() {
  return (
    <SectionWrapper id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skill-grid">

        <div className="skill-card">
          <h3>Languages</h3>
          <p>Java, JavaScript (ES6+), TypeScript, Python, C#, SQL</p>
        </div>

        <div className="skill-card">
          <h3>Frontend</h3>
          <p>
            React.js, Next.js, Angular, Redux Toolkit, Tailwind CSS,
            HTML5, CSS3, Responsive Design
          </p>
        </div>

        <div className="skill-card">
          <h3>Backend & Microservices</h3>
          <p>
            Spring Boot, REST/RPC APIs, Spring Security, OAuth 2.0, JWT,
            Kafka, GraphQL, Eureka, API Gateway
          </p>
        </div>

        <div className="skill-card">
          <h3>Databases & Search</h3>
          <p>PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch</p>
        </div>

        <div className="skill-card">
          <h3>Cloud & DevOps</h3>
          <p>
            AWS (EKS, EC2, RDS, S3, Lambda, API Gateway), Docker, Kubernetes,
            GitHub Actions, Jenkins, CI/CD automation, Prometheus, Grafana,
            OpenTelemetry
          </p>
        </div>

        <div className="skill-card">
          <h3>Testing & Other Tools</h3>
          <p>JUnit, Mockito, Selenium, Postman, Git, Confluence</p>
        </div>

      </div>
    </SectionWrapper>
  );
}


function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="card-grid">
        <div className="project-card">
          <h3>E-Commerce Microservices Platform</h3>
          <p className="project-stack">
            Java, Spring Boot, React, PostgreSQL, Docker
          </p>
          <p>
            Built a full-stack e-commerce application with product catalog,
            cart, and order management. Designed REST APIs with Spring Boot and
            implemented a responsive React UI. Optimized queries and caching to
            handle high traffic and reduce latency.
          </p>
          <div className="project-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>AI Resume & JD Matcher</h3>
          <p className="project-stack">
            Python, NLP, Transformers, Streamlit
          </p>
          <p>
            Developed an AI tool that compares resumes with job descriptions,
            calculates a matching score, and suggests targeted improvements to
            help candidates optimize for ATS and recruiter screening.
          </p>
          <div className="project-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>Developer Analytics Dashboard</h3>
          <p className="project-stack">
            React, Node.js, Chart.js, MongoDB
          </p>
          <p>
            Created an interactive dashboard to track deployment metrics, build
            failures, and API performance. Added charts, filters, and
            role-based access to support data-driven decisions for engineering
            teams.
          </p>
          <div className="project-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}


function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">

        {/* PayPal */}
        <div className="timeline-item">
          <h3>Java Full Stack Developer</h3>
          <p className="timeline-company">Charles Schwab – TX, USA • May 2024 – Present</p>
          <ul>
            <li>
            Implemented advanced Redis caching strategies, reducing database query load by 60% and accelerating financial transaction processing across distributed systems.Built robust microservices using Java 17, Spring Boot 3+ and Quarkus, enabling high-performance API delivery and improving backend scalability and response times.

            </li>
            <li>
              Implemented and optimized REST/RPC APIs in Spring Boot for cross-border
              transaction flows, improving API latency by <strong>22%</strong> with efficient
              data serialization and strategic caching.
            </li>
            <li>
              Engineered secure integration modules using AWS EKS, API Gateway,
              and Lambda, supporting high-volume, low-latency wallet-to-wallet
              transactions across regions.
            </li>
            <li>
              Built event-driven transaction pipelines with Kafka and Spring Boot
              consumers, enabling high-throughput, reliable message streaming
              between PayPal and external wallet providers.
            </li>
            <li>
              Automated CI/CD workflows with GitHub Actions, Docker, and Kubernetes,
              reducing deployment time by <strong>40%</strong> and enabling blue–green deployments.
            </li>
            <li>
              Enhanced observability with Prometheus, Grafana, and OpenTelemetry,
              improving monitoring coverage and reducing MTTR by <strong>35%</strong>.
            </li>
          </ul>
        </div>

        {/* Capgemini */}
        <div className="timeline-item">
          <h3>Software Developer</h3>
          <p className="timeline-company">Cognizant – India • July 2020 – July 2023</p>
          <ul>
            <li>
              Built high-performance backend microservices with Java 11 and Spring Boot
              for large-scale retail and e-commerce platforms.
            </li>
            <li>
              Delivered RESTful APIs for product catalog, order processing,
              authentication, and payment workflows.
            </li>
            <li>
              Integrated Razorpay to securely process <strong>10,000+</strong> daily
              transactions across multiple retail categories.
            </li>
            <li>
              Implemented a personalized recommendation engine using collaborative
              filtering, improving click-through rate by <strong>15%</strong>.
            </li>
            <li>
              Optimized SQL queries and introduced Redis caching to improve API
              performance and reduce average latency by <strong>40%</strong>.
            </li>
            <li>
              Developed responsive Angular frontends for product, cart, order,
              and user flows to support seamless customer experiences.
            </li>
          </ul>
        </div>

      </div>
    </SectionWrapper>
  );
}


function Contact() {
  return (
    <SectionWrapper id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="section-text">
        I’m actively looking for full-time roles and contract opportunities in
        Java full stack development, cloud-native applications, and AI-driven
        systems. Feel free to reach out if you’d like to collaborate or have a
        role that fits my profile.
      </p>
      <div className="contact-links">
        <a href="mailto:a.bhargav252001@gmail.com" className="btn primary">
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/bhargav-kumar-reddy-annavaram-a53a03209/"  // put your real LinkedIn URL
          target="_blank"
          rel="noreferrer"
          className="btn secondary"
        >
          LinkedIn
        </a>
      </div>
    </SectionWrapper>
  );
}


function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Bhargav Annavaram. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
