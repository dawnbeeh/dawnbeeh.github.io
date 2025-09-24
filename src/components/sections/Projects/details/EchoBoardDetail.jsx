import fallbackImg from "../../../../assets/images/profile.jpg"

const EchoBoardDetail = ({ project }) => {
  const images = project.images || []
  const hero = images[0] || project.image

  return (
    <div style={{ paddingBottom: "2rem" }}>
      <img
        src={hero || fallbackImg}
        alt={project.title}
        style={{ width: "100%", maxHeight: 720, objectFit: "contain", marginBottom: "1rem" }}
        onError={(e) => { e.target.onerror = null; e.target.src = fallbackImg }}
      />

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {images.length > 1 && (
        <div style={{ marginTop: "1rem" }}>
          <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>UML</h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "1rem" }}>
            {images.slice(1).map((src) => (
              <img key={src} src={src} alt="EchoBoard" style={{ width: "100%", borderRadius: 8 }} />
            ))}
          </div>
        </div>
      )}

      <div style={{ marginTop: "1.5rem" }}>
        <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>Overview</h4>
        <ul style={{ textAlign: "left", marginLeft: "1.5rem", lineHeight: 1.6 }}>
          <li>Real-time voice activity detection (VAD) and audio level monitoring</li>
          <li>Background replacement with virtual camera thread and FaceMesh segmentation</li>
          <li>LLM integration for context-aware responses</li>
          <li>Threaded architecture for audio recognition and virtual camera rendering</li>
        </ul>
      </div>
    </div>
  )
}

export default EchoBoardDetail
