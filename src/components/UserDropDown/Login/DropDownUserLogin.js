import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from '../UserDropDown.module.scss'
import {logoutUser} from "~/redux/action/actions";
import {useDispatch} from "react-redux";
const cx = classNames.bind(styles)


function DropDownUserLogin ({infoUser={fullName: 'My Account'},itemDropDown=[]}){
    const dispatch=useDispatch()
    return (
        <li className={cx("account")}>
            <a href="#">
                {  infoUser.fullName}
                <FontAwesomeIcon icon={faAngleDown} className={cx('icon-topnav')}/>
            </a>
            <ul className={cx("account_selection")}>
                {
                    itemDropDown.map((item,index)=>{
                       const handleOnClick=(item.link==='Logout')?()=>dispatch(logoutUser):null
                      //  console.log(handleOnClick)
                       return (
                            <li key={index}
                            onClick={handleOnClick}
                            >

                                <Link to={(item.link==='Logout')?'/':item.link} >
                                    <FontAwesomeIcon icon={item.icon} className={cx('icon-myaccount-topnav')}/>{item.name}
                                </Link>
                            </li>
                        )
                    })
                }


            </ul>
        </li>
    );
};

export default DropDownUserLogin;