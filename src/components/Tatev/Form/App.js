import React, {useState,useEffect} from 'react'
import Component from './Component'
import axios from 'axios'

import './App.scss'

function App() {
    const [massage,setMassage] = useState("")
    const [data,setData] = useState([])
    const [specialdata,setSpecialdata] = useState([])

    const handelSubmit = (e) => {
        e.preventDefault()
        console.dir(e.target.elements[0].value) //e,e.target,e.target.elemets,e.tagets.elements[0]&&[1]
        setMassage(e.target.elements[0].value);
        e.target.reset()
    }

    const getUsersName = name => {
        const f = data.filter(elem => elem.name.includes(name))
        console.log(f,'f');
        setSpecialdata(f)
    }
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setData(response.data))
    },[])

    useEffect(() => {
        getUsersName(massage)
    },[massage])

  return (
    <div className='Container'>
        <h1 className='Container-Title'>input value is: {massage}</h1>
        <form onSubmit={handelSubmit} className='Container-Form'>
            <input type='text'/>
            <input type='submit' value='check'/>
        </form>
    <Component specialdata={specialdata} data={data}/>
    </div>
  )
}

export default App