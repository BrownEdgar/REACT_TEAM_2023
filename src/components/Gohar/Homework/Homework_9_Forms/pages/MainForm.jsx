import React from 'react'

import "../sass/MainForm.scss"

export default function MainForm({ setInitialValue, initialValue }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    const {title, desc, author, theme} = e.target
    console.log({ title, desc, author, theme })
    const newBlog = {
      id: Date.now().toString(),
      title: title.value, 
      desc: desc.value, 
      author: author.value, 
      theme: theme.value
    }
    if (initialValue.length > 0) {
      setInitialValue([...initialValue, newBlog])
    }else {
      setInitialValue([newBlog])
    }
   e.target.reset()
  }
  return (
    <form 
    className="Form"
    onSubmit={handleSubmit}
    >
        <div className="Form-Input">
          <label htmlFor="title">Blog Title</label>
          <input type="text" id="title" />
        </div>
        <div className="Form-Input">
          <label htmlFor="desc">Description</label>
          <textarea id="desc" cols="30" rows="10"></textarea> 
        </div>
        <div className="Form-Input">
          <label htmlFor="author">Author</label>
          <input type="text" id="author" />
        </div>
        <div className="Form-Input">
          <label htmlFor="theme">Theme</label>
          <select id="theme">
            <option value=""></option>
            <option value="biology">Biology</option>
            <option value="sport">Sport</option>
            <option value="politics" selected>Politics</option>
            <option value="art">Art</option>
          </select>
        </div>
        <div className="Form-Input Form-Input_submit">
          <input type="submit" value="Add Blog" />
        </div>
    </form>
  )
}


//1.title
//2.description
//3.author
//4.theme