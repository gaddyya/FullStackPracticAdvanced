import React from "react";
import {Form, Formik, Field} from 'formik';
import Button from "../Button/Button";
import CustomErrorMessage from "../CustomErrorMessage/CustomErrorMessage";
import Input from "../Input/Input";
import {connect} from "react-redux";
import styles from './ResetPasswordForm.module.sass';
import {sendMailForResetPasswordRequest} from "../../actions/actionCreator";
import {resetPasswordValidationSchema} from "../../validationSchemas/recoveryPasswordValidationSchema";

const ResetPasswordForm = props => {

    const {resetNoticeMessage} = props;

    const fieldRender = (name, type, placeholder) => {
        return (
            <Field name={name}>
                {
                    fieldProps => (
                        <label className={styles.fieldWrapper}>
                            <Input className={styles.input} placeholder={placeholder} type={type} {...fieldProps}/>
                            <CustomErrorMessage name={fieldProps.field.name}/>
                        </label>
                    )
                }
            </Field>
        );
    };

    return (
        <Formik
            initialValues={{email: '', newPassword: ''}}
            onSubmit={values => {
                props.resetPassword(values);
            }}
            validationSchema={resetPasswordValidationSchema}>
            {formik => (
                <Form onSubmit={formik.handleSubmit}>
                    {fieldRender('email', 'email', 'Enter your email')}
                    {fieldRender('newPassword', 'password', 'Enter the new password')}
                    <Button isDisabled={resetNoticeMessage} type='submit'>reset password</Button>
                </Form>
            )}
        </Formik>
    )
};

const mapStateToProps = state => ({resetNoticeMessage: state.preResetPasswordStore.resetNoticeMessage});

const mapDispatchToProps = dispatch => ({resetPassword: formValues => dispatch(sendMailForResetPasswordRequest(formValues))});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);