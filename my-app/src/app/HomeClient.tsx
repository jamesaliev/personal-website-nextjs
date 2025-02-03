"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import styles from "./page.module.css";
import jamesAlievLogo from "../assets/images/james_aliev_logo.svg";

export default function Home() {
  const [isLoading] = useState(true);
  const splineContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (!splineContainerRef.current) return;

      // Detect if the event is inside Spline container
      const isInsideSpline =
        splineContainerRef.current.contains(event.target as Node);

      if (isInsideSpline) {
        event.preventDefault(); // Block default spline scroll

        const adjustedDeltaY = event.deltaY * 0.2; // Slow down trackpad scroll

        splineContainerRef.current.scrollBy({
          top: adjustedDeltaY,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className={styles.page}>
      {isLoading && (
        <div className={styles.loadingScreen}>
          <div className={styles.loader}></div>
        </div>
      )}

      {/* Header */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logoContainer}>
            <Link href="/" legacyBehavior>
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
              <a href="about" className={styles.navLink}>about</a>
            </li>
            <li className={styles.navItem}>
              <a href="projects" className={styles.navLink}>projects</a>
            </li>
            <li className={styles.navItem}>
              <a href="contact" className={styles.navLink}>contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content with Clamped Scroll */}
      <main className={styles.main}>
        <div ref={splineContainerRef} className={styles.splineContainer}>
          <Spline scene="https://prod.spline.design/il7DkrIACC-hw4e3/scene.splinecode" />
        </div>
      </main>
    </div>
  );
}