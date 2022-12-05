import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Users from './Users'



export const App = () => {
  const [data, setData] = useState([])
  const getData = ()  => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setData(response.data.data))
        .catch(error => setData(error))
  } 
  useEffect(() =>{
    getData()
  }, [])
    return (
    <div>
      <Users />
    </div>
  )}


export default App;