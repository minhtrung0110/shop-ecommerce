import classNames from "classnames/bind";
import styles from "./CartItem.module.scss";

import {useState,useEffect } from 'react'
import * as productService from '~/services/productService'
import Input from '~/components/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinimize, faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function CartItem() {
    const handleMinus=(e) =>{     
        let item= e.target.parentElement
        let input=item;
        if(item.nodeName ==='BUTTON') input=item.parentNode
        else if(item.nodeName ==='svg') input=item.parentElement.parentNode
        input.querySelector('input[type=number]').stepDown()        
    }
    const handlePlus=(e) =>{     
           let item= e.target.parentElement
           let input=item;
           if(item.nodeName ==='BUTTON') input=item.parentNode
           else if(item.nodeName ==='svg') input=item.parentElement.parentNode
           input.querySelector('input[type=number]').stepUp()       
    }
     
    return ( 
        <div class="row">
        <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
          {/* Image */}
          <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
            <img src=""
              class="w-100" alt="Blue Jeans Jacket" />
            <a href="#!">
              <div class="mask" style={{backgroundColor:"rgba(251, 251, 251, 0.2)"}}></div>
            </a>
          </div>
          {/* Image */}
        </div>

        <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
          {/* Data */}
          <p><strong>Blue denim shirt</strong></p>
          <p>Color: blue</p>
          <p>Size: M</p>
          <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
            title="Remove item">
              <FontAwesomeIcon icon={faTrash} />
          
          </button>
        </div>

        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          {/* Quantity */}
          <label class={cx("form-label","title-center")} for="form1"><strong>Quantity</strong></label>
          <div class="d-flex mb-4" style={{maxWidth: "300px"}}>
         
            <button class="btn btn-primary px-3 me-2"
             onClick={(e)=>handleMinus(e)}
             >
              <FontAwesomeIcon icon={faMinus} />
            </button>

            <div class="form-outline">
              <input id="form1" min="1" name="quantity" value="1" type="number" class="form-control" />
              
            </div>

            <button class="btn btn-primary px-3 ms-2"
            onClick={(e)=>handlePlus(e)}
             >
            <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          {/* Quantity */}

          {/* Price */}
          <p class="text-start text-md-center">
          <div className={cx('title-center')}><strong> Price</strong></div> 
           <div  className={cx('text-price')}> $17.99</div>
          </p>
          {/* Price */}
        </div>
      </div>
     );
}

export default CartItem;