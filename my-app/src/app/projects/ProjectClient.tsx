"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./projects.module.css";
import jamesAlievLogo from "../../assets/images/james_aliev_logo.svg";
import Spline from "@splinetool/react-spline";
import { useRef, useEffect, useState } from "react";

type Project = {
  title: string;
  tech: string;
  date: string;
  details: string[];
  imageIndex: number;
};

const projectImages = [
  ["/raycaster1.png", "/raycaster2.png", "/raycaster3.png"],
  ["/doomengine1.png", "/doomengine2.png", "/doomengine3.png", "/doomengine4.png", "/doomengine5.png"],
  ["/echobeat1.png", "/echobeat2.png", "/echobeat3.png"],
  ["/spaceinvaders1.png", "/spaceinvaders2.png", "/spaceinvaders3.png"],
  ["/pcb1.png", "/pcb2.png", "/pcb3.png"],
  ["/aa1.png", "/aa2.png", "/aa3.png", "/aa4.png", "/aa5.png"],
];

const projects: Project[] = [
  {
    title: "raycaster engine",
    tech: "c, openGL, raycasting",
    date: "12/24 - 01/25",
    details: [
      "Implemented a 3D raycasting engine inspired by classic games like Wolfenstein 3D.",
      "Utilized SDL2 for rendering and input handling, creating an immersive retro visual experience.",
      "Optimized the raycasting algorithm for efficient performance and accurate environment mapping.",
    ],
    imageIndex: 0,
  },
  {
    title: "doom engine w/ interaction",
    tech: "c, openGL",
    date: "12/24 - 01/25",
    details: [
      "Developed a custom Doom Engine clone with advanced physics and rendering capabilities.",
      "Implemented interactive environments using OpenGL for real-time graphics and simulations.",
      "Optimized engine performance for seamless gameplay across multiple devices.",
    ],
    imageIndex: 1,
  },
  {
    title: "echobeat",
    tech: "angular, typescript, node.js, nginx, pm2, google compute engine",
    date: "08/24 - present",
    details: [
      "Visualize and analyze your listening habits with detailed Spotify insights.",
      "Create personalized playlists based on your top artists, genres, and tracks.",
      "Access real-time music statistics and trends for a unique listening experience.",
    ],
    imageIndex: 2,
  },
  {
    title: "space invaders",
    tech: "c, nios2 assembly, de1-soc fpga, vga, ps/2, quartus",
    date: "03/24 - 04/24",
    details: [
      "Built a hardware-accelerated Space Invaders game with responsive controls.",
      "Utilized FPGA programming to handle game logic and VGA rendering.",
      "Optimized gameplay mechanics for low-latency and seamless performance.",
    ],
    imageIndex: 3,
  },
  {
    title: "macro keyboard pcb",
    tech: "kicad, ATMEGA8U2-MU, osh park, soldering",
    date: "11/23 - 12/23",
    details: [
      "Designed a custom PCB featuring a microcontroller, passive components, and switches.",
      "Implemented precise routing of signal traces and power lines for optimized circuit performance.",
      "Integrated a purple solder mask and 3D modeling for a professional-grade finish.",
    ],
    imageIndex: 4,
  },
  {
    title: "alien attack",
    tech: "python, pygame",
    date: "05/21 - 06/21",
    details: [
      "Implemented dynamic gameplay mechanics with increasing difficulty.",
      "Developed a customizable weapon and power-up system.",
      "Designed and integrated pixel-art visuals and an arcade-style soundtrack.",
    ],
    imageIndex: 5,
  },
];

export default function Projects() {
  const [currentImageIndices, setCurrentImageIndices] = useState<number[]>(
    Array(projectImages.length).fill(0)
  );

  const [isLoading, setIsLoading] = useState(true);
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
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      setIsLoading(false);
      return;
    }

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

    if (splineBackground) {
      observer.observe(splineBackground);
    }

    return () => {
      if (splineBackground) {
        observer.unobserve(splineBackground);
      }
    };
  }, []);

  const handleSplineLoad = () => {
    setIsLoading(false);
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
              <Link href="/about" className={styles.navLink}>
                about
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/projects" className={styles.navLink}>
                projects
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Desktop Projects View */}
      <main className={styles.main}>
        <div className={styles.splineBackground}>
          <Spline
            scene="https://prod.spline.design/voL5k8OLXM-hqvyf/scene.splinecode"
            onLoad={handleSplineLoad}
          />
        </div>

        {projects.map((project, index) => (
          <section
            className={styles.additionalContent}
            ref={index === 0 ? projectSectionRef : undefined}
            key={project.title}
          >
            <h1 className={styles.heading}>{project.title}</h1>
            <h2 className={styles.cardTitle}>{project.tech}</h2>
            <p className={styles.cardDate}>{project.date}</p>

            <div className={styles.projectContainer}>
              <div className={styles.projectDetails}>
                {project.details.map((detail) => (
                  <p className={styles.text} key={detail}>
                    {detail}
                  </p>
                ))}
              </div>

              <div className={styles.projectImageContainer}>
                <Image
                  src={
                    projectImages[project.imageIndex][currentImageIndices[index]] ||
                    "/fallback.jpg"
                  }
                  alt={`${project.title} project screenshot`}
                  width={600}
                  height={400}
                  className={styles.projectImage}
                  onClick={() => handleImageClick(index)}
                  unoptimized
                />
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Mobile Projects View */}
      <main className={styles.mobileMain}>
        <section className={styles.mobileHero}>
          <h1 className={styles.mobileHeading}>projects</h1>
          <p className={styles.mobileIntro}>
            a collection of software, hardware, graphics, and embedded projects
            built across school, internships, and personal work.
          </p>
        </section>

        <section className={styles.mobileProjectsList}>
          {projects.map((project, index) => (
            <article className={styles.mobileProjectCard} key={project.title}>
              <div className={styles.mobileProjectNumber}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <h2 className={styles.mobileProjectTitle}>{project.title}</h2>

              <p className={styles.mobileProjectTech}>{project.tech}</p>
              <p className={styles.mobileProjectDate}>{project.date}</p>

              <div className={styles.mobileProjectImageBox}>
                <Image
                  src={
                    projectImages[project.imageIndex][currentImageIndices[index]] ||
                    "/fallback.jpg"
                  }
                  alt={`${project.title} project screenshot`}
                  width={600}
                  height={400}
                  className={styles.mobileProjectImage}
                  onClick={() => handleImageClick(index)}
                  unoptimized
                />
              </div>

              <div className={styles.mobileProjectDetails}>
                {project.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>

              <button
                type="button"
                className={styles.mobileImageButton}
                onClick={() => handleImageClick(index)}
              >
                next image
              </button>
            </article>
          ))}
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <a
              href="https://github.com/jamesaliev"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/jamesaliev"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <Link href="/contact">contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}