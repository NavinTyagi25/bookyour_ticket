import React from 'react';
import { Field, reduxForm } from 'redux-form'
import './../containers/signUp.css';

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue13 = minValue(13)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const tooYoung = value =>
  value && value < 13
    ? 'You do not meet the minimum age requirement!'
    : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
    <div className="form-group">

      <input className="form-control" {...input} placeholder={label} type={type} />
      <div className="invalid-feedback">
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>

    </div>
  )

const SignUp = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
 
  return (
    <div className="container row">
      <div className="col-md-6 col-md-offset-5">
        <h2 className="mx-auto">Book Ticket Here  </h2>
      </div>
      <form onSubmit={handleSubmit} className="col-md-6 col-md-offset-5 needs-validation">
        <Field
          name="username"
          type="text"
          component={renderField}
          label="Username"
          id="username"
          validate={[required, maxLength15, minLength2]}
          warn={alphaNumeric}
        />
        <Field
          name="email"
          type="email"
          id="email"
          component={renderField}
          label="Email"
          validate={[required, email]}
          warn={aol}
        />
        <Field
          name="Password"
          type="password"
          id="password"
          component={renderField}
          label="Password"
          validate={[required, minValue13]}
          warn={tooYoung}
        />
        <Field
          name="phone"
          type="number"
          component={renderField}
          label="Phone number"
          validate={[required, phoneNumber]}
        />
        <div>
          <button type="submit" disabled={submitting} className="btn btn-primary mr-5">
            Sign Up
        </button>
          <button type="button" disabled={pristine || submitting} onClick={reset} className="d-flex justify-content-end btn btn-default ml-5">
            Clear Values
        </button>
        </div>
      </form>
    </div>
  )
}




export default reduxForm({
  form: 'SignUp'
})(SignUp)


