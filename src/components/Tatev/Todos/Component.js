import React from 'react'

function Component({data,handelDelete}) {
  return (
    <div className='Componet'>
        {
        data.map((elem,ind) => {
			return <div key={ind} className='box'>
                    {elem.name}
                    <button className='btn' onClick={() => handelDelete(elem.name)}>Delete</button>
                </div> 
		})
        }
    </div>
  )
}
export default Component
