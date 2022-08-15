import React from 'react';
import {Formik, Form, FastField} from "formik";
import {InputField,SelectField} from "~/components/CustomField";
import CheckboxField from "~/components/CustomField/CheckboxField";
import * as Yup from 'yup'

const RegisteryForm = () => {
    // trong initialValue này ko dc dùng undefine
    const initialValue =  {
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        jobs:null
    }
    const JOBS=[
        { value: 1, label: 'Technology' },
        { value: 2, label: 'Education' },
        { value: 3, label: 'Nature' },
        { value: 4, label: 'Animals' },
        { value: 5, label: 'Styles' },
    ];
    const GENDERS=[
        { value: 1, label: 'male' },
        { value: 2, label: 'female' },

    ];
    const validationSchema=Yup.object().shape( {
        first_name:Yup.string().required('First_name is required'),
        last_name:Yup.string().required('Last_name is required\''),
        email:Yup.string().email('Invalid email format').required('Required'),
        password:'',
        jobs:null
    })
    return (
        <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
        >
            {
                formikProp => {
                    const {values,errors,touched} = formikProp
                    console.log({values,errors,touched})
                    return (
                        <Form>
                            <FastField
                                component={InputField}
                                name='first_name'

                                label='Your first name'
                                placeholder='Please enter your first name'
                            />
                            <FastField
                                component={InputField}
                                name='last_name'

                                label='Your last name'
                                placeholder='Please enter your last name'
                            />
                            <FastField
                                component={InputField}
                                name='email'

                                label='Your email'
                                placeholder='Please enter your email'
                            />
                            <FastField
                                component={InputField}
                                name='password'

                                type='password'
                                label='Your password'
                                placeholder='Please enter your password'
                            />
                            <FastField
                                component={SelectField}
                                name='jobs'

                                options={JOBS}
                                label='Your job'
                                placeholder='Please select your jobs'
                            />

                            <FastField
                                component={InputField}
                                name='address'


                                label='Your address'
                                placeholder='Please enter your address'
                            />
                        </Form>
                    )
                }
            }
        </Formik>

    );
};

export default RegisteryForm;