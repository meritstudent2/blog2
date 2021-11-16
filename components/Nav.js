import Link from "next/link"
import styles from "../styles/components/Nav.module.css"

export default function Nav() {
  function dropdown() {
    document.getElementById("blogDropdown").classList.toggle(styles.show)
  }

  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>

      <div className={styles.dropdown}>
        <button className={styles.dropBtn} onClick={dropdown}>
          Blog
        </button>
        <div id="blogDropdown" className={styles.dropContent}>
          <Link href="/blog/post1">Post 1</Link>
          <Link href="/blog/post2">Post 2</Link>
        </div>
      </div>
    </nav>
  )
}