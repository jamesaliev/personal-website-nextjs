"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import styles from "./page.module.css";
import jamesAlievLogo from "../assets/images/james_aliev_logo.svg";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const splineContainerRef = useRef<HTMLDivElement>(null);
  const scrollVelocity = useRef(0);
  const isTrackpad = useRef(false);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (!splineContainerRef.current) return;

      // Detect if the event is inside Spline container
      const isInsideSpline = splineContainerRef.current.contains(event.target as Node);

      if (isInsideSpline) {
        event.preventDefault(); // Block default spline scroll

        // Detect Trackpad vs Mouse: Trackpads have smaller deltaY but more frequent events
        if (Math.abs(event.deltaY) < 50) {
          isTrackpad.current = true;
        } else {
          isTrackpad.current = false;
        }

        // Apply different clamping based on device type
        const adjustedDeltaY = isTrackpad.current ? event.deltaY * 0.1 : Math.max(-50, Math.min(50, event.deltaY));

        scrollVelocity.current += adjustedDeltaY;

        requestAnimationFrame(() => {
          if (splineContainerRef.current) {
            splineContainerRef.current.scrollBy({
              top: scrollVelocity.current * 0.8, // Apply damping effect
              behavior: "smooth",
            });

            scrollVelocity.current *= 0.9; // Gradually reduce speed to prevent overshooting
          }
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
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
        <div ref={splineContainerRef} className={styles.splineContainer}>
          <Spline 
          scene="https://prod.spline.design/il7DkrIACC-hw4e3/scene.splinecode"
          onLoad={handleSplineLoad} // Triggered when the Spline scene is loaded 
          
          />
        </div>
      </main>
    </div>
  );
}