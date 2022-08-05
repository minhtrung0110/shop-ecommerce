import classNames from "classnames/bind";
import styles from "./Cart.module.scss";

import {useState } from 'react'
import Input from '~/components/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinimize, faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Cart() {
    const cart=sessionStorage.getItem('cart');
    const [yourCart,SetYourCart]=useState(cart)
    //xoa san pham gio hang
    const handleRemoveProductFromCart=(item) => {

    }
    // cap nhat gio hang 
    const handleUpdateProductFromCart=(item) => {
        // Tăng Số Lượng

        // Giảm Số Lượng
    }
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
            {/* Single item */}
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
                <div class="d-flex mb-4" style={{maxWidth: "300px"}}>
                  <button class="btn btn-primary px-3 me-2"
                   >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>

                  <div class="form-outline">
                    <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control" />
                    <label class="form-label" for="form1">Quantity</label>
                  </div>

                  <button class="btn btn-primary px-3 ms-2"
                   >
                  <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                {/* Quantity */}

                {/* Price */}
                <p class="text-start text-md-center">
                  <strong>$17.99</strong>
                </p>
                {/* Price */}
              </div>
            </div>
            {/* Single item */}

            <hr class="my-4" />

            {/* Single item */}
           
            {/* Single item */}
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