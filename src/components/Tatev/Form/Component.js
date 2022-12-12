import React from 'react'

function Component({specialdata}) {
  return (

    <>
    {
    specialdata.map(el => {
        return (
        <pre key={el.id}>
            {JSON.stringify(el,null,1)}
        </pre>
        )
    })
    }
    </>

  )
}
export default Component
