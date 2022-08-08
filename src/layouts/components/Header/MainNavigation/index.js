import style from './MainNavigation.module.scss'
import classNames from 'classnames/bind';
import {useState,useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {  faCartPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import {CartContext} from '~/providers/CartContext'
import config from '~/config';

const cx=classNames.bind(style);
function MainNavigation({nav_items=[],numCart=0}) {
   // lấy giỏ hàng
    const cartContext=useContext(CartContext)


    return ( <div class={cx("main_nav_container")}>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-right">
                <div class="logo_container">
                    <Link to={config.routes.home}>colo<span>shop</span></Link>
                </div>
                <nav class="navbar">
                    <ul class={cx("navbar_menu")}>
                        {
                            nav_items.map((item,index)=>(
                                <li key={index} ><Link to={item.path}>{item.name}</Link></li>
                            ))
                        }
                                      
                    </ul>
                    <ul class="navbar_user">
                        <li><Link to={config.routes.search}>  <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon-mainnav')}/></Link></li>
                        <li><Link to={config.routes.profile}><FontAwesomeIcon icon={faUserCircle} className={cx('icon-mainnav')}/></Link></li>
                        <li class="checkout">
                           <Link to={config.routes.cart}>
                            <FontAwesomeIcon icon={faCartPlus} />
                                <span id="checkout_items" class="checkout_items">{cartContext.cart.length}</span>
                            </Link>
                        </li>
                    </ul>
                    <div class="hamburger_container">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</div> );
}

export default MainNavigation;