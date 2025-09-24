import { useState } from "react"
import figmaMain from "../../../../assets/images/Figma/Figma-restuarant-UI.png"
//import figma1 from "../../../../assets/images/Figma/Figma-1.png"
import figmaFinal from "../../../../assets/images/Figma/Figma-final.png"
import figmaBlank from "../../../../assets/images/Figma/Figma-blank.png"
import figmaHand from "../../../../assets/images/Figma/Figma-handwritingLayout.png"
import figmaInspiration from "../../../../assets/images/Figma/Figma-inspiration.png"
import figmaLogo from "../../../../assets/images/Figma/Figma-logo.png"

const images = [
  //figma1,
  figmaFinal,
  figmaBlank,
  figmaHand,
  figmaInspiration,
  figmaLogo,
  figmaMain
]

const arrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(0,0,0,0.5)",
  color: "#fff",
  border: "none",
  padding: "0.5rem 0.75rem",
  cursor: "pointer",
  outline: "none",
  boxShadow: "none",
}

const RestaurantUIDetail = ({ project }) => {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx((idx - 1 + images.length) % images.length)
  const next = () => setIdx((idx + 1) % images.length)

  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src={images[idx]}
          alt={`${project.title} ${idx + 1}`}
          style={{ width: "100%", maxHeight: 500, objectFit: "contain" }}
        />
        {images.length > 1 && (
          <>
            <button style={{ ...arrowStyle, left: 10, borderRadius: '50%' }} onClick={prev} aria-label="Previous image">
              <i className="bi bi-chevron-left"></i>
            </button>
            <button style={{ ...arrowStyle, right: 10, borderRadius: '50%' }} onClick={next} aria-label="Next image">
              <i className="bi bi-chevron-right"></i>
            </button>
          </>
        )}
      </div>
      <h3 style={{ marginTop: "1rem" }}>{project.title}</h3>
      <p>{project.description}</p>
      {project.link && (
        <div style={{ marginTop: 16 }}>
          <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>View the full Figma prototype:</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: "inline-block", 
              padding: "0.5rem 1rem", 
              background: "#f8fafc", 
              color: "#0ea5e9", 
              borderRadius: 4, 
              textDecoration: "none",
              border: "1px solid #e2e8f0",
              fontFamily: "monospace",
              fontSize: "0.8rem",
              wordBreak: "break-all",
              maxWidth: "100%"
            }}
          >
            {project.link}
          </a>
        </div>
      )}
    </>
  )
}

export default RestaurantUIDetail 