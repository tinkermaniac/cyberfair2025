import { useEffect, useState, useRef } from "react";
import "./Home.css";
import { Link } from "react-router";

import HeroGradient from "../../components/HeroGradient/HeroGradient";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import NavBar from "../../components/NavBar/NavBar";
import Cursor from "../../components/Cursor/Cursor";
import Transition from "../../components/Transition/Transition";

import { projects } from "./projects";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import ReactLenis from "@studio-freight/react-lenis";

import { HiArrowRight } from "react-icons/hi";
import { RiArrowRightDownLine } from "react-icons/ri";

const Home = () => {
  const manifestoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 0);

    return () => clearTimeout(scrollTimeout);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".footer",
      start: "top 80%",
      onEnter: () => {
        document.querySelector(".team").classList.add("light");
        document.querySelector(".footer").classList.add("light");
      },
      onLeaveBack: () => {
        document.querySelector(".team").classList.remove("light");
        document.querySelector(".footer").classList.remove("light");
      },
    });

    if (!isMobile) {
      gsap.set(".project", { opacity: 0.35 });
    }

    if (!isMobile) {
      const projects = document.querySelectorAll(".project");

      projects.forEach((project) => {
        const projectImg = project.querySelector(".project-img img");

        project.addEventListener("mouseenter", () => {
          gsap.to(project, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });

          gsap.to(projectImg, {
            scale: 1.2,
            duration: 0.5,
            ease: "power2.out",
          });
        });

        project.addEventListener("mouseleave", () => {
          gsap.to(project, {
            opacity: 0.35,
            duration: 0.5,
            ease: "power2.out",
          });

          gsap.to(projectImg, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      });
    }

    const manifestoText = new SplitType(".manifesto-title h1", {
      types: ["words", "chars"],
      tagName: "span",
      wordClass: "word",
      charClass: "char",
    });

    const style = document.createElement("style");
    style.textContent = `
       .word {
         display: inline-block;
         margin-right: 0em;
       }
       .char {
         display: inline-block;
       }
     `;
    document.head.appendChild(style);

    gsap.set(manifestoText.chars, {
      opacity: 0.25,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".manifesto",
        start: "top 35%",
        end: "bottom 75%",
        scrub: true,
        markers: false,
      },
    });

    manifestoText.chars.forEach((char, index) => {
      tl.to(
        char,
        {
          opacity: 1,
          duration: 0.1,
          ease: "none",
        },
        index * 0.1
      );
    });

    gsap.to(".marquee-text", {
      scrollTrigger: {
        trigger: ".marquee",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        markers: false,
        onUpdate: (self) => {
          const moveAmount = self.progress * -1000;
          gsap.set(".marquee-text", {
            x: moveAmount,
          });
        },
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      manifestoText.revert();
      style.remove();
    };
  }, [isMobile]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const rows = document.querySelectorAll(".row");
    const isMobileView = window.innerWidth <= 900;

    const getStartX = (index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      return direction * (isMobileView ? 150 : 300);
    };

    if (rows.length > 0) {
      rows.forEach((row, index) => {
        const existingTrigger = ScrollTrigger.getAll().find(
          (st) => st.trigger === ".gallery" && st.vars?.targets === row
        );
        if (existingTrigger) {
          existingTrigger.kill();
        }

        const startX = getStartX(index);

        gsap.set(row, { x: startX });

        gsap.to(row, {
          scrollTrigger: {
            trigger: ".gallery",
            start: "top bottom",
            end: "bottom top",
            scrub: isMobileView ? 0.5 : 1,
            onUpdate: (self) => {
              const moveAmount = startX * (1 - self.progress);
              gsap.set(row, {
                x: moveAmount,
              });
            },
          },
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  return (
    <ReactLenis root>
      <div className="home">
        <Cursor />
        <NavBar />
        <section className="hero" id="hero">
          <HeroGradient />
          <div className="header-container">
            <div className="header h-1">
              <h1>उम्मीद</h1>
            </div>
            <div className="header h-2">
              <h1>Hope</h1>
            </div>
            <div className="header h-3">
              <h1>امید</h1>
            </div>
            <div className="header h-4">
              <h1>Where Vision Meets</h1>

            </div>
          </div>
        </section>

        <section className="work" id="work">
          <div className="container">
            <div className="work-header">
              <HiArrowRight size={13} />
              <p>Selected projects</p>
            </div>

            <div className="projects">
              <div className="project-col">
                {projects
                  .filter((project) => project.column === 1)
                  .map((project) => (
                    <Link to="/work" key={project.id}>
                      <div className="project">
                        <div className="project-img">
                          <img src={project.image} alt="Project Thumbnail" />
                        </div>
                        <div className="project-name">
                          <h2>{project.title}</h2>
                        </div>
                        <div className="project-description">
                          <p>{project.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>

              <div className="project-col">
                {projects
                  .filter((project) => project.column === 2)
                  .map((project) => (
                    <Link to="/work" key={project.id}>
                      <div className="project">
                        <div className="project-img">
                          <img src={project.image} alt="Project Thumbnail" />
                        </div>
                        <div className="project-name">
                          <h2>{project.title}</h2>
                        </div>
                        <div className="project-description">
                          <p>{project.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="cta-bg-img">
            <img src="/cta/cta-bg.png" alt="" />
          </div>
          <div className="cta-title">
            <p>Trusted by visionaries</p>
          </div>
          <div className="cta-header">
            <h2>
              Aravali Internation school
            </h2>
          </div>
          <div className="cta-btn">
            <button>Discover more at aravali.edu.in</button>
          </div>
        </section>

        <section className="manifesto" id="manifesto" ref={manifestoRef}>
          <div className="container">
            <div className="manifesto-header">
              <HiArrowRight size={13} />
              <p>Manifesto</p>
            </div>
            <div className="manifesto-title">
              <h1>
              Umeed’s mission is to be a guiding light in the
               elderly's twilight years, telling them:
                “You are not alone. You are not forgotten.
              </h1>
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-text">
            <h1>Explore the essence of Umeed </h1>
          </div>
        </div>

        <section className="showreel">
          <VideoPlayer />
        </section>

        <section className="about" id="about">
          <div className="container">
            <div className="about-col">
              <div className="about-header">
                <HiArrowRight size={13} />
                <p>Umeed Spirit</p>
              </div>
              <div className="about-copy">
                <p>
                Umeed embodies hope without limits. Whether you’re a relentless believer, a seeker of light, or someone rediscovering faith,
                 Umeed welcomes all who dare to dream. Being part of Umeed means embracing
                 resilience, unity, and infinite possibilities..
                </p>
              </div>
            </div>
            <div className="about-col">
              <div className="cta-btn">
                <button>Discover more at aravali.edu.in</button>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery">
          <div className="gallery-wrapper">
            <div className="row">
              <div className="img">
                <img src="/marquee/img1.jpg" alt="" />
              </div>
              <div className="img">
                <img src="/marquee/img2.jpg" alt="" />
              </div>
              <div className="img">
                <img src="/marquee/img3.jpg" alt="" />
              </div>
              <div className="img">
                <img src="/marquee/img4.jpg" alt="" />
              </div>
            </div>
            <div className="row">
              <div className="img">
                <img src="/marquee/img5.jpg" alt="" />
              </div>
              <div className="img">
                <img src="/marquee/img6.jpg" alt="" />
              </div>
              <div className="img">
                <img src="/marquee/img7.jpg" alt="" />
              </div>
              <div className="img">
                <img src="/marquee/img8.jpg" alt="" />
              </div>
            </div>
            <div className="row">
              <div className="img">
                <img src="/marquee/9.jpg" alt="" />
              </div>
              <div className="img">
                <img src="/marquee/10.jpg" alt="" />
              </div>
              <div className="img">
                <img src="/marquee/11.jpg" alt="" />
              </div>
              <div className="img">
                <img src="/marquee/12.jpg" alt="" />
              </div>
            </div>
            <div className="row">
              <div className="img">
                <img src="/marquee/13.jpg" alt="" />
              </div>
              <div className="img">
                <img src="/marquee/14.jpg" alt="" />
              </div>
              <div className="img">
                <img src="/marquee/15.jpeg" alt="" />
              </div>
              <div className="img">
                <img src="/marquee/16.jpeg" alt="" />
              </div>
            </div>
          </div>
        </section>   
   </div>
  
    </ReactLenis>
  );
};

export default Transition(Home);
