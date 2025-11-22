import * as React from "react";
import styles from "./props-table.module.css";

interface PropRow {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
}

interface PropsTableProps {
  data: PropRow[];
}

function PropsTable({ data }: PropsTableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Tipo</th>
          <th>Padrão</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.name}>
            <td>
              <code>{row.name}</code>
            </td>
            <td>
              <code>{row.type}</code>
            </td>
            <td>{row.defaultValue ? <code>{row.defaultValue}</code> : "-"}</td>
            <td>{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { PropsTable };
export type { PropsTableProps, PropRow };
