import fallbackImg from "../../../../assets/images/profile.jpg"

const BrainCTDetail = ({ project }) => (
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
    
    <div style={{ marginTop: "1.5rem" }}>
      <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>Key Features:</h4>
      <ul style={{ marginLeft: "1.5rem", lineHeight: "1.6" }}>
        <li>Deep learning-based hemorrhage detection and segmentation</li>
        <li>High accuracy in identifying various types of brain hemorrhages</li>
        <li>Real-time processing of CT scan images</li>
        <li>Automated region-of-interest identification</li>
        <li>Medical-grade precision for clinical applications</li>
      </ul>
    </div>

    <div style={{ marginTop: "1.5rem" }}>
      <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>Technologies Used:</h4>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>Python</span>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>TensorFlow</span>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>Keras</span>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>OpenCV</span>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>NumPy</span>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>Medical Imaging</span>
      </div>
    </div>

    <div style={{ marginTop: "1.5rem" }}>
      <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>Project Impact:</h4>
      <p style={{ lineHeight: "1.6" }}>
        This project demonstrates advanced computer vision techniques applied to medical imaging, 
        showcasing the potential of AI in healthcare diagnostics. The segmentation model can assist 
        radiologists in quickly identifying hemorrhages in brain CT scans, potentially improving 
        patient outcomes through faster diagnosis.
      </p>
    </div>

    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-block", marginTop: 16, padding: "0.5rem 1rem", background: "#0ea5e9", color: "#fff", borderRadius: 4, textDecoration: "none" }}
      >
        View Project
      </a>
    )}
  </>
)

export default BrainCTDetail
