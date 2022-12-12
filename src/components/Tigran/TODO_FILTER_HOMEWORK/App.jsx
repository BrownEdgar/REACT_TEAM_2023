import React, { useState, useEffect}  from 'react'
import axios from 'axios'
import FilterName from './FilterName'

import "./App.scss"

export default function App() {
const [message, setMessage] = useState("")
const [user, setUser] = useState([])
const [specialuser, setSpecialuser] = useState([])


const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(e.target.elements[0].value)
    e.target.reset()
}


useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(response => setUser(response.data))
    .catch(err => console.error("User is not found"))

},[])

const getUserByName = name => {
    const f = user.filter(elem => elem.includes(name))
    setSpecialuser(f)
}

useEffect(() => {
    getUserByName(message)
}, [message])


  return (
    <div>
        <FilterName 
					handleSubmit={handleSubmit} 
					specialuser={specialuser} getUserByName={getUserByName} />
    </div>
  )
}
