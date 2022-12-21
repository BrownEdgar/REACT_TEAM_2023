import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import * as yup from 'yup';

let validationSchema = yup.object().shape({
    name: yup.string("must by string").required("required").matches(/^[A-Z]/g, "Must by start uppercase").max(10),
    password: yup.string().required('required').min(8).max(15),
    policy: false,
})

const initialValues = {
    name: "",
    password: "",
    policy: false,
  }
  const onSubmit = (e) => {
    console.log("submit");
  }

function FomrikYup() { 
  return (
    <div>
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={false}
        validateOnBlur={true}
    >
      <Form className='MyForm'>
        <div>
          <label htmlFor='name'>username</label>
          <Field 
            type='text' 
            id='name' 
            name='name' 
          />
          <ErrorMessage name='name' component='p'/>
        </div>

        <div>
          <label htmlFor='password'>password</label>
          <Field 
            type='text' 
            id='password' 
            name='password' 
          />
          <ErrorMessage name='password' component='p'/>
        </div>

        <div>
          <label htmlFor='policy'>policy</label>
          <Field 
            type='checkbox' 
            id='policy' 
            name='policy'
          />
        </div>
        <input type='submit' value='register'></input>

      </Form>
    </Formik>
    </div>
  )
}

export default  FomrikYup