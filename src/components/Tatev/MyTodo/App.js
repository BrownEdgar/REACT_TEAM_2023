import React, {useState} from 'react'
import Component from './Component'

import './App.scss'

function App() {
    const [count,setCount] = useState(0)
    const [massage, setMassage] = useState([])

    const hendlCount = () => { 
		setCount(count + 1)
	}

    const handleDelet = (id) =>{
        const foo = massage.filter(el => el.id !== id)
        console.log(massage);
		setMassage(foo)
        setCount(count - 1)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newmassage = ({
            id: Date.now().toString(),
            value: e.target.elements[0].value
        })
        setMassage([...massage, newmassage])
        e.target.reset()
    }
  return (
    <div className='App'>
        <Component handleSubmit={handleSubmit} data={massage} handleDelet={handleDelet} hendlCount={hendlCount} count={count}/>
    </div>
  )
}

export default App