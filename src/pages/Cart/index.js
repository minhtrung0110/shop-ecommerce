import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import {useState,useEffect } from 'react'
import Input from '~/components/CustomField/InputField'
import CartItem from '~/components/CartItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSelector} from "react-redux";
import {cartContextSelector} from "~/redux/selector/selectors";
const cx = classNames.bind(styles);

function Cart() {
    const yourCart=useSelector(cartContextSelector)
    console.log(yourCart)

    return ( 
     <div className={cx("cart")}>
       <section class="h-100 gradient-custom">
  <div class="container py-5">
    <div class="row d-flex justify-content-center my-4">
      <div class="col-md-8">
        <div class="card mb-4">
          <div class="card-header py-3">
            <h5 class="mb-0">Your Cart </h5>
          </div>
          <div class="card-body">
           {
            yourCart.map((item,index) => 
            
              {
                 return <CartItem key={index} product={item} qty={item.qty}/>
              }
            )
           }
                 


          
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-body">
            <p><strong>Expected shipping delivery</strong></p>
            <p class="mb-0">12.10.2020 - 14.10.2020</p>
          </div>
        </div>
        <div class="card mb-4 mb-lg-0">
          <div class="card-body">
            <p><strong>We accept</strong></p>
            <img class="me-2" width="45px"
              src=""
              alt="Visa" />
            <img class="me-2" width="45px"
              src=""
              alt="American Express" />
            <img class="me-2" width="45px"
              src=""
              alt="Mastercard" />
            <img class="me-2" width="45px"
              src=""
              alt="PayPal acceptance mark" />
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-4">
          <div class="card-header py-3">
            <h5 class="mb-0">Summary</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>$53.98</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p class="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong>$53.98</strong></span>
              </li>
            </ul>

            <button type="button" class="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     </div>
     );
}

export default Cart;