import React  from 'react'
// import PropTypes from 'prop-types'


function Component({list}) {
console.log(list)
return (
    <div>
      {list.map((elem,index) =>{
        return <ul key={index}>
          <li>{elem.name}</li>
        </ul>
      })}
    </div>
  )
}



export default Component


// Component.propsType = {
//   obj: PropTypes.shape({
//     name:PropTypes.bool,
//     age:PropTypes.number,
//     isFrom:PropTypes.string,
//   })
// } 
