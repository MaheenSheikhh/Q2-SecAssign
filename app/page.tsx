import Link from "next/link";
export default function Home() {
  return (
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact-us">Contact Us</Link></li>
      <li><Link href="/services">Services</Link></li>
    </ul>
  );
}
 