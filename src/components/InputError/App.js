import React, { useState } from 'react'
import { validation } from '../../helpers/validation'

import "./App.scss"

export default function App() {
	const [val, setVal] = useState({
		value: "",
		errorMessage: "Invalid parameter",
		isValid: true,
		validatde: {
			minLength: 8,
			noNumber: true,
			startWithUpperCase: true,
			required: true,
		}
	})


	const handleChange = (e) => {
		const isValid = validation(e.target.value, val.validatde)
		if (isValid) {
			setVal({ ...val, value: e.target.value, isValid: true })
		} else {
			setVal({ ...val, isValid: false, value: e.target.value })
		}
	}

	return (
		<form className='Form'>
			<div className='Form-Group'>
				<input
					type="text"
					value={val.value}
					onChange={handleChange} />
				{!val.isValid && <p id="error">{val.errorMessage}</p>}
			</div>
		</form>
	)
}
