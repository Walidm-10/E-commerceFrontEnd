import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";
import Rate from "../Rate/Rate";
import Fav from "../Fav/Fav";

export default function Card(props) {
  const showData = props.data?.map((data, index) => (
    <div key={index} className={styles.card}>
      <span className={styles.favContainer}>
        <Fav id={data._id} />
      </span>
      <Link href={`/product/${data._id}`} className={styles.cardContainer}>
        <div className={styles.cardImg}>
          <Image
            alt={data.productName}
            src={data.productImage[0]}
            className={styles.tagCardImg}
            width={100}
            height={100}
            priority
          />
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.cardNameContainer}>
            <span className={styles.cardName}>{data.productName}</span>
            <span className={styles.cardPriceContainer}>
              <span className={styles.cardDollar}>$</span>
              <span className={styles.cardPrice}>{data.sellingPrice}</span>
            </span>
          </div>
          <div className={styles.cardDes}>{data.description}</div>
          <Rate />
          <div>
            <button className={styles.cardBtn}>Add to Cart</button>
          </div>
        </div>
      </Link>
    </div>
  ));
  return <div className={styles.cards}>{showData}</div>;
}
