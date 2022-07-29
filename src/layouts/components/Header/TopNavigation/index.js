import { useState } from "react";

import style from "./TopNavigation.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import config from "~/config";

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
                    <i class="fa fa-angle-down"></i>
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
                    <i class="fa fa-angle-down"></i>
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
                <li class="account">
                  <a href="#">
                    My Account
                    <i class="fa fa-angle-down"></i>
                  </a>
                  <ul class="account_selection">
                    <li>
                      <Link to={config.routes.login}>
                        <i class="fa fa-sign-in" aria-hidden="true"></i>Sign In
                      </Link>
                    </li>
                    <li>
                      <Link to={config.routes.register}>
                        <i class="fa fa-user-plus" aria-hidden="true"></i>
                        Register
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavigation;
