import React, {useState} from 'react'
import Component from '../../Tatev/Todos/Component'

import '../../Tatev/Todos/App.css'

function App() {
    const [data,setdata] = useState([{name:'html'},{name:'CSS'},{name:'Javas Script'}, {name:'React.js'}, {name:'Node.js'}, {name:'Python'}]);

    const [arr,setArr] = useState(['a','b','c'])
    const handelDelete = (name) => {
        const foo = data.filter(elem => elem.name !== name)
        setdata(foo)
    }

    const func = (i) => {
        const f = arr.filter(e => e !== i)
        setArr(f)
    }
  return (
    <div className='App'>
        <h1>My Todos</h1>
        <Component data={data} handelDelete={handelDelete}/>
        <hr></hr>
        {
                arr.map(el => {
                    return <div>{el} <button onClick={()=>func('a')}>x</button></div>
                })
        }
    </div>
    
  )
}

export default App