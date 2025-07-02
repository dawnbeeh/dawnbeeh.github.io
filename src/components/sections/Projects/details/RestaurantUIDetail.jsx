import figmaImg from "../../../../assets/images/Figma-restuarant-UI.png"

const RestaurantUIDetail = ({ project }) => (
  <>
    <img
      src={figmaImg}
      alt={project.title}
      style={{ width: "100%", maxHeight: 500, objectFit: "cover", marginBottom: "1rem" }}
    />
    <h3>{project.title}</h3>
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

export default RestaurantUIDetail 