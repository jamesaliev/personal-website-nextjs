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
            hi, i&apos;m james aliev, a computer engineering student pursuing a minor in <span className={styles.orangeText}>artifical intelligence</span>, and a certificate in <span className={styles.orangeText}>cybersecurity</span>.
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
          <h1 className={styles.heading}>current internship</h1>
          <div className={styles.cardContent}>
            <Image
              src={require("../../assets/images/Qualcomm-Logo.svg")}
              alt="Qualcomm Logo"
              width={180}
              height={60}
              className={styles.company_image}
            />
            {/* <h2 className={styles.cardTitle}>Qualcomm</h2> */}
            <h3 className={styles.cardTitle}>Physical Design Engineer</h3>
            <p className={styles.cardDate}>01/26 – 09/26</p>
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
            <Image
              src={require("../../assets/images/AlphawaveSEMI-Logo.png")}
              alt="Alphawave Semi Logo"
              width={644/2.5}
              height={92/2.5}
              className={styles.company_image}
            />
            {/* <h2 className={styles.cardTitle}>Alphawave Semi</h2> */}
            <h3 className={styles.cardTitle}>Physical Design Engineer</h3>
            <p className={styles.cardDate}>05/25 – 12/25</p>
            <div className={styles.cardSkills}>
              Python, Fusion Compiler, PrimeTime, LangChain, Streamlit, TCL, Bash, Perl
            </div>
            <p className={styles.cardDescription}>
            Automated and modernized a Fusion Compiler physical design flow, introducing user-safe interfaces and guardrails to standardize runs and prevent misuse.
            </p>
            <p className={styles.cardDescription}>
            Built tooling to collect, analyze, and visualize QoR metrics (timing, power, utilization, DRCs), including detection of unstable paths and enforcement of run hygiene and monitoring.
            </p>
            <p className={styles.cardDescription}>
            Developed internal applications leveraging LangChain-based RAG agents and an SVN-backed collateral system to enable interactive flow execution, statistics querying, and structured cross-team collaboration.
            </p>
          </div>
          <br></br><br></br>
          <div className={styles.cardContent}>
            <Image
              src={require("../../assets/images/BMO-Logo.svg")}
              alt="BMO Logo"
              width={120}
              height={50}
              className={styles.company_image}
            />
            {/* <h2 className={styles.cardTitle}>Bank of Montreal</h2> */}
            <h3 className={styles.cardTitle}>Junior Software Developer</h3>
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
            <Image
              src={require("../../assets/images/ExpertGeophysics-Logo.png")}
              alt="Qualcomm Logo"
              width={848/5}
              height={256/5}
              className={styles.company_image}
            />
            {/* <h2 className={styles.cardTitle}>Expert Geophysics</h2> */}
            <h3 className={styles.cardTitle}>Engineering Intern</h3>
            <p className={styles.cardDate}>05/23 – 09/23</p>
            <div className={styles.cardSkills}>
              C, 3D Printing, FreeCAD, Fusion360, Soldering
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
            <p className={styles.cardDate}>10/21 – 10/27 (Re-certified in September 2024)</p>
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
          </div>
        </section>
        <section className={styles.section}>
          <h1 className={styles.heading}>technologies</h1>
            <div className={styles.technologiesContainer}>

              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" height={60} width={60} alt="AWS"/>

              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" height={60} width={60} alt="Angular"/>

              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularmaterial/angularmaterial-original.svg" height={60} width={60} alt="Angular Material"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" height={60} width={60} alt="Apache Kafka"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" height={60} width={60} alt="Bash"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" height={60} width={60} alt="C"/>

              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/centos/centos-original.svg" height={60} width={60} alt="CentOS"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/clion/clion-original.svg" height={60} width={60} alt="CLion"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cmake/cmake-original.svg" height={60} width={60} alt="CMake"/>

              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg" height={60} width={60} alt="Confluence"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" height={60} width={60} alt="C++"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" height={60} width={60} alt="CSS3"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" height={60} width={60} alt="Docker"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/drupal/drupal-original.svg" height={60} width={60} alt="Drupal"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" height={60} width={60} alt="Eclipse"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" height={60} width={60} alt="Figma"/>

              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firefox/firefox-original.svg" height={60} width={60} alt="Figma"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gcc/gcc-original.svg" height={60} width={60} alt="GCC"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" height={60} width={60} alt="Git"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" height={60} width={60} alt="GitHub"/>

              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" height={60} width={60} alt="GitLab"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" height={60} width={60} alt="Google Cloud"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" height={60} width={60} alt="HTML5"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" height={60} width={60} alt="IntelliJ"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" height={60} width={60} alt="Java"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" height={60} width={60} alt="JavaScript"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" height={60} width={60} alt="Jira"/>

              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" height={60} width={60} alt="JSON"/>
              
              
              <svg viewBox="0 0 128 128" width={60} height={60} xmlns="http://www.w3.org/2000/svg"> 
                <path fill="#FFFFFF" d="M29.2 63H28c-.5 5.1-1.2 11.3-10 11.3h-4c-2.3 0-2.4-.3-2.4-2V45.8c0-1.7 0-2.4 4.7-2.4h1.6v-1.5c-1.9.1-6.3.1-8.4.1-1.9 0-5.8 0-7.5-.1v1.5h1.1c3.8 0 3.9.5 3.9 2.3v26.1c0 1.8-.1 2.3-3.9 2.3H2v1.5h25.8L29.2 63z"></path><path fill="#FFFFFF" d="M28.3 41.8c-.2-.6-.3-.8-.9-.8s-.8.2-1 .8l-8 20.3c-.3.8-.9 2.4-4 2.4v1.2h7.7v-1.2c-1.5 0-2.5-.7-2.5-1.7 0-.2 0-.3.1-.7l1.7-4.3h9.9l2 5.1c.1.2.2.4.2.6 0 1-1.9 1-2.8 1v1.2h9.8v-1.2h-.7c-2.3 0-2.6-.3-2.9-1.3l-8.6-21.4zm-1.9 3.6l4.4 11.3h-8.9l4.5-11.3z"></path><path fill="#FFFFFF" d="M68.2 42.2H37.9L37 53.3h1.2c.7-8 1.4-9.7 9-9.7.9 0 2.2 0 2.7.1 1 .2 1 .7 1 1.9v26.1c0 1.7 0 2.4-5.2 2.4h-2v1.5c2-.1 7.1-.1 9.4-.1s7.4 0 9.5.1v-1.5h-2c-5.2 0-5.2-.7-5.2-2.4v-26c0-1 0-1.7.9-1.9.5-.1 1.9-.1 2.8-.1 7.5 0 8.2 1.6 8.9 9.7h1.2l-1-11.2z"></path><path fill="#FFFFFF" d="M94.9 74.2h-1.2c-1.2 7.6-2.4 11.3-10.9 11.3h-6.6c-2.3 0-2.4-.3-2.4-2V70.2h4.4c4.8 0 5.4 1.6 5.4 5.8h1.2V62.9h-1.2c0 4.2-.5 5.8-5.4 5.8h-4.4v-12c0-1.6.1-2 2.4-2h6.4c7.6 0 8.9 2.7 9.7 9.7h1.2l-1.4-11.2H64.2v1.5h1.1c3.8 0 3.9.5 3.9 2.3v26c0 1.8-.1 2.3-3.9 2.3h-1.1V87h28.6l2.1-12.8z"></path><path fill="#FFFFFF" d="M109.9 56.6l6.8-10c1-1.6 2.7-3.2 7.2-3.2v-1.5H112v1.5c2 0 3.1 1.1 3.1 2.3 0 .5-.1.6-.4 1.1l-5.7 8.4-6.4-9.6c-.1-.1-.3-.5-.3-.7 0-.6 1.1-1.4 3.2-1.5v-1.5c-1.7.1-5.3.1-7.2.1-1.5 0-4.6 0-6.5-.1v1.5h.9c2.7 0 3.7.3 4.6 1.7l9.1 13.8-8.1 12c-.7 1-2.2 3.3-7.2 3.3v1.5H103v-1.5c-2.3 0-3.1-1.4-3.1-2.3 0-.4.1-.6.5-1.2l7-10.4 7.9 11.9c.1.2.2.4.2.5 0 .6-1.1 1.4-3.2 1.5v1.5c1.7-.1 5.4-.1 7.2-.1 2.1 0 4.4 0 6.5.1v-1.5h-.9c-2.6 0-3.6-.2-4.7-1.8l-10.5-15.8z"></path>
              </svg>
              
              <svg role="img" viewBox="0 0 24 24" width={60} height={60} xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFFFFF" d="M6.0988 5.9175C2.7359 5.9175 0 8.6462 0 12s2.736 6.0825 6.0988 6.0825h11.8024C21.2641 18.0825 24 15.3538 24 12s-2.736-6.0825-6.0988-6.0825ZM5.9774 7.851c.493.0124 1.02.2496 1.273.6228.3673.4592.4778 1.0668.8944 1.4932.5604.6118 1.199 1.1505 1.7161 1.802.4892.5954.8386 1.2937 1.1436 1.9975.1244.2335.1257.5202.31.7197.0908.1204.5346.4483.4383.5645.0555.1204.4702.286.3263.4027-.1944.04-.4129.0476-.5616-.1074-.0549.126-.183.0596-.2819.0432a4 4 0 0 0-.025.0736c-.3288.0219-.5754-.3126-.732-.565-.3111-.168-.6642-.2702-.982-.446-.0182.2895.0452.6485-.231.8353-.014.5565.8436.0656.9222.4804-.061.0067-.1286-.0095-.1774.0373-.2239.2172-.4805-.1645-.7385-.007-.3464.174-.3808.3161-.8096.352-.0237-.0359-.0143-.0592.0059-.0811.1207-.1399.1295-.3046.3356-.3643-.2122-.0334-.3899.0833-.5686.1757-.2323.095-.2304-.2141-.5878.0164-.0396-.0322-.0208-.0615.0018-.0864.0908-.1107.2102-.127.345-.1208-.663-.3686-.9751.4507-1.2813.0432-.092.0243-.1265.1068-.1845.1652-.05-.0548-.0123-.1212-.0099-.1857-.0598-.028-.1356-.041-.1179-.1366-.1171-.0395-.1988.0295-.286.0952-.0787-.0608.0532-.1492.0776-.2125.0702-.1216.23-.025.3111-.1126.2306-.1308.552.0814.8155.0455.203.0255.4544-.1825.3526-.39-.2171-.2767-.179-.6386-.1839-.9695-.0268-.1929-.491-.4382-.6252-.6462-.1659-.1873-.295-.4047-.4243-.6182-.4666-.9008-.3198-2.0584-.9077-2.8947-.266.1466-.6125.0774-.8418-.119-.1238.1125-.1292.2598-.139.4161-.297-.2962-.2593-.8559-.022-1.1855.0969-.1302.2127-.2373.342-.3316.0292-.0213.0391-.0419.0385-.0747.1174-.5267.5764-.7391 1.0694-.7267m12.4071.46c.5575 0 1.0806.2159 1.474.6082s.61.9145.61 1.4704c0 .556-.2167 1.078-.61 1.4698v.0006l-.902.8995a2.08 2.08 0 0 1-.8597.5166l-.0164.0047-.0058.0164a2.05 2.05 0 0 1-.474.7308l-.9018.8995c-.3934.3924-.917.6083-1.4745.6083s-1.0806-.216-1.474-.6083c-.813-.8107-.813-2.1294 0-2.9402l.9019-.8995a2.056 2.056 0 0 1 .858-.5143l.017-.0053.0058-.0158a2.07 2.07 0 0 1 .4752-.7337l.9018-.8995c.3934-.3924.9171-.6083 1.4745-.6083zm0 .8965a1.18 1.18 0 0 0-.8388.3462l-.9018.8995a1.181 1.181 0 0 0-.3427.9252l.0053.0572c.0323.2652.149.5044.3374.6917.13.1296.2733.2114.4471.2686a.9.9 0 0 1 .014.1582.884.884 0 0 1-.2609.6304l-.0554.0554c-.3013-.1028-.5525-.253-.7794-.4792a2.06 2.06 0 0 1-.5761-1.0968l-.0099-.0578-.0461.0368a1.1 1.1 0 0 0-.0876.0794l-.9024.8995c-.4623.461-.4623 1.212 0 1.673.2311.2305.535.346.8394.3461.3043 0 .6077-.1156.8388-.3462l.9019-.8995c.4623-.461.4623-1.2113 0-1.673a1.17 1.17 0 0 0-.4367-.2749 1 1 0 0 1-.014-.1611c0-.2591.1023-.505.2901-.6923.3019.1028.57.2694.7962.495.3007.2999.4994.679.5756 1.0968l.0105.0578.0455-.0373a1.1 1.1 0 0 0 .0887-.0794l.902-.8996c.4622-.461.4628-1.2124 0-1.6735a1.18 1.18 0 0 0-.8395-.3462Zm-9.973 5.1567-.0006.0006c-.0793.3078-.1048.8318-.506.847-.033.1776.1228.2445.2655.1874.141-.0645.2081.0508.2557.1657.2177.0317.5394-.0725.5516-.3298-.325-.1867-.4253-.5418-.5662-.8709"/>
              </svg>

              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" height={60} width={60} alt="Linux"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" height={60} width={60} alt="MATLAB"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" height={60} width={60} alt="Matplotlib"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" height={60} width={60} alt="Next.js"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" height={60} width={60} alt="Nginx"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" height={60} width={60} alt="Node.js"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" height={60} width={60} alt="npm"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opengl/opengl-original.svg" height={60} width={60} alt="OpenGL"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" height={60} width={60} alt="Pandas"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/perl/perl-original.svg" height={60} width={60} alt="Perl"/>
          
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" height={60} width={60} alt="PHP"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg" height={60} width={60} alt="Plotly"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/putty/putty-original.svg" height={60} width={60} alt="PuTTY"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg" height={60} width={60} alt="PyCharm"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" height={60} width={60} alt="Python"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" height={60} width={60} alt="PyTorch"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" height={60} width={60} alt="Sass"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" height={60} width={60} alt="Selenium"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-plain.svg" height={60} width={60} alt="Solidity"/>
                  
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ssh/ssh-original.svg" height={60} width={60} alt="SSH"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" height={60} width={60} alt="Streamlit"/>

              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/subversion/subversion-original.svg" height={60} width={60} alt="Subversion (SVN)"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg" height={60} width={60} alt="Symfony"/>
              
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFFFFF" d="M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.123-.035L6.38 1.715a.268.268 0 0 0-.144-.04L.456.01A.268.268 0 0 0 .38 0zm.374.654L5.71 2.08 1.99 5.664zM6.61 2.34l4.864 1.4-3.65 3.515zm-.522.12l1.217 4.926-4.877-1.4zm6.28 1.538l4.878 1.404-3.662 3.53zm-.52.13l1.208 4.9-4.853-1.392zm6.3 1.534l4.947 1.424-3.715 3.574zm-.524.12l1.215 4.926-4.876-1.398zm-15.432.696l4.964 1.424-3.726 3.586zM8.047 8.15l4.877 1.4-3.66 3.527zm-.518.137l1.236 5.017-4.963-1.432zm6.274 1.535l4.965 1.425-3.73 3.586zm-.52.127l1.235 5.012-4.958-1.43zm-9.63 2.438l4.873 1.406-3.656 3.523zm5.854 1.687l4.863 1.403-3.648 3.51zm-.54.04l1.214 4.927-4.875-1.4zm-3.896 4.02l5.037 1.442-3.782 3.638z"/>
              </svg>

              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height={60} width={60} alt="TypeScript"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" height={60} width={60} alt="VSCode"/>
              
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg" height={60} width={60} alt="XML"/>
              
              <svg viewBox="0 0 128 128">
                <polygon fill="#FFFFFF" transform="matrix(.24805 0 0 .24805 .5 5.6287)" points="87.702 137.67 0 0 63.25 0 119.02 88.646 175.24 0 235.79 0 143.98 137.67 143.98 224.95 87.702 224.95"></polygon>
                <path d="m82.428 49.149h-25.266l-5.1388 12.408h-11.188l23.659-55.798h11.444l22.699 55.798h-11.956l-4.2525-12.408zm-4.197-11.14-7.7455-20.476-8.6412 20.476z" fill="#cb171e"></path>
                <polygon fill="#FFFFFF" transform="matrix(.24805 0 0 .24805 .5 5.6287)" points="87.701 250.18 87.701 470.65 135 470.65 135 318.57 184.51 420.79 221.74 420.79 272.94 314.98 272.94 470.6 318.32 470.6 318.32 250.18 256.36 250.18 201.38 349.88 149.02 250.18"></polygon>
                <polygon fill="#FFFFFF" transform="matrix(.24805 0 0 .24805 .5 5.6287)" points="512 422.74 512 422.74 395.64 422.74 395.64 250.12 347.44 250.12 347.44 469.65 512 469.65"></polygon>
              </svg>
          
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
