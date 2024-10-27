import Link from 'next/link';
import  styles  from "../contact-us/contact.module.css";

const Contactus = () => {
  return (
    <div className={styles.container}>
      <h1 className = {styles.header}>
        This is Contact Page
      </h1>
      <ul>
      <li><Link href="/">Go to Home</Link></li>
      <li><Link href="/about">Go to About</Link></li>
      <li><Link href="/services">Go to Services</Link></li>
    </ul>
    </div>
  )
}

export default Contactus