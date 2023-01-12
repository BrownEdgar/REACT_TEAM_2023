import React, {useState} from 'react'
import axios from 'axios';
import "./App.scss"

import "./App.scss"
function App() {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const [error, steError] = useState(false)

  
  const hendleAxios = () => { axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
      setData(response.data)
      setLoading(true)
    }
      )
    .catch((error) => steError(true))
  }

  // useEffect(()=>{
	// 	hendleAxios()
	// },[])

  return (
    <div className='Copntainer'>
        <div className='Copntainer-Post'>
          <h3>{data.title}</h3>
        </div>
        <div className='Copntainer-Error'>
          {error ? <h3>This is my error</h3> : null}
        </div>
        <div>
          <button className='Copntainer-Btn' onClick={hendleAxios}>{loading ? 'Weit' : "Post"}</button>
        </div>
    </div>
  )
}
export default App
