import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCogs,
  FaFolder,
  FaFile,
  FaBook,
} from "react-icons/fa"; // Font Awesome icons
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <FaHome className={styles.icon} />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <FaUser className={styles.icon} />
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <FaCogs className={styles.icon} />
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <FaFolder className={styles.icon} />
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/files"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <FaFile className={styles.icon} />
            Files
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <FaBook className={styles.icon} />
            Courses
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
