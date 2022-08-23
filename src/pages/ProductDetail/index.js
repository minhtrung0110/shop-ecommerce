import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link, useParams} from "react-router-dom";
import styles from "./ProductDetail.module.scss"
import classNames from "classnames/bind";
import * as categoryService from "~/services/categoryService";
import * as productService from "~/services/productService";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faSpinner} from "@fortawesome/free-solid-svg-icons";
import config from "~/config";
import ProductDetailLoader from '~/components/Loading/ProductDetailLoader'

ProductDetail.propTypes = {

};
const cx = classNames.bind(styles)



function ProductDetail(props) {
    const [product,setProduct] = useState()
    const [category,setCategory] = useState()
    const [loading,setLoading] = useState(true)
    const {id}=useParams()
    const idProduct={id}
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
                       <div className="single_product_pics">
                           <div className="row">
                               <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                                   <div className="single_product_thumbnails">
                                       <ul>
                                           <li><img src={product.thumbnailUrl} alt="AAA"
                                                    />
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                               <div className="col-lg-9 image_col order-lg-2 order-1">
                                   <div className="single_product_image">
                                       <div className="single_product_image_background"
                                            ></div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-5">
                       <div className="product_details">
                           <div className="product_details_title">
                               <h2>{product.name}</h2>
                               <p>{product.description}</p>
                           </div>
                           <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
                               <span className="ti-truck"></span><span>free delivery</span>
                           </div>
                           <div className="product_price">{product.price}</div>
                           <ul className="star_rating">
                               <li><i className="fa fa-star" aria-hidden="true"></i></li>
                               <li><i className="fa fa-star" aria-hidden="true"></i></li>
                               <li><i className="fa fa-star" aria-hidden="true"></i></li>
                               <li><i className="fa fa-star" aria-hidden="true"></i></li>
                               <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                           </ul>
                           <div className="product_color">
                               <span>Select Color:</span>
                               <ul>
                                   <li style={{background: '#e54e5d'}}></li>
                                   <li style={{background: '#e54e5d'}}></li>
                                   <li style={{background: '#e54e5d'}}></li>

                               </ul>
                           </div>
                           <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                               <span>Quantity:</span>
                               <div className="quantity_selector">
                                   <span className="minus"><i className="fa fa-minus" aria-hidden="true"></i></span>
                                   <span id="quantity_value">1</span>
                                   <span className="plus"><i className="fa fa-plus" aria-hidden="true"></i></span>
                               </div>
                               <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                               <div
                                   className="product_favorite d-flex flex-column align-items-center justify-content-center"></div>
                           </div>
                       </div>
                   </div>
               </div>


           </div>

    );
}

export default ProductDetail;