import style from './MainNavigation.module.scss'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx=classNames.bind(style);
function MainNavigation({nav_items=[],}) {
    return ( <div class={cx("main_nav_container")}>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-right">
                <div class="logo_container">
                    <a href="#">colo<span>shop</span></a>
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
                        <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i></a></li>
                        <li class="checkout">
                            <a href="#">
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                <span id="checkout_items" class="checkout_items">2</span>
                            </a>
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