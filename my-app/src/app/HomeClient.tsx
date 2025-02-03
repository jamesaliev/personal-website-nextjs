"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import styles from "./page.module.css";
import jamesAlievLogo from "../assets/images/james_aliev_logo.svg";

const useClampedScroll = (minDelta = -40, maxDelta = 40) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (scrollContainerRef.current) {
        let clampedDeltaY = Math.max(minDelta, Math.min(maxDelta, event.deltaY));
        scrollContainerRef.current.scrollBy({
          top: clampedDeltaY,
          behavior: "smooth",
        });
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [minDelta, maxDelta]);

  return scrollContainerRef;
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useClampedScroll(-40, 40);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
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
      <main ref={scrollRef} className={styles.main}>
        <Spline scene="https://prod.spline.design/il7DkrIACC-hw4e3/scene.splinecode" />
      </main>
    </div>
  );
}