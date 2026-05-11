"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./contact.module.css";
import jamesAlievLogo from "../../assets/images/james_aliev_logo.svg";
import Spline from "@splinetool/react-spline";
import emailjs from "emailjs-com";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0synl6k",
        "template_fp8d1a3",
        e.target as HTMLFormElement,
        "kwiMz6Hd_Sb7eARhB"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message.");
        }
      );
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

      {/* Desktop Contact View */}
      <main className={styles.main}>
        <div className={styles.splineBackground}>
          <Spline scene="https://prod.spline.design/X3JtYEmVRcPHRLXg/scene.splinecode" />
        </div>

        <div className={styles.formContainer}>
          <h2 className={styles.formHeader}>let&apos;s talk</h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required
            />

            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="message"
              required
            ></textarea>

            <button type="submit">send</button>
          </form>
        </div>
      </main>

      {/* Mobile Contact View */}
      <main className={styles.mobileMain}>
        <section className={styles.mobileHero}>
          <h1 className={styles.mobileHeading}>contact</h1>

          <p className={styles.mobileIntro}>
            want to talk about a project, internship, collaboration, or just say
            hi? send me a message below.
          </p>
        </section>

        <section className={styles.mobileContactBox}>
          <div className={styles.mobileContactLabel}>message form</div>

          <form className={styles.mobileForm} onSubmit={handleSubmit}>
            <label htmlFor="mobile-email">email</label>
            <input
              type="email"
              id="mobile-email"
              name="email"
              placeholder="your@email.com"
              required
            />

            <label htmlFor="mobile-message">message</label>
            <textarea
              id="mobile-message"
              name="message"
              rows={6}
              placeholder="write your message..."
              required
            ></textarea>

            <button type="submit">send message</button>
          </form>
        </section>

        <section className={styles.mobileLinksBox}>
          <h2>elsewhere</h2>

          <div className={styles.mobileLinks}>
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
          </div>
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