import { IoIosArrowDown } from "react-icons/io";
import styles from "./NavigationMenu.module.css";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";

export default function NavigationMenu() {
  return (
    <div className={styles.navigationMenu}>
      Categories
      <IoIosArrowDown className={styles.arrowIcon} />
      <span className={styles.view}></span>
      <div className={styles.navigationPage}>
        <CategoriesMenu />
      </div>
    </div>
  );
}
