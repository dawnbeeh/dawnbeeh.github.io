import { useState } from "react"
import styles from "./Projects.module.css"
import projects from "../../../data/projects"
import fallbackImg from "../../../assets/images/profile.jpg"

const Projects = () => {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className={styles.projects} data-aos="fade-up">
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projects.map((proj) => (
          <div
            key={proj.title}
            className={styles.card}
            onClick={() => setSelected(proj)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelected(proj)}
          >
            <img
              src={proj.image || fallbackImg}
              alt={proj.title}
              className={styles.thumbnail}
              onError={(e) => {
                e.target.onerror = null
                e.target.src = fallbackImg
              }}
            />
            <div className={styles.cardBody}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className={styles.modalOverlay} onClick={() => setSelected(null)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={() => setSelected(null)}>
              ×
            </button>
            <img
              src={selected.image || fallbackImg}
              alt={selected.title}
              className={styles.modalImg}
              onError={(e) => {
                e.target.onerror = null
                e.target.src = fallbackImg
              }}
            />
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
            {selected.link && (
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.visitBtn}
              >
                Visit Site
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects 