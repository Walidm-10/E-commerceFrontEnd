import Link from "next/link";
import styles from "./LinkHeader.module.css";

export default function LinkHeader(props) {
  return (
    <Link className={styles.linkHeader} href={props.url}>
      {props.title}
    </Link>
  );
}
