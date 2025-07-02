import { useState } from "react"
import { createPortal } from "react-dom"
import styles from "./Projects.module.css"
import projects from "../../../data/projects"
import fallbackImg from "../../../assets/images/profile.jpg"
import DefaultDetail from "./details/DefaultDetail"
import Project1Detail from "./details/Project1Detail"

const Projects = () => {
  const [selected, setSelected] = useState(null)

  const detailMap = {
    "Project 1": Project1Detail,
  }

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

      {selected &&
        createPortal(
          <div className={styles.modalOverlay} onClick={() => setSelected(null)}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setSelected(null)}>
                ×
              </button>
              {
                (() => {
                  const Comp = detailMap[selected.title] || DefaultDetail
                  return <Comp project={selected} />
                })()
              }
            </div>
          </div>,
          document.body
        )}
    </section>
  )
}

export default Projects 