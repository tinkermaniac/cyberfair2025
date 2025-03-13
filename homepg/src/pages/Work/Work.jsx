import React, { useEffect } from "react";
import "./Work.css";
import { Link } from "react-router";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Cursor from "../../components/Cursor/Cursor";
import Transition from "../../components/Transition/Transition";
import BackButton from "../../components/BackButton/BackButton";

import { ReactLenis } from "@studio-freight/react-lenis";

import { IoMdArrowForward } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Work = () => {
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 0);

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <ReactLenis root>
      <Cursor />
      <div className="sample-project">
        <BackButton />

        <section className="sp-title">
          <div className="container">
            <h1>Umeed by AIS</h1>
          </div>
        </section>

        <section className="sp-banner">
          <img src="/marquee/img6.jpg" alt="" />
        </section>

        <section className="sp-details">
          <div className="container">
            <div className="sp-details-col">
              <p className="sp-details-name">Umeed</p>

              <div className="sp-tags">
                <p>Web Design</p>
                <p>Web Development</p>
              </div>

              <div className="sp-date">
                <p>March 2025</p>
              </div>

              <div className="sp-link">
                <Link to="/">
                  <button>
                    <div className="icon">
                      <IoIosArrowRoundForward size={16} />
                    </div>
                    View Project
                  </button>
                </Link>
              </div>
            </div>
            <div className="sp-details-col">
              <p>Challenge</p>
              <p>
              Umeed is a tribute to the resilience of hope and the human spirit. In a world that often feels uncertain, 
              we set out to create a piece that embodies optimism, renewal, and strength. Blending evocative 
              storytelling with immersive visuals, the project envisions a realm where hope is not just
               an idea but a guiding force. Through meticulous creative direction and intricate 
               craftsmanship, we shaped a narrative that feels both personal and universal—a light for 
               those seeking inspiration and courage in challenging times.
              </p>
            </div>
          </div>
        </section>

        <section className="showreel">
          <VideoPlayer />
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Challenge</h3>
            </div>

            <div className="sp-info-desc">
              <p>
              Umeed explores the idea of discovering strength in moments of uncertainty. Inspired by
               the enduring power of hope, we envisioned a character who journeys through an ever-shifting world,
                guided by glimmers of light that illuminate new possibilities. This character, unbound by 
                limitations, symbolizes the resilience of the human spirit, moving with grace through
                 landscapes that blend reality and dreams, reminding us that even in darkness, hope finds a way forward
              </p>
            </div>
          </div>
        </section>

        <section className="sp-img">
          <div className="container">
            <img src="/marquee/12.jpg" alt="" />
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Creative Solution</h3>
            </div>

            <div className="sp-info-desc">
              <p>
              To bring Umeed to life, we focused on crafting a seamless fusion of emotion and visual poetry. 
              Hope became our guiding force, driving us to weave together raw human experiences with immersive,
               dreamlike imagery. Rooted in real struggles yet elevated by symbolic storytelling, our visuals
                transition between the tangible and the transcendent. Through thoughtful composition and nuanced
                 execution, we created a world where light breaks through the shadows, 
                 reminding us that hope is always within reach.
              </p>
            </div>
          </div>
        </section>

        <section className="sp-img">
          <div className="container">
            <img src="/marquee/img5.jpg" alt="" />
          </div>
        </section>

        <section className="credits">
          <div className="container">
            <h2>Credits</h2>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>Project</p>
                </div>
                <div className="credits-copy">
                  <p>Umeed</p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Our Role</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Web Development, Web Design, Research, Cinematography,
                    Photography
                  </p>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>Team</p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Technical Team</p>
                </div>
                <div className="credits-copy">
                  <p>Aamir Ali, Ritwik Dadarwal,Gagan Kashyap,Daiwik Gupta,Geetansh Verma
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Research Team</p>
                </div>
                <div className="credits-copy">
                  <p>Aryan  Goyal, Pritha Singh, Dhriti Dhir, Balkirat Singh, Manvi Pahwa, Tanish Mendiratta</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Team Head</p>
                </div>
                <div className="credits-copy">
                  <p>Ritwik Dadarwal</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Mentors & Guides</p>
                </div>
                <div className="credits-copy">
                  <p>Vibha Vij,Archana Nagpal,Savita Rana,Shweta Singh,Reema Rai</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Cinematography & Color Grading</p>
                </div>
                <div className="credits-copy">
                  <p>Gagan kashyap</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Photography</p>
                </div>
                <div className="credits-copy">
                  <p>Gagan Kashyap, Tanish Mendiratta, Aryan Goyal, Manvi Pahwa, Balkirat Singh</p>
                </div>
              </div>
            </div> 
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-img">
            <img src="/projects/project4.jpg" alt="" />
          </div>

          <div className="container">
            <div className="next-project-header">
              <div className="next-project-icon">
                <h1>
                  <IoMdArrowForward />
                </h1>
              </div>
              <div className="next-project-title">
                <h1>The Machina Chronicles by Narratives Studio</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Transition(Work);
