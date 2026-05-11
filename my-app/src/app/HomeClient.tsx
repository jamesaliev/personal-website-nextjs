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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.page}>
      {isLoading && (
        <div className={styles.loadingScreen}>
          <div className={styles.loader}></div>
        </div>
      )}

      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image
                src={jamesAlievLogo}
                alt="James Aliev Logo"
                width={40}
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

      {/* Desktop Main */}
      <main className={styles.desktopMain}>
        <Spline scene="https://prod.spline.design/il7DkrIACC-hw4e3/scene.splinecode" />
      </main>

      {/* Mobile Main */}
      <main className={styles.mobileMain}>
        <section className={styles.mobileHero}>
          <Image
            src={jamesAlievLogo}
            alt="James Aliev Logo"
            width={180}
            height={180}
            priority
            className={styles.mobileLogo}
          />

          <p className={styles.mobileSubtitle}>
            computer engineering @ <span className={styles.uoft_blue}>UofT</span>
          </p>

          <div className={styles.mobileButtons}>
            <a href="about" className={styles.mobileButton}>
              about me
            </a>

            <a href="projects" className={styles.mobileButton}>
              projects
            </a>

            <a href="contact" className={styles.mobileButton}>
              contact
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}