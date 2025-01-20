import useGet from "@/app/customhooks/useGet";
import Card from "../Card/Card";
import styles from "./Category.module.css";

export default async function Category(props) {
  const { UseGet } = useGet();
  const data = await UseGet(`${props.url}`);
  return (
    <div className={styles.category}>
      <h1 className={styles.categoryTitle}>{props.title}</h1>
      <Card data={data} />
    </div>
  );
}
