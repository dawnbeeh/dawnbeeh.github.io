import { useState } from "react"
import figmaMain from "../../../../assets/images/Figma-restuarant-UI.png"
//import figma1 from "../../../../assets/images/Figma-1.png"
import figmaFinal from "../../../../assets/images/Figma-final.png"
import figmaBlank from "../../../../assets/images/Figma-blank.png"
import figmaHand from "../../../../assets/images/Figma-handwritingLayout.png"
import figmaInspiration from "../../../../assets/images/Figma-inspiration.png"
import figmaLogo from "../../../../assets/images/Figma-logo.png"

const images = [
  figmaMain,
  //figma1,
  figmaFinal,
  figmaBlank,
  figmaHand,
  figmaInspiration,
  figmaLogo,
]

const arrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(0,0,0,0.45)",
  color: "#fff",
  border: "none",
  width: 36,
  height: 36,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: 18,
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
            <button style={{ ...arrowStyle, left: 8 }} onClick={prev} aria-label="Previous image">
              ◀
            </button>
            <button style={{ ...arrowStyle, right: 8 }} onClick={next} aria-label="Next image">
              ▶
            </button>
          </>
        )}
      </div>
      <h3 style={{ marginTop: "1rem" }}>{project.title}</h3>
      <p>{project.description}</p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", marginTop: 16, padding: "0.5rem 1rem", background: "#646cff", color: "#fff", borderRadius: 4, textDecoration: "none" }}
        >
          Open Figma Prototype
        </a>
      )}
    </>
  )
}

export default RestaurantUIDetail 