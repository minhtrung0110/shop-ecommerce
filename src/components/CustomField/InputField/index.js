import classNames from "classnames/bind";
import styles from "./Input.module.scss";
import {FormGroup, Label, Input, FormFeedback} from "reactstrap";
import PropTypes from 'prop-types';
import {ErrorMessage} from "formik";

const cx = classNames.bind(styles);
InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}
function InputField(props) {
    const {
        field, form,
        type, label, placeholder, disabled,
    } = props;
    const { name } = field;
    const {errors,touched } = form;
    const showError=errors[name] && touched[name]
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                type={type}
                /*name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}*/
                {...field}
                disabled={disabled}
                // này là bind nhanh cho 4 giá trị có trong field (4 dòng code phía trên) => nhanh chóng mà cùng ý nghĩa.
                placeholder={placeholder}
                invalid={showError}

            />
            {/*showError && <FormFeedback>{errors[name]}</FormFeedback>*/}
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export  default InputField