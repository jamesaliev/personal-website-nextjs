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
  const currentScroll = useRef(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable native scrolling
    document.body.style.overflow = "hidden";

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault(); // Prevent default scrolling behavior

      // Adjust scroll speed (reduce sensitivity)
      const scrollFactor = 0.15; // Reduce fast scrolling
      scrollVelocity.current += event.deltaY * scrollFactor;
    };

    const smoothScroll = () => {
      if (contentRef.current) {
        currentScroll.current += scrollVelocity.current;
        scrollVelocity.current *= 0.9; // Apply damping effect

        // Clamp the scroll position to prevent excessive movement
        currentScroll.current = Math.max(-1000, Math.min(1000, currentScroll.current));

        // Apply transformation instead of native scroll
        contentRef.current.style.transform = `translateY(${-currentScroll.current}px)`;
      }

      requestAnimationFrame(smoothScroll);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    smoothScroll(); // Start the smooth scroll animation

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

      {/* Main Content with Manual Scrolling */}
      <main ref={contentRef} className={styles.main}>
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