"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import styles from "./page.module.css";
import jamesAlievLogo from "../assets/images/james_aliev_logo.svg";

const useClampedScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollVelocity = useRef(0);
  const isTrackpad = useRef(false);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (scrollContainerRef.current) {
        // Detect Trackpad vs Mouse
        if (Math.abs(event.deltaY) < 50) {
          isTrackpad.current = true; // Trackpads have small deltaY values
        } else {
          isTrackpad.current = false;
        }

        let clampedDeltaY;
        if (isTrackpad.current) {
          clampedDeltaY = event.deltaY * 0.3; // Reduce trackpad scroll speed
        } else {
          clampedDeltaY = Math.max(-50, Math.min(50, event.deltaY)); // Clamp mouse wheel speed
        }

        scrollVelocity.current += clampedDeltaY;
      }
    };

    const smoothScroll = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          top: scrollVelocity.current,
          behavior: "smooth",
        });

        scrollVelocity.current *= 0.8; // Apply friction to slow it down
        if (Math.abs(scrollVelocity.current) > 0.5) {
          requestAnimationFrame(smoothScroll);
        } else {
          scrollVelocity.current = 0;
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      requestAnimationFrame(smoothScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return scrollContainerRef;
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useClampedScroll();

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