import Rate from "../Rate/Rate";
import styles from "./ProductDetails.module.css";
import CountProduct from "../CountProduct/CountProduct";
import ProductInfoPay from "../ProductInfoPay/ProductInfoPay";
import ProductImageGallary from "../ProductImageGallary/ProductImageGallary";

export default function ProductDetails(props) {
  const data = props.data;
  return (
    <div className={styles.productContainer}>
      <div className={styles.productImgCon}>
        <ProductImageGallary images={data.productImage} />
      </div>
      <div className={styles.productInfo}>
        <div>
          <h1 className={styles.productName}>{data.productName}</h1>
          <span className={styles.productDes}>{data.description}</span>
          <Rate />
        </div>
        <div className={styles.price}>
          <h3>${data.sellingPrice}</h3>
          <span>{data.description}</span>
        </div>
        <CountProduct id={data._id} />
        <ProductInfoPay />
      </div>
    </div>
  );
}
