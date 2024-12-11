import React from "react";
import styles from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={styles.settings}>
      <h1 className={styles.settingsHeader}>Settings</h1>
      <div className={styles.settingssections}>
        <div className={styles.section}>
          <div className={`${styles.settingsPage} m-20 d-grid gap-20`}>
            {/* Start Settings Box */}
            <div className="p-20 bg-white rad-10">
              <h2 className="mt-0 mb-10">Site Control</h2>
              <p className="mt-0 mb-20 c-grey fs-15">
                Control The Website If There Is Maintenance
              </p>
              <div className="mb-15 between-flex">
                <div>
                  <span>Website Control</span>
                  <p className="c-grey mt-5 mb-0 fs-13">
                    Open/Close Website And Type The Reason
                  </p>
                </div>
                <div>
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
              <textarea
                className={styles.text_message}
                placeholder="Close Message Content Here"
              ></textarea>
            </div>
            {/* End Settings Box */}
          </div>
        </div>

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.heading}>General Info</h2>
            <p className={styles.description}>
              General Information About Your Account
            </p>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="first">
                First Name
              </label>
              <input
                className={styles.input}
                type="text"
                id="first"
                placeholder="First Name"
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="last">
                Last Name
              </label>
              <input
                className={styles.input}
                type="text"
                id="last"
                placeholder="Last Name"
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.email_label} htmlFor="email">
                Email
              </label>
              <input
                className={`${styles.input} ${styles.email}`}
                id="email"
                type="email"
                value="example@gmail.com"
                disabled
              />
              <a className={styles.link} href="/">
                Change
              </a>
            </div>
            
          </div>
        </div>
        {/* End Settings Box */}

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.header}>Security Info</h2>
            <p className={styles.subHeader}>
              Security Information About Your Account
            </p>

            <div className={`${styles.secBox} ${styles.betweenFlex}`}>
              <div>
                <span>Password</span>
                <p className={`${styles.textGrey} ${styles.textSmall}`}>
                  Last Change On 25/10/2021
                </p>
              </div>
              <a
                className={`${styles.button} ${styles.bgBlue} ${styles.textWhite}`}
                href="/"
              >
                Change
              </a>
            </div>

            <div className={`${styles.secBox} ${styles.betweenFlex}`}>
              <div>
                <span>Two-Factor Authentication</span>
                <p className={`${styles.textGrey} ${styles.textSmall}`}>
                  Enable/Disable The Feature
                </p>
              </div>
              <label>
                <input
                  className={styles.toggleCheckbox}
                  type="checkbox"
                  defaultChecked
                />
                <div className={styles.toggleSwitch}></div>
              </label>
            </div>

            <div className={`${styles.secBox} ${styles.betweenFlex}`}>
              <div>
                <span>Devices</span>
                <p className={`${styles.textGrey} ${styles.textSmall}`}>
                  Check The Login Devices List
                </p>
              </div>
              <a className={`${styles.bgGrey} ${styles.textBlack}`} href="/">
                Devices
              </a>
            </div>
          </div>
        </div>
        {/* End Settings Box */}

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.socialBoxes}>
            <h2 className={styles.heading}>Social Info</h2>
            <p className={styles.description}>Social Media Information</p>
            <div className={`${styles.inputGroup} ${styles.marginBottom}`}>
              <i className={`fa-brands fa-twitter ${styles.icon}`}></i>
              <input
                className={styles.input}
                type="text"
                placeholder="Twitter Username"
              />
            </div>
            <div className={`${styles.inputGroup} ${styles.marginBottom}`}>
              <i className={`fa-brands fa-facebook-f ${styles.icon}`}></i>
              <input
                className={styles.input}
                type="text"
                placeholder="Facebook Username"
              />
            </div>
            <div className={`${styles.inputGroup} ${styles.marginBottom}`}>
              <i className={`fa-brands fa-linkedin ${styles.icon}`}></i>
              <input
                className={styles.input}
                type="text"
                placeholder="Linkedin Username"
              />
            </div>
            <div className={styles.inputGroup}>
              <i className={`fa-brands fa-youtube ${styles.icon}`}></i>
              <input
                className={styles.input}
                type="text"
                placeholder="Youtube Username"
              />
            </div>
          </div>
        </div>
        {/* End Settings Box */}

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.widgetsControl}>
            <h2 className={styles.title}>Widgets Control</h2>
            <p className={styles.description}>Show/Hide Widgets</p>
            <div className={`${styles.control} ${styles.flex}`}>
              <input type="checkbox" id="one" defaultChecked />
              <label htmlFor="one">Quick Draft</label>
            </div>
            <div className={`${styles.control} ${styles.flex}`}>
              <input type="checkbox" id="two" defaultChecked />
              <label htmlFor="two">Yearly Targets</label>
            </div>
            <div className={`${styles.control} ${styles.flex}`}>
              <input type="checkbox" id="three" defaultChecked />
              <label htmlFor="three">Tickets Statistics</label>
            </div>
            <div className={`${styles.control} ${styles.flex}`}>
              <input type="checkbox" id="four" defaultChecked />
              <label htmlFor="four">Latest News</label>
            </div>
            <div className={`${styles.control} ${styles.flex}`}>
              <input type="checkbox" id="five" />
              <label htmlFor="five">Latest Tasks</label>
            </div>
            <div className={`${styles.control} ${styles.flex}`}>
              <input type="checkbox" id="six" defaultChecked />
              <label htmlFor="six">Top Search Items</label>
            </div>
          </div>
        </div>
        {/* End Settings Box */}

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.backupControl}>
            <h2 className={styles.title}>Backup Manager</h2>
            <p className={styles.description}>
              Control Backup Time And Location
            </p>

            <div className={styles.date}>
              <input type="radio" name="time" id="daily" defaultChecked />
              <label htmlFor="daily">Daily</label>
            </div>

            <div className={styles.date}>
              <input type="radio" name="time" id="weekly" />
              <label htmlFor="weekly">Weekly</label>
            </div>

            <div className={styles.date}>
              <input type="radio" name="time" id="monthly" />
              <label htmlFor="monthly">Monthly</label>
            </div>

            <div className={styles.servers}>
              <input type="radio" name="servers" id="server-one" />
              <div className={styles.server}>
                <label htmlFor="server-one">
                  <i className="fa-solid fa-server"></i>
                  Megaman
                </label>
              </div>

              <input
                type="radio"
                name="servers"
                id="server-two"
                defaultChecked
              />
              <div className={styles.server}>
                <label htmlFor="server-two">
                  <i className="fa-solid fa-server"></i>
                  Zero
                </label>
              </div>

              <input type="radio" name="servers" id="server-three" />
              <div className={styles.server}>
                <label htmlFor="server-three">
                  <i className="fa-solid fa-server"></i>
                  Sigma
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* End Settings Box */}
      </div>
    </div>
  );
};

export default Settings;
