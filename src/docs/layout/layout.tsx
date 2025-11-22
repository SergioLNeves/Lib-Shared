import * as React from "react";
import styles from "./layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <div className={styles.container}>{children}</div>;
}

export { Layout };
export type { LayoutProps };
