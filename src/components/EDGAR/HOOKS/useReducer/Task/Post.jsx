import React, { useState } from 'react'

import "./Post.css"

const Post = () => {
  const [loading, setLoading] = useState(false)
  const [post, setPost] = useState({})
  const [error, setError] = useState(false)

  const handleFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(data => {
        setPost(data)
      })
      .catch(err => {
        setError(true)
      })
  }
  return (
    <div className='Post'>
      <div className='Post-Header'>
        <h1>Post</h1>
      </div>
      <div className="Post-Content">
        <p className='Post-Title'>{post.title}</p>
      </div>
      <div className="Post-Error">
        <span className='Post-Error'>{error ? "Fetch" : null}</span>
      </div>
      <div className="Post-Footer">
        <button onClick={handleFetch}>
          {loading ? "Wait" : "Fetch the Post"}
        </button>
      </div>
    </div>
  )
}


export default Post