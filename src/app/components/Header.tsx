"use client";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/">Yoweb</a>
        <a href="/WinExplorer">WinExplorer</a>
        <a href="/404">404</a>
        <a
          href="https://ant-design.antgroup.com/components/overview-cn/"
          target="_blank"
        >
          AntD
        </a>
      </nav>
      <div className={styles.searchBox}>
        <span>🔍</span>
        <span>搜索</span>
        <span className={styles.searchHint}>Ctrl K</span>
      </div>
    </header>
  );
}
