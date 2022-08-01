import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import NewArrivals from "./Newarrivals";
import BestSellers from "./BestSellers"
import Benefits from "./Benefits"
import LatestBlogs from "./LatestBlogs"

const cx = classNames.bind(styles);

function Home() {
    return ( 
    <>
    <NewArrivals />
    <BestSellers />
    <Benefits />
    <LatestBlogs />
    </>);
}

export default Home;