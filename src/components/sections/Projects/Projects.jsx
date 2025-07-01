import styles from "./Projects.module.css"
import projects from "../../../data/projects"
import fallbackImg from "../../../assets/images/profile.jpg"

const Projects = () => (
  <section id="projects" className={styles.projects} data-aos="fade-up">
    <h2>Projects</h2>
    <div className={styles.grid}>
      {projects.map(({ title, description, link, image }) => (
        <a
          key={title}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <img src={image || fallbackImg} alt={title} className={styles.thumbnail} onError={(e) => { e.target.onerror=null; e.target.src=fallbackImg; }} />
          <div className={styles.overlay}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </a>
      ))}
    </div>
  </section>
)

export default Projects 