import Link from 'next/link'
import styles from "../about/about.module.css";

const Aboutpage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>This is About Page</h1>

      <ul>
      <li><Link href="/">Go to Home</Link></li>
      <li><Link href="/contact-us">Go to Contact Us</Link></li>
      <li><Link href="/services">Go to Services</Link></li>
    </ul>

      </div>
  )
}

export default Aboutpage