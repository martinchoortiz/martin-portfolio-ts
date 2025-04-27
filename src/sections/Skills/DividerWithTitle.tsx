import styles from "./DividerWithTitle.module.css";

interface DividerWithTitleProps {
  title: string;
}

function DividerWithTitle({ title }: DividerWithTitleProps) {
  return (
    <div className={styles.divider}>
      <span className={styles.line}></span>
      <h2 className={styles.text}>{title}</h2> {/* CAMBIO: span -> h2 */}
      <span className={styles.line}></span>
    </div>
  );
}

export default DividerWithTitle;
