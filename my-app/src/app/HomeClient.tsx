"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Spline from "@splinetool/react-spline";
import jamesAlievLogo from "../assets/images/james_aliev_logo.svg";
import Link from "next/link";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.page}>
      {isLoading && (
        <div className={styles.loadingScreen}>
          <div className={styles.loader}></div>
        </div>
      )}

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

      {/* Main content with Spline */}
      <main className={styles.main}>
        <Spline
          scene="https://prod.spline.design/il7DkrIACC-hw4e3/scene.splinecode"
        />
      </main>
    </div>
  );
}
