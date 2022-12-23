import React, {useState, useRef} from 'react'

export default function App() {
	const [inp, setInp] = useState("")
	const value = useRef(null)
	const value2 = useRef(null)
	const hendleSubmit = (e) => { 
		e.preventDefault()
		setInp(value.current.value)
	}
	console.log("inp", inp);
	console.log("value", value);
	return (
		<div ref={value2}>
			<h1>value: {inp}</h1>
			<form onSubmit={hendleSubmit}>
				<input type="text" ref={value} />
				<input type="submit" value="add"  />
			</form>
		</div>
	)
}
