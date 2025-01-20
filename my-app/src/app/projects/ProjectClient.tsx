"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import jamesAlievLogo from "../../assets/images/james_aliev_logo.svg";
import Spline from "@splinetool/react-spline";
import { useRef, useEffect, useState } from "react";

export default function Projects() {
  // Images for multiple projects
  const projectImages = [
    ["./echobeat1.png", "./echobeat2.png", "./echobeat3.png"], // Images for Echobeat
    ["./spaceinvaders1.png", "./spaceinvaders2.png", "./spaceinvaders3.png"], // Images for Space Invaders
    ["./pcb1.png", "./pcb2.png", "./pcb3.png"], // Images for PCB Project
    ["./aa1.png", "./aa2.png", "./aa3.png", "./aa4.png", "./aa5.png"], // Images for Alien Attack
  ];

  const [currentImageIndices, setCurrentImageIndices] = useState<number[]>(
    Array(projectImages.length).fill(0) // Initialize all projects' indices to 0
  );

  const [isLoading, setIsLoading] = useState(true); // State to manage loading
  const projectSectionRef = useRef<HTMLElement>(null);

  const handleImageClick = (projectIndex: number) => {
    setCurrentImageIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[projectIndex] =
        (newIndices[projectIndex] + 1) % projectImages[projectIndex].length;
      return newIndices;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) {
          projectSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      },
      { threshold: 0.5 }
    );

    const splineBackground = document.querySelector(`.${styles.splineBackground}`);
    if (splineBackground) observer.observe(splineBackground);

    return () => {
      if (splineBackground) observer.unobserve(splineBackground);
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

      <div className={styles.scrollIndicatorContainer}>
        <div className={styles.verticalLine}></div>
      </div>

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

      <main className={styles.main}>
        <div className={styles.splineBackground}>
          <Spline
            scene="https://prod.spline.design/Duxw6N-r9gxyxlVc/scene.splinecode"
            onLoad={handleSplineLoad} // Triggered when the Spline scene is loaded
          />
        </div>

        {/* Project Sections */}
        {[
          {
            title: "echobeat",
            tech: "angular, typescript, node.js, nginx, pm2, google compute engine",
            date: "08/24 - present",
            details: [
              "visualize and analyze your listening habits with detailed spotify insights.",
              "create personalized playlists based on your top artists, genres, and tracks.",
              "access real-time music statistics and trends for a unique listening experience.",
            ],
            imageIndex: 0,
          },
          {
            title: "space invaders",
            tech: "c, nios2 (assembly), de1-soc fpga, vga, ps/2, quartus",
            date: "03/24 - 04/24",
            details: [
              "built a hardware-accelerated space invaders game with responsive controls.",
              "utilized fpga programming to handle game logic and vga rendering.",
              "optimized gameplay mechanics for low-latency and seamless performance.",
            ],
            imageIndex: 1,
          },
          {
            title: "macro keyboard (pcb)",
            tech: "kicad, ATMEGA8U2-MU, osh park, soldering",
            date: "11/23 - 12/23",
            details: [
              "designed a custom pcb featuring a microcontroller, passive components, and switches, ensuring robust connectivity and efficient layout.",
              "implemented precise routing of signal traces and power lines using advanced design techniques for optimized circuit performance.",
              "integrated a sleek aesthetic design with a vibrant purple solder mask and 3d modeling for a professional-grade finish.",
            ],
            imageIndex: 2,
          },
          {
            title: "alien attack",
            tech: "python, pygame",
            date: "05/21 - 06/21",
            details: [
              "implemented dynamic gameplay mechanics with increasing difficulty to challenge players as they face waves of alien invaders.",
              "developed a customizable weapon and power-up system to enhance gameplay and player strategy.",
              "designed and integrated vibrant pixel-art visuals and an arcade-style soundtrack for an engaging retro aesthetic.",
            ],
            imageIndex: 3,
          },
        ].map((project, index) => (
          <section
            className={styles.additionalContent}
            ref={index === 0 ? projectSectionRef : undefined}
            key={index}
          >
            <h1 className={styles.heading}>{project.title}</h1>
            <h2 className={styles.cardTitle}>{project.tech}</h2>
            <p className={styles.cardDate}>{project.date}</p>
            <div className={styles.projectContainer}>
              <div className={styles.projectDetails}>
                {project.details.map((detail, detailIndex) => (
                  <p className={styles.text} key={detailIndex}>
                    {detail}
                  </p>
                ))}
              </div>
              <div className={styles.projectImageContainer}>
                <img
                  src={projectImages[project.imageIndex][currentImageIndices[index]]}
                  alt={`${project.title} project screenshot`}
                  className={styles.projectImage}
                  onClick={() => handleImageClick(index)}
                />
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
