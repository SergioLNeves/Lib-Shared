import * as React from "react";
import { Link } from "@tanstack/react-router";
import styles from "./sidebar.module.css";

interface SidebarProps {
  activeRoute?: string;
}

function Sidebar({ activeRoute }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h1>Lib Shared</h1>
        <p>Biblioteca de Componentes</p>
      </div>
      <nav className={styles.nav}>
        <Link 
          to="/" 
          className={`${styles.navItem} ${activeRoute === "/" ? styles.active : ""}`}
        >
          Início
        </Link>
        <div className={styles.navSection}>
          <h3>Componentes</h3>
          <Link 
            to="/components/button" 
            className={`${styles.navItem} ${activeRoute === "/components/button" ? styles.active : ""}`}
          >
            Button
          </Link>
          <Link 
            to="/components/avatar" 
            className={`${styles.navItem} ${activeRoute === "/components/avatar" ? styles.active : ""}`}
          >
            Avatar
          </Link>
        </div>
      </nav>
    </aside>
  );
}

export { Sidebar };
export type { SidebarProps };
