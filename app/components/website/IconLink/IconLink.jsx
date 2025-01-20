import Link from "next/link";
import styles from "./IconLink.module.css";

export default function IconLink(props) {
  return (
    <Link href={props.url} className={styles.iconLink}>
      {props.icon}
      <span>{props.title}</span>
    </Link>
  );
}
