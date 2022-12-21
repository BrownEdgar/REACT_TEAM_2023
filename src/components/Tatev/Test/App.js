import React,{useState} from 'react'
import "./App.scss"

export default function App() {

    const [color, setColor] = useState(true)
    const [show, setShow] = useState(true)
    const [name, setName] = useState(true)

    
    const hendelChange = () => {
        setColor(!color)
    }
    const hendelShow = () => {
        setShow(!show)
        setName(!name)
    }
  return (
    <div>
        {show ? 
                <div className={color ? 'red' : 'green'}>
                    <button onClick={hendelChange}>Change color</button>
                </div>
        : null}

        <button onClick={hendelShow}>{name ? 'hide' : 'unhide'}</button>
    </div>
  )
}
