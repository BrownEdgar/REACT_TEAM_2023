//  
import React, { useReducer } from 'react'
import { FETCHING_FAILURE, FETCHING_START, FETCHING_SUCCESS } from './actionTypes'

import "./Post.css"
import { initialState, postReducer } from './postReducer'

const Post = () => {
	const [state, dispatch] = useReducer(postReducer, initialState)


  const handleFetch = () => {
		dispatch({ type: FETCHING_START })
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res =>  {
				if (res.status === 200) {
					return res.json()
				}else{
					throw new Error("invalid url")
				}
			})
      .then(data => {
				dispatch({ type: FETCHING_SUCCESS, payload: data})
      })
      .catch(err => {
				dispatch({ type: FETCHING_FAILURE})
      })
  }
  return (
    <div className='Post'>
      <div className='Post-Header'>
        <h1>Post</h1>
      </div>
      <div className="Post-Content">
        <p className='Post-Title'>{state.post?.title}</p>
      </div>
      <div className="Post-Error">
        <span className='Post-Error'>{state.error ? "Fetch Faild" : null}</span>
      </div>
      <div className="Post-Footer">
        <button onClick={handleFetch}>
          {state.loading ? "Wait" : "Fetch the Post"}
        </button>
      </div>
    </div>
  )
}


export default Post