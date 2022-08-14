import React from 'react';
import classNames from "classnames/bind";
import styles from "./Registery.module.scss";
import { RegisteryForm  } from '~/components/Form/'

const cx = classNames.bind(styles);



const Registery = () => {
    return (

        <div>
            <RegisteryForm />
        </div>
    );
};

export default Registery;