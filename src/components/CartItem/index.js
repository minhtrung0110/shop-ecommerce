import classNames from "classnames/bind";
import styles from "./CartItem.module.scss";
import {memo } from 'react'
import {useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import {decreaseQtyCart, deleteProductCart, increaseQtyCart} from "~/redux/action/actions";
const cx = classNames.bind(styles);

function CartItem({product,qty=1}) {

    const [quantity,setQuantity]= useState(qty)
    const dispatch=useDispatch()
    const handleMinus=(e) =>{     
        let item= e.target.parentElement
        let input=item;
        if(item.nodeName ==='BUTTON') input=item.parentNode
        else if(item.nodeName ==='svg') input=item.parentElement.parentNode
        input.querySelector('input[type=number]').stepDown()
        dispatch(decreaseQtyCart(product.id))
        setQuantity(prev=>(prev===1)?1:prev-1)

    }
    const handlePlus=(e) =>{     
           let item= e.target.parentElement
           let input=item;
           if(item.nodeName ==='BUTTON') input=item.parentNode
           else if(item.nodeName ==='svg') input=item.parentElement.parentNode
           input.querySelector('input[type=number]').stepUp()
        dispatch(increaseQtyCart(product.id))
        setQuantity(prev=>prev+1)
    }
    const handleChangeAmount=(e) =>{ 
      setQuantity(e.target.value)
    }
    const handleRemoveCartItem=(id)=>{
        dispatch(deleteProductCart(id))
    }
    return (
      <div class="row">
        <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
      
          <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
              <img src={product.thumbnailUrl}
                   className="w-100" alt="Blue Jeans Jacket"/>
            <a href="#!">
              <div class="mask" style={{backgroundColor:"rgba(251, 251, 251, 0.2)"}}></div>
            </a>
          </div>
          
        </div>

        <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
          
          <p><strong>{product.name}</strong></p>
          <p>Color: {product.color}</p>
        
          <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
            title="Remove item" onClick={()=>handleRemoveCartItem(product.id)}>
              <FontAwesomeIcon icon={faTrash} />
          
          </button>
        </div>

        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
         
          <label class={cx("form-label","title-center")} for="form1"><strong>Quantity</strong></label>
          <div class="d-flex mb-4" style={{maxWidth: "300px"}}>
         
            <button class="btn btn-primary px-3 me-2"
             onClick={(e)=>handleMinus(e)}
             >
              <FontAwesomeIcon icon={faMinus} />
            </button>

            <div class="form-outline">
              <input id="form1" min="1" name="quantity" value={quantity} onChange={(e)=>handleChangeAmount(e)} type="number" class="form-control" />
              
            </div>

            <button class="btn btn-primary px-3 ms-2"
            onClick={(e)=>handlePlus(e)}
             >
            <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
         

          
          <p class="text-start text-md-center">
          <div className={cx('title-center')}><strong> Price</strong></div> 
           <div  className={cx('text-price')}> {product.price}</div>
          </p>
         
        </div>
        <hr class="my-4" />
      </div>
      
     )
}

export default memo(CartItem);