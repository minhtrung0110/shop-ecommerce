import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link, useParams} from "react-router-dom";
import styles from "./ProductDetail.module.scss"
import classNames from "classnames/bind";
import * as categoryService from "~/services/categoryService";
import * as productService from "~/services/productService";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faMinus, faSpinner, faStar,faPlus} from "@fortawesome/free-solid-svg-icons";
import config from "~/config";
import ProductDetailLoader from '~/components/Loading/ProductDetailLoader'
import {useDispatch} from "react-redux";
import {addProductCartWithQuantity} from "~/redux/action/actions";

ProductDetail.propTypes = {

};
const cx = classNames.bind(styles)
function ProductDetail(props) {
    const [product,setProduct] = useState()
    const [category,setCategory] = useState()
    const [loading,setLoading] = useState(true)
    const [quantity,setQuantity] = useState(1)
    const {id}=useParams()
    const idProduct={id}

    //redux
    const dispatch=useDispatch()

   // console.log(idProduct.id)
    useEffect(() => {
        const fetchApi = async () => {
            const result= await productService.getProductWithID(idProduct.id);
            setProduct(...result)
            const item=result[0]

            const getCategory=await categoryService.getCategoryWithId( item.categoryId)
            setCategory(...getCategory)
            setLoading(false)
        };
        fetchApi();
    },[])

    const handleOnClickAddCart=()=>{
        dispatch(addProductCartWithQuantity(product,quantity))
    }
    console.log(quantity)

    return (loading)? <ProductDetailLoader />: (
           <div className={cx("container","single_product_container")}>
               <div className="row">
                   <div className="col">
                       <div className={cx("breadcrumbs","d-flex","flex-row","align-items-center")}>
                           <ul>
                              <li>
                                  <Link to={config.routes.home}>
                                      <FontAwesomeIcon icon={faAngleRight} /> Home
                                  </Link>
                              </li>
                               <li>
                                   <Link to="#">
                                       <FontAwesomeIcon icon={faAngleRight} /> {(!!category)?category.name:
                                       <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}
                                   </Link>
                               </li>
                               <li className={cx("active")}>
                                   <Link to="#">
                                   <FontAwesomeIcon icon={faAngleRight} /> {(!!product)?product.name:
                                       <FontAwesomeIcon icon={faSpinner} className={cx('loading') }/>}
                                   </Link>
                               </li>
                           </ul>
                       </div>

                   </div>
               </div>
               <div className="row">
                   <div className="col-lg-7">
                       <div className={cx("single_product_pics")}>
                           <div className="row">
                               <div className={cx("col-lg-3","thumbnails_col","order-lg-1","order-2")}>
                                   <div className={cx("single_product_thumbnails")}>
                                       <ul>
                                           <li><img src={product.thumbnailUrl} alt="AAA"
                                                    />
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                               <div className={cx("col-lg-9","image_col","order-lg-2","order-1")}>
                                   <div className={cx("single_product_image")}>
                                       <div className={cx("single_product_image_background")}
                                            style={{backgroundImage:`url(${product.thumbnailUrl})`}}    ></div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-5">
                       <div className={cx("product_details")}>
                           <div className={cx("product_details_title")}>
                               <h2>{product.name}</h2>
                               <p>{product.description}</p>
                           </div>

                           <div className={cx("product_price")}>{product.price}</div>
                           <ul className={cx("star_rating")}>
                               <li className={cx('list-item')}><FontAwesomeIcon icon={faStar} className={cx('star')}/></li>
                               <li className={cx('list-item')}><FontAwesomeIcon icon={faStar} className={cx('star')}/></li>
                               <li className={cx('list-item')}><FontAwesomeIcon icon={faStar} className={cx('star')}/></li>
                               <li className={cx('list-item')}><FontAwesomeIcon icon={faStar} className={cx('star')}/></li>
                               <li className={cx('list-item')}><FontAwesomeIcon icon={faStar} className={cx('star')}/></li>

                           </ul>

                           <div className={cx("quantity","d-flex","flex-column","flex-sm-row","align-items-sm-center")}>
                               <span>Quantity:</span>
                               <div className={cx("quantity_selector")}>
                                   <span className={cx("minus")}
                                   onClick={()=>setQuantity(prev=>prev===1?1:prev-1)}
                                   ><FontAwesomeIcon icon={faMinus}/></span>
                                   <span id="quantity_value">{quantity}</span>
                                   <span className={cx("plus")}
                                         onClick={()=>setQuantity(prev=>prev+1)}
                                   ><FontAwesomeIcon icon={faPlus}/></span>
                               </div>
                               <button className={cx("red_button","add_to_cart_button")} onClick={handleOnClickAddCart}>
                                   <span className={cx('text-title')}>add to cart</span>
                               </button>
                               <div
                                   className={cx("product_favorite","d-flex","flex-column","align-items-center","justify-content-center")}></div>
                           </div>
                       </div>
                   </div>
               </div>


           </div>

    );
}

export default ProductDetail;