import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small>© {new Date().getFullYear()} Dawnbee. Thanks for visiting!</small>
    </footer>
  )
}

export default Footer 