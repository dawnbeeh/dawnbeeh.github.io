import fallbackImg from "../../../../assets/images/profile.jpg"

const DefaultDetail = ({ project }) => (
  <>
    <img
      src={project.image || fallbackImg}
      alt={project.title}
      style={{ width: "100%", maxHeight: 500, objectFit: "cover", marginBottom: "1rem" }}
      onError={(e) => {
        e.target.onerror = null
        e.target.src = fallbackImg
      }}
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
        Visit Site
      </a>
    )}
  </>
)

export default DefaultDetail 