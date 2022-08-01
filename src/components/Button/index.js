import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({className,size='md',style='',id,onClick,...passProps}) {
    return ( 
        <button className={className} id={id} 
        size={size}
        style={style}
        onClick={onClick}
        {...passProps} />
     );
}

export default Button;