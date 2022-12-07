import React, {useState} from 'react'
import Component from './Component'

function App() {
    const [data,setData] = useState([
        {id:1,title:"Terminator",genre:"Action", stock:6, rate:"2.5"},
        {id:2,title:"Die Hard",genre:"Action", stock:5, rate:"2.5"},
        {id:3,title:"Die Hard",genre:"Action", stock:7, rate:"3.5"},
        {id:4,title:"Get Out",genre:"Thriler", stock:8, rate:"3.5"},
        {id:5,title:"Airplane",genre:"Comedy", stock:7, rate:"3.5"},
    ])

    const handelDelete = (id) => {
		const foo = data.filter(el => el.id !== id)
		setData(foo)
	}
  return (
    <div>
        <Component data={data} handelDelete={handelDelete}/>
    </div>
  )
}

export default App
