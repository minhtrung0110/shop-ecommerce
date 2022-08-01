import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

function Input({type='text',id,className,onClick,onChange,...passProps}) {
    return (
        <input type={type} className={cx(className)} id={id} 
         onChange={onChange}
         onClick={onClick} 
         {...passProps}
         />
      );
}

export default Input;