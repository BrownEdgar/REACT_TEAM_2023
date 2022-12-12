import React from 'react'
import PropTypes from 'prop-types'


export default function FilterName({ handleSubmit,  specialuser, getUserByName}) {
  return (
    <div className='Main'>
        <h1 className='Main__Title'>Search for a person by typing their name</h1>
			<form className='Main__Form' onSubmit={handleSubmit} >
            <input type="text" placeholder="Write his name" />
            <input type="submit" value="Search"  />
        </form>
        {
            specialuser.length > 0
            ?  (
						specialuser.map(elem => {
							return <pre className='Main__User' key={elem.id}>{JSON.stringify(elem, null, 1)}</pre>
						})
						)
            : <h1 className='Main__SubTitle'>Sorry User Is Not Found</h1>
        }
    </div>
  )
}
FilterName.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  getUserByName: PropTypes.func.isRequired,
  specialuser: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email:  PropTypes.string,
    address: PropTypes.string, 
    street: PropTypes.string, 
    suite: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
    geo: PropTypes.string,
    lat: PropTypes.string,
    lng: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
		company: PropTypes.shape({
			name: PropTypes.string,
		}),

    catchPhrase: PropTypes.string,
    bs: PropTypes.string,
  }))
  
}
