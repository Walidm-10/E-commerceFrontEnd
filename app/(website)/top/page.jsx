import Category from "@/app/components/website/Category/Category";
import styles from "./page.module.css";

export default function Top() {
  const url = `${process.env.NEXT_PUBLIC_CATEGORY_PRODUCT}`;
  return (
    <div className={styles.topContainer}>
      <Category url={url} title="Top HeadPhones For You" />
    </div>
  );
}
