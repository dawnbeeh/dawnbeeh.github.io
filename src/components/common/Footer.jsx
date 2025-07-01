import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small>© {new Date().getFullYear()} All rights reserved.</small>
    </footer>
  )
}

export default Footer 