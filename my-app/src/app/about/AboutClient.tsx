"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";
import jamesAlievLogo from "../../assets/images/james_aliev_logo.svg";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

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

      {/* Minimalist Header */}
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

      {/* Main About Section */}
      <main className={styles.main}>
        
        <section className={styles.section}>
          <h1 className={styles.heading}>about me</h1>
          <p className={styles.text}>
            hi, i'm james aliev, a computer engineering student specializing in building user-friendly, scalable applications.
          </p>
          <p className={styles.text}>
            my focus is on designing intuitive interfaces and innovative solutions that blend technology and creativity.
          </p>
          <p className={styles.text}>
            outside of school & work, i enjoy exploring 3D design, experimenting with emerging tech, and creating personal projects.
          </p>
          <br></br><br></br>
        </section>
        
        <a
          href="./JamesAliev_Resume.pdf"
          download="James_Aliev_Resume.pdf"
          className={styles.button}
        >
          download resume
        </a>
        <section className={styles.section}>
          <h1 className={styles.heading}>upcoming internships</h1>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Alphawave Semi</h2>
            <h3 className={styles.cardRole}>Physical Design Engineer</h3>
            <p className={styles.cardDate}>05/25 – 09/25</p>
            <div className={styles.cardSkills}>
              to be determined...
            </div>
            <p className={styles.cardDescription}>
            will be updated throughout the internship...
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <h1 className={styles.heading}>experience</h1>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Bank of Montreal</h2>
            <h3 className={styles.cardRole}>Junior Software Developer</h3>
            <p className={styles.cardDate}>05/24 – 09/24</p>
            <div className={styles.cardSkills}>
              Angular, TS/JS, Python, AWS, Apache Kafka, Node.js, Symfony, Drupal
            </div>
            <p className={styles.cardDescription}>
            Designed and implemented an online platform allowing users to deploy and manage Kafka topics, access
            controls, and data schemas, removing the need for a CLI, utilizing Angular, Node.js, Symfony, and Drupal.
            </p>
            <p className={styles.cardDescription}>
            Created and optimized Python scripts to proactively monitor Apache Kafka connectors, automating real-time
            alerts and enhancing operational efficiency across the team management.
            </p>
            <p className={styles.cardDescription}>
            Played a pivotal role in migrating BMO’s internal Kafka streams from EC2 to ECS, resulting in around a
20% improvement in system performance and a reduction in operational costs.
            </p>
          </div>
          <br></br><br></br>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Expert Geophysics</h2>
            <h3 className={styles.cardRole}>Engineering Intern</h3>
            <p className={styles.cardDate}>05/23 – 09/23</p>
            <div className={styles.cardSkills}>
              C, 3D Printing, FreeCAD, Fusion360
            </div>
            <p className={styles.cardDescription}>
            Developed and tested software in C for airborne magnetic field monitoring systems, ensuring optimal perfor-
mance through meticulous design and testing procedures in critical operations.
            </p>
            <p className={styles.cardDescription}>
            Conducted tests on components like the console, current generator, and power supply, ensuring seamless
functionality and reliability.
            </p>
            <p className={styles.cardDescription}>
            Analyzed and enhanced the structural integrity of magnetometer mounting components, implementing 3D-
            printed designs that increased the safety factor by 33
            </p>
          </div>
        </section>
        
        <section className={styles.section}>
          <h1 className={styles.heading}>awards and certifications</h1>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>BMO InnoV8 Hackathon</h2>
            <h3 className={styles.cardRole}>1st Place</h3>
            <p className={styles.cardDate}>06/24</p>
            <div className={styles.cardSkills}>
              Angular, Node.js, Figma
            </div>
            <p className={styles.cardDescription}>
            Secured 1st place at the BMO Innov8 Hackathon, with over 300 BMO employees participated, with 30 teams competing.
            </p>
            <p className={styles.cardDescription}>
            Developed an innovative solution for a financial technology challenge, showcasing advanced problem-solving and technical skills.
            </p>
          </div>
          <br></br><br></br>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Amazon Web Services</h2>
            <h3 className={styles.cardRole}>AWS Certified Cloud Practitioner</h3>
            <p className={styles.cardDate}>10/21 – 10/27</p>
            <div className={styles.cardSkills}>
              EC2, S3, Lambda, IAM policies, VPC, RDS, DynamoDB
            </div>
            <p className={styles.cardDescription}>
            Secured AWS Certified Cloud Practitioner certification, demonstrating a comprehensive understanding of AWS Cloud concepts, services, and terminology.
            </p>
            <p className={styles.cardDescription}>
            Developed and managed cloud infrastructure using AWS services such as EC2, S3, and Lambda, ensuring efficient and scalable solutions for various applications.
            </p>
            <p  className={styles.cardDescription}>
            Conducted cost analysis and optimization using AWS Cost Explorer and Trusted Advisor, reducing operational expenses and enhancing resource utilization.
            </p>
            <p className={styles.cardDescription}>
            Re-certified in September 2024.   
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <h1 className={styles.heading}>technologies</h1>
          <div className={styles.technologiesContainer}>

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularmaterial/angularmaterial-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" />
          

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" />
          

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/clion/clion-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cmake/cmake-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/drupal/drupal-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gcc/gcc-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" />
          
          
          <svg viewBox="0 0 128 128">
            <path fill="#FFFFFF" d="M29.2 63H28c-.5 5.1-1.2 11.3-10 11.3h-4c-2.3 0-2.4-.3-2.4-2V45.8c0-1.7 0-2.4 4.7-2.4h1.6v-1.5c-1.9.1-6.3.1-8.4.1-1.9 0-5.8 0-7.5-.1v1.5h1.1c3.8 0 3.9.5 3.9 2.3v26.1c0 1.8-.1 2.3-3.9 2.3H2v1.5h25.8L29.2 63z"></path><path fill="#FFFFFF" d="M28.3 41.8c-.2-.6-.3-.8-.9-.8s-.8.2-1 .8l-8 20.3c-.3.8-.9 2.4-4 2.4v1.2h7.7v-1.2c-1.5 0-2.5-.7-2.5-1.7 0-.2 0-.3.1-.7l1.7-4.3h9.9l2 5.1c.1.2.2.4.2.6 0 1-1.9 1-2.8 1v1.2h9.8v-1.2h-.7c-2.3 0-2.6-.3-2.9-1.3l-8.6-21.4zm-1.9 3.6l4.4 11.3h-8.9l4.5-11.3z"></path><path fill="#FFFFFF" d="M68.2 42.2H37.9L37 53.3h1.2c.7-8 1.4-9.7 9-9.7.9 0 2.2 0 2.7.1 1 .2 1 .7 1 1.9v26.1c0 1.7 0 2.4-5.2 2.4h-2v1.5c2-.1 7.1-.1 9.4-.1s7.4 0 9.5.1v-1.5h-2c-5.2 0-5.2-.7-5.2-2.4v-26c0-1 0-1.7.9-1.9.5-.1 1.9-.1 2.8-.1 7.5 0 8.2 1.6 8.9 9.7h1.2l-1-11.2z"></path><path fill="#FFFFFF" d="M94.9 74.2h-1.2c-1.2 7.6-2.4 11.3-10.9 11.3h-6.6c-2.3 0-2.4-.3-2.4-2V70.2h4.4c4.8 0 5.4 1.6 5.4 5.8h1.2V62.9h-1.2c0 4.2-.5 5.8-5.4 5.8h-4.4v-12c0-1.6.1-2 2.4-2h6.4c7.6 0 8.9 2.7 9.7 9.7h1.2l-1.4-11.2H64.2v1.5h1.1c3.8 0 3.9.5 3.9 2.3v26c0 1.8-.1 2.3-3.9 2.3h-1.1V87h28.6l2.1-12.8z"></path><path fill="#FFFFFF" d="M109.9 56.6l6.8-10c1-1.6 2.7-3.2 7.2-3.2v-1.5H112v1.5c2 0 3.1 1.1 3.1 2.3 0 .5-.1.6-.4 1.1l-5.7 8.4-6.4-9.6c-.1-.1-.3-.5-.3-.7 0-.6 1.1-1.4 3.2-1.5v-1.5c-1.7.1-5.3.1-7.2.1-1.5 0-4.6 0-6.5-.1v1.5h.9c2.7 0 3.7.3 4.6 1.7l9.1 13.8-8.1 12c-.7 1-2.2 3.3-7.2 3.3v1.5H103v-1.5c-2.3 0-3.1-1.4-3.1-2.3 0-.4.1-.6.5-1.2l7-10.4 7.9 11.9c.1.2.2.4.2.5 0 .6-1.1 1.4-3.2 1.5v1.5c1.7-.1 5.4-.1 7.2-.1 2.1 0 4.4 0 6.5.1v-1.5h-.9c-2.6 0-3.6-.2-4.7-1.8l-10.5-15.8z"></path>
            </svg>
          
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opengl/opengl-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/putty/putty-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-plain.svg" />
                    
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ssh/ssh-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg" />
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yaml/yaml-original.svg" />
          
          </div>
        </section>

      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <a href="https://github.com/jamesaliev" target="_blank" rel="noopener noreferrer">
              github
            </a>
            <a href="https://www.linkedin.com/in/jamesaliev" target="_blank" rel="noopener noreferrer">
              linkedin
            </a>
            <a href="contact">contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
