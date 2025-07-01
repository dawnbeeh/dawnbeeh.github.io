import styles from "./Home.module.css"
import profile from "../../../assets/images/profile.jpg"

const Home = () => {
  return (
    <section id="home" className={styles.home} data-aos="fade-up">
      <img src={profile} alt="Profile" className={styles.avatar} />
      <h2>Hello, I'm Dawnbee ☀️🐝</h2>
      <p>CS & Math Student  • Aspiring Software Developer</p>
    </section>
  )
}

export default Home 