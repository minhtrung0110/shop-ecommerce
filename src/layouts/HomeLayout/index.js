import Footer from "~/layouts/components/Footer";
import Header from "~/layouts/components/Header";
import Slider from "~/layouts/components/Slider";
import Banner from "~/layouts/components/Banner";
import Newsletter from "~/layouts/components/Newsletter";
import classNames from "classnames/bind";
import styles from "./HomeLayout.module.scss";
import {useContext,createContext,useState} from "react"

const cx = classNames.bind(styles);

export const CartContext=createContext()

function HomeLayout({ children }) {
  const [numCart,setNumCart]=useState(2)
  return (

    <div className={cx("super_container")}>
      <Header />
      <Slider  />
      <Banner />
      <div className={cx("content")}>{children}</div>
      <Newsletter />
      <Footer />
      
    </div>
  );
}

export default HomeLayout;
