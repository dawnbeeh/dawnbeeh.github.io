import fallbackImg from "../../../../assets/images/profile.jpg"

const BostonNeighborhoodDetail = ({ project }) => (
  <>
    <img
      src={project.image || fallbackImg}
      alt={project.title}
      style={{ width: "100%", maxHeight: 500, objectFit: "cover", marginBottom: "1rem" }}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallbackImg;
      }}
    />
    <h3>{project.title}</h3>
  </>
);

export default BostonNeighborhoodDetail; 