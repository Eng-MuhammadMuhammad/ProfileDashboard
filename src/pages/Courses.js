import React from "react";

import styles from "./Projects.module.css";
import team1 from "../assets/imgs/team-01.png";
import team2 from "../assets/imgs/team-02.png";
import team3 from "../assets/imgs/team-03.png";
import team4 from "../assets/imgs/team-04.png";
import team5 from "../assets/imgs/team-05.png";

import course1 from "../assets/imgs/course-01.jpg";
import course2 from "../assets/imgs/course-02.jpg";
import course3 from "../assets/imgs/course-03.jpg";
import course4 from "../assets/imgs/course-04.jpg";
import course5 from "../assets/imgs/course-05.jpg";

const Courses = () => {
  return (
    <div className={styles.main_container}>
      <h1 className={styles.main_Header}>Courses</h1>
      <div className={styles.Tab_sections}>
        <div className={styles.section}>
          <div className={styles.course}>
            <img className={styles.cover} src={course2} alt="Course cover" />
            <img className={styles.instructor} src={team2} alt="Instructor" />
            <div className={styles.p20}>
              <h4 className={styles.m0}>Data Structure And Algorithms</h4>
              <p
                className={`${styles.description} ${styles.fs14} ${styles.mt15}`}
              >
                Master The Art Of Data Structure And Famous Algorithms Like
                Sorting, Dividing And Conquering
              </p>
            </div>
            <div className={`${styles.info} ${styles.betweenFlex}`}>
              <span
                className={`${styles.title} ${styles.bgBlue} ${styles.cWhite} ${styles.btnShape}`}
              >
                Course Info
              </span>
              <span className={styles.cGrey}>
                <i className="fa-regular fa-user"></i> 1150
              </span>
              <span className={styles.cGrey}>
                <i className="fa-solid fa-dollar-sign"></i> 210
              </span>
            </div>
          </div>
        </div>

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.course}>
            <img className={styles.cover} src={course1} alt="Course cover" />
            <img className={styles.instructor} src={team1} alt="Instructor" />
            <div className={`${styles.p20}`}>
              <h4 className={styles.m0}>Mastering Web Design</h4>
              <p
                className={`${styles.description} ${styles.fs14} ${styles.mt15}`}
              >
                Master The Art Of Web Designing And Mocking, Prototyping And
                Creating Web Design Architecture
              </p>
            </div>
            <div className={`${styles.info} ${styles.betweenFlex}`}>
              <span
                className={`${styles.title} ${styles.bgBlue} ${styles.cWhite} ${styles.btnShape}`}
              >
                Course Info
              </span>
              <span className={styles.cGrey}>
                <i className="fa-regular fa-user"></i>
                950
              </span>
              <span className={styles.cGrey}>
                <i className="fa-solid fa-dollar-sign"></i>
                165
              </span>
            </div>
          </div>
        </div>
        {/* End Settings Box */}

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.course}>
            <img className={styles.cover} src={course3} alt="Course cover" />
            <img className={styles.instructor} src={team4} alt="Instructor" />
            <div className={styles.p20}>
              <h4 className={styles.m0}>Responsive Web Design</h4>
              <p
                className={`${styles.description} ${styles.fs14} ${styles.mt15}`}
              >
                Mastering Responsive Web Design And Media Queries And Know
                Everything About Breakpoints
              </p>
            </div>
            <div className={`${styles.info} ${styles.betweenFlex}`}>
              <span
                className={`${styles.title} ${styles.bgBlue} ${styles.cWhite} ${styles.btnShape}`}
              >
                Course Info
              </span>
              <span className={styles.cGrey}>
                <i className="fa-regular fa-user"></i> 650
              </span>
              <span className={styles.cGrey}>
                <i className="fa-solid fa-dollar-sign"></i> 90
              </span>
            </div>
          </div>
        </div>
        {/* End Settings Box */}

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.course}>
            <img className={styles.cover} src={course4} alt="Course cover" />
            <img className={styles.instructor} src={team3} alt="Instructor" />
            <div className={styles.p20}>
              <h4 className={styles.m0}>Mastering Python</h4>
              <p
                className={`${styles.description} ${styles.fs14} ${styles.mt15}`}
              >
                Mastering Python To Prepare For Data Science And AI And
                Automating Things in Your Life
              </p>
            </div>
            <div className={`${styles.info} ${styles.betweenFlex}`}>
              <span
                className={`${styles.title} ${styles.bgBlue} ${styles.cWhite} ${styles.btnShape}`}
              >
                Course Info
              </span>
              <span className={styles.cGrey}>
                <i className="fa-regular fa-user"></i> 950
              </span>
              <span className={styles.cGrey}>
                <i className="fa-solid fa-dollar-sign"></i> 250
              </span>
            </div>
          </div>
        </div>
        {/* End Settings Box */}

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.course}>
            <img className={styles.cover} src={course5} alt="Course cover" />
            <img className={styles.instructor} src={team5} alt="Instructor" />
            <div className={styles.p20}>
              <h4 className={styles.m0}>PHP Examples</h4>
              <p
                className={`${styles.description} ${styles.fs14} ${styles.mt15}`}
              >
                PHP Tutorials And Examples And Practice On Web Application And
                Connecting With Databases
              </p>
            </div>
            <div className={`${styles.info} ${styles.betweenFlex}`}>
              <span
                className={`${styles.title} ${styles.bgBlue} ${styles.cWhite} ${styles.btnShape}`}
              >
                Course Info
              </span>
              <span className={styles.cGrey}>
                <i className="fa-regular fa-user"></i> 850
              </span>
              <span className={styles.cGrey}>
                <i className="fa-solid fa-dollar-sign"></i> 150
              </span>
            </div>
          </div>
        </div>
        {/* End Settings Box */}
      </div>
    </div>
  );
};

export default Courses;
