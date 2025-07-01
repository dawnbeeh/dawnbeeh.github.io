import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small>© {new Date().getFullYear()} Dawnbee. Thanks for visiting!</small>
      <div className={styles.links}>
        <a
          href="https://github.com/dawnbeeh"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/dawnbee-hwang-aaa861302/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:dawnbeeh23@gmail.com">Email</a>
      </div>
    </footer>
  )
}

export default Footer 