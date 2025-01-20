import useGet from "@/app/customhooks/useGet";
import Image from "next/image";
import styles from "./CategoriesMenu.module.css";
import Link from "next/link";

export default async function CategoriesMenu() {
  const { UseGet } = useGet();
  const data = await UseGet("get-categoryProduct");
  const showData = data?.map((data, index) => (
    <Link
      href={`/category/${data.category}`}
      key={index}
      className={styles.categoryCard}
    >
      <Image
        alt={data.category}
        src={data.productImage[0]}
        width={50}
        height={50}
        priority
      />
      <div>
        <span className={styles.categoryTitle}>{data.category}</span>
        <div className={styles.des}>
          <span>{data.description}</span>
        </div>
      </div>
    </Link>
  ));
  return <div className={styles.categoryCards}>{showData}</div>;
}
