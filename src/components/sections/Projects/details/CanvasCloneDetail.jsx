import fallbackImg from "../../../../assets/images/profile.jpg"
import bigDashImg from "../../../../assets/images/CanvasClone/Big-DashBoard.png"
import signInImg from "../../../../assets/images/CanvasClone/Sign-in.png"
import smallDashImg from "../../../../assets/images/CanvasClone/Small-DashBoard.png"
import dashImg from "../../../../assets/images/CanvasClone/DashBoard.png"
import courseImg from "../../../../assets/images/CanvasClone/Aerodynamics-course.png"
import assignmentImg from "../../../../assets/images/CanvasClone/Aerodynamics-Assignments.png"
import peopleImg from "../../../../assets/images/CanvasClone/Aerodynamics-People.png"
import enrollImg from "../../../../assets/images/CanvasClone/Endroll-Course.png"
import profileImg from "../../../../assets/images/CanvasClone/Profile-page.png"
import mongoCourseImg from "../../../../assets/images/CanvasClone/Course-MongDB.png"
import mongoUsersImg from "../../../../assets/images/CanvasClone/users-DB.png"

const CanvasCloneDetail = ({ project }) => (
  <>
    <img
      src={assignmentImg}
      alt={project.title}
      style={{ width: "100%", maxHeight: 500, objectFit: "cover", marginBottom: "1rem" }}
      onError={(e) => {
        e.target.onerror = null
        e.target.src = fallbackImg
      }}
    />

    <h3>{project.title}</h3>
    <p>
        Canvas Clone Web App is a full-stack application inspired by the popular learning-management system
        Canvas. The project manages Assignments, Courses, Modules, Enrollments and Users for an online learning
        environment.
    </p>

    <h4>Tech Stack</h4>
    <ul style={{ textAlign: "left", maxWidth: 800, margin: "0 auto" }}>
      <li><strong>Frontend</strong>: React 18, React Router, Vite</li>
      <li><strong>Backend</strong>: Node.js 20, Express</li>
      <li><strong>Database</strong>: MongoDB Atlas &amp; Mongoose ODM</li>
      <li><strong>Deployment</strong>: Netlify (CI/CD)</li>
    </ul>

    <h4>Core Features</h4>
    <ol style={{ textAlign: "left", maxWidth: 800, margin: "0 auto" }}>
      <li><strong>Multi-role Authentication</strong> – Supports Instructor and Student roles; each user can only
        access the screens and APIs allowed by their role. JWT with HTTP-only cookies handles auth and
        authorization.</li>
      <li><strong>Course Builder</strong> – Instructors create courses, design module structures and upload
        assignments via a drag-and-drop interface.</li>
      <li><strong>Assignment Submission &amp; Gradebook</strong> – Students upload files or text answers; instructors
        grade and give feedback in real time.</li>
      <li><strong>Enrollment Management</strong> – Students join via invitation link or code, and instructors view
        enrollment lists and analytics.</li>
      <li><strong>Responsive UI</strong> </li>
      <li><strong>Autosave Markdown Editor</strong> – Supports Markdown for assignment instructions and submission
        answers, autosaving locally to prevent data loss.</li>
    </ol>

    {/* Feature Illustrations */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1rem", maxWidth: 800, margin: "1.5rem auto" }}>
      <figure style={{ margin: 0 }}>
        <img src={courseImg} alt="Course Home" style={{ width: "100%", borderRadius: 8 }} />
        <figcaption style={{ fontSize: 14, textAlign: "center", marginTop: 4 }}>Course Home – Aerodynamics</figcaption>
      </figure>
      <figure style={{ margin: 0 }}>
        <img src={assignmentImg} alt="Assignments List" style={{ width: "100%", borderRadius: 8 }} />
        <figcaption style={{ fontSize: 14, textAlign: "center", marginTop: 4 }}>Assignments List &amp; Gradebook</figcaption>
      </figure>
      <figure style={{ margin: 0 }}>
        <img src={enrollImg} alt="Enroll / Unenroll" style={{ width: "100%", borderRadius: 8 }} />
        <figcaption style={{ fontSize: 14, textAlign: "center", marginTop: 4 }}>Enroll / Unenroll Course</figcaption>
      </figure>
      <figure style={{ margin: 0 }}>
        <img src={peopleImg} alt="Assignments List" style={{ width: "100%", borderRadius: 8 }} />
        <figcaption style={{ fontSize: 14, textAlign: "center", marginTop: 4 }}>People List</figcaption>
      </figure>
    </div>

    <h4>Architecture Overview</h4>
    <p style={{ textAlign: "left", maxWidth: 800, margin: "0 auto" }}>
      example
    </p>

    <h4>Database (Mongoose)</h4>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", maxWidth: 800, margin: "1rem auto" }}>
      <figure style={{ flex: "1 1 260px", margin: 0 }}>
        <img src={mongoUsersImg} alt="MongoDB Users Collection" style={{ width: "100%", borderRadius: 8 }} />
        <figcaption style={{ fontSize: 14, textAlign: "center", marginTop: 4 }}>users collection</figcaption>
      </figure>
      <figure style={{ flex: "1 1 260px", margin: 0 }}>
        <img src={mongoCourseImg} alt="MongoDB Courses Collection" style={{ width: "100%", borderRadius: 8 }} />
        <figcaption style={{ fontSize: 14, textAlign: "center", marginTop: 4 }}>courses collection</figcaption>
      </figure>
    </div>

    {/* Roles & Permissions */}
    <h4>Roles &amp; Permissions</h4>
    <p style={{ textAlign: "left", maxWidth: 800, margin: "0 auto" }}>
      <strong>Instructor</strong> – can perform course/assignment CRUD, manage students and enter grades.<br />
      <strong>Student</strong> – can submit assignments and view course materials. Permission checks are enforced
      both in an Express middleware layer and a React route guard.
    </p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", maxWidth: 800, margin: "1rem auto" }}>
    <figure style={{ flex: "1 1 260px", margin: 0 }}>
        <img src={signInImg} alt="Multi-role Sign-in" style={{ width: "80%", borderRadius: 8 }} />
        <figcaption style={{ fontSize: 14, textAlign: "center", marginTop: 4 }}>Multi-role Sign-in</figcaption>
      </figure>
      <figure style={{ flex: "1 1 260px", margin: 0 }}>
        <img src={profileImg} alt="Edit Profile" style={{ width: "80%", borderRadius: 8 }} />
        <figcaption style={{ fontSize: 14, textAlign: "center", marginTop: 4 }}>Edit Profile</figcaption>
      </figure>
    </div>

    {/* Responsive Design */}
    <h4>Responsive Design</h4>
    <p style={{ textAlign: "left", maxWidth: 800, margin: "0 auto" }}>
      For mobile users, layouts collapse to a single column, and complex components such as the gradebook turn into
      horizontal scroll or accordion views.
    </p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", maxWidth: 800, margin: "1rem auto" }}>
      <figure style={{ flex: "1 1 260px", margin: 0 }}>
        <img src={smallDashImg} alt="Mobile Dashboard" style={{ width: "100%", borderRadius: 8 }} />
        <figcaption style={{ fontSize: 14, textAlign: "center", marginTop: 4 }}>Mobile layout (≤640&nbsp;px)</figcaption>
      </figure>
      <figure style={{ flex: "1 1 260px", margin: 0 }}>
        <img src={dashImg} alt="Tablet Dashboard" style={{ width: "100%", borderRadius: 8 }} />
        <figcaption style={{ fontSize: 14, textAlign: "center", marginTop: 4 }}>Medium layout (~1024&nbsp;px)</figcaption>
      </figure>
      <figure style={{ flex: "1 1 260px", margin: 0 }}>
        <img src={bigDashImg} alt="Desktop Dashboard" style={{ width: "100%", borderRadius: 8 }} />
        <figcaption style={{ fontSize: 14, textAlign: "center", marginTop: 4 }}>Desktop layout (≥1280&nbsp;px)</figcaption>
      </figure>
    </div>

    {/* Conclusion */}
    <h4>What I Learned</h4>
    <p style={{ textAlign: "left", maxWidth: 800, margin: "0 auto" }}>
        hello world!
        {/* I built a RESTful API using Node.js and Express to support full CRUD operations
        for users, courses, and assignments, along with session-based authentication
        and basic role-based access control (RBAC) for ADMIN, FACULTY, TA, and STUDENT roles.

        On the frontend, I used React and Redux Toolkit to implement role-based navigation
        and protected routes, delivering core LMS features such as dashboards and course registration. */}
    </p>

    {/* External Link */}
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-block", marginTop: 24, padding: "0.5rem 1rem", background: "#0ea5e9", color: "#fff", borderRadius: 4, textDecoration: "none" }}
      >
        Live Demo
      </a>
    )}
  </>
)

export default CanvasCloneDetail 