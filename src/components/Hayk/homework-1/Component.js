import React  from 'react'


function Component({list,setList}) {

  function deleteID(id){
    let x = list.filter(elem => elem.id !== id)
    setList(x)
 }

return (
    <div className='section'>
      <div className='list'>
        {list.map(elem => {
          return <p key={elem.id}>
            id {elem.id} : {elem.title} </p>
        })}
        </div>
        <button onClick={() => deleteID(1)}>Delete</button>
    </div>
  )
}



export default Component