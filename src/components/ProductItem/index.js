import classNames from "classnames/bind";
import styles from "./ProductItem.module.scss";

const cx = classNames.bind(styles);

function ProductItem({product,grid=4,data_filter=true}) {
    return ( 	
    <div className={cx('product-item', `col-md-${grid}`)}
    style={{display: `${data_filter?'block':'none'}`}} >
    <div className={cx("product","discount","product_filter")}>
        <div className={cx("product_image")}>
            <img src={product.thumbnailUrl} alt=""/>
        </div>
        <div className={cx("favorite favorite_left")}></div>
        <div className={cx("product_bubble","product_bubble_right product_bubble_red d-flex","flex-column","align-items-center")}><span>-$20</span></div>
        <div className={cx("product_info")}>
            <h6 className={cx("product_name")}><a href="single.html">{product.name}</a></h6>
            <div className={cx("product_price")}>{product.price}</div>
        </div>
    </div>
    <div className={cx("red_button","add_to_cart_button")}><a href="#">add to cart</a></div>
</div> );
}

export default ProductItem;