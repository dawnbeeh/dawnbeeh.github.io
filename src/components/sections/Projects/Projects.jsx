import styles from "./Projects.module.css"
import projects from "../../../data/projects"

const Projects = () => (
  <section id="projects" className={styles.projects}>
    <h2>Projects</h2>
    <ul>
      {projects.map((project) => (
        <li key={project.title} className={styles.item}>
          <h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </h3>
          <p>{project.description}</p>
        </li>
      ))}
    </ul>
  </section>
)

export default Projects 