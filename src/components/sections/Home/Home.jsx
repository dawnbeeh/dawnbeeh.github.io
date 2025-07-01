import styles from "./Home.module.css"
import profile from "../../../assets/images/myprofile.jpg"

const Home = () => {
  return (
    <section
      id="home"
      className={styles.home}
      data-aos="fade-up"
      style={{ backgroundImage: `url(${profile})` }}
    >
      <h2>Hello, I'm Dawnbee ☀️🐝</h2>
      <p>CS & Math Student</p>
    </section>
  )
}

export default Home 