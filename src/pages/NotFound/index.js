import React from 'react';
import classNames from "classnames/bind";
import styles from "./NotFound.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function NotFound() {
    return (
        <div className={cx("mainbox")}>
            <div className={cx("err")}>4</div>
            <FontAwesomeIcon icon={faQuestionCircle} className={cx("far")}/>
            <div className={cx("err2")}>4</div>
            <div className={cx("msg")}>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the
                first place?<p>Let's go <a href="/">home</a> and try from there.</p></div>
        </div>
    );
}

export default NotFound;