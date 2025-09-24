import fallbackImg from "../../../../assets/images/profile.jpg"

const Pill = ({ children }) => (
  <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.3rem 0.75rem", borderRadius: 999, fontSize: "0.85rem", marginRight: 6, marginBottom: 6, display: "inline-block" }}>{children}</span>
)

const BostonNeighborhoodDetail = ({ project }) => (
  <>
    <img
      src={project.image || fallbackImg}
      alt={project.title}
      style={{ width: "100%", maxHeight: 520, objectFit: "cover", marginBottom: "1rem", borderRadius: 8 }}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallbackImg;
      }}
    />
    <h3>{project.title}</h3>
    <p style={{ lineHeight: 1.65 }}>
      A neighborhood‑centric social and commerce platform for Boston residents. Users discover local events and places,
      browse housing and marketplace posts, and interact with neighbors. The app provides API‑powered maps and events,
      and role‑based UIs for residents and admins.
    </p>

    <div style={{ marginTop: "1rem", textAlign: "left" }}>
      <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>APIs & Integrations</h4>
      <ul style={{ marginLeft: "1.25rem", lineHeight: 1.6 }}>
        <li>Boston area Events API integration for nearby activities</li>
        <li>Google Maps embed for neighborhoods, listings, and directions</li>
      </ul>
    </div>

    <div style={{ marginTop: "1rem", textAlign: "left" }}>
      <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>Role‑based Views</h4>
      <ul style={{ marginLeft: "1.25rem", lineHeight: 1.6 }}>
        <li>Different screens and permissions per role (e.g. Admin, Manager, Member, Guest)</li>
        <li>Protected routes for authenticated users only</li>
      </ul>
    </div>

    <div style={{ marginTop: "1.25rem", textAlign: "left" }}>
      <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>Core Features</h4>
      <ul style={{ marginLeft: "1.25rem", lineHeight: 1.6 }}>
        <li>Auth: Sign‑up / Login with password hashing and JWT; protected routes</li>
        <li>Products: Create, read, update, delete listings with image upload</li>
        <li>Cart: Add/remove items per user; adjustable quantities</li>
        <li>Checkout: Mock payment API; clear cart on success; store order history</li>
        <li>Admin: Approve/delete products; manage users</li>
        <li>Reviews: Write/edit/delete reviews with star ratings</li>
        <li>UI/UX: Responsive layout, friendly navigation, robust error handling (login failure, out‑of‑stock, etc.)</li>
      </ul>
    </div>

    <div style={{ marginTop: "1rem", textAlign: "left" }}>
      <h4 style={{ marginBottom: "0.5rem", color: "#0ea5e9" }}>Tech Stack</h4>
      <div>
        <Pill>React</Pill>
        <Pill>React Router</Pill>
        <Pill>TypeScript</Pill>
        <Pill>Node.js</Pill>
        <Pill>Express</Pill>
        <Pill>MongoDB</Pill>
        <Pill>Mongoose</Pill>
        <Pill>JWT Auth</Pill>
        <Pill>Netlify</Pill>
      </div>
    </div>

    {project.link && (
      <div style={{ marginTop: 16 }}>
        <p style={{ margin: "0 0 0.4rem 0", fontSize: "0.9rem", color: "#64748b" }}>Live URL</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "0.5rem 0.75rem",
            background: "#f8fafc",
            color: "#0ea5e9",
            borderRadius: 6,
            textDecoration: "none",
            border: "1px solid #e2e8f0",
            fontFamily: "monospace",
            fontSize: "0.9rem"
          }}
        >
          🔗 {project.link}
        </a>
      </div>
    )}
  </>
)

export default BostonNeighborhoodDetail 