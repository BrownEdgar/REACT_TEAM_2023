import { useFormik } from 'formik'
import React from 'react'

function MyFormik() {

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      policy: false,
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validate: (values) => {
      const errors = {}
      if(!values.name) {
        errors.name = "Recuired!"
      }

      if(!values.password) {
        errors.password = "Recuired!"
      }

      return errors
    }
  })

  console.log(formik.touched);

  return (
    <div>
      <form className='MyForm' onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor='name'>username</label>
          <input 
            type='text' 
            id='name' 
            name='name' 
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {(formik.errors.name && formik.touched.name) ? <p className='errors'>{formik.errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor='password'>password</label>
          <input 
            type='text' 
            id='password' 
            name='password' 
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {(formik.errors.password && formik.touched.password) ? <p className='errors'>{formik.errors.password}</p> : null}
        </div>

        <div>
          <label htmlFor='policy'>policy</label>
          <input 
            type='checkbox' 
            id='policy' 
            name='policy' 
            value={formik.values.policy}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <input type='submit' value='register'></input>

      </form>
    </div>
  )
}

export default  MyFormik