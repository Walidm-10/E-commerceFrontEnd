import styles from "./ProductInfoPuy.module.css";
import { MdOutlineLocalShipping } from "react-icons/md";
import { LuCalendarCheck2 } from "react-icons/lu";

export default function ProductInfoPay() {
  return (
    <div className={styles.infoPayContainer}>
      <div className={`rounded-t-md ${styles.infoItem}`}>
        <MdOutlineLocalShipping color="darkorange" fontSize={20} />
        <div>
          <h4>Free Delivery</h4>
          <span>Enter Your Address for Delivery Availability</span>
        </div>
      </div>
      <div className={`rounded-b-md ${styles.infoItem}`}>
        <LuCalendarCheck2 color="darkorange" fontSize={20} />
        <div>
          <h4>Return Delivery</h4>
          <span>Free 30days Delivery Returns</span>
        </div>
      </div>
    </div>
  );
}
