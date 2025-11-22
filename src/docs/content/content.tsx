import * as React from "react";
import styles from "./content.module.css";

interface ContentProps {
  children: React.ReactNode;
}

function Content({ children }: ContentProps) {
  return (
    <main className={styles.content}>
      <div className={styles.inner}>{children}</div>
    </main>
  );
}

export { Content };
export type { ContentProps };
