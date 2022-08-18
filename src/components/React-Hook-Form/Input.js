import React from 'react';
import PropTypes from 'prop-types';

Input.propTypes = {
    
};

function Input(label, register, required) {
    return (
        <>
            <label>{label}</label>
            <input {...register(label, { required })} />
        </>
    );
}

export default Input;