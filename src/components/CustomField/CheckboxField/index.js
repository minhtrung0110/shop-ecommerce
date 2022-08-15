import React from 'react';
import {FormGroup, Form, Label} from "reactstrap";
import PropTypes from "prop-types";
import SelectField from "../SelectField";
CheckboxField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
};

CheckboxField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
}
function CheckboxField(props) {
    const {
        field, form,
        type, label, options, disabled,
    } = props;
    const { name } = field;
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Form>
                {
                    options.map((item, i) =>(
                        <Form.Check
                            key={i}
                            id={name}
                            {...field}
                            // disabled={}
                            value={item.value}
                            type={type}
                            label={item.label}

                        />
                    ))
                }
            </Form>


        </FormGroup>
    );
}

export default CheckboxField;