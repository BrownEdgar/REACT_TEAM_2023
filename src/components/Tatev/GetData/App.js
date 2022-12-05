import React, {useState, useEffect} from 'react'
import Users from '../../Tatev/GetData/Users'
import axios from 'axios'


import './App.css'

function App() {
	const [data,setData] = useState([])

	const handelDelete = (id) => {
		const foo = data.filter(user => user.id !== id)
		setData(foo)
	}
	const getData = () => { 
		axios.get('https://reqres.in/api/users')
		.then(response => setData(response.data.data))
		.catch(err => console.log(err))
	}

	useEffect(()=>{
		getData()
	},[])

  return (
	<div>
		<Users data={data} handelDelete={handelDelete}/>
	</div>
  )
}

export default App