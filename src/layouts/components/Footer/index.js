import { useState,useEffect ,useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from "./Footer.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import config from "~/config";
import { faFacebook, faInstagram, faPinterest, faSkype, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const cx=classNames.bind(style)
function Footer() {
    return (
         <footer class={cx("footer")}>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class={cx("footer_nav_container","d-flex","flex-sm-row","flex-column","align-items-center","justify-content-lg-start","justify-content-center","text-center")}>
                    <ul class={cx("footer_nav")}>
                        <li><Link to={config.routes.blog}>Blog</Link></li>
                        <li><Link to=''>FAQs</Link></li>
                        <li><a href="contact.html">Contact us</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6">
                <div class={cx("footer_social","d-flex","flex-row","align-items-center","ustify-content-lg-end","justify-content-center")}>
                    <ul>
                        <li><Link to=''><FontAwesomeIcon icon={faFacebook}/></Link></li>
                        <li><Link to=''><FontAwesomeIcon icon={faTwitter}/></Link></li>
                        <li><Link to=''><FontAwesomeIcon icon={faInstagram}/></Link></li>
                        <li><Link to=''><FontAwesomeIcon icon={faSkype}/></Link></li>
                        <li><Link to=''><FontAwesomeIcon icon={faPinterest}/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class={cx("footer_nav_container")}>
                    <div class="cr">©2018 All Rights Reserverd. Made with <FontAwesomeIcon icon={faHeart}/> by <Link to=''>Colorlib</Link> &amp; distributed by <a href="https://themewagon.com">ThemeWagon</a></div>
                </div>
            </div>
        </div>
    </div>
</footer>);
}

export default Footer;