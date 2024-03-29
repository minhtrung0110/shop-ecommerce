import Footer from "~/layouts/components/Footer";
import Header from "~/layouts/components/Header";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";


const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (

    <div className={cx("super_container")}>
      <Header />
      <div className={cx("content")}>{children}</div>
      <Footer />
      
    </div>
  );
}

export default DefaultLayout;
