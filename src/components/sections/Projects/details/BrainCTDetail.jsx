import fallbackImg from "../../../../assets/images/profile.jpg"

const BrainCTDetail = ({ project }) => (
  <div style={{ paddingBottom: "3rem" }}>
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
      <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>Partner Company:</h4>
      <p style={{ marginBottom: "0.5rem" }}>
        <strong>Zeta Surgical</strong> - Founded by Harvard graduates and academics
      </p>
      <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: "1.5" }}>
        Mission: Democratize access to accurate, safe and fast image-guidance, enabling 
        image guidance directly at the point-of-care for emergency and bedside procedures.
      </p>
    </div>

    <div style={{ marginTop: "1.5rem" }}>
      <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>Project Overview:</h4>
      <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
        Academic partnership project focused on developing AI models for brain hemorrhage 
        detection and segmentation using machine learning, computer vision, and data analytics 
        techniques. The project involved classification, regression, and segmentation of 
        various types of brain hemorrhages in CT scan images.
      </p>
    </div>

    <div style={{ marginTop: "1.5rem", textAlign: "left" }}>
      <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9", textAlign: "left" }}>Hemorrhage Types Classified:</h4>
      <ul style={{ marginLeft: "1.5rem", lineHeight: "1.6", textAlign: "left" }}>
        <li><strong>Intraparenchymal:</strong> Bleeding within brain tissue</li>
        <li><strong>Intraventricular:</strong> Bleeding within brain ventricles</li>
        <li><strong>Subarachnoid:</strong> Bleeding between brain and arachnoid membrane</li>
        <li><strong>Subdural:</strong> Bleeding between dura mater and arachnoid membrane</li>
        <li><strong>Epidural:</strong> Bleeding between skull and dura mater</li>
        <li><strong>Multi-source:</strong> Images with multiple hemorrhage types</li>
      </ul>
    </div>

    <div style={{ marginTop: "1.5rem", textAlign: "left" }}>
      <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9", textAlign: "left" }}>Technical Approach:</h4>
      <ul style={{ marginLeft: "1.5rem", lineHeight: "1.6", textAlign: "left" }}>
        <li>Mathematical modeling and statistical analysis</li>
        <li>Machine learning and artificial neural network techniques</li>
        <li>CT image preprocessing with multiple windowing techniques</li>
        <li>DICOM file processing and medical image analysis</li>
        <li>Multi-class classification and pixel-level segmentation</li>
        <li>Data validation and quality control protocols</li>
      </ul>
    </div>

    <div style={{ marginTop: "1.5rem" }}>
      <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>Dataset & Technologies:</h4>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>Python</span>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>TensorFlow</span>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>DICOM Processing</span>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>Medical Imaging</span>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>Computer Vision</span>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>Statistical Analysis</span>
      </div>
      <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: "1.5" }}>
        <strong>Dataset:</strong> Comprehensive brain CT scan dataset with labeled hemorrhages, 
        including multiple rendering windows (brain_bone_window, bone_window, max_contrast_window, 
        subdural_window) and expert neurosurgeon annotations.
      </p>
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
  </div>
)

export default BrainCTDetail
