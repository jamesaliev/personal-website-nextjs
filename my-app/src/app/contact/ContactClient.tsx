"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./contact.module.css";
import jamesAlievLogo from "../../assets/images/james_aliev_logo.svg";
import Spline from "@splinetool/react-spline";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.page}>
      {isLoading && (
        <div className={styles.loadingScreen}>
          <div className={styles.loader}></div>
        </div>
      )}

      <div className={styles.scrollIndicatorContainer}>
        <div className={styles.verticalLine}></div>
      </div>
      {/* Minimalist Header */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logoContainer}>
            <Link href="/" legacyBehavior>
              <Image
                src={jamesAlievLogo} // Correct relative path to the logo
                alt="James Aliev Logo"
                width={40} // Adjust size as needed
                height={40}
                priority
                className={styles.logo}
              />
            </Link>
          </div>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="about" className={styles.navLink}>
                about
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="projects" className={styles.navLink}>
                projects
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="contact" className={styles.navLink}>
                contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* Main About Section */}
      <main className={styles.main}>
        <div className={styles.splineBackground}>
          <Spline
            scene="https://prod.spline.design/X3JtYEmVRcPHRLXg/scene.splinecode"
          />
        </div>

        {/* Foreground Content (Email Form) */}
        <div className={styles.formContainer}>
          <h2 className={styles.formHeader}>let&apos;s talk</h2>
          <form className={styles.form}>
            <input type="email" id="email" name="email" placeholder="email" required />
            <textarea id="message" name="message" rows={4} placeholder="message" required></textarea>
            <button type="submit">send</button>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <a href="https://github.com/jamesaliev" target="_blank" rel="noopener noreferrer">
              github
            </a>
            <a href="https://www.linkedin.com/in/jamesaliev" target="_blank" rel="noopener noreferrer">
              linkedin
            </a>
            <a href="contact">contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
