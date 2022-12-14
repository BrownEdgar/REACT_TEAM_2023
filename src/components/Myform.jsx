import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'

import * as yup from 'yup';

let validationSchema = yup.object({
	name: yup.string("must by string").required("required").min(5).max(10),
	password: yup.string()
		.required("required")
		.max(18)
		.min(8)
		.matches(/^[A-Z]/g, "Must by start with uppercase"),
	policy: yup.boolean()
})

const initialValues = {
	name: "",
	password: "",
	policy: false
}

const onSubmit = (e) => {
	console.log("submit")
}

export default function Myform() {

	return (
		<Formik 
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
			validateOnChange={false}
			validateOnBlur={true}
			>
			<Form
				className='MyForm'>
				<div>
					<label htmlFor="name">username</label>
					<Field type="text" id="name" name="name"/>
					<ErrorMessage name="name" component="p" />
				</div>
				<div>
					<label htmlFor="password">password</label>
					<Field type="text" id="password" name="password" />
					<ErrorMessage name="password" component="p" />

				</div>
				<div className='row'>
					<label htmlFor="policy">
						<Field type="checkbox" id="policy" name="policy" />
						<p className='label-box'>Lorem ipsum dolor sit amet.</p>
					</label>

				</div>
				<input type="submit" value="register" />


			</Form>
		</Formik>
	)
}
