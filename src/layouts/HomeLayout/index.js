import Footer from "~/layouts/components/Footer";
import Header from "~/layouts/components/Header";
import Slider from "~/layouts/components/Slider";
import Banner from "~/layouts/components/Banner";
import classNames from "classnames/bind";
import styles from "./HomeLayout.module.scss";

const cx = classNames.bind(styles);

const getSliders = () => {
  const geoAPIURL = `https://basic-json-server.herokuapp.com/api/sliders`;
  fetch(geoAPIURL)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
const sliders = getSliders();
console.log(getSliders());

function HomeLayout({ children }) {
  return (
    <div className={cx("super_container")}>
      <Header />
      <Slider arr_images={sliders} />
      <Banner />
      <div className={cx("content")}>{children}</div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
