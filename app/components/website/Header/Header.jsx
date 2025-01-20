import IconLink from "../IconLink/IconLink";
import LinkHeader from "../Link/LinkHeader";
import MenuBar from "../MenuBar/MenuBar";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.css";
import { FiUser } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { AiFillAccountBook } from "react-icons/ai";
import SearchContent from "../SearchContent/SearchContent";
import "../../globals.css";
import Count from "../Cart/Count/Count";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <AiFillAccountBook color="rgb(197, 78, 167)" fontSize={35} />
        <span className={styles.logoTitle}>ShopE</span>
        <MenuBar />
      </div>
      <div className={styles.links}>
        <NavigationMenu />
        <LinkHeader url="/" title="Home" />
        <LinkHeader url="/top" title="Top" />
        <LinkHeader url="/about" title="About" />
      </div>
      <div className={styles.iconLinks}>
        <div className={styles.searchBarCon}>
          <SearchBar />
          <SearchContent />
        </div>
        <IconLink url="/login" title="Account" icon={<FiUser />} />
        <IconLink url="/cart" title="Cart" icon={<LuShoppingCart />} />
        <Count />
      </div>
    </div>
  );
}
