"use client";

import { useState } from "react";
import MainButton from "./Buttons/ButtonMain";
import styles from "@/app/components/Styles/Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>
        <a href="#hero" className={styles.a}>
          <span className={styles.span}>{"{"}</span>M
          <span className={styles.Secondspan}>{"<A/>"}</span>
          <span className={styles.Thirdspan}>{"K}"}</span>
        </a>
      </h1>
      <button
        className={`${styles.menuToggle} ${
          menuOpen ? styles.hideHamburger : ""
        }`}
        onClick={toggleMenu}
      >
        ☰
      </button>
      <button
        className={`${styles.closeButton} ${menuOpen ? styles.showClose : ""}`}
        onClick={toggleMenu}
      >
        ✕
      </button>
      <ul className={`${styles.ul} ${menuOpen ? styles.showMenu : ""}`}>
        <li>
          <a href="#skills" className={styles.Seconda} onClick={closeMenu}>
            Skills
          </a>
        </li>
        <li>
          <a href="#education" className={styles.Seconda} onClick={closeMenu}>
            Education
          </a>
        </li>
        <li>
          <a href="#projects" className={styles.Seconda} onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className={styles.Seconda} onClick={closeMenu}>
            Contact
          </a>
        </li>
        <span>
          <a href="#contact" className={styles.Seconda} onClick={closeMenu}>
            <MainButton />
          </a>
        </span>
      </ul>
    </div>
  );
}
