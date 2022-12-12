import React from 'react'

function Component({data,handelDelete}) {
  return (
    <div>
        {
			data.map(elem => {
				return (
                    <table>
                    <tr>
                        <th>{elem.title}</th>
                    </tr>

                    <tr>
                        <td>{elem.genre}</td>
                    </tr>
                    </table>
                ) 
			})
		}
    </div>
  )
}

export default Component
