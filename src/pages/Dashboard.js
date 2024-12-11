import React from "react";
import styles from "./Dashboard.module.css";

import avatar_img from "../assets/imgs/avatar.png";

import pdf_photo from "../assets/imgs/pdf.svg";
import psd_photo from "../assets/imgs/psd.svg";
import avi_photo from "../assets/imgs/avi.svg";
import zip_photo from "../assets/imgs/zip.svg";
import dll_photo from "../assets/imgs/dll.svg";
import eps_photo from "../assets/imgs/eps.svg";

const Dashboard = () => {
  
  const targets = [
    { label: 'Money ', percentage: 80, amount: '$20,000' },
    { label: 'Projects ', percentage: 55, amount: 24 },
    { label: 'Team ', percentage: 75, amount: 12 },
  ];
  return (
    <div className={styles.dashboard}>
    <h1 className={styles.dashboardHeader}>Dashboard</h1>
      <div className={styles.dashsections}>
        {/* Welcome Section */}
        <section className={styles.welcomeSection}>
          <div className={styles.welcomeHeader}>
            <h2>Welcome</h2>
            <p>Muhammad Muhammad</p>
          </div>
          <div className={styles.welcomeContent}>
            <div className={styles.avatar}>
              <img
                src={avatar_img}
                alt="Muhammad Muhammad"
                className={styles.avatarImage}
              />
            </div>
            <div className={styles.stats}>
              <div>
                <h3>Muhammad Muhammad</h3>
                <p className={styles.label}>Developer</p>
              </div>
              <div>
                <h3>120</h3>
                <p className={styles.label}>Projects</p>
              </div>
              <div>
                <h3>$10,000</h3>
                <p className={styles.label}>Earned</p>
              </div>
            </div>
            <button className={styles.profileButton}>View Profile</button>
          </div>
        </section>

        {/* Quick Draft Section */}
        <section className={styles.quickDraftSection}>
          <h2>Quick Draft</h2>
          <p>Write a draft for your ideas</p>
          <form className={styles.form}>
            <input type="text" placeholder="Title" className={styles.input} />
            <textarea
              placeholder="Your Thoughts"
              className={styles.textarea}
            ></textarea>
            <button type="submit" className={styles.saveButton}>
              Save
            </button>
          </form>
        </section>

        {/* Yearly Targets Section */}
        <section className={styles.yearlyTargetsSection}>
    <div className={styles.yearlyTargets}>
      <h2>Yearly Targets</h2>
      {targets.map((target, index) => (
        <div key={index} className={styles.targetCard}>
          <div className={styles.targetHeader}>
            <span>{target.label}</span>
            <span className={styles.targetProgress}>{target.percentage}%</span>
          </div>
          <div className={styles.targetAmount}>{target.amount}</div>
          <div className={styles.progressBar}>
            <div
              className={styles.moneyProgress}
              style={{ width: `${target.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </section>

        {/* Ticket Statistics Section */}
        <section className={styles.ticketStatisticsSection}>
          <div className={styles.ticketStatistics}>
            <h2>Tickets Statistics</h2>
            <p></p>
            <div className={styles.ticketCard}>
              <div className={styles.ticketHeader}>Total</div>
              <div className={styles.ticketValue}>2500</div>
            </div>
            <div className={styles.ticketCard}>
              <div className={styles.ticketHeader}>Pending</div>
              <div className={styles.ticketValue}>500</div>
            </div>
            <div className={styles.ticketCard}>
              <div className={styles.ticketHeader}>Closed</div>
              <div className={styles.ticketValue}>1900</div>
            </div>
            <div className={styles.ticketCard}>
              <div className={styles.ticketHeader}>Deleted</div>
              <div className={styles.ticketValue}>100</div>
            </div>
          </div>
        </section>

        {/* Upload Files Section */}
        <section>
          <div className={`${styles.latestUploads}`}>
            <h2>Latest Uploads</h2>
            <ul>
              {[
                {
                  name: "my-file.pdf",
                  size: "2.9 mb",
                  user: "Mohammad",
                  icon: pdf_photo,
                },
                {
                  name: "My-Video-File.avi",
                  size: "4.9 mb",
                  user: "Ali",
                  icon: avi_photo,
                },
                {
                  name: "My-Psd-File.pdf",
                  size: "4.5 mb",
                  user: "Sameer",
                  icon: psd_photo,
                },
                {
                  name: "My-Zip-File.pdf",
                  size: "8.9 mb",
                  user: "Soha",
                  icon: zip_photo,
                },
                {
                  name: "My-DLL-File.pdf",
                  size: "4.9 mb",
                  user: "Diana",
                  icon: dll_photo,
                },
                {
                  name: "My-Eps-File.pdf",
                  size: "8.9 mb",
                  user: "Amin",
                  icon: eps_photo,
                },
              ].map((file, index) => (
                <li className={`${styles.listItem}`} key={index}>
                  <img src={file.icon} alt={`${file.name} icon`} />
                  <div className="d-flex align-center">
                    <div className={`${styles.fileDetails}`}>
                      <span className={styles.fileName}>{file.name}</span>
                      <span className={styles.userName}>{file.user}</span>
                    </div>
                  </div>
                  <div className={`${styles.btnShape}`}>{file.size}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Social Media Wedgit */}

        <section>
          <div className={styles.socialMedia}>
            <h2 className={styles.title}>Social Media Stats</h2>
            <div className={`${styles.box} ${styles.twitter}`}>
              <i className="fa-brands fa-twitter fa-2x"></i>
              <span>90K Followers</span>
              <a href="/" className={styles.btnShape1}>
                Follow
              </a>
            </div>
            <div className={`${styles.box} ${styles.facebook}`}>
              <i className="fa-brands fa-facebook-f fa-2x"></i>
              <span>2M Like</span>
              <a href="/" className={styles.btnShape1}>
                Like
              </a>
            </div>
            <div className={`${styles.box} ${styles.youtube}`}>
              <i className="fa-brands fa-youtube fa-2x"></i>
              <span>1M Subs</span>
              <a href="/" className={styles.btnShape1}>
                Subscribe
              </a>
            </div>
            <div className={`${styles.box} ${styles.linkedin}`}>
              <i className="fa-brands fa-linkedin fa-2x"></i>
              <span>70K Followers</span>
              <a href="/" className={styles.btnShape1}>
                Follow
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
