import React from "react"
import { Formik, Form, Field } from 'formik'
import formStyles from "../styles/components/infoform.module.scss"

const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

export default function InfoForm() {
  return (
    <Formik
        initialValues={{
            name: '',
            email: '',
            message: '',
        }}
        onSubmit={
            (values, actions) => {
              fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...values })
              })
              .then(() => {
                alert('Success');
                actions.resetForm()
              })
              .catch(() => {
                alert('Error');
              })
              .finally(() => actions.setSubmitting(false))
            }
        }
        validate={values => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const errors = {};
            if(!values.name) {
                errors.name = 'Required'
            }
            if(!values.email || !emailRegex.test(values.email)) {
                errors.email = 'Valid Email Required'
            }
            if(!values.message) {
                errors.message = 'Required'
            }
            return errors;
        }}
    >
        {() => (
            <Form name="contact" data-netlify={true} className={formStyles.form_wrap}>

                <Field name="name">
                    {({ field, meta }) => (
                    <div className={`${formStyles.field_wrap} ${meta.value !== '' ? formStyles.active : ''}`}>
                        <label className={formStyles.field_label} htmlFor="name">Name</label>
                        <input type="text" {...field} className={formStyles.field_input}/>
                        {meta.touched &&
                        meta.error && <div className={formStyles.field_error}>{meta.error}</div>}
                    </div>
                    )}
                </Field>

                <Field name="email">
                    {({ field, meta }) => (
                    <div className={`${formStyles.field_wrap} ${meta.value !== '' ? formStyles.active : ''}`}>
                        <label className={formStyles.field_label} htmlFor="email">Email</label>
                        <input type="email" {...field} className={formStyles.field_input}/>
                        {meta.touched &&
                        meta.error && <div className={formStyles.field_error}>{meta.error}</div>}
                    </div>
                    )}
                </Field>


                <Field name="message">
                    {({ field, meta }) => (
                    <div className={`${formStyles.field_wrap} ${meta.value !== '' ? formStyles.active : ''}`}>
                        <label className={formStyles.field_label} htmlFor="message">Message</label>
                        <textarea {...field} className={`${formStyles.field_input} ${formStyles.field_textarea}`} rows="1"></textarea>
                        {meta.touched &&
                        meta.error && <div className={formStyles.field_error}>{meta.error}</div>}
                    </div>
                    )}
                </Field>               

                <button type="submit" className="button">Submit</button>
            </Form>
        )}
    </Formik>
  )
}