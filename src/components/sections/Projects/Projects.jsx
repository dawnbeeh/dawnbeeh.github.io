import { useState } from "react"
import { createPortal } from "react-dom"
import styles from "./Projects.module.css"
import projects from "../../../data/projects"
import fallbackImg from "../../../assets/images/profile.jpg"
import DefaultDetail from "./details/DefaultDetail"
import RestaurantUIDetail from "./details/RestaurantUIDetail"
import CanvasCloneDetail from "./details/CanvasCloneDetail"
import BostonNeighborhoodDetail from "./details/BostonNeighborhoodDetail"
import BrainCTDetail from "./details/BrainCTDetail"
import MentalLoadDetail from "./details/MentalLoadDetail"

const Projects = () => {
  const [selected, setSelected] = useState(null)

  const detailMap = {
    "Brain CT Image Hemorrhage Segmentation": BrainCTDetail,
    "Mental-Load Webapp": MentalLoadDetail,
    "Restaurant UI&UX Design": RestaurantUIDetail,
    "Boston Neighborhood Social Web": BostonNeighborhoodDetail,
    "Canvas Clone Web App": CanvasCloneDetail,
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
            {proj.image && proj.image.includes('.mp4') ? (
              <video
                src={proj.image}
                className={styles.thumbnail}
                muted
                loop
                playsInline
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = fallbackImg
                }}
              />
            ) : (
              <img
                src={proj.image || fallbackImg}
                alt={proj.title}
                className={styles.thumbnail}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = fallbackImg
                }}
              />
            )}
            <div className={styles.cardBody}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              {proj.link && (
                <div 
                  style={{ 
                    marginTop: "0.5rem", 
                    fontSize: "0.8rem", 
                    color: "#0ea5e9",
                    lineHeight: "1.2",
                    cursor: "pointer"
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(proj.link, '_blank', 'noopener,noreferrer')
                  }}
                >
                  🔗 {proj.link.includes('figma.com') ? `${proj.link.substring(0, 40)}...` : proj.link}
                </div>
              )}
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