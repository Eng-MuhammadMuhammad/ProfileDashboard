import React from "react";

import styles from "./Projects.module.css";
import teamphoto1 from "../assets/imgs/team-01.png";
import teamphoto2 from "../assets/imgs/team-02.png";
import teamphoto3 from "../assets/imgs/team-03.png";
import teamphoto4 from "../assets/imgs/team-04.png";
import teamphoto5 from "../assets/imgs/team-05.png";

const Projects = () => {
  return (
    <div className={styles.main_container}>
      <h1 className={styles.main_Header}>Projects</h1>
      <div className={styles.Tab_sections}>
        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.project}>
            <span className={styles.date}>15/10/2021</span>
            <h4 className={styles.title}>MY Dashboard</h4>
            <p className={styles.description}>
              Showing Project Design And Programming And Hosting
            </p>
            <div className={styles.team}>
              <a href="/">
                <img src={teamphoto1} alt="Team Member 1" />
              </a>
              <a href="/">
                <img src={teamphoto2} alt="Team Member 2" />
              </a>
              <a href="/">
                <img src={teamphoto3} alt="Team Member 3" />
              </a>
              <a href="/">
                <img src={teamphoto4} alt="Team Member 4" />
              </a>
              <a href="/">
                <img src={teamphoto5} alt="Team Member 5" />
              </a>
            </div>
            <div className={styles.do}>
              <span>Programming</span>
              <span>Design</span>
              <span>Hosting</span>
              <span>Marketing</span>
            </div>
            <div className={styles.info}>
              <div className={styles.prog}>
                <span style={{ width: "50%" }}></span>
              </div>
              <div className={styles.price}>
                <i className="fa-solid fa-dollar-sign"></i>
                2500
              </div>
            </div>
          </div>
        </div>
        {/* End Settings Box */}

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.project}>
            <span className={styles.date}>15/6/2022</span>
            <h4 className={styles.title}>Academy Portal</h4>
            <p className={styles.description}>
              Academy Portal Project Design And Programming
            </p>
            <div className={styles.team}>
              <a href="/">
                <img src={teamphoto1} alt="Team Member 1" />
              </a>
              <a href="/">
                <img src={teamphoto2} alt="Team Member 2" />
              </a>
              <a href="/">
                <img src={teamphoto3} alt="Team Member 3" />
              </a>
            </div>
            <div className={styles.do}>
              <span>Programming</span>
              <span>Design</span>
            </div>
            <div className={styles.info}>
              <div className={styles.prog}>
                <span style={{ width: "80%" }}></span>
              </div>
              <div className={styles.price}>
                <i className="fa-solid fa-dollar-sign"></i>
                1800
              </div>
            </div>
          </div>
        </div>
        {/* End Settings Box */}

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.project}>
            <span className={styles.date}>15/6/2022</span>
            <h4 className={styles.title}>Chatting Application</h4>
            <p className={styles.description}>
              Chatting Application Project Design
            </p>
            <div className={styles.team}>
              <a href="/">
                <img src={teamphoto1} alt="Team Member 1" />
              </a>
              <a href="/">
                <img src={teamphoto2} alt="Team Member 2" />
              </a>
              <a href="/">
                <img src={teamphoto3} alt="Team Member 3" />
              </a>
            </div>
            <div className={styles.do}>
              <span>Design</span>
            </div>
            <div className={styles.info}>
              <div className={styles.prog}>
                <span style={{ width: "100%" }}></span>
              </div>
              <div className={styles.price}>
                <i className="fa-solid fa-dollar-sign"></i>
                950
              </div>
            </div>
          </div>
        </div>
        {/* End Settings Box */}

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.project}>
            <span className={styles.date}>15/6/2022</span>
            <h4 className={styles.title}>Ahmed Dashboard</h4>
            <p className={styles.description}>
              Ahmed Dashboard Project Design And Programming And Hosting
            </p>
            <div className={styles.team}>
              <a href="/">
                <img src={teamphoto5} alt="Team Member 1" />
              </a>
              <a href="/">
                <img src={teamphoto3} alt="Team Member 2" />
              </a>
              <a href="/">
                <img src={teamphoto2} alt="Team Member 3" />
              </a>
              <a href="/">
                <img src={teamphoto1} alt="Team Member 4" />
              </a>
            </div>
            <div className={styles.do}>
              <span>Programming</span>
              <span>Design</span>
              <span>Hosting</span>
              <span>Marketing</span>
            </div>
            <div className={styles.info}>
              <div className={styles.prog}>
                <span style={{ width: "60%" }}></span>
              </div>
              <div className={styles.price}>
                <i className="fa-solid fa-dollar-sign"></i>
                1700
              </div>
            </div>
          </div>
        </div>
        {/* End Settings Box */}

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.project}>
            <span className={styles.date}>15/6/2022</span>
            <h4 className={styles.title}>Ahmed Portal</h4>
            <p className={styles.description}>
              Ahmed Portal Project Design And Programming
            </p>
            <div className={styles.team}>
              <a href="/">
                <img src={teamphoto3} alt="Team Member 1" />
              </a>
              <a href="/">
                <img src={teamphoto4} alt="Team Member 2" />
              </a>
              <a href="/">
                <img src={teamphoto1} alt="Team Member 3" />
              </a>
            </div>
            <div className={styles.do}>
              <span>Programming</span>
              <span>Design</span>
            </div>
            <div className={styles.info}>
              <div className={styles.prog}>
                <span style={{ width: "70%" }}></span>
              </div>
              <div className={styles.price}>
                <i className="fa-solid fa-dollar-sign"></i>
                850
              </div>
            </div>
          </div>
        </div>
        {/* End Settings Box */}
        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.project}>
            <span className={styles.date}>15/6/2022</span>
            <h4 className={styles.title}>Mohamed Application</h4>
            <p className={styles.description}>
              Mohamed Application Project Design
            </p>
            <div className={styles.team}>
              <a href="/">
                <img src={teamphoto2} alt="Team Member 1" />
              </a>
              <a href="/">
                <img src={teamphoto5} alt="Team Member 2" />
              </a>
              <a href="/">
                <img src={teamphoto3} alt="Team Member 3" />
              </a>
            </div>
            <div className={styles.do}>
              <span>Design</span>
            </div>
            <div className={styles.info}>
              <div className={styles.prog}>
                <span style={{ width: "40%" }}></span>
              </div>
              <div className={styles.price}>
                <i className="fa-solid fa-dollar-sign"></i>
                950
              </div>
            </div>
          </div>
        </div>
        {/* End Settings Box */}
        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.project}>
            <span className={styles.date}>15/6/2022</span>
            <h4 className={styles.title}>Mohamed Dashboard</h4>
            <p className={styles.description}>
              Mohamed Dashboard Project Design And Programming And Hosting
            </p>
            <div className={styles.team}>
              <a href="/">
                <img src={teamphoto2} alt="Team Member 1" />
              </a>
              <a href="/">
                <img src={teamphoto3} alt="Team Member 2" />
              </a>
              <a href="/">
                <img src={teamphoto4} alt="Team Member 3" />
              </a>
              <a href="/">
                <img src={teamphoto1} alt="Team Member 4" />
              </a>
            </div>
            <div className={styles.do}>
              <span>Programming</span>
              <span>Design</span>
              <span>Hosting</span>
              <span>Marketing</span>
            </div>
            <div className={styles.info}>
              <div className={styles.prog}>
                <span style={{ width: "65%" }}></span>
              </div>
              <div className={styles.price}>
                <i className="fa-solid fa-dollar-sign"></i>
                1950
              </div>
            </div>
          </div>
        </div>
        {/* End Settings Box */}
        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.project}>
            <span className={styles.date}>15/6/2022</span>
            <h4 className={styles.title}>Mohamed Portal</h4>
            <p className={styles.description}>
              Mohamed Portal Project Design And Programming
            </p>
            <div className={styles.team}>
              <a href="/">
                <img src={teamphoto2} alt="Team Member 1" />
              </a>
              <a href="/">
                <img src={teamphoto3} alt="Team Member 2" />
              </a>
              <a href="/">
                <img src={teamphoto5} alt="Team Member 3" />
              </a>
            </div>
            <div className={styles.do}>
              <span>Programming</span>
              <span>Design</span>
            </div>
            <div className={styles.info}>
              <div className={styles.prog}>
                <span style={{ width: "60%" }}></span>
              </div>
              <div className={styles.price}>
                <i className="fa-solid fa-dollar-sign"></i>
                1650
              </div>
            </div>
          </div>
        </div>
        {/* End Settings Box */}
        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.project}>
            <span className={styles.date}>15/6/2022</span>
            <h4 className={styles.title}>Ahmed Application</h4>
            <p className={styles.description}>
              Ahmed Application Project Design
            </p>
            <div className={styles.team}>
              <a href="/">
                <img src={teamphoto2} alt="Team Member 1" />
              </a>
              <a href="/">
                <img src={teamphoto3} alt="Team Member 2" />
              </a>
              <a href="/">
                <img src={teamphoto5} alt="Team Member 3" />
              </a>
            </div>
            <div className={styles.do}>
              <span>Design</span>
            </div>
            <div className={styles.info}>
              <div className={styles.prog}>
                <span style={{ width: "90%" }}></span>
              </div>
              <div className={styles.price}>
                <i className="fa-solid fa-dollar-sign"></i>
                950
              </div>
            </div>
          </div>
        </div>
        {/* End Settings Box */}
      </div>
    </div>
  );
};

export default Projects;
