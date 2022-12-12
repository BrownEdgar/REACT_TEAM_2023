import React  from 'react'
import s from './Component.module.css'
import PropTypes from 'prop-types'


function Component({ list,deleteElement}) {

return (
    <div className={s.myTodos}>
         {list.map((elem,index) => {
          return <div className={s.element} key={elem.toString()}>
            <p>{elem}</p>
						<button className={s.delete} onClick={() => deleteElement(index)}>Delete</button>
          </div>
         })}

    </div>
  )
}



export default Component

Component.propTypes = {
  deleteElement: PropTypes.func,
  
}