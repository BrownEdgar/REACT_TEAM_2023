import React, {useState} from 'react'

function App() {
    const [val,setVal] = useState('')

    const handeleSubmit = (e) => {
        e.preventDefault()
        setVal(e.target.value)
    }

    const handeleChange = (e) => {
        console.dir(val)
        setVal(e.target.value)
    }
  return (
    <div>
        <form onSubmit={handeleSubmit}>
            <input type='text' onChange={handeleChange}/>
        </form>
    </div>
  )
}

export default App