import classNames from "classnames/bind";
import styles from "./ProductItem.module.scss";

const cx = classNames.bind(styles);

function ProductItem({product,...passProps}) {
    return ( 	
    <div class="product-item " {...passProps} >
    <div class="product discount product_filter">
        <div class="product_image">
            <img src={product.thumbnailUrl} alt=""/>
        </div>
        <div class="favorite favorite_left"></div>
        <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
        <div class="product_info">
            <h6 class="product_name"><a href="single.html">{product.name}</a></h6>
            <div class="product_price">{product.price}</div>
        </div>
    </div>
    <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
</div> );
}

export default ProductItem;