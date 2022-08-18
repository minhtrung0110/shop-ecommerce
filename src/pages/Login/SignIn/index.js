import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SignIn.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle, faTwitter} from "@fortawesome/free-brands-svg-icons";
import * as customerService from "~/services/customerService";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);
SignIn.propTypes = {};

function SignIn(props) {
  const [dataLogin,setDataLogin]=React.useState()
  const [isLogin,setIsLogin]=React.useState(false)
  const navigate = useNavigate();
  console.log(dataLogin)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setDataLogin(data);

    if(isLogin) {
      localStorage.setItem('user',JSON.stringify({login:true}))
      navigate('/')
    }
    else {

    }//
  }
  useEffect(() => {
    const fetchApi = async () => {
      const result = await customerService.checkLogin(dataLogin.email,dataLogin.password);
      if(!!result) setIsLogin(true)
     console.log(result)

    };
    fetchApi();
  },[dataLogin])
  // handel error
  const message_error_email=errors.email?.type === 'required' ?  "Email is required":
      errors.email?.type === 'pattern'&& "Email is invalid";
  const message_error_password=errors.password?.type === 'required' ?  "Password is required":
      errors.password?.type==='minLength'&& 'Password must be at least 8 characters'
  const message_error =(mess)=>{
    return {
      message:mess,
      display:mess?'inline-block':'none'
    }
  }
  console.log(message_error(message_error_email))
  return (
    <div className={cx("limiter")}>
      <div
        className={cx("container-login100")}
        style={{ backgroundImage: `url(/images/background/login.jpg)` }}
      >
        <div className={cx("wrap-login100")}>
          <form className={cx("login100-form")} onSubmit={handleSubmit(onSubmit)}>
            <span className={cx("login100-form-title")}>Login</span>

            <div
              className={cx("wrap-input100", "validate-input", "m-b-23")}
              data-validate="Username is reauired"
            >
              <span className={cx("label-input100")}>Email</span>
              <input
                className={cx("input100")}
                type="text"
                name="email"
                placeholder="Type your email"
                {...register("email",{
                  required: true,
                  pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                })}
              />
              <span className={cx("message-error",message_error(message_error_email).display)}>{message_error(message_error_email).message}</span>

              <span
                className={cx("focus-input100")}
                data-symbol="&#xf206;"
              ></span>
            </div>

            <div
              className={cx("wrap-input100", "validate-input")}
              data-validate="Password is required"
            >
              <span className={cx("label-input100")}>Password</span>
              <input
                className={cx("input100")}
                type="password"
                name="pass"
                placeholder="Type your password"
                {...register("password",{
                  required: true,
                  minLength: 8,

                })}
              />
              <span className={cx("message-error",message_error(message_error_password).display)}>{message_error(message_error_password).message}</span>
              <span
                className={cx("focus-input100")}
                data-symbol="&#xf190;"
              ></span>
            </div>

            <div className={cx("text-right", "forgot-password")}>
              <a href="#">Forgot password?</a>
            </div>

            <div className={cx("container-login100-form-btn")}>
              <div className={cx("wrap-login100-form-btn")}>
                <div className={cx("login100-form-bgbtn")}></div>
                <button type="submit" className={cx("login100-form-btn")}>Login</button>
              </div>
            </div>

            <div className={cx("txt1", "text-center", "sign-up-usings")}>
              <span>Or Sign Up Using</span>
            </div>

            <div className={cx("flex-c-m")}>
              <a href="#" className={cx("login100-social-item", "bg1")}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a href="#" className={cx("login100-social-item", "bg2")}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>

              <a href="#" className={cx("login100-social-item", "bg3")}>
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </div>

            <div className={cx("flex-col-c", "p-t-155")}>
              <span className={cx("txt1", "p-b-17")}>Or Sign Up Using</span>

              <a href="#" className={cx("txt2")}>
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
