import styles from "./Skills.module.css"
import skills from "../../../data/skills"

const Skills = () => (
  <section id="skills" className={styles.skills}>
    <h2>Skills</h2>
    <ul className={styles.list}>
      {skills.map(({ name, icon }) => (
        <li key={name} className={styles.item}>
          <img src={icon} alt={name} className={styles.icon} />
          <span className={styles.label}>{name}</span>
        </li>
      ))}
    </ul>
  </section>
)

export default Skills 