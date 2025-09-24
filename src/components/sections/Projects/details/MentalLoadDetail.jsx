import fallbackImg from "../../../../assets/images/profile.jpg"

const MentalLoadDetail = ({ project }) => (
  <div style={{ paddingBottom: "3rem" }}>
    <video
      src={project.image || fallbackImg}
      controls
      style={{ width: "100%", maxHeight: 500, objectFit: "cover", marginBottom: "1rem" }}
      onError={(e) => {
        e.target.onerror = null
        e.target.src = fallbackImg
      }}
    >
      Your browser does not support the video tag.
    </video>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    
    <div style={{ marginTop: "1.5rem" }}>
      <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>Project Overview:</h4>
      <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
        A comprehensive web and mobile application that transforms a client's prototype into a fully functional 
        platform for managing mental load assessments. The application combines responsive design with powerful 
        backend automation to streamline survey distribution and participant engagement.
      </p>
    </div>

    <div style={{ marginTop: "1.5rem" }}>
      <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>Key Features:</h4>
      <ul style={{ marginLeft: "1.5rem", lineHeight: "1.6", textAlign: "left" }}>
        <li><strong>Responsive Design:</strong> Seamless experience across web and mobile platforms</li>
        <li><strong>Automated Dashboard:</strong> Schedule and send automated reminder messages</li>
        <li><strong>Dynamic Survey Management:</strong> Generate survey links via Qualtrics API</li>
        <li><strong>Scalable Architecture:</strong> No redeployment required for survey updates</li>
        <li><strong>Client Prototype Redesign:</strong> Enhanced user experience and functionality</li>
      </ul>
    </div>

    <div style={{ marginTop: "1.5rem" }}>
      <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>Technical Implementation:</h4>
      <ul style={{ marginLeft: "1.5rem", lineHeight: "1.6", textAlign: "left" }}>
        <li>Frontend development with React Native and Expo for cross-platform compatibility</li>
        <li>Backend API development using Python and Flask framework</li>
        <li>Real-time database integration with Firebase</li>
        <li>SQL database management for structured data storage</li>
        <li>Qualtrics API integration for dynamic survey link generation</li>
        <li>Automated messaging system for participant engagement</li>
      </ul>
    </div>

    <div style={{ marginTop: "1.5rem" }}>
      <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>Technologies Used:</h4>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>React Native</span>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>Expo</span>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>Python</span>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>Flask</span>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>Firebase</span>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>SQL</span>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.875rem" }}>Qualtrics API</span>
      </div>
    </div>

    <div style={{ marginTop: "1.5rem" }}>
      <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>Project Impact:</h4>
      <p style={{ lineHeight: "1.6" }}>
        This project demonstrates full-stack development capabilities with a focus on user experience and 
        automation. The integration of multiple technologies showcases expertise in both frontend and backend 
        development, API integration, and scalable system design. The automated survey management system 
        significantly improves efficiency for research and assessment workflows.
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

export default MentalLoadDetail
