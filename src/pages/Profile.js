import React from "react";
import styles from "./Profile.module.css";

import avatarphoto from "../assets/imgs/avatar.png";
import activity1 from "../assets/imgs/activity-01.png";
import activity2 from "../assets/imgs/activity-02.png";
import activity3 from "../assets/imgs/activity-03.png";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <h1 className={styles.profileheader}>Profile</h1>

      {/* Start The Overview  */}
      <div
        className={`${styles.overview} ${styles.bgWhite} ${styles.rad10} ${styles.dFlex} ${styles.alignCenter}`}
      >
        <div className={`${styles.avatarBox} ${styles.txtC} ${styles.p20}`}>
          <img
            className={`${styles.radHalf} ${styles.mb10}`}
            src={avatarphoto}
            alt=""
          />
          <h3 className={styles.m0}>Mohammad</h3>
          <p className={`${styles.cGrey} ${styles.mt10}`}>Level 2</p>
          <div
            className={`${styles.level} ${styles.rad6} ${styles.bgEee} ${styles.pRelative}`}
          >
            <span style={{ width: "40%" }}></span>
          </div>
          <div className={`${styles.rating} ${styles.mt10} ${styles.mb10}`}>
            <i
              className={`fa-solid fa-star ${styles.cOrange} ${styles.fs13}`}
            ></i>
            <i
              className={`fa-solid fa-star ${styles.cOrange} ${styles.fs13}`}
            ></i>
            <i
              className={`fa-solid fa-star ${styles.cOrange} ${styles.fs13}`}
            ></i>
          </div>
          <p className={`${styles.cGrey} ${styles.m0} ${styles.fs13}`}>
            150 Rating
          </p>
        </div>
        <div
          className={`${styles.infoBox} ${styles.wFull} ${styles.txtCMobile}`}
        >
          <div
            className={`${styles.box} ${styles.p20} ${styles.dFlex} ${styles.alignCenter}`}
          >
            <h4
              className={`${styles.cGrey} ${styles.fs15} ${styles.m0} ${styles.wFull}`}
            >
              General Information
            </h4>
            <div className={styles.fs14}>
              <span className={styles.cGrey}>Full Name:</span>
              <span>Mohammad</span>
            </div>
            <div className={styles.fs14}>
              <span className={styles.cGrey}>Gender:</span>
              <span>Male</span>
            </div>
            <div className={styles.fs14}>
              <span className={styles.cGrey}>Country:</span>
              <span>Jordan</span>
            </div>
            <div className={styles.fs14}>
              <label>
                <input
                  className={styles.toggleCheckbox}
                  type="checkbox"
                  defaultChecked
                />
                <div className={styles.toggleSwitch}></div>
              </label>
            </div>
          </div>
          <div
            className={`${styles.box} ${styles.p20} ${styles.dFlex} ${styles.alignCenter}`}
          >
            <h4
              className={`${styles.cGrey} ${styles.fs15} ${styles.m0} ${styles.wFull}`}
            >
              Personal Information
            </h4>
            <div className={styles.fs14}>
              <span className={styles.cGrey}>Email:</span>
              <span>mohammad@example.com</span>
            </div>
            <div className={styles.fs14}>
              <span className={styles.cGrey}>Phone:</span>
              <span>+962123456789</span>
            </div>
            <div className={styles.fs14}>
              <span className={styles.cGrey}>Date Of Birth:</span>
              <span>10/06/1998</span>
            </div>
            <div className={styles.fs14}>
              <label>
                <input className={styles.toggleCheckbox} type="checkbox" />
                <div className={styles.toggleSwitch}></div>
              </label>
            </div>
          </div>
          <div
            className={`${styles.box} ${styles.p20} ${styles.dFlex} ${styles.alignCenter}`}
          >
            <h4
              className={`${styles.cGrey} ${styles.fs15} ${styles.m0} ${styles.wFull}`}
            >
              Job Information
            </h4>
            <div className={styles.fs14}>
              <span className={styles.cGrey}>Title:</span>
              <span>React.js Developer</span>
            </div>
            <div className={styles.fs14}>
              <span className={styles.cGrey}>Programming Language:</span>
              <span>JavaScript</span>
            </div>
            <div className={styles.fs14}>
              <span className={styles.cGrey}>Years Of Experience:</span>
              <span>2+</span>
            </div>
            <div className={styles.fs14}>
              <label>
                <input
                  className={styles.toggleCheckbox}
                  type="checkbox"
                  defaultChecked
                />
                <div className={styles.toggleSwitch}></div>
              </label>
            </div>
          </div>
          <div
            className={`${styles.box} ${styles.p20} ${styles.dFlex} ${styles.alignCenter}`}
          >
            <h4
              className={`${styles.cGrey} ${styles.fs15} ${styles.m0} ${styles.wFull}`}
            >
              Billing Information
            </h4>
            <div className={styles.fs14}>
              <span className={styles.cGrey}>Payment Method:</span>
              <span>Stripe</span>
            </div>
            <div className={styles.fs14}>
              <span className={styles.cGrey}>Email:</span>
              <span>billing@example.com</span>
            </div>
            <div className={styles.fs14}>
              <span className={styles.cGrey}>Subscription:</span>
              <span>Annual</span>
            </div>
            <div className={styles.fs14}>
              <label>
                <input className={styles.toggleCheckbox} type="checkbox" />
                <div className={styles.toggleSwitch}></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* End The Overview  */}

      {/* Start Other Data */}
      <div className={styles.otherinfosection}>
        <div className={`${styles.otherData} ${styles.dFlex} ${styles.gap20}`}>
          <div
            className={`${styles.skillsCard} ${styles.p20} ${styles.bgWhite} ${styles.rad10} ${styles.mt20}`}
          >
            <h2 className={`${styles.mt0} ${styles.mb10}`}>My Skills</h2>
            <p
              className={`${styles.mt0} ${styles.mb20} ${styles.cGrey} ${styles.fs15}`}
            >
              Complete Skills List
            </p>
            <ul className={`${styles.m0} ${styles.txtCMobile}`}>
              <li>
                <span>HTML</span>
                <span>Pugjs</span>
                <span>HAML</span>
              </li>
              <li>
                <span>CSS</span>
                <span>SASS</span>
                <span>Stylus</span>
              </li>
              <li>
                <span>JavaScript</span>
                <span>TypeScript</span>
              </li>
              <li>
                <span>Vuejs</span>
                <span>Reactjs</span>
              </li>
              <li>
                <span>Jest</span>
                <span>Jasmine</span>
              </li>
              <li>
                <span>PHP</span>
                <span>Laravel</span>
              </li>
              <li>
                <span>Python</span>
                <span>Django</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.otherData} ${styles.dFlex} ${styles.gap20}`}>
          <div
            className={`${styles.activities} ${styles.p20} ${styles.bgWhite} ${styles.rad10} ${styles.mt20}`}
          >
            <h2 className={`${styles.mt0} ${styles.mb10}`}>
              Latest Activities
            </h2>
            <p
              className={`${styles.mt0} ${styles.mb20} ${styles.cGrey} ${styles.fs15}`}
            >
              Latest Activities Done By The User
            </p>
            <div
              className={`${styles.activity} ${styles.dFlex} ${styles.alignCenter} ${styles.txtCMobile}`}
            >
              <img src={activity1} alt="Activity 1" />
              <div className={styles.info}>
                <span className={`${styles.dBlock} ${styles.mb10}`}>
                  {" "}
                  Store{" "}
                </span>
                <span className={styles.cGrey}>
                  {" "}
                  Bought The Mastering Python Course{" "}
                </span>
              </div>
              <div className={styles.date}>
                <span className={`${styles.dBlock} ${styles.mb10}`}>
                  {" "}
                  18:10{" "}
                </span>
                <span className={styles.cGrey}>Yesterday</span>
              </div>
            </div>
            <div
              className={`${styles.activity} ${styles.dFlex} ${styles.alignCenter} ${styles.txtCMobile}`}
            >
              <img src={activity2} alt="Activity 2" />
              <div className={styles.info}>
                <span className={`${styles.dBlock} ${styles.mb10}`}>
                  Academy
                </span>
                <span className={styles.cGrey}>Got The PHP Certificate</span>
              </div>
              <div className={styles.date}>
                <span className={`${styles.dBlock} ${styles.mb10}`}>16:05</span>
                <span className={styles.cGrey}>Yesterday</span>
              </div>
            </div>
            <div
              className={`${styles.activity} ${styles.dFlex} ${styles.alignCenter} ${styles.txtCMobile}`}
            >
              <img src={activity3} alt="Activity 3" />
              <div className={styles.info}>
                <span className={`${styles.dBlock} ${styles.mb10}`}>
                  Badges
                </span>
                <span className={styles.cGrey}>
                  Unlocked The 10 Skills Badge
                </span>
              </div>
              <div className={styles.date}>
                <span className={`${styles.dBlock} ${styles.mb10}`}>18:05</span>
                <span className={styles.cGrey}>Yesterday</span>
              </div>
            </div>

            <div
              className={`${styles.activity} ${styles.dFlex} ${styles.alignCenter} ${styles.txtCMobile}`}
            >
              <img src={activity1} alt="Activity 1" />
              <div className={styles.info}>
                <span className={`${styles.dBlock} ${styles.mb10}`}>
                  {" "}
                  Store{" "}
                </span>
                <span className={styles.cGrey}>
                  {" "}
                  Bought The Mastering Python Course{" "}
                </span>
              </div>
              <div className={styles.date}>
                <span className={`${styles.dBlock} ${styles.mb10}`}>
                  {" "}
                  18:10{" "}
                </span>
                <span className={styles.cGrey}>Yesterday</span>
              </div>
            </div>
          </div>
        </div>
        {/* End Other Data */}
      </div>
    </div>
  );
};

export default Profile;
