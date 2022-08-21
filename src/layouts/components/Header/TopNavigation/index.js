import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from "./TopNavigation.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import config from "~/config";
import {
  faAngleDown,
  faArrowRight,
  faShoppingBag,
  faSignIn,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import {userLoginContextSelector} from "~/redux/selector/selectors";
import {useSelector} from "react-redux";
import {DropDownUserLogin} from '~/components/UserDropDown'
import {faUserCircle} from "@fortawesome/free-regular-svg-icons";


const cx = classNames.bind(style);

function TopNavigation({
  currency_items = [],
  language_items = [],
  countryCode = "VN",
}) {
  const [language, setLanguage] = useState(
    countryCode === "VN" ? "VietNam" : "English"
  );
  const [currency, setCurrency] = useState(
    countryCode === "VN" ? "VND" : "USD"
  );
  const ItemAccountLogin=[
    {id:1,name:'Profile',link:config.routes.profile,icon:faUserCircle},
    {id:2,name:'Orders',link:config.routes.orders,icon:faShoppingBag},
    {id:3,name:'Logout',link:'Logout',icon:faArrowRight },
  ]
  const ItemAccountNotLogin=[
    {id:1,name:'SignIn',link:config.routes.login,icon:faSignIn},
    {id:2,name:'Register',link:config.routes.register,icon:faUserPlus},
  ]
  const userLogin=useSelector(userLoginContextSelector)
  console.log( (!!userLogin)?'dung':ItemAccountNotLogin)
  return (
    <div class="top_nav">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="top_nav_left">
              free shipping on all u.s orders over $50
            </div>
          </div>
          <div class="col-md-6 text-right">
            <div class="top_nav_right">
              <ul class="top_nav_menu">
                <li class="currency">
                  <a href="#">
                    {currency}
                    <FontAwesomeIcon icon={faAngleDown} className={cx('icon-topnav')}/>
                  </a>
                  <ul class="currency_selection">
                    {currency_items.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setCurrency(item.name);
                        }}
                      >
                        <Link to="/">{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li class="language">
                  <a href="#">
                    {language}
                    <FontAwesomeIcon icon={faAngleDown} className={cx('icon-topnav')}/>
                  </a>
                  <ul class="language_selection">
                    {language_items.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setLanguage(item.name);
                        }}
                      >
                        <Link to="/">{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                {

                  (!!userLogin)?<DropDownUserLogin infoUser={userLogin} itemDropDown={ItemAccountLogin} />
                      : <DropDownUserLogin  itemDropDown={ItemAccountNotLogin}  />
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavigation;
