"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import styles from "./page.module.css";
import jamesAlievLogo from "../assets/images/james_aliev_logo.svg";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const scrollVelocity = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Prevent default scrolling
    document.body.style.overflow = "hidden";

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault(); // Block default page scroll

      // Adjust scroll speed (reduce sensitivity)
      const scrollSpeed = 0.2;
      scrollVelocity.current += event.deltaY * scrollSpeed;
    };

    const smoothScroll = () => {
      lastScrollY.current += scrollVelocity.current;
      scrollVelocity.current *= 0.9; // Apply damping

      window.scrollTo({
        top: lastScrollY.current,
        behavior: "smooth",
      });

      requestAnimationFrame(smoothScroll);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    smoothScroll(); // Start smooth scrolling loop

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = ""; // Re-enable scrolling when unmounting
    };
  }, []);

  const handleSplineLoad = () => {
    setIsLoading(false); // Hide loading screen when Spline is loaded
  };

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
        <div className={styles.splineContainer}>
          <Spline 
            scene="https://prod.spline.design/il7DkrIACC-hw4e3/scene.splinecode"
            onLoad={handleSplineLoad} 
          />
        </div>
      </main>
    </div>
  );
}