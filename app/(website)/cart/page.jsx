import CartContain from "@/app/components/website/Cart/CartContain/CartContain";
import styles from "./page.module.css";

export default function Cart() {
  return (
    <div className={styles.cart}>
      <CartContain />
    </div>
  );
}
