import React, { useState } from 'react'


function Component({list,foo}) {

  function deleteID(id){
    let x = list.filter(elem => elem.id !== id)
    foo(x)
 }

return (
    <div className='section'>
      <div className='list'>
        {list.map(elem => {
          return <p key={elem.id}>
            id {elem.id} : {elem.title} </p>
        })}
        </div>
        <button onClick={() => deleteID(5)}>Delete</button>
    </div>
  )
}



export default Component