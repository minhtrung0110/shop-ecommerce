import {useState} from 'react'
import classNames from "classnames/bind";
import styles from "./ProductItem.module.scss";
import {Link} from 'react-router-dom'
import config from "~/config"

const cx = classNames.bind(styles);

function ProductItem({product,grid=4,data_filter=true,onClick}) {
  //  console.log(onClick)
    const [cart,setCart]=useState([])
    const hanleAddCart=()=> {

        const item={id:product.id,amount:1}
        setCart(prev=> {
            const newCart=[...prev,item]
           // const jsonNewJob=JSON.stringify(newCart)
            localStorage.setItem('cart',newCart);
            return newCart
        })

    }
    return ( 	
    <div className={cx('product-item', `col-md-${grid}`)}
    style={{display: `${data_filter?'block':'none'}`}} >
    <div className={cx("product","discount","product_filter")}>
        <div className={cx("product_image")}>
            <img className={cx('img')} src={product.thumbnailUrl} alt=""/>
        </div>
        <div className={cx("product_bubble","product_bubble_right product_bubble_red d-flex","flex-column","align-items-center")}><span>-$20</span></div>
        <div className={cx("product_info")}>
            <h6 className={cx("product_name")}><Link to={config.routes.detailProduct}>{product.name}</Link></h6>
            <div className={cx("product_price")}>{product.price}</div>
        </div>
    </div>
    <div className={cx("add_to_cart_button")} 
       onClick={onClick}
    >
        <span   className={cx('btn-text')}>add to cart</span>
    </div>
</div> );
}

export default ProductItem;