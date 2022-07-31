import Footer from "~/layouts/components/Footer";
import Header from "~/layouts/components/Header";
import Slider from "~/layouts/components/Slider";
import Banner from "~/layouts/components/Banner";
import classNames from "classnames/bind";
import styles from "./HomeLayout.module.scss";

const cx = classNames.bind(styles);
const getSliders = () => {
  fetch(`https://basic-json-server.herokuapp.com/api/sliders`)
  .then((res) => res.json())
  .then((data) => {
    return data
  });
};


function HomeLayout({ children }) {
  return (
    <div className={cx("super_container")}>
      <Header />
      <Slider arr_images={getSliders()} />
      <Banner />
      <div className={cx("content")}>{children}</div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
