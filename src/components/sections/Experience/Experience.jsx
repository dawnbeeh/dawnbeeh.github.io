import styles from "./Experience.module.css"
import experiences from "../../../data/experiences"

const Experience = () => (
  <section id="experience" className={styles.experience} data-aos="fade-up">
    <h2>Experience</h2>
    <ul>
      {experiences.map((exp) => (
        <li key={exp.company} className={styles.item}>
          <h3>{exp.role} · {exp.company}</h3>
          <span className={styles.period}>{exp.period}</span>
          <p>{exp.description}</p>
        </li>
      ))}
    </ul>
  </section>
)

export default Experience 