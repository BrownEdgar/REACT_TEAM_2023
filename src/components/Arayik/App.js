import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Users from './Users'



export const App = () => {
  const [data, setData] = useState([])
  const getData = ()  => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
					console.log(response);
					setData(response.data)
				})
			.catch(error => console.log(error))
  } 
  useEffect(() =>{
    getData()
  }, [])
    return (
    <div>
				<Users data={data}/>
    </div>
  )}


export default App;