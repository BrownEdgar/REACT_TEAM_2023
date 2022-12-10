import React , { useState,useEffect } from 'react'
import './App.scss'

function Component() {
const [data, setdata] = useState([])

function deleteToDo(ind){
  let filterData = data.filter((elem,index) => {
    return index !== ind
  })
  setdata(filterData)
  localStorage.setItem('todos',JSON.stringify(filterData))
}

useEffect(() =>{
  if(localStorage.getItem('todos') !== null){
    let x = JSON.parse(localStorage.getItem('todos'));
      setdata(x)
  }
},[])

function saveTodo(e){
 e.preventDefault()
 let newValue = e.target[0].value;
 if(newValue.length > 0){
  let clone = [...data];
  clone.push(newValue)
  setdata(clone)
  localStorage.setItem('todos',JSON.stringify(clone))
}
}
 
return (
   <div className='Container'>
        <div className='Container-content'>
          <div className='Container-content_title'>
            <h1>You have {data.length} Todos</h1>
          </div>
          <ul className='Container-content_list'>
            {data.map((elem,index)=>{
            return <li key={index}>
              <span>{elem}</span>  
              <div>
              <button onClick={() => deleteToDo(index)}>X</button>
              </div>
              </li>
          })}
          </ul>
          <form className='Container-content_form' onSubmit={saveTodo}>
            <input type='text' placeholder='Enter item' />
            <input type='submit' value='Submit' />
          </form>
        </div>
   </div>
  )
}



export default Component


