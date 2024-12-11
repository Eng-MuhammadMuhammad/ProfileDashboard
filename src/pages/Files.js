import React from "react";

import styles from "./Projects.module.css";
import pdf_photo from "../assets/imgs/pdf.svg";
import sql_photo from "../assets/imgs/sql.svg";
import psd_photo from "../assets/imgs/psd.svg";
import avi_photo from "../assets/imgs/avi.svg";

const Files = () => {
  return (
    <div className={styles.main_container}>
      <h1 className={styles.main_Header}>Files</h1>
      
      <div className={styles.Tab_sections}>
      
        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.file}>
            <i className={`${styles.iconDownload} fa-solid fa-download`}></i>
            <div className={styles.icon}>
              <img className={styles.iconImage} src={pdf_photo} alt="PDF" />
            </div>
            <div className={styles.textCenter}>
              <div className={styles.fileName}>Annual Report 2023.pdf</div>
              <p className={styles.author}>John Doe</p>
            </div>
            <div className={styles.info}>
              <span>12/03/2023</span>
              <span>2.5MB</span>
            </div>
          </div>
        </div>
        {/* End Settings Box */}

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.file}>
            <i className={`${styles.iconDownload} fa-solid fa-download`}></i>
            <div className={styles.icon}>
              <img className={styles.iconImage} src={sql_photo} alt="SQL" />
            </div>
            <div className={styles.textCenter}>
              <div className={styles.fileName}>Database Schema.sql</div>
              <p className={styles.author}>Jane Smith</p>
            </div>
            <div className={styles.info}>
              <span>15/09/2023</span>
              <span>350KB</span>
            </div>
          </div>
        </div>
        {/* End Settings Box */}

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.file}>
            <i className={`${styles.iconDownload} fa-solid fa-download`}></i>
            <div className={styles.icon}>
              <img className={styles.iconImage} src={psd_photo} alt="PSD" />
            </div>
            <div className={styles.textCenter}>
              <div className={styles.fileName}>Website Design.psd</div>
              <p className={styles.author}>Creative Studio</p>
            </div>
            <div className={styles.info}>
              <span>18/07/2023</span>
              <span>15.4MB</span>
            </div>
          </div>
        </div>
        {/* End Settings Box */}

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.file}>
            <i className={`${styles.iconDownload} fa-solid fa-download`}></i>
            <div className={styles.icon}>
              <img className={styles.iconImage} src={avi_photo} alt="AVI" />
            </div>
            <div className={styles.textCenter}>
              <div className={styles.fileName}>Project Overview.avi</div>
              <p className={styles.author}>Team XYZ</p>
            </div>
            <div className={styles.info}>
              <span>01/10/2023</span>
              <span>50MB</span>
            </div>
          </div>
        </div>
        {/* End Settings Box */}

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.file}>
            <i className={`${styles.iconDownload} fa-solid fa-download`}></i>
            <div className={styles.icon}>
              <img className={styles.iconImage} src={pdf_photo} alt="PDF" />
            </div>
            <div className={styles.textCenter}>
              <div className={styles.fileName}>Marketing Strategy.pdf</div>
              <p className={styles.author}>Sarah Lee</p>
            </div>
            <div className={styles.info}>
              <span>10/08/2023</span>
              <span>1.8MB</span>
            </div>
          </div>
        </div>
        {/* End Settings Box */}

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.file}>
            <i className={`${styles.iconDownload} fa-solid fa-download`}></i>
            <div className={styles.icon}>
              <img className={styles.iconImage} src={sql_photo} alt="SQL" />
            </div>
            <div className={styles.textCenter}>
              <div className={styles.fileName}>Customer Data.sql</div>
              <p className={styles.author}>Data Team</p>
            </div>
            <div className={styles.info}>
              <span>22/06/2023</span>
              <span>80KB</span>
            </div>
          </div>
        </div>
        {/* End Settings Box */}

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.file}>
            <i className={`${styles.iconDownload} fa-solid fa-download`}></i>
            <div className={styles.icon}>
              <img className={styles.iconImage} src={psd_photo} alt="PSD" />
            </div>
            <div className={styles.textCenter}>
              <div className={styles.fileName}>Logo Concept.psd</div>
              <p className={styles.author}>Graphic Designer</p>
            </div>
            <div className={styles.info}>
              <span>25/05/2023</span>
              <span>30MB</span>
            </div>
          </div>
        </div>
        {/* End Settings Box */}

        {/* Start Settings Box */}
        <div className={styles.section}>
          <div className={styles.file}>
            <i className={`${styles.iconDownload} fa-solid fa-download`}></i>
            <div className={styles.icon}>
              <img className={styles.iconImage} src={avi_photo} alt="AVI" />
            </div>
            <div className={styles.textCenter}>
              <div className={styles.fileName}>Tutorial Video.avi</div>
              <p className={styles.author}>Video Team</p>
            </div>
            <div className={styles.info}>
              <span>05/11/2023</span>
              <span>150MB</span>
            </div>
          </div>
        </div>
        {/* End Settings Box */}
      </div>
    </div>
  );
};

export default Files;
