import styles from "./Home.module.css"
import profile from "../../../assets/images/profile.jpg"

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <img src={profile} alt="Profile" className={styles.avatar} />
      <h2>Hello, I'm Your Name</h2>
      <p>Front-end Developer | JavaScript Enthusiast</p>
    </section>
  )
}

export default Home 